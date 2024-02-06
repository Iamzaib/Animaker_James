// import React, { useEffect, useState } from 'react';
// import { BiWorld } from 'react-icons/bi';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { MdOutlineClose } from "react-icons/md";
// import logo from '../../assets/img/animaker-logo.png';

// export default function Header() {
//     const [toggle, setToggle] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             // You can adjust the threshold value based on your needs
//             setIsScrolled(scrollPosition > 50);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div>
//             {/* Large screens */}
//             {/* <div className='bg-[#2727d0]  fixed-top hidden md:flex justify-between items-center text-white  md:px-20 lg:px-32 py-2 text-[16px]'> */}
//             <div className={`bg-${isScrolled ? 'white' : '#2727d0'} fixed-top hidden md:flex justify-between items-center text-${isScrolled ? 'black' : 'white'} md:px-20 lg:px-32 py-2 text-[16px]`}>
//                 <div>
//                     <img src={logo} alt='logo' className='w-[180px]' />
//                 </div>
//                 <div>
//                     <ul className='flex gap-x-5 font-semibold hover:cursor-pointer'>
//                         <li className='hover:text-[#ffa56d] hover:scale-105 duration-200'>Product</li>
//                         <li className='hover:text-[#ffa56d] hover:scale-105 duration-200'>Resources</li>
//                         <li className='hover:text-[#ffa56d] hover:scale-105 duration-200'>Features</li>
//                         <li className='hover:text-[#ffa56d] hover:scale-105 duration-200'>Pricing</li>
//                     </ul>
//                 </div>
//                 <div className='flex gap-x-5'>
//                     <button className='px-3 py-1 border border-transparent hover:border-white rounded-full'>
//                         Login
//                     </button>

//                     <button className='bg-gradient-to-r from-[#ff6c10] to-[#ffc450] rounded-full px-3 py-1 font-bold'>
//                         Sign Up
//                     </button>

//                     <button>
//                         <BiWorld size={30} />
//                     </button>
//                 </div>
//             </div>



//             {/* Mobile menu for small and medium screens */}
//             <div className='md:hidden bg-[#2727d0]'>



//                 <div className='flex justify-between items-center py-2 px-3 fixed-top z-10 bg-[#2727d0]'>

//                     {/* This div is for logo */}
//                     <div>
//                         <img src={logo} alt='logo' className='w-[180px]' />
//                     </div>

//                     {toggle ? (
//                         <MdOutlineClose
//                             onClick={() => setToggle(!toggle)}
//                             className='shadow-sm text-white mr-2 hover:cursor-pointer transition-transform transform scale-95 duration-1000'
//                             size={30}
//                         />
//                     ) : (
//                         <AiOutlineMenu
//                             onClick={() => setToggle(!toggle)}
//                             className='mr-2 shadow-sm hover:cursor-pointer transition-transform duration-1000 scale-95  text-white'
//                             size={30}
//                         />
//                     )}
//                 </div>


//                 <ul
//                     className={`fixed h-screen w-[300px] bg-white z-10 top-[70px] transition-all ease-in-out duration-700
//             ${toggle ? 'left-0' : 'left-[-100%]'} px-8 py-8`}
//                 >
//                     <ul className='block items-center gap-x-11 flex-wrap'>

//                         <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:text-[#ffa56d] hover:scale-105 duration-200'>
//                             Product
//                         </li>

//                         <li className='text-[18px] py-2 md:text-[24px] border-b-2 my-2  hover:text-[#ffa56d] hover:scale-105 duration-200'>
//                             Resources
//                         </li>

//                         <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:text-[#ffa56d] hover:scale-105 duration-200'>
//                             Features
//                         </li>

//                         <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:text-[#ffa56d] hover:scale-105 duration-200'>
//                             Pricing
//                         </li>


//                         <div className='flex flex-col'>
//                             <button className=' border-2 rounded border-[#ff8825] px-2 py-1 border-b-2 my-2 w-[100px]'>
//                                 Login
//                             </button>

