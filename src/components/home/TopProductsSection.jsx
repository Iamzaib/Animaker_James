import React from 'react';
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

export default function TopProductsSection() {
  const data = [
    {
      id: 1,
      picture: image2,
      text: "Dive deep into Animakers ecosystem of Products designed for every type of creator"
    },
    {
      id: 1,
      icon: <IoIosArrowDropright />,
      picture: image3,
      text: "Dive deep into Animakers ecosystem of Products designed for every type of creator"
    },
    {
      id: 2,
      icon: <IoIosArrowDropright />,
      picture: image4,
      text: "Dive deep into Animakers ecosystem of Products designed for every type of creator"
    },
    {
      id: 3,
      icon: <IoIosArrowDropright />,
      picture: image5,
      text: "Dive deep into Animakers ecosystem of Products designed for every type of creator"
    },
    {
      id: 4,
      icon: <IoIosArrowDropright />,
      picture: image6,
      text: "Dive deep into Animakers ecosystem of Products designed for every type of creator"
    },
    {
      id: 5,
      icon: <IoIosArrowDropright />,
      picture: image7,
      text: "Dive deep into Animakers ecosystem of Products designed for every type of creator"
    },
    {
      id: 6,
      icon: <IoIosArrowDropright />,
      picture: image8,
      text: "Dive deep into Animakers ecosystem of Products designed for every type of creator"
    },
  ]
  return (
    // This is the outer dvi
    <div className='mt-20 px-1'>
      <div className='w-full md:w-[65%]lg:w-[55%] mx-auto' >
        <h1 className='font-bold text-[30px] md:text-[50px]' data-aos="zoom-in-up" data-aos-duration="2000">Top-notch Products</h1>
        <h1 className='font-bold text-[30px] md:text-[50px]' data-aos="zoom-in-up" data-aos-duration="2000">for <span className='text-[#2727d0]'>top notch Creaters</span> </h1>
        <p className='font-bold text-[20px] text-gray-400' data-aos="zoom-in-up" data-aos-duration="2000">Dive deep into Animakers ecosystem
          of Products designed for every type of creator</p>
      </div>
      <div>
        {/* This div is for the first row */}
        <div className='w-[100%]  md:flex justify-between items-center' data-aos="zoom-in-up" data-aos-duration="2000">
          <div className='lg:w-[60%] hover:scale-105 duration-200 hover:cursor-pointer'>
            <div className='relative flex justify-between items-center sm:top-[140px] md:top-[150px] lg:top-[210px] pb-2 mx-4 lg:pl-12 lg:pr-14'>
              <img src={logo} alt="logo" className='w-[130px]' />
              < IoIosArrowDropright size={30} className='' />
            </div>
            <p className='relative py-2 sm:top-[150px] sm:w-[300px] md:top-[200px] lg:top-[230px] md:w-[300px] lg:w-[220px] px-4 lg:ml-5'>Breakthrough AI-powered plateform to create studio-quality animation and live videos</p>
            <img src={image} alt="" />
          </div>

          <div className='lg:w-[40%] hover:scale-105 duration-200 hover:cursor-pointer sm:mt-4 md:mt-1 lg:mt-24 ' data-aos="zoom-in-up" data-aos-duration="2000">
            <p className='relative px-4 top-36 w-[80%] mx-auto text-white font-semibold text-[19px]'>Record screen, webcam, or both with audio to create engaging video content</p>
            <img src={image2} alt="" className='lg:w-[330px] lg:h-[290px] mx-auto ' />
          </div>
        </div>
      </div>
      {/* THis div is for the map function */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mt-8">
        {data.slice(1).map((item) => (
          <div key={item.id} className="cursor-pointer mx-auto" data-aos="zoom-in-up" data-aos-duration="2000">
            <div className="relative hover:scale-95 duration-200">
              <img
                src={item.picture}
                className="rounded-xl xl:max-w-[350px] w-fit h-auto"
                alt={`Animaker Image ${item.id}`}
                data-aos="zoom-in-up" data-aos-duration="2000"
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
  )
}
