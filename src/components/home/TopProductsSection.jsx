    import React from "react";
    import image from "../../assets/img/GraphicAnimaker.png";
    import image2 from "../../assets/img/GraphicVmaker.png";
    import image3 from "../../assets/img/topimg3.png";
    import image4 from "../../assets/img/topImg4.png";
    import image5 from "../../assets/img/topImg5.png";
    import image6 from "../../assets/img/topimg6.png";
    import image7 from "../../assets/img/topimg7.png";
    import image8 from "../../assets/img/topimg8.png";
    import logo from "../../assets/img/animaker-logo.png";
    import { IoIosArrowDropright } from "react-icons/io";

    export default function TopProductsSection() {
        const data = [
            {
                id: 1,
                picture: image2,
                text: "Dive deep into Animakers ecosystem of Products designed for every type of creator",
            },
            {
                id: 1,
                icon: <IoIosArrowDropright size={30} />,
                picture: image3,
                text: "Dive deep into Animakers ecosystem of Products designed for every type of creator",
            },
            {
                id: 2,
                icon: <IoIosArrowDropright size={30} />,
                picture: image4,
                text: "Dive deep into Animakers ecosystem of Products designed for every type of creator",
            },
            {
                id: 3,
                icon: <IoIosArrowDropright size={30} />,
                picture: image5,
                text: "Dive deep into Animakers ecosystem of Products designed for every type of creator",
            },
            {
                id: 4,
                icon: <IoIosArrowDropright size={30} />,
                picture: image6,
                text: "Dive deep into Animakers ecosystem of Products designed for every type of creator",
            },
            {
                id: 5,
                icon: <IoIosArrowDropright size={30} />,
                picture: image7,
                text: "Dive deep into Animakers ecosystem of Products designed for every type of creator",
            },
            {
                id: 6,
                icon: <IoIosArrowDropright size={30} />,
                picture: image8,
                text: "Dive deep into Animakers ecosystem of Products designed for every type of creator",
            },
        ];
        return (
            // This is the outer div
            <div className="mt-20 px-1">
                <div className="w-full lg:w-[75%] text-center md:-mb-32">
                    <h1
                        className=" flex justify-center px-3 md:px-0 lg:justify-start text-[38px] text-center md:text-left md:text-[55px] font-bold"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                    >
                        Top-notch Products
                    </h1>
                    <h1
                        className="font-bold px-3 md:px-0 text-[389px] text-center md:text-left md:text-[50px]"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                    >
                        <span className='className=" flex justify-center lg:justify-start text-[33px] md:text-[55px] bg-gradient-to-r from-[#3939D4] to-[#8F3CEB] font-bold text-transparent bg-clip-text'>
                            for top notch Creators
                        </span>
                    </h1>

                    <p
                        className="font-bold text-[20px] px-3 md:px-0 text-gray-400 xs:text-center lg:text-left xl:text-left pt-3"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                    >
                        Dive deep into Animakers ecosystem of Products designed for
                        every type of creator
                    </p>
                </div>
                <div>
                    {/* This div is for the first row */}
                    <div
                        className="w-[100%]  md:flex justify-between items-center xl:ml-3"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                    >
                        <div className="lg:w-[60%] hover:scale-105 duration-200 hover:cursor-pointer">
                            <div className="relative flex justify-between items-center sm:top-[140px] md:top-[150px] lg:top-[220px] pb-2 mx-4 lg:pl-12 lg:pr-14">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="w-[130px] relative top-3 xl:mt-4"
                                />
                                <IoIosArrowDropright
                                    size={30}
                                    className="mt-3 mr-3"
                                />
                            </div>
                            <p className="relative py-2 sm:top-[150px] sm:w-[300px] md:top-[200px] lg:top-[230px] md:w-[300px] lg:w-[220px] px-4 lg:ml-5">
                                Breakthrough AI-powered plateform to create
                                studio-quality animation and live videos
                            </p>
                            <img src={image} alt="" />
                        </div>

                        <div
                            className="lg:max-w-[40%] max-h-[25%] relative -mt-24 pt-4 lg:pt-0 hover:scale-105 duration-200 hover:cursor-pointer sm:mt-4 md:mt-1 lg:mt-24 "
                            data-aos="zoom-in-up"
                            data-aos-duration="2000"
                        >
                            <p className="relative top-36 w-[80%] xl:w-[70%] mx-auto text-white font-semibold text-[19px]">
                                Record screen, webcam, or both with audio to create
                                engaging video content
                            </p>
                            <img
                                src={image2}
                                alt=""
                                className="lg:w-[330px] lg:h-[290px] mx-auto "
                            />
                        </div>
                    </div>
                </div>
                {/* THis div is for the map function */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mt-8">
                    {data.slice(1).map((item) => (
                        <div
                            key={item.id}
                            className="cursor-pointer mx-auto"
                            data-aos="zoom-in-up"
                            data-aos-duration="2000"
                        >
                            <div className="relative hover:scale-95 duration-200">
                                <span className="flex relative justify-end top-12 pr-8 z-10 text-white rounded-full">
                                    {item.icon}
                                </span>
                                <img
                                    src={item.picture}
                                    className="rounded-xl xl:max-w-[280px] 2xl:max-w-[320px] w-fit h-auto"
                                    alt={`Animaker Image ${item.id}`}
                                    data-aos="zoom-in-up"
                                    data-aos-duration="2000"
                                />

                                <div className="absolute  w-full h-full flex ">
                                    <p className="relative bottom-28 px-3 lg:px-0 font-semibold text-[12px] sm:text-[15px] md:text-[15px] text-black ">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
