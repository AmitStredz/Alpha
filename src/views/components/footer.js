import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'

import avatar from './assets/avatar.png'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function Footer() {
    return (
        <div className='bg-[#10192A]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 justify-between gap-5 items-center sm:flex-row p-5 sm:p-10 '>
                <div className='flex flex-col justify-between gap-5'>
                    <div className='flex justify-between items-center'>
                        <img src='/logo.png' className='w-16 sm:w-28'></img>
                        <div className='flex gap-4 text-black h-full'>
                            <div className='text-green-500 rounded-full cursor-pointer'>
                                <FaInstagram size={30} />
                            </div>
                            <div className='text-green-500 rounded-full cursor-pointer'>
                                <FaFacebookSquare size={30} />

                            </div>
                            <div className='text-green-500 rounded-full cursor-pointer'>
                                <FaLinkedinIn size={30} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-green-500 text-[12px] w-60'>
                            NEVER MISS ANY UPDATED
                            ABOUT US BY SUBSCRIBING
                            TO OUR NEWSLETTER
                        </p>
                    </div>
                    <div className='relative'>
                        <input placeholder='EMAIL' className='p-2 px-4 w-full bg-white rounded-xl outline-none' />
                        <div className='absolute flex items-end right-3 text-slate-400 top-2 cursor-pointer'>
                            <span>Sign Up</span>
                            <IoIosArrowRoundForward size={24} />
                        </div>
                    </div>

                </div>
                <div className='flex justify-between gap-5 sm:p-5 text-white font-semibold'>
                    <ul className='flex flex-col gap-3'>
                        <li>Tokens</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>Pricing</li>
                        <li>Team</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>Careers</li>
                    </ul>

                </div>
                <img src={avatar} className='w-96'></img>

            </div>
            <div className='bg-slate-300 w-screen h-[1px]'>

            </div>

            <div className='p-5 sm:px-10 flex flex-col sm:flex-row gap-3 text-center justify-between text-white text-[12px] sm:text-[14px]'>
                <p>
                    © alpha robotics llp. All Rights Reserved 2024
                </p>
                <p>
                    Designed by our company
                </p>
            </div>
        </div>
    )
}
