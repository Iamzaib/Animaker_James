import React, { useState } from "react";
import image1 from "../../assets/img/Sliderimg1.png";
import image2 from "../../assets/img/Sliderimg2.png";
import image3 from "../../assets/img/Sliderimg3.png";
import image4 from "../../assets/img/Sliderimg4.png";
import image5 from "../../assets/img/Sliderimg5.png";
const SliderSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const labels = [
        "L&D Teams",
        "HR Teams",
        "Marketing & Sales",
        "Internal Comms",
        "Everyone Else",
    ];
    const images = [image1, image2, image3, image4, image5];

    const headings = [
        "L&D Course  Creators",
        "Human Resources",
        "Marketers & Sales Professionals",
        "Internal Communications",
        "Everyone Else",
    ];
    const descriptions = [
        "Create animated videos that enhances course engagement by simplifying complex concepts, and transforms courses into dynamic, visually compelling learning",
        "Make super appealing onboarding, orientation, and compliance videos in a jiffy! You don’t need to depend on professional video creators anymore.",
        "Make videos that make an impact both internally and externally. Create engaging video content to entice your followers and clients!",
        "Effective communication is essential for an empowering company culture. Guide your colleagues effectively with a well-crafted animated video!",
        "Be it a birthday wish, a wedding invite, or even a personal resume, Animaker has got you covered! Create anything you want, just the way you want!",
    ];
    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col w-full mx-auto h-fit px-2">
            {/* Heading Div */}
            <div className="flex flex-col mt-24 ">
                <h1
                    className="max-lg:text-center min-lg:text-left text-[33px] md:text-[55px]  bg-gradient-to-b from-[#3939D4] font-sans-serif to-[#8F3CEB] font-extrabold text-transparent bg-clip-text"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    Who is it for?
                </h1>
                <p
                    className="max-lg:text-center min-lg:text-left text-[#A7B2BF] lg:w-80 px-2 text-[21px] md:font-bold mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    World-class video creation tool for everyone
                </p>
            </div>
            {/* Selector Div */}
            <div className="inline-flex h-fit justify-center w-full  ">
                <ul className="flex justify-evenly border-2 border-b-[#797979] border-transparent cursor-pointer  overflow-auto">
                    {labels.map((label, index) => (
                        <h1
                            key={index}
                            className={`list-none font-bold text-[16px] md:text-[20px] text-[#0a0f4098] p-4 cursor-pointer ${
                                activeIndex === index
                                    ? "  border-4 border-b-[#0A0F40] text-[#0a0f40] font-bold border-transparent"
                                    : ""
                            }`}
                            onClick={() => handleItemClick(index)}
                        >
                            {label}
                        </h1>
                    ))}
                </ul>
            </div>
            {/* Images Div by Selector */}
            <div className=" flex md:flex-row flex-col w-full p-1  h-fit bg-white md:mt-32 mt-16 mx-auto rounded-3xl">
                <div className="md:relative flex  ">
                    {images.map((image, index) => (
                        <div
                            className="md:relative py-2 md:left-4 lg:left-2"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            {activeIndex === index ? (
                                <>
                                    <img
                                        src={image}
                                        className="w-[750px] px-2 object-fit"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    />
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </div>
                {/* Headings && Description Div */}
                <div className="flex flex-col h-full items-center md:pl-4 justify-center w-full md:mt-12 gap-4 ">
                    <div className="flex  justify-center  ">
                        {headings.map((heading, index) => (
                            <div key={index}>
                                {activeIndex === index ? (
                                    <>
                                        <h2
                                            className="font-bold  text-[25px]  text-[#0a0f40] p-1 lg:py-4 lg:px-6"
                                            data-aos="fade-up"
                                            data-aos-duration="2000"
                                        >
                                            {heading}
                                        </h2>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    </div>
                    <ul className="flex justify-center ">
                        {descriptions.map((description, index) => (
                            <li key={index}>
                                {activeIndex === index ? (
                                    <>
                                        <p
                                            className="font-normal flex justify-center items-center px-3 md:px-0 text-[24px] mx-auto text-[#0a0f40d8] md:w-96 "
                                            data-aos="fade-up"
                                            data-aos-duration="2000"
                                        >
                                            {description}
                                        </p>
                                    </>
                                ) : (
                                    ""
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SliderSection;
