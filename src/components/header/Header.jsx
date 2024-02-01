import React, { useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from "react-icons/md";
import logo from '../../assets/img/animaker-logo.png';

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            {/* Large screens */}
            <div className='bg-[#2727d0]  fixed-top hidden md:flex justify-between items-center text-white  md:px-20 lg:px-32 py-2 text-[16px]'>
                <div>
                    <img src={logo} alt='logo' className='w-[180px]' />
                </div>
                <div>
                    <ul className='flex gap-x-5 hover:cursor-pointer'>
                        <li>Product</li>
                        <li>Resources</li>
                        <li>Features</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='flex gap-x-5'>
                    <button className='px-3 py-1 border border-transparent hover:border-white rounded-full'>
                        Login
                    </button>
                    <button className='bg-yellow-500 rounded-full px-3 py-1 font-bold'>
                        Sign Up
                    </button>
                    <button>
                        <BiWorld size={30} />
                    </button>
                </div>
            </div>



            {/* Mobile menu for small and medium screens */}
            <div className='md:hidden bg-[#2727d0]'>


                <div className='flex justify-between items-center py-2 px-3'>

                    {/* This div is for logo */}
                    <div>
                        <img src={logo} alt='logo' className='w-[180px]' />
                    </div>

                    {toggle ? (
                        <MdOutlineClose
                            onClick={() => setToggle(!toggle)}
                            className='shadow-sm text-white mr-2 hover:cursor-pointer transition-transform transform scale-95 duration-1000'
                            size={30}
                        />
                    ) : (
                        <AiOutlineMenu
                            onClick={() => setToggle(!toggle)}
                            className='mr-2 shadow-sm hover:cursor-pointer transition-transform duration-1000 scale-95  text-white'
                            size={30}
                        />
                    )}
                </div>


                <ul
                    className={`fixed h-screen w-[300px] bg-white z-10 top-[70px] transition-all ease-in-out duration-700
            ${toggle ? 'left-0' : 'left-[-100%]'} px-8 py-8`}
                >
                    <ul className='block items-center gap-x-11 flex-wrap'>
                       
                            <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:transition-all ease-in-out duration-300'>
                                Product
                            </li>
                       
                            <li className='text-[18px] py-2 md:text-[24px] border-b-2 my-2  hover:transition-all ease-in-out duration-300'>
                                Resources
                            </li>
                       
                            <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:transition-all ease-in-out duration-300 xl:block'>
                                Features
                            </li>
                       
                            <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:transition-all ease-in-out duration-300'>
                                Pricing
                            </li>
                        

                        <div className='flex flex-col'>
                            <button className=' border-2 rounded border-[#ff8825] px-2 py-1 border-b-2 my-2 w-[100px]'>
                                Login
                            </button>
                            <button className='bg-[#ff8825] rounded-full px-2 py-1 font-bold border-b-2 my-2 w-[100px]'>
                                Sign Up
                            </button>
                            <button className='border-b-2 my-2'>
                                <BiWorld size={30} />
                            </button>
                        </div>
                    </ul>
                </ul>
            </div>
        </div>
    );
}
