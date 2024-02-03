import React from "react";
import video from "../../assets/img/AnimakerAI.mp4";
import video1 from "../../assets/img/AssetsLibrarynew.mp4";
import video2 from "../../assets/img/Characterbuilder.mp4";

const WhyAnimaker = () => {
    return (
        <>
            {/* Outer Div */}
            <div className=" flex flex-col w-full mx-auto h-fit ">
                {/* Heading Div */}
                <div className=" flex flex-col md:mx-20   ">
                    <h1 className=" flex justify-center md:justify-start md:text-[55px] text-[40px] bg-gradient-to-r from-[#3939D4] to-[#8F3CEB] font-bold text-transparent bg-clip-text">
                        <span className=" text-[#0A0F40] font-bold">Why</span>{" "}
                        Animaker
                    </h1>
                    <p className="flex justify-center md:justify-start text-[#A7B2BF] md:w-96 text-[22px] text-center md:font-bold mt-2">
                        Meet the World’s most complete Animation & Video Making
                        Tool
                    </p>
                </div>
                {/* Video Tags */}
                <div className="flex flex-col w-full mx-auto h-fit p-2 gap-2">
                    {/* Video 1 */}
                    <div className="mx-auto border ">
                        <video
                        // controls
                            loop
                            autoPlay
                            width="1000"
                            height="auto"
                            className=" rounded-xl mx-auto shadow-lg md:border-4 md:border-l-[#6FFEE3] md:border-t-[#6FFEE3] md:border-b-[#95bffd] md:border-r-[#9CC2FD]"
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* Video-2 Video 3 Outer-Div */}
                    <div className=" flex flex-col md:flex-row mx-auto  border-none gap-2">
                        {/* Video-2  */}
                        <div className=" md:mt-[-100px] mt-[-50px] ">
                            <div className=" relative top-32 ">
                                <h2 className=" ml-4 font-bold text-[#0A0F40] md:text-start text-center text-[25px] md:w-[70%]  ">
                                    Super Powerful Character Builder
                                </h2>
                                <p className=" ml-4 mt-2 md:w-[70%] text-[#787346] md:text-start text-center font-semibold">
                                    Take it for a spin and build billions of
                                    unique characters for your brand.
                                </p>
                            </div>

                            <video
                                loop
                                // controls
                                autoPlay
                                width="500"
                                height="auto"
                                className=" rounded-xl mx-auto shadow-lg"
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className=" md:mt-[-100px] ">
                            {/* Video-3  */}
                            <div className=" relative top-32   ">
                                <h2 className="  font-bold text-[#0A0F40] md:text-start text-center text-[25px] md:w-[70%]  ">
                                    World’s largest asset and animation library
                                </h2>
                                <p className="  mt-2 md:w-[70%] text-[#787346] md:text-start text-center font-semibold">
                                    Take it for a spin and build billions of
                                    unique characters for your brand.
                                </p>
                            </div>
                            <video
                                loop
                                // controls
                                autoPlay
                                width="500"
                                height="auto"
                                className=" rounded-xl mx-auto shadow-lg"
                            >
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyAnimaker;
