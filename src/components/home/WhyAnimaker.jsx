import React from "react";
const WhyAnimaker = () => {


  return (
    <>
          {/* Outer Div */}
    <div className=" flex flex-col w-full mx-auto h-fit bg-[#54536c17]">
           {/* Heading Div */}
      <div className=" flex flex-col md:mx-36  ">
      <h1 className=" flex justify-center md:justify-start md:text-[55px] text-[40px] bg-gradient-to-r from-[#3939D4] to-[#8F3CEB] font-bold text-transparent bg-clip-text"><span className=" text-[#0A0F40] font-bold" >Why</span> Animaker</h1>
      <p className="flex justify-center md:justify-start text-[#A7B2BF] md:w-96 text-[22px] text-center md:font-bold mt-2">Meet the World’s most complete
Animation & Video Making Tool</p>
      </div>
        {/* Video Tags */}
        <div className="flex flex-col w-full mx-auto h-fit ">
          {/* Video 1 */}
        <div className='mx-auto'>

<video
    controls width="1000" height="auto"
    className='relative bottom-36 rounded-xl mx-auto shadow-lg hidden md:block'
>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
</video>
</div>
        </div>
    </div>
    </>
  );
};

export default WhyAnimaker;
