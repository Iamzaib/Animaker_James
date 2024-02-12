import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img/Amazon.jpeg";
import img2 from "../../assets/img/Aptiv.jpeg";
import img3 from "../../assets/img/Bosch.jpeg";
import img4 from "../../assets/img/Gsk.jpeg";
import img5 from "../../assets/img/McDonalds.jpeg";
// import img6 from '../../assets/img/Truist-_1_.jpeg';
import img7 from "../../assets/img/United-HealthCare.jpeg";
import img8 from "../../assets/img/Visa.jpeg";

import HeroImg from "../../assets/img/HomepageOG.png";

const HeroSection = () => {
    return (
        <div className="pt-14 px-4 pb-20 md:pb-[200px] bg-gradient-to-b from-[#2F37CC] to-[#7b22e8]  flex justify-center">
            <div className="flex flex-col w-[90%]  items-center justify-between">
                <div className="flex flex-col justify-center items-center font-sans gap-4 mx-auto pt-20">
                    <h1 className="  text-center   text-[42px] md:text-[60px] font-extrabold text-white mb-[5px] text-balance">
                        The Future of <br className=" hidden md:block" />
                        Video Making Starts Here.
                    </h1>
                    <p className="text-center font-medium text-[18px] text-white text-balance mb-6 ">
                        A breakthrough AI-Powered platform to create Animation
                        and Live-Action videos for non-designers & professionals
                        from early-stage startups to seasoned Fortune 500
                        companies.
                    </p>

                    <div className="gradient-border mt-5 mb-5">
                        <button className="inner-button bg-[#482dc7] py-2 px-[20px] lg:px-[50px] lg:py-10 font-bold text-white text-[26px]">
                            Create for free
                        </button>
                    </div>
                </div>
                <div className=" block md:hidden">
                    <img src={HeroImg} className="" />
                </div>
                {/* This div is for slider */}
                <div className=" flex w-[98%] md:w-[70%] justify-center md:flex-row flex-col   text-[#d99efb]">
                    <div className=" flex-col flex justify-center md:border-r-2 md:pr-4">
                        <p className="text-center font-bold pt-4 p-2 text-[24px]">
                            20,000,000+
                        </p>
                        <h2 className="text-center font-bold p-2 text-[14px] md:text-[24px]">
                            USERS
                        </h2>
                    </div>
                    {/* This div is for image slider */}

                    <div className="flex w-full  overflow-hidden  text-[#c7bbff]">
                        <div className="inline-flex gap-8 w-[100%] ">
                            <div class="logos">
                                <div class="logos-slide">
                                    {/* <img src={img1}/>
                                    <img src={img2} />
                                    <img src={img3} />
                                    <img src={img4} />
                                    <img src={img5} /> */}
                                    {/* <img src={img6} /> */}
                                    {/* <img src={img7} />
                                    <img src={img8} /> */}

                                    <img
                                        src="https://www.animaker.com/Animaker-Home/new-assets/Truist.svg"
                                        alt=""
                                    />
                                    <img
                                        src="https://www.animaker.com/Animaker-Home/new-assets/Amazon.svg"
                                        alt=""
                                    />
                                    <img
                                        src="https://www.animaker.com/Animaker-Home/new-assets/Bosch.svg"
                                        alt=""
                                    />
                                    <img
                                        src="	https://www.animaker.com/Animaker-Home/new-assets/Visa.svg"
                                        alt=""
                                    />
                                    <img
                                        src="https://www.animaker.com/Animaker-Home/new-assets/Gsk.svg"
                                        alt=""
                                    />
                                    <img
                                        src="https://www.animaker.com/Animaker-Home/new-assets/McDonalds.svg"
                                        alt=""
                                    />
                                    <img
                                        src="	https://www.animaker.com/Animaker-Home/new-assets/United%20HealthCare.svg"
                                        alt=""
                                    />
                                    <img
                                        src="https://www.animaker.com/Animaker-Home/new-assets/Aptiv.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
