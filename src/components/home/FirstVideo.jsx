import React from 'react'

export default function FirstVideo() {
    return (
        // This is the outer div
        <div className='bg-[#2727d0] rounded-[30px] md:rounded-[60px] my-10 mx-2'>

            {/*Inner div */}

            <div className='flex flex-col p-8 md:px-20 py-28 justify-between items-center' >
                <p className='text-white text-xl md:text-6xl font-bold' data-aos="fade-up" data-aos-duration="1000">The world is waiting </p>
                <p className='text-white text-xl  md:text-6xl font-bold' data-aos="fade-up" data-aos-duration="1000"> for your first video!</p>

                <div className="gradient-border mt-5">
                    <button className="inner-button py-2 lg:py-10 px-3 md:px-60 font-bold bg-[#2727d0] text-white text-[18px] md:text-[26px] hover:shadow-purple transition-all duration-300">
                        Create for free
                    </button>
                </div>


            </div>
        </div>
    )
}
