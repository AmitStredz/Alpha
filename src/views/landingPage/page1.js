import React from "react";

export default function Page1() {
  return (
    <div className=" w-scr">
      <div className="flex flex-col items-center gap-3 sm:pt-20 p-3 sm:p-10 xl:px-[22rem] text-center w-screen">
        <span className="text-[14px] sm:text-[20px]">Alpha Robotics LLP</span>

        <span className="text-[32px] sm:text-[60px] leading-8 sm:leading-[4.5rem]">
          Empowering Businesses with AI
        </span>
        <span className="text-[12px] sm:text-[14px]">
          Alpha Robotics LLP (LLPIN: ACI-3787) is a forward-thinking technology firm dedicated to transforming businesses through artificial intelligence, blockchain, and fintech solutions. Incorporated on July 16, 2024 as a Limited Liability Partnership under the LLP Act, 2008, and registered with the Registrar of Companies, Ernakulam, we specialize in computer programming, consultancy, and related services. From our foundation in innovative design to our expertise in AI and fintech, Alpha Robotics LLP stays ahead of technological trends. Our experienced team delivers solutions that meet international standards for performance, security, and efficiency, driving growth for businesses worldwide.
        </span>
      </div>
      <div className="flex w-screen h-full px-3 sm:px-10">
        <img src="/hello2.png" alt="helloLogo" className="w-[10rem] sm:w-[25rem] animate-slide"></img>
      </div>
    </div>
  );
}
