

import React from 'react';
import image from '../assets/img/images.jpeg';
import video from '../assets/img/Editing-Tools.mp4';
import { IoMdArrowDropdown } from "react-icons/io";

export default function AnimakerPage() {
    const animateData = [
        {
            id: 1,
            img: image,
            heading: "1. Your Character",
            desc: "Select the image from your computer you want to choose"
        },
        {
            id: 2,
            img: image,
            heading: "2. Video Animation",
            desc: "Select the image from your computer you want to choose"
        },
        {
            id: 3,
            img: image,
            heading: "3. Style/Clothing",
            desc: "Select the image from your computer you want to choose"
        }
    ];

    return (
        // Outer div with responsive grid
        <div className='bg-[#3634cb] pt-24 lg:p-36'>
            <div className='lg:grid lg:grid-cols-3 gap-8'>
                {animateData.map(item => (
                    // Individual grid item
                    <div key={item.id} className=' p-6  shadow-xl  rounded-xl'>
                        <div className='bg-gray-800/75 px-2 rounded-xl'>
                        <img src={item.img} alt={`Image ${item.id}`} className=' mx-auto mb-2 p-1 rounded-xl' />
                        </div>
                        <div className='bg-gray-800/75 rounded-xl py-8 px-2  mx-auto'>
                            <h2 className='text-lg font-semibold text-white  mb-2 px-2'>{item.heading}</h2>
                            <p className='text-white px-2'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* This div is for  process the video */}

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 place-items-center'>
                <div>
                    {/* First box */}
                    <div className='bg-gray-800/75 rounded-xl p-3 m-2 text-white'>
                        <h1 className='font-bold text-xl pb-2'>Chose your modal</h1>
                        <p>Upload an image of the character that you want to animate.</p>
                    </div>

                    {/* Second Box */}
                    <div className='bg-gray-800/75 rounded-xl p-3 m-2 text-white'>
                        <h1 className='font-bold text-xl pb-2'>Add prompt</h1>
                        <p>1 women, red head, fighting another person, orange iron, man suit, background is office like building</p>
                    </div>
                </div>


                {/* This div is for select video length and other information */}
                <div className='col-span-3 lg:col-span-1 mt-10'>
                    <button className='bg-[#d37435] text-[30px] font-bold text-[#3634cb] border-2 border-gray-800 px-12 py-2 rounded-xl'>Animate</button>

                    <p className='bg-gray-800/75 py-1 px-3 rounded-xl text-white font-bold w-fit my-2'>Choose Video Length</p>
                    <div className='flex gap-x-3'>
                        <button className='bg-gray-800/75 py-1 px-3 rounded-xl text-white font-bold'>5 sec</button>
                        <button className='bg-gray-800/75 py-1 px-3 rounded-xl text-white font-bold'>10 sec</button>
                        <button className='bg-gray-800/75 py-1 px-3 rounded-xl text-white font-bold'>15 sec</button>
                    </div>

                    <button className='bg-gray-800/75 flex gap-x-2 items-center py-1 px-3 rounded-xl text-white font-bold w-fit my-2'>Advanced Setting <IoMdArrowDropdown size={20}/></button>
                </div>

                {/* This div is for the video that is made after apply */}
                <div className='col-span-3 lg:col-span-1 px-2'>
                    <video
                        src={video}
                        className='w-[300px]'
                    ></video>
                </div>
            </div>

        </div>
    );
}

