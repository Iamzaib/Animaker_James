import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from '../../assets/img/footer-logo.webp'

export default function Footer() {
    return (
        // This is the outer div
        <div className='bg-[#0a0f40] pt-20 pb-10 px-4'>

            <h1 className='text-[25px] md:text-[33px] font-bold text-[#f99420] lg:ml-20 pb-10'>Animaker Use Cases</h1>
            <div className='md:flex justify-around gap-x-10'>
                {/* This div is for first col */}
                <div>
                    <h1 className='text-white font-bold text-[20px] py-7'>Products</h1>
                    <ul>
                        <li className='footer-styling'>Video Maker</li>
                        <li className='footer-styling'>2D animation softwares</li>
                        <li className='footer-styling'>Whiteboard video maker</li>
                        <li className='footer-styling'>Infographics</li>
                        <li className='footer-styling'>Vertical Video Maker</li>
                        <li className='footer-styling'>Screen Recorder</li>
                        <li className='footer-styling'>GIF Maker</li>
                        <li className='footer-styling'>Photo Editor</li>
                        <li className='footer-styling'>Animaker</li>
                    </ul>
                </div>

                {/* This div is for second col */}


                <div>
                    <h1 className='text-white font-bold text-[20px] py-7'>Company</h1>
                    <ul>
                        <li className='footer-styling'>About Us</li>
                        <li className='footer-styling'>Jobs</li>
                        <li className='footer-styling'>Affiliate</li>
                        <li className='footer-styling'>Terms</li>
                        <li className='footer-styling'>Security Policy</li>
                        <li className='footer-styling'>Screen Recorder</li>
                        <li className='footer-styling'>Prees</li>

                    </ul>
                </div>

                {/* This is for third col */}

                <div>
                    <h1 className='text-white font-bold text-[20px] py-7'>Support</h1>
                    <ul>
                        <li className='footer-styling'>Tutorials</li>
                        <li className='footer-styling'>Templates</li>
                        <li className='footer-styling'>Affiliate</li>
                        <li className='footer-styling'>FAQ</li>
                        <li className='footer-styling'>Traning</li>
                        <li className='footer-styling'>Contact</li>
                        <li className='footer-styling'>What's New</li>

                    </ul>
                </div>

                {/* This is the forth col */}

                <div className='w-[250p'>
                    <h1 className='text-white font-bold text-[20px] py-7'>Animaker</h1>

                    <p className='w-[250px] text-gray-400 hover:text-[#ffa56d] hover:scale-105 duration-200'>1160 Battery Street Suite 100,
                        San Francisco, CA 94111, USA.
                        help@animaker.com</p>
                    <ul className='flex pt-3'>
                        <li className='text-gray-400 py-1 px-2 hover:cursor-pointer hover:text-[#ffa56d]'><FaFacebookF size={20} /></li>
                        <li className='text-gray-400 py-1 px-2 hover:cursor-pointer hover:text-[#ffa56d]'><FaInstagram size={20} /></li>
                        <li className='text-gray-400 py-1 px-2 hover:cursor-pointer hover:text-[#ffa56d]'><FaYoutube size={20} /></li>
                        <li className='text-gray-400 py-1 px-2 hover:cursor-pointer hover:text-[#ffa56d]'><IoLogoTwitter size={20} /></li>
                        <li className='text-gray-400 py-1 px-2 hover:cursor-pointer hover:text-[#ffa56d]'><FaLinkedinIn size={20} /></li>

                    </ul>
                </div>
            </div>

            {/* This div is for footer logo and copy right line */}

            <div className='text-center'>
                <img src={logo} alt="footer logo" className='w-[80px] mx-auto pb-3 pt-5' />
                <h3 className='text-white text-[30px] font-bold'> <span className='font-bold text-[30px] text-[#f99420]'>Videos</span>, Done Right!</h3>
                <h4 className='text-gray-400 pt-2'>Copyright © 2024 <span className='text-[#f99420] hover:underline '>Animaker</span> Inc, All rights reserved</h4>
            </div>
        </div>
    )
}
