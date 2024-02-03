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
                    <div className=" flex flex-col md:flex-row mx-auto  border-none md:gap-2 gap-4 ">
                        {/* Video-2  */}
                        <div className="  mt-[-90px] ">
                            <div className=" relative top-32  ">
                                <h2
                                    className="  font-bold text-[#0A0F40] flex justify-center md:justify-start md:ml-12 
                                 text-[25px] "
                                >
                                    Super Powerfull <br /> Character Builder
                                </h2>
                                <p className="  text-[#787346] font-semibold w-[80%] flex text-center md:justify-start  mx-auto">
                                    Take it for a spin and build billions{" "}
                                    <br className=" hidden md:block" /> of
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
                        <div className="  mt-[-90px] ">
                            {/* Video-3  */}
                            <div className=" relative sm:top-32 top-44 mx-auto  ">
                                <h2
                                    className="  font-bold text-[#ffffff] flex justify-center md:ml-4
                                 text-[25px] "
                                >
                                    World’s largest asset <br /> and animation library
                                </h2>
                                <p className="  text-[#787346] font-semibold     md:w-[100%] w-[70%] flex  justify-center mx-auto">
                                    100M+ Stock media, 70K+ icons, and 30K+ <br className=" hidden md:block" />
                                    music tracks & stickers to fuel your
                                    creativity.
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
