import React from 'react';
import img1 from "../../assets/img/GDPR.png";
import img2 from "../../assets/img/ISO.webp";
import img3 from "../../assets/img/CyberGRX.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import image from '../../assets/img/review-img1.webp'
export default function Reviews() {
    return (
        // This is outer div
        <div className='mt-5' >

            {/* This div is for heading */}
            <div >
                <h2 className='px-2 text-[#2727d0] text-center md:text-start text-2xl md:text-5xl font-bold'>Our Users Love Us</h2>
                <h2 className='px-2 text-2xl text-center md:text-start md:text-5xl font-bold'>For A Good Reason</h2>

                {/* This div is for review */}

                <div className='bg-white md:flex mx-auto rounded-xl mt-5 py-24'>
                    {/* This is the left side of the review */}
                    <div className='md:w-[50%] px-5 py-3'>
                        <img
                            src={image}
                            alt="image"
                            className='rounded-full w-[180px] sm:mx-auto md:mx-1'
                        />
                        <h3 className='font-bold text-2xl sm:text-center md:text-start'>Martin Miller</h3>
                        <h5 className='font-semibold text-lg pt-2 sm:text-center md:text-start'>Instructional designer</h5>
                        <p className='text-lg mt-4 text-gray-500 sm:text-center md:text-start'>Since training videos are always content-heavy, presenting them in an interesting way has always been a challenge. Thats when I came across Animaker. With its animated icons, charts, graphs, and characters, video creation is a dream now!</p>
                    </div>

                    {/* this is thw right side of the review */}
                    {/* <div className='flex justify-between flex-col  border border-l-gray-500'> */}
                    <div className='flex justify-between flex-col text-center  border-l-[2px] border-gray-200'>

                        <div className='flex flex-col justify-center p-5'>
                            <h1 className='font-bold text-[65px]'>70+</h1>
                            <p className='mt-6 text-gray-500 text-lg'>training videos created</p>
                            <h1 className='font-bold mt-4 text-[65px]'>60%</h1>
                            <p className='mt-6 text-gray-500 text-lg'>less time on video creations</p>

                        </div>

                        <div className='flex justify-between md:justify-end hover:cursor-pointer px-2'>
                            < IoIosArrowBack
                                size={30}
                                className='bg-gray-300 p-1 rounded-full mx-1' />
                            <IoIosArrowForward
                                size={30}
                                className='bg-gray-300 p-1 rounded-full mx-1' />
                        </div>
                    </div>

                </div>
            </div>

            {/* This div is for three logo and etc */}

            <div className='md:flex justify-between items-center py-5 px-3'>
                <p className='text-2xl font-semibold sm:text-center md:text-start py-3'>All the security you will ever need</p>
                <div className='md:flex justify-between  gap-x-4'>

                    {/* First image */}
                    <img 
                    src={img1} 
                    alt="image" 
                    className='w-[150px] h-[150px] mx-auto py-1' />

                    {/* Second image */}
                    <img 
                    src={img2} 
                    alt="image" 
                    className='w-[140px] h-[140px] mx-auto py-1' />

                    {/* Third image */}
                    <img 
                    src={img3} 
                    alt="image" 
                    className='w-[140px] h-[140px] mx-auto py-1' />
                </div>
            </div>
        </div>
    )
}
