import React, { useState, useEffect } from "react";
import loginBg from "./assets/loginBg.png";
import { FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { BASE_URL } from "../../api/api";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RotatingLines } from "react-loader-spinner";
import ConfirmModal from "../../components/modals/confirmModal";

import "./login.css";
import axios from "axios";

export default function LoginPage() {
  const [passwordType, setPasswordType] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successTitle, setSuccessTitle] = useState("Login Successful");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState({
    email_or_phone: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  // Mark the login as complete when component unmounts
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("loginInProgress");
    };
  }, []);

  // Add this function to handle Binance connection
  const connectBinance = async (apiKey, apiSecret, token) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/binance/connect/`,
        {
          api_key: apiKey,
          api_secret: apiSecret,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (response?.status === 200) {
        return true; // Connection successful
      } else {
        return false; // Connection failed
      }
    } catch (error) {
      console.error("Binance connection error:", error);
      return false; // Connection failed
    }
  };

  const handleNavigateAfterLogin = (userData) => {
    // Determine where to redirect based on user status
    let redirectPath = '/dashboard'; // Default path
    let message = "";
    
    // Check if user has a subscription plan
    if (userData.plan === null) {
      redirectPath = '/pricing';
      message = "Redirecting to subscription plans...";
    } 
    // If user has a plan but hasn't connected to Binance
    else if (userData.binance_connected === false) {
      redirectPath = '/connect-binance';
      message = "Redirecting to Binance connection...";
    }
    
    // Show success message with appropriate text
    setSuccessMessage(message);
    setIsSuccessModal(true);
    
    // Redirect after a short delay
    setTimeout(() => {
      console.log("navigating to:", redirectPath);
      setIsSuccessModal(false);
      
      // Set login as complete before redirecting
      sessionStorage.removeItem("loginInProgress");
      
      // Only set the auth context after showing the success message and right before navigating
      auth.login(userData);
      navigate(redirectPath);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    
    // Set flag indicating login is in progress to prevent unwanted redirects
    sessionStorage.setItem("loginInProgress", "true");

    console.log("inpts", inputs);

    if (!inputs.email_or_phone || !inputs.password) {
      setErrorMessage("Please fill in all fields");
      setIsLoading(false);
      sessionStorage.removeItem("loginInProgress");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/users/login/`, inputs);
      if (response?.status === 200) {
        const data = response?.data;
        localStorage.setItem("token", data?.token);
        localStorage.setItem("userData", JSON.stringify(data));

        // Step 1: Check if user has a plan
        if (data?.plan === null) {
          // No subscription plan, redirect to pricing
          handleNavigateAfterLogin(data);
        }
        // Step 2: Check if Binance is connected
        else if (data?.binance_connected === false) {
          // No Binance connection, redirect to connect-binance
          handleNavigateAfterLogin(data);
        }
        // Step 3: User has plan and Binance is marked as connected
        else if (data?.binance_connected === true && 
                data?.binance_api_key && 
                data?.binance_api_secret) {
          
          console.log("Attempting to connect to Binance...");
          // Try to connect to Binance automatically
          const binanceConnected = await connectBinance(
            data.binance_api_key,
            data.binance_api_secret,
            data.token
          );

          if (binanceConnected) {
            // Binance connection successful, redirect to dashboard
            setSuccessMessage("Connected to Binance!");
            setIsSuccessModal(true);
            setTimeout(() => {
              console.log("navigating to dashboard");
              setIsSuccessModal(false);
              
              // Set login as complete before redirecting
              sessionStorage.removeItem("loginInProgress");
              
              // Only set auth context right before navigating
              auth.login(data);
              navigate("/dashboard");
            }, 2000);
          } else {
            // Binance connection failed, show error
            setErrorMessage("Binance connection failed. Please reconnect your API keys.");
            setTimeout(() => {
              // Set login as complete before redirecting
              sessionStorage.removeItem("loginInProgress");
              
              // Only set auth context right before navigating
              auth.login(data);
              navigate("/connect-binance");
            }, 2000);
          }
        }
        // Step 4: Default case - just go to dashboard
        else {
          handleNavigateAfterLogin(data);
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage(
        err?.response?.data?.error || "Login failed. Please try again."
      );
      sessionStorage.removeItem("loginInProgress");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-center sm:justify-between  sm:h-screen min-h-screen  w-screen sm:p-10 bg-cover bg-center bg-no-repeat text-white bg-black background-imag">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 max-sm:pt-20">
          <div className="text-2xl sm:text-4xl md:text-5xl">
            Get started <br /> with{" "}
            <span className="text-green-500 font-semibold font-poppins">
              Alpha Robotics LLP
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-0">
          <div className="p-3 sm:p-8 md:p-10 rounded-3xl shadow-lg border w-[30rem]">
            <h1 className="text-2xl md:text-3xl  font-semibold text-center">
              Welcome Back <span className="wave-emoji">👋</span>
            </h1>
            <p className="text-gray-400 mb-8  text-center">
              Login your account to get started..!
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email/Phone Input */}
              <div>
                <label className="block mb-1 text-sm" htmlFor="email">
                  Email or Phone
                </label>
                <input
                  name="email_or_phone"
                  type="text"
                  value={inputs.email_or_phone}
                  onChange={handleInput}
                  className="w-full px-4 py-3 rounded-xl border bg-transparent outline-none"
                  placeholder="Enter email or phone"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block mb-1 text-sm" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={passwordType ? "password" : "text"}
                    value={inputs.password}
                    onChange={handleInput}
                    className="w-full px-4 py-3 rounded-xl border bg-transparent outline-none"
                    placeholder="Enter password"
                    required
                  />
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setPasswordType(!passwordType)}
                  >
                    {passwordType ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-medium flex justify-center"
              >
                {isLoading ? (
                  <RotatingLines
                    visible={true}
                    height="24"
                    width="24"
                    color="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                  />
                ) : (
                  "Login"
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
              <p>
                Don't have an account?{" "}
                <a href="/signup" className="text-green-500 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="logo"
        src="/logo.png"
        className="absolute top-5 sm:top-10 left-5 sm:left-10 w-14 sm:w-20"
      ></img>
      <div className=" flex flex-col sm:flex-row items-center gap-3  justify-between p-3 sm:px-32 sm:gap-[20rem]">
        <div className="text-[12px] max-sm:order-last sm:text-[16px]">
          © 2025 alpha All Rights Reserved.
        </div>
        <div className="flex gap-4  text-black">
          <button className="bg-white rounded-full p-2">
            <FaInstagram />
          </button>
          <button className="bg-white rounded-full p-2">
            <FaXTwitter />
          </button>
          <button className="bg-white rounded-full p-2">
            <FiFacebook />
          </button>
          <button className="bg-white rounded-full p-2">
            <TbBrandThreads />
          </button>
        </div>
      </div>
      {isSuccessModal && (
        <ConfirmModal title={successTitle} message1={successMessage} isClose={false} />
      )}
    </div>
  );
}
