import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page5() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-screen py-10 sm:py-20 lg:py-40 text-center">
      <div className="flex flex-col gap-5 lg:px-[16rem] xl:px-[28rem] p-3">
        <div className="flex flex-col sm:gap-5 ">
          <span className="text-[20px] sm:text-[40px] leading-10">
            Ready to Get Strarted?
          </span>
          <span className="text-[20px] sm:text-[40px] leading-10">
            Join us right now!
          </span>
        </div>
        <p className="text-[12px] sm:text-[16px]">
          presented complicated trading solutions that are intended to
          streamline your investment experience.{" "}
        </p>
        <div>
          <button
            className=" p-2 px-4 sm:p-4 sm:px-8 bg-green-500  text-[16px] sm:text-[18px] rounded-[2rem]"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
