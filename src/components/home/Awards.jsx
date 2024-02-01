import React from 'react';
import video from '../../assets/img/newhome-loop-video.mp4'
export default function Awards() {
    return (
        // This is the outer div
        <div className='my-6 mx-5'>
            <div className='mx-auto'>

                <video
                    controls width="1000" height="auto"
                    className='relative bottom-36 rounded-xl mx-auto shadow-lg hidden md:block'
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* the div below the video tag */}
            <div className='md:flex justify-between lg:px-40'>

                {/* Right div */}
                <div className='pt-24'>
                    <h3 className='text-xl font-bold sm:text-center md:text-start'> Awards Galore!</h3>
                    <p className='mx-auto text-center md:text-start text-zinc-400 md:w-[300px]'>Animaker was voted as the No.4 Best Design Product of the World.</p>
                </div>

                {/* Left div */}
                <div className='pt-14 md:pt-24'>
                    <img src="https://www.animaker.com/Animaker-Home/new-assets/Badges-Stack.svg" alt="logo" className='mx-auto' />
                </div>
            </div>



        </div>
    );
}