//                             <button className='bg-gradient-to-r from-[#ff6c10] to-[#ffc450] w-[100px] text-white rounded-full px-3 py-1 font-bold'>
//                                 Sign Up
//                             </button>
//                             <button className='border-b-2 my-2'>
//                                 <BiWorld size={30} />
//                             </button>
//                         </div>
//                     </ul>
//                 </ul>
//             </div>
//         </div>
//     );
// }



// After Update new header
import React, { useEffect, useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from "react-icons/md";
import logo from '../../assets/img/animaker-logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // You can adjust the threshold value based on your needs
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Large screens */}
            {/* <div className='bg-[#2727d0]  fixed-top hidden md:flex justify-between items-center text-white  md:px-20 lg:px-32 py-2 text-[16px]'> */}
            <div className={`bg-${isScrolled ? 'white' : '#2727d0'} fixed-top hidden md:flex justify-between items-center text-${isScrolled ? 'black' : 'white'} md:px-20 lg:px-32 py-2 text-[16px]`}>
                <div>
                    <img src={logo} alt='logo' className='w-[180px]' />
                </div>
                {/* <div>
                    <ul className='flex gap-x-5 font-semibold hover:cursor-pointer'>
                        <li className='hover:text-[#ffa56d] hover:scale-105 duration-200'>Product</li>
                        <li className='hover:text-[#ffa56d] hover:scale-105 duration-200'>Resources</li>
                        <li className='hover:text-[#ffa56d] hover:scale-105 duration-200'>Features</li>
                        <li className='hover:text-[#ffa56d] hover:scale-105 duration-200'>Pricing</li>
                    </ul>
                </div> */}
                <div className='flex gap-x-5'>
                    {/* <button className='px-3 py-1 border border-transparent hover:border-white rounded-full'>
                        Login
                    </button>

                    <button className='bg-gradient-to-r from-[#ff6c10] to-[#ffc450] rounded-full px-3 py-1 font-bold'>
                        Sign Up
                    </button>

                    <button>
                        <BiWorld size={30} />
                    </button> */}
                    <Link to="/animate">

                        <button className='bg-gradient-to-r from-[#ff6c10] to-[#ffc450] rounded-full px-3 py-1 font-bold'>
                            Try Demo
                        </button>
                    </Link>
                </div>
            </div>



            {/* Mobile menu for small and medium screens */}
            <div className='md:hidden bg-[#2727d0]'>



                <div className='flex justify-between items-center py-2 px-3 fixed-top z-10 bg-[#2727d0]'>

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
                    className={`fixed h-1/2 w-[300px] bg-white z-10 top-[70px] transition-all ease-in-out duration-700
            ${toggle ? 'left-0' : 'left-[-100%]'} px-8 py-8`}
                >
                    {/* <ul className='block items-center gap-x-11 flex-wrap'> */}

                    {/* <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:text-[#ffa56d] hover:scale-105 duration-200'>
                            Product
                        </li>

                        <li className='text-[18px] py-2 md:text-[24px] border-b-2 my-2  hover:text-[#ffa56d] hover:scale-105 duration-200'>
                            Resources
                        </li>

                        <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:text-[#ffa56d] hover:scale-105 duration-200'>
                            Features
                        </li>

                        <li className='text-[18px] py-2 md:text-[24px]  border-b-2 my-2 hover:text-[#ffa56d] hover:scale-105 duration-200'>
                            Pricing
                        </li> */}


                    <div className='flex flex-col'>
                        {/* <button className=' border-2 rounded border-[#ff8825] px-2 py-1 border-b-2 my-2 w-[100px]'>
                                Login
                            </button>

                            <button className='bg-gradient-to-r from-[#ff6c10] to-[#ffc450] w-[100px] text-white rounded-full px-3 py-1 font-bold'>
                                Sign Up
                            </button>
                            <button className='border-b-2 my-2'>
                                <BiWorld size={30} />
                            </button> */}
                        <Link to="/animate">

                            <button className='bg-gradient-to-r from-[#ff6c10] to-[#ffc450] rounded-full px-3 py-1 font-bold'>
                                Try Demo
                            </button>
                        </Link>
                    </div>
                    {/* </ul> */}
                </ul>
            </div>
        </div>
    );
}
