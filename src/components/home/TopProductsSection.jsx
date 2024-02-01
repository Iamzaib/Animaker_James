import React from "react";
import image from "../../assets/img/GraphicAnimaker.png";
import image2 from "../../assets/img/GraphicVmaker.png";
const TopProductsSection = () => {
    return (
        <div className=" flex flex-col w-full mx-auto h-fit mt-20 ">
            {/* Heading Div */}
            <div className=" flex flex-col   ">
                <h1 className=" mx-20 text-[55px] md:w-[600px] font-bold text-[#0A0F40] ">
                    Top-notch Products for{" "}
                    <span className=" bg-gradient-to-r from-[#3939D4] to-[#8F3CEB]  text-transparent bg-clip-text">
                        {" "}
                        Top-notch Creators
                    </span>
                </h1>
                <p className=" mx-20  flex justify-center md:justify-start text-[#A7B2BF] md:w-[550px] text-[22px] text-start md:font-bold mt-2">
                    Dive deep into Animaker’s ecosystem of Products designed for
                    every type of creator
                </p>
            </div>
            {/* Images Outer-Div */}
            <div className="  flex mx-auto ">
                <div className="flex lg:flex-row flex-col  items-center mx-auto w-full">
                    <img
                        src={image}
                        width="800"
                        height="auto"
                        className=" mx-auto rounded-xl"
                    />
                    <img
                        src={image2}
                        width="400"
                        className=" mx-auto rounded-xl"
                        height="auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopProductsSection;
