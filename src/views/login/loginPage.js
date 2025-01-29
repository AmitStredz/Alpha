// import React from 'react';
// import loginBg from './assets/loginBg.png'
// import { FaInstagram } from 'react-icons/fa';
// import { TbBrandThreads } from 'react-icons/tb';
// import { FiFacebook } from 'react-icons/fi';
// import { FaXTwitter } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';
// // import
// export default function LoginPage() {
//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-cover bg-center bg-no-repeat text-white bg-black" style={{ backgroundImage: `url(${loginBg})` }}>
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 max-sm:mt-14">
//         <div className="text-2xl sm:text-4xl md:text-5xl">
//           Get started <br /> with <span className="text-green-500 font-bold">Alpha Robotics LLP</span>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-0">
//         <div className=" p-8 md:p-10 rounded-3xl shadow-lg border w-[30rem]">
//           <h1 className="text-2xl md:text-3xl  font-semibold text-center">
//             Welcome Back <span className="wave-emoji">👋</span>
//           </h1>
//           <p className="text-gray-400 mb-8  text-center">Login your account to get started..!</p>

//           <form className="space-y-4 ">
//             <div>
//               <label className="block  mb-1 text-[12px]" htmlFor="username">Username *</label>
//               <input
//                 id="username"
//                 type="text"
//                 className="w-full px-4 p-3 rounded-3xl border bg-transparent  outline-none "
//                 placeholder="Hariharan .S"
//               />
//             </div>

//             <div>
//               <label className="block  mb-1 text-[12px]" htmlFor="email">Email *</label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full px-4 py-3 rounded-3xl border bg-transparent outline-none "
//                 placeholder="hariuxi.dsgn@gmail.com"
//               />
//             </div>

//             <div>
//               <label className="block  mb-1 text-[12px]" htmlFor="phone">Phone Number*</label>
//               <div className="flex rounded-3xl">
//                 <div className="flex items-center bg-gray-700 px-3 rounded-l-3xl">
//                   <span className="">🇮🇳</span>
//                 </div>
//                 <input
//                   id="phone"
//                   type="text"
//                   className="w-full px-4 py-3 rounded-r-3xl border bg-transparent outline-none  "
//                   placeholder="+91 97913 36435"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block  mb-1 text-[12px]" htmlFor="password">Password*</label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type="password"
//                   className="w-full px-4 py-3 rounded-3xl border bg-transparent  outline-none "
//                   placeholder="********"
//                 />
//                 <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer">
//                   👁️
//                 </span>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-500  py-2 rounded-3xl hover:bg-green-600 transition font-bold"
//             >
//               Log in
//             </button>
//           </form>

//           <div className="text-center mt-6">
//             <span className="text-gray-400">Don’t have an account? </span>
//             <Link to="/signup" className="text-green-500 hover:underline">Sign Up</Link>
//           </div>

//           {/* Social Icons */}
//           <div className="flex justify-center mt-8 space-x-4 ">
//             <a href="#"><i className="fab fa-instagram"></i></a>
//             <a href="#"><i className="fab fa-facebook"></i></a>
//             <a href="#"><i className="fab fa-twitter"></i></a>
//             <a href="#"><i className="fab fa-google"></i></a>
//           </div>
//         </div>
//       </div>
//       <img src='/logo.png' className='absolute top-5 sm:top-10 left-5 sm:left-10 w-14 sm:w-20'></img>
//       <div className='absolute flex justify-between bottom-10 left-10 w-[50rem]'>
//         <div>
//           © 2024 alpha All Rights Reserved.
//         </div>
//         <div className='flex gap-4 text-black'>
//           <div className='bg-white rounded-full p-2'>
//             <FaInstagram />
//           </div>
//           <div className='bg-white rounded-full p-2'>
//             <FaXTwitter />
//           </div>
//           <div className='bg-white rounded-full p-2'>
//             <FiFacebook />
//           </div>
//           <div className='bg-white rounded-full p-2'>
//             <TbBrandThreads />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import loginBg from "./assets/loginBg.png";
import { FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { LOGIN_URL } from "../../constants/Constants";

import "./login.css";
import axios from "axios";
// import
export default function SignupPage() {
  const [passwordType, setpasswordType] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState({
    email_or_phone: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    console.log("====================================");
    console.log("inpts", inputs);
    console.log("====================================");

    if (!inputs.email_or_phone || !inputs.password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email_or_phone)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    try {
      const result = await axios.post(LOGIN_URL, inputs);

      if (result.status.toString().startsWith("2")) {
        let data = result.data;

        auth.setToken(data);

        if (data.plan == null || data.plan == "") {
          navigate("/pricing", { replace: true });
        } else navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      setErrorMessage(err.response.data.error);
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
    <div className="flex flex-col md:flex-row min-h-screen h-full w-screen sm:p-10 bg-cover bg-center bg-no-repeat text-white bg-black background-imag">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 max-sm:pt-20">
        <div className="text-2xl sm:text-4xl md:text-5xl">
          Get started <br /> with{" "}
          <span className="text-green-500 font-bold">Alpha Robotics LLP</span>
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

          <form className="space-y-4 ">
            {/* <div>
              <label className="block  mb-1 text-[12px]" htmlFor="username">
                Username*
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-4 p-3 rounded-3xl border bg-transparent  outline-none "
                placeholder="Hariharan .S"
              />
            </div> */}

            <div>
              <label className="block  mb-1 text-[12px]" htmlFor="email">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-3xl border bg-transparent outline-none "
                placeholder="hariuxi.dsgn@gmail.com"
              />
            </div>

            {/* <div>
              <label className="block  mb-1 text-[12px]" htmlFor="phone">
                Phone Number*
              </label>
              <div className="flex rounded-3xl">
                <div className="flex items-center bg-gray-700 px-3 rounded-l-3xl">
                  <span className="">🇮🇳</span>
                </div>
                <input
                  id="phone"
                  type="text"
                  className="w-full px-4 py-3 rounded-r-3xl border bg-transparent outline-none  "
                  placeholder="+91 97913 36435"
                />
              </div>
            </div> */}

            <div>
              <label className="block  mb-1 text-[12px]" htmlFor="password">
                Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={passwordType ? "password" : "text"}
                  className="w-full px-4 py-3 rounded-3xl border bg-transparent  outline-none "
                  placeholder="********"
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setpasswordType(!passwordType)}
                >
                  👁️
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500  py-2 rounded-3xl hover:bg-green-600 transition font-bold"
            >
              Log In
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-gray-400">Don’t have an account? </span>
            <Link to="/signup" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-8 space-x-4 ">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
      <img
        src="/logo.png"
        className="absolute top-5 sm:top-10 left-5 sm:left-10 w-14 sm:w-20"
      ></img>
      <div className="max-sm:hidden absolute flex justify-between bottom-10 left-10 sm:gap-[20rem]">
        <div>© 2024 alpha All Rights Reserved.</div>
        <div className="flex gap-4 text-black">
          <div className="bg-white rounded-full p-2">
            <FaInstagram />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaXTwitter />
          </div>
          <div className="bg-white rounded-full p-2">
            <FiFacebook />
          </div>
          <div className="bg-white rounded-full p-2">
            <TbBrandThreads />
          </div>
        </div>
      </div>
    </div>
  );
}
