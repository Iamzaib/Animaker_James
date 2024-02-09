import React from 'react'
import video from '../../assets/img/Video editing tools.mp4';
export default function EditingTools() {
  
    return (
        // this is outer div
        <div className='p-3 rounded-3xl'>

            {/* this div is for heading and other thing */}
            <div className='md:w-[70%] md:relative md:text-white top-44 md:-mt-28 p-2' data-aos="zoom-in-up" data-aos-duration="1000">
                <h1 className='text-2xl md:text-3xl font-bold'>25+ Video Editing Tools & Features</h1>
                <p className='text-xl md:text-white text-[#bcc5ce] '>From basic video editing features like trimming and cropping to complex features
                    like video effects controller & green screen editor, Animaker has got it all.</p>
            </div>

            <div className=''>
                <video
                    // controls
                    
                    loop
                    autoPlay
                    muted
                    className='w-[100%] rounded-xl'
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    )
}
