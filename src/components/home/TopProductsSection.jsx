import React from "react";
import image from "../../assets/img/GraphicAnimaker.png";
import image2 from "../../assets/img/GraphicVmaker.png";
import image3 from "../../assets/img/topimg3.png";
import image4 from "../../assets/img/topimg4.png";
import image5 from "../../assets/img/topimg5.png";
import image6 from "../../assets/img/topimg6.png";
import image7 from "../../assets/img/topimg7.png";
import image8 from "../../assets/img/topimg8.png";
import logo from "../../assets/img/animaker-logo.png";
import { IoIosArrowDropright } from "react-icons/io";
const TopProductsSection = () => {
    return (
        <div className="flex flex-col w-full mx-auto mt-20">
            {/* Heading Div */}
            <div className="flex flex-col">
                <h1 className="mx-20 text-[55px] md:w-[600px] font-bold text-[#0A0F40] ">
                    Top-notch Products for{" "}
                    <span className="bg-gradient-to-r from-[#3939D4] to-[#8F3CEB] text-transparent bg-clip-text">
                        {" "}
                        Top-notch Creators
                    </span>
                </h1>
                <p className="mx-20 flex justify-center md:justify-start text-[#A7B2BF] md:w-[550px] text-[22px] text-start md:font-bold mt-2">
                    Dive deep into Animaker’s ecosystem of Products designed for
                    every type of creator
                </p>
            </div>

            {/* Images Outer-Div */}
            <div className="flex  flex-row flex-wrap justify-center mx-auto gap-2  ">
                {/* Text Overlay */}
                <div className=" cursor-pointer">
                  
                    {/* Image */}
                    <div class="relative">
                    <img
                        src={image}
                        className=" rounded-xl xl:max-w-[800px] w-fit hover:scale-105  h-auto "
                        alt="Animaker Image"
                    />
  

  {/* <!-- Overlay Container --> */}
  <div class="absolute   top-[-35px] left-0  w-fit h-full flex items-center ml-6 sm:ml-14 md:ml-24   justify-center">
    
    {/* <!-- Content Container  */}
    <div class="text-black text-center">
      
      {/* <!-- Responsive Text --> */}
      <img src={logo} alt="Your Image" class="  w-20 md:w-40 lg:w-60 mt-4" />
      <p className="font-semibold text-[8px] sm:text-[15px] md:text-[15px] text-black text-left  ">
                            Record screen, webcam,
                            <br  /> or both with
                            audio to create <br />{" "}
                            engaging video content
                        </p>
      
      {/* <!-- Responsive Image --> */}
    
    </div>
  </div>
</div>

                </div>
                {/* Image 2 Div */}
                <div className=" cursor-pointer">
                  
                    {/* Image */}
                    <div class="relative">
                    <img
                        src={image2}
                        className=" rounded-xl xl:max-w-[350px] w-fit hover:scale-105  h-auto "
                        alt="Animaker Image"
                    />
  

  {/* <!-- Overlay Container --> */}
  <div class="absolute   top-0 left-0  w-full h-full flex   item-center justify-center ">
    
    {/* <!-- Content Container  */}
    <div class="text-black text-center flex flex-col item-center">
      
      {/* <!-- Responsive Text --> */}
      <img src={logo} alt="Your Image" class="   mt-4" />
      <p className="font-semibold text-[12px] sm:text-[15px] md:text-[15px] text-black text-center  ">
                            Record screen, webcam,
                            <br className=" hidden lg:block" /> or both with
                            audio to create <br />{" "}
                            engaging video content
                        </p>
      
      {/* <!-- Responsive Image --> */}
    
    </div>
  </div>
</div>

                </div>
                {/* Image 3 Div */}
                <div className=" cursor-pointer">
                  
                    {/* Image */}
                    <div class="relative">
                    <img
                        src={image2}
                        className=" rounded-xl xl:max-w-[350px] w-fit hover:scale-105  h-auto "
                        alt="Animaker Image"
                    />
  

  {/* <!-- Overlay Container --> */}
  <div class="absolute   top-0 left-0  w-full h-full flex   item-center justify-center ">
    
    {/* <!-- Content Container  */}
    <div class="text-black text-center flex flex-col item-center">
      
      {/* <!-- Responsive Text --> */}
      <img src={logo} alt="Your Image" class="   mt-4" />
      <p className="font-semibold text-[12px] sm:text-[15px] md:text-[15px] text-black text-center  ">
                            Record screen, webcam,
                            <br className=" hidden lg:block" /> or both with
                            audio to create <br />{" "}
                            engaging video content
                        </p>
      
      {/* <!-- Responsive Image --> */}
    
    </div>
  </div>
</div>

                </div>
                {/* Image 4 Div */}
                <div className=" cursor-pointer">
                  
                    {/* Image */}
                    <div class="relative">
                    <img
                        src={image2}
                        className=" rounded-xl xl:max-w-[350px] w-fit hover:scale-105  h-auto "
                        alt="Animaker Image"
                    />
  

  {/* <!-- Overlay Container --> */}
  <div class="absolute   top-0 left-0  w-full h-full flex   item-center justify-center ">
    
    {/* <!-- Content Container  */}
    <div class="text-black text-center flex flex-col item-center">
      
      {/* <!-- Responsive Text --> */}
      <img src={logo} alt="Your Image" class="   mt-4" />
      <p className="font-semibold text-[12px] sm:text-[15px] md:text-[15px] text-black text-center  ">
                            Record screen, webcam,
                            <br className=" hidden lg:block" /> or both with
                            audio to create <br />{" "}
                            engaging video content
                        </p>
      
      {/* <!-- Responsive Image --> */}
    
    </div>
  </div>
</div>

                </div>
                {/* Image 5 Div */}
                <div className=" cursor-pointer">
                  
                    {/* Image */}
                    <div class="relative">
                    <img
                        src={image2}
                        className=" rounded-xl xl:max-w-[350px] w-fit hover:scale-105  h-auto "
                        alt="Animaker Image"
                    />
  

  {/* <!-- Overlay Container --> */}
  <div class="absolute   top-0 left-0  w-full h-full flex   item-center justify-center ">
    
    {/* <!-- Content Container  */}
    <div class="text-black text-center flex flex-col item-center">
      
      {/* <!-- Responsive Text --> */}
      <img src={logo} alt="Your Image" class="   mt-4" />
      <p className="font-semibold text-[12px] sm:text-[15px] md:text-[15px] text-black text-center  ">
                            Record screen, webcam,
                            <br className=" hidden lg:block" /> or both with
                            audio to create <br />{" "}
                            engaging video content
                        </p>
      
      {/* <!-- Responsive Image --> */}
    
    </div>
  </div>
</div>

                </div>
                {/* Image 6 Div */}
                <div className=" cursor-pointer">
                  
                    {/* Image */}
                    <div class="relative">
                    <img
                        src={image2}
                        className=" rounded-xl xl:max-w-[350px] w-fit hover:scale-105  h-auto "
                        alt="Animaker Image"
                    />
  

  {/* <!-- Overlay Container --> */}
  <div class="absolute   top-0 left-0  w-full h-full flex   item-center justify-center ">
    
    {/* <!-- Content Container  */}
    <div class="text-black text-center flex flex-col item-center">
      
      {/* <!-- Responsive Text --> */}
      <img src={logo} alt="Your Image" class="   mt-4" />
      <p className="font-semibold text-[12px] sm:text-[15px] md:text-[15px] text-black text-center  ">
                            Record screen, webcam,
                            <br className=" hidden lg:block" /> or both with
                            audio to create <br />{" "}
                            engaging video content
                        </p>
      
      {/* <!-- Responsive Image --> */}
    
    </div>
  </div>
</div>

                </div>
                {/* Image 7 Div */}
                <div className=" cursor-pointer">
                  
                  {/* Image */}
                  <div class="relative">
                  <img
                      src={image2}
                      className=" rounded-xl lg:max-w-[350px] w-fit hover:scale-105  h-auto "
                      alt="Animaker Image"
                  />


{/* <!-- Overlay Container --> */}
<div class="absolute   top-0 left-0  w-full h-full flex   item-center justify-center ">
  
  {/* <!-- Content Container  */}
  <div class="text-black text-center flex flex-col item-center">
    
    {/* <!-- Responsive Text --> */}
    <img src={logo} alt="Your Image" class="   mt-4" />
    <p className="font-semibold text-[12px] sm:text-[15px] md:text-[15px] text-black text-center  ">
                          Record screen, webcam,
                          <br className=" hidden lg:block" /> or both with
                          audio to create <br />{" "}
                          engaging video content
                      </p>
    
    {/* <!-- Responsive Image --> */}
  
  </div>
</div>
</div>

              </div>
                {/* Image 8 Div */}
                <div className=" cursor-pointer">
                  
                    {/* Image */}
                    <div class="relative">
                    <img
                        src={image2}
                        className=" rounded-xl xl:max-w-[350px] w-fit hover:scale-105  h-auto "
                        alt="Animaker Image"
                    />

  {/* <!-- Overlay Container --> */}
  <div class="absolute   top-0 left-0  w-full h-full flex   item-center justify-center ">
    
    {/* <!-- Content Container  */}
    <div class="text-black text-center flex flex-col item-center">
      
      {/* <!-- Responsive Text --> */}
      <img src={logo} alt="Your Image" class="   mt-4" />
      <p className="font-semibold text-[12px] sm:text-[15px] md:text-[15px] text-black text-center  ">
                            Record screen, webcam,
                            <br className=" hidden lg:block" /> or both with
                            audio to create <br />{" "}
                            engaging video content
                        </p>
      {/* <!-- Responsive Image --> */}
    
    </div>
  </div>
</div>

                </div>
            </div>
        </div>
    );
};

export default TopProductsSection;
