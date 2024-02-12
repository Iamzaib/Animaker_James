import React from 'react';
import video from '../../assets/img/newhome-loop-video.mp4'
export default function Awards() {
    return (
        // This is the outer div
        <div className='my-6'>
            <div className='mx-auto'>

                <video
                    loop
                    autoPlay
                    muted
                    width="1000"
                    height="auto"
                    className='relative bottom-36 rounded-xl mx-auto shadow-lg hidden md:block'
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

            {/* the div below the video tag */}
            <div className='md:flex justify-between px-3 md:px-5 py-5' data-aos="zoom-in-up" data-aos-duration="1000">

                {/* Right div */}

                <div className='max-lg:text-center min-lg:text-left'>
                    <h3 className='text-xl font-bold  py-2  '> Awards Galore!</h3>
                    <p className='pb-2 text-zinc-400  '>Animaker was voted as the No.4 Best Design Product of the World.</p>
                </div>

                {/* Left div */}
                <div className='lg:w-60%'>
                    <img src="https://www.animaker.com/Animaker-Home/new-assets/Badges-Stack.svg" alt="logo" className='mx-auto px-4 md:px-1' />
                </div>
            </div>
        </div>
    );
}



