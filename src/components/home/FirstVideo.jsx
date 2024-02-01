import React from 'react'

export default function FirstVideo() {
    return (
        // This is the outer div
        <div className='bg-[#2727d0] rounded-[30px] md:rounded-[60px] my-10 mx-2'>

            {/*Inner div */}

            <div className='flex flex-col p-8 md:p-28 justify-between items-center'>
                <p className='text-white text-xl md:text-6xl font-bold'>The world is waiting </p>
                <p className='text-white text-xl  md:text-6xl font-bold'> for your first video!</p>


                <button className='border-2 border-red-500 px-3 md:px-10 py-2 rounded-full mt-8 md:mt-28 text-white font-bold text-lg md:text-2xl'>Create For Free</button>
            </div>
        </div>
    )
}
