import React from 'react';
import video from "../../assets/img/Templates.mp4";


export default function Template() {
    return (

        // THis is the outer div of the template component
        <div className='mt-20'>

            {/* This div is for heading */}
            <div className='md:w-[50%] md:relative top-48 left-10 xl:left-20' data-aos="zoom-in-up" data-aos-duration="1000">
                <h1 className='text-3xl font-bold px-4'>1000s of Unique Video Templates</h1>
                <p className='px-4 text-gray-400 text-lg'>Pick from 1000s of templates! Use them to create videos in under 5 minutes!</p>
            </div>

            {/* This div is for video */}
            <div className='mt-4 p-3'>
                <video
                    // controls
                    
                    loop 
                    autoPlay
                    muted
                    className=' rounded-xl mx-auto'
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    )
}
