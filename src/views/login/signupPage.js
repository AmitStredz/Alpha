import React, { useEffect, useState } from "react";
import loginBg from "./assets/loginBg.png";
import { FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useAuth } from "../auth/AuthProvider";
import { BASE_URL } from "../../api/api";
import { RotatingLines } from "react-loader-spinner";
import ConfirmModal from "../../components/modals/confirmModal";
import FailureModal from "../../components/modals/failureModal";
import { HiCheckCircle } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Add these helper functions at the top of your file
const encryptOTP = (otp, email) => {
  // Simple encryption using email as salt
  const salt = email
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const encryptedOTP = otp
    .split("")
    .map((digit) => {
      // Encrypt each digit using the salt
      const encrypted = (parseInt(digit) + salt) % 10;
      return encrypted.toString();
    })
    .join("");
  return encryptedOTP;
};

const verifyEncryptedOTP = (inputOTP, encryptedOTP, email) => {
  // Encrypt the input OTP and compare with stored encrypted OTP
  const encryptedInput = encryptOTP(inputOTP, email);
  return encryptedInput === encryptedOTP;
};

export default function SignupPage() {
  // Password visibility toggle
  const [passWordType, setPasswordType] = useState(true);
  
  // Form submission states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isFailureModal, setIsFailureModal] = useState(false);
  
  // Error and success messages
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  // Field-specific error messages
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Email verification states
  const [otpSent, setOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [resendTime, setResendTime] = useState(0);
  const [encryptedOTPData, setEncryptedOTPData] = useState(null);
  
  // Form data
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  // Clear all email verification related states
  const resetEmailVerification = () => {
    setOtpSent(false);
    setIsEmailVerified(false);
    setOtp("");
    setOtpError("");
    setResendTime(0);
    setEncryptedOTPData(null);
    setSuccessMessage("");
  };

  // Send OTP via Brevo API
  const sendOTP = async () => {
    // Validate email
    if (!inputs.email) {
      setEmailError("Please enter email first");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    try {
      setIsOtpLoading(true);
      setOtpError("");
      setEmailError("");
      setSuccessMessage("");

      // Generate OTP
      const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

      // Store encrypted OTP with timestamp
      const encryptedOTP = encryptOTP(generatedOTP, inputs.email);
      setEncryptedOTPData({
        otp: encryptedOTP,
        timestamp: new Date().getTime(),
        email: inputs.email,
      });
      // console.log("api key", process.env.REACT_APP_BREVO_API_KEY);

      // Brevo configuration
      const brevoConfig = {
        url: "https://api.brevo.com/v3/smtp/email",
        headers: {
          accept: "application/json",
          "api-key": process.env.REACT_APP_BREVO_API_KEY,
          "content-type": "application/json",
        },
        data: {
          sender: {
            email: "alpharoboticsllp@gmail.com",
            name: "Alpha Robotics LLP",
          },
          to: [{ email: inputs.email }],
          subject: "Email Verification OTP",
          htmlContent: `<html><body>
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
              <!-- Logo at the top -->
              <div style="text-align: center; margin-bottom: 25px;">
                <img src="https://res.cloudinary.com/dx4mb0d68/image/upload/v1744797172/logo2_aseqm9.png" alt="Alpha Robotics Logo" style="max-width: 150px; height: auto;">
              </div>
              
              <h2 style="color: #1BAA4C;">Dear ${inputs.username || 'User'},</h2>
              
              <p>Greetings from Alpha Robotics LLP!</p>
              
              <p>Your One-Time Password (OTP) for verification is:</p>
              
              <div style="background-color: #f7f7f7; padding: 15px; border-left: 4px solid #1BAA4C; margin: 20px 0;">
                <p style="font-size: 16px; margin: 5px 0;">🎯 OTP: <strong>${generatedOTP}</strong></p>
                <p style="font-size: 14px; margin: 5px 0;">⏳ This code is valid for the next 5 minutes.</p>
              </div>
              
              <p>Please use this OTP to complete your verification process. If you did not request this, please ignore this message or contact our support team immediately.</p>
              
              <p>Thank you for choosing Alpha Robotics LLP — helping you trade smarter with cutting-edge technology.</p>
              
              <p style="margin-top: 25px;">Warm regards,<br>
              <strong>Alpha Robotics LLP</strong><br>
              📩 <a href="https://wa.me/message/FO4OATZRWJ2RO1" style="color: #1BAA4C;">Contact Support</a></p>
              
              <!-- Footer with logo -->
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #666;">
                <p>© 2024 Alpha Robotics LLP. All rights reserved.</p>
              </div>
            </div>
          </body></html>`,
        },
      };

      // Send the email
      await axios.post(brevoConfig.url, brevoConfig.data, {
        headers: brevoConfig.headers,
      });
tedOTP(otp, encryptedOTPData.otp, inputs.email)) {
      setIsEmailVerified(true);
      setOtpError("");
      setOtp("");
      setSuccessMessage("Email verified successfully!");
      setEncryptedOTPData(null); // Clear OTP data after successful verification
    } else {
      setOtpError("Invalid OTP");
    }
  };

  // Handle form submission
  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    
    // Reset all error messages
    setErrorMessage("");
    setEmailError("");
    setPasswordError("");
    setUsernameError("");
    setPhoneError("");
    
    // Validate email verification
    if (!isEmailVerified) {
      setEmailError("Please verify your email first");
      return;
    }
    
    // Validate password match
    if (inputs.password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Validate all fields are filled
    if (!inputs.username || !inputs.password || !inputs.phone_number || !inputs.email) {
      setErrorMessage("Please fill in all the details");
      
      if (!inputs.username) setUsernameError("Username is required");
      if (!inputs.password) setPasswordError("Password is required");
      if (!inputs.phone_number) setPhoneError("Phone number is required");
      if (!inputs.email) setEmailError("Email is required");
      
      return;
    }
    
    // Submit form