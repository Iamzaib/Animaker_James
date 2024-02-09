import React, { useState } from "react";
import img1 from "../../assets/img/GDPR.png";
import img2 from "../../assets/img/ISO.webp";
import img3 from "../../assets/img/CyberGRX.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import imageA from "../../assets/img/review-img1.webp";
import imageB from "../../assets/img/review-img2.png";
import imageC from "../../assets/img/review-img3.png";
import imageD from "../../assets/img/review-img4.png";
export default function Reviews() {
    const data = [
        {
            id: 1,
            picture: imageA,
            heading: "Martin Miller",
            heading2: "Instructional designer",
            paragraph:
                "Since training videos are always content-heavy, presenting them in an interesting way has always been a challenge. That’s when I came across Animaker. With its animated icons, charts, graphs, and characters, video creation is a dream now!",
            Addition: "70+",
            addPara: "training videos created",
            percentage: "60%",
            perPara: "less time on video creations",
        },
        {
            id: 2,
            picture: imageB,
            heading: "Stephen A. Gruner",
            heading2: "Video Marketer",
            paragraph:
                "We were really blown away by Animaker’s character builder. I could literally build an animated version of any person I can imagine. With this customized video, we’re able to 2X our sales conversion.",
            Addition: "2X",
            addPara: "Sales Conversions",
            percentage: "80%",
            perPara: "less time on video creation",
        },
        {
            id: 3,
            picture: imageC,
            heading: "Rachel Hunter McCoy",
            heading2: "HR Manager",
            paragraph:
                "I think one of Animaker’s best benefits is their super useful support. They responded very promptly whenever I tackled an issue or had a question. I never had to wait too long.",
            Addition: "10+",
            addPara: "onboarding/relations videos",
            percentage: "15%",
            perPara: "employee activity videos",
        },
        {
            id: 4,
            picture: imageD,
            heading: "Laurence Chung",
            heading2: "Global Brand Manager",
            paragraph:
                "At GSK, we wanted to use animated videos for a plethora of different use cases. From marketing to L&D, animated videos helped us communicate easily and effectively. We have created over 2000+ videos using Animaker & saved $1.4 Million dollars.",
            Addition: "2000+",
            addPara: "Videos created so far",
            percentage: "$1.4 Million",
            perPara: "Cost saved for the server",
        },
    ];
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClickPlus = (index) => {
        setActiveIndex(index + 1);
    };
    const handleClickMinus = (index) => {
        setActiveIndex(index - 1);
    };
    return (
        // This is outer div
        <div className="mt-5">
            {/* This div is for heading */}
            <div>
                <h2
                    className="px-2 text-[#2727d0] flex justify-center lg:justify-start text-2xl md:text-[55px] font-bold"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    Our Users Love Us
                </h2>
                <h2
                    className="px-2 text-2xl md:mt-4 flex justify-center lg:justify-start md:text-[55px] font-bold"
                    data-aos="fade-up"
                    data-aos-duration="000"
                >
                    For A Good Reason
                </h2>

                {/* This div is for review */}

                <div
                    className="bg-white flex flex-col mx-3  lg:mx-auto rounded-xl mt-5 lg:pl-5 py-16"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                >
                    <div className=" lg:flex flex-row lg:flex-col ">
                        <div className="lg:w-[65%] px-5 py-3 mx-auto text-center">
                            <img
                                src={data[activeIndex].picture} 
                                alt="image"
                                className="rounded-full object-cover lg:mx-0 h-[180px] w-[180px] sm:mx-auto "
                            />
                            <h3 className="font-bold text-2xl mt-2 sm:text-center lg:text-start">
                                {data[activeIndex].heading}
                            </h3>
                            <h5 className="font-semibold text-lg pt-2 sm:text-center lg:text-start">
                                {data[activeIndex].heading2}
                            </h5>
                            <p className="text-lg mt-4 text-gray-500 sm:text-center lg:text-start h-[100px]">
                                {data[activeIndex].paragraph}
                            </p>
                        </div>

                        <div className="flex justify-between flex-col text-center border-l-[2px] border-gray-200 mt-52 md:mt-0 ">
                            <div className="flex flex-col justify-center p-5">
                                <h1 className="font-bold text-[65px]">
                                    {data[activeIndex].Addition}
                                </h1>
                                <p className="mt-6 text-gray-500 text-lg">
                                    {data[activeIndex].addPara}
                                </p>
                                <h1 className="font-bold mt-4 text-[65px]">
                                    {data[activeIndex].percentage}
                                </h1>
                                <p className="mt-6 text-gray-500 text-lg">
                                    {data[activeIndex].perPara}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between md:justify-end hover:cursor-pointer px-2 w-[90%] "
                    >
                        <button
                            onClick={() => {
                                handleClickMinus(activeIndex);
                            }}
                            disabled={activeIndex === 0}
                            
                        >
                            <IoIosArrowBack
                                size={30}
                                className="bg-gray-300 p-1 rounded-full mx-1"
                            />
                        </button>

                        <button
                            onClick={() => {
                                handleClickPlus(activeIndex);
                            }}
                            disabled={activeIndex === 3}
                        >
                            <IoIosArrowForward
                                size={30}
                                className="bg-gray-300 p-1 rounded-full mx-1 "
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* This div is for three logo and etc */}

            <div className="md:flex justify-between items-center py-5 px-3">
                <p
                    className="text-2xl font-semibold text-center md:text-start py-3"
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                >
                    All the security you will ever need
                </p>
                <div className="md:flex justify-between  gap-x-2 px-3 ">
                    {/* First image */}
                    <img
                        src={img1}
                        alt="image"
                        className="w-[170px] md:w-[115px]  mx-auto py-3"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                    />

                    {/* Second image */}
                    <img
                        src={img2}
                        alt="image"
                        className="w-[170px] md:w-[115px]  mx-auto py-3"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                    />

                    {/* Third image */}
                    <img
                        src={img3}
                        alt="image"
                        className="w-[170px] md:w-[115px]  mx-auto py-3"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                    />
                </div>
            </div>
        </div>
    );
}
