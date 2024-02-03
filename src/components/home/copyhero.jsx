// import React, { useState, useEffect } from "react";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import HorizontalSlider from "react-horizontal-slider";
// import 'react-horizontal-slider/styles.css'; // Import the styles
// import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../../assets/img/ISO.webp';
// import img2 from '../../assets/img/demo.png';
// import img3 from '../../assets/img/GDPR.png';
// const HeroSection = () => {

//   const images = [img1, img2, img3]; 

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="md:pt-32 pt-14 pb-20 md:pb-[200px] bg-gradient-to-b from-[#2F37CC] to-[#5925C3]  flex justify-center">
//       <div className="flex flex-col w-[90%]  items-center justify-between">
//         <div className="flex flex-col justify-center items-center font-sans gap-4 mx-auto">
//           <h1 className="  text-center   text-[42px] md:text-[60px] font-extrabold text-white mb-[5px] text-balance">
//             The Future of <br className=" hidden md:block" />
//             Video Making Starts Here.
//           </h1>
//           <p className="text-center font-medium text-[18px] text-white text-balance mb-6 ">
//             A breakthrough AI-Powered platform to create Animation and Live-Action videos for non-designers & professionals from early-stage startups to seasoned Fortune 500 companies.
//           </p>


//           <div className="gradient-border mt-5">
//             <button className="inner-button bg-[#482dc7] font-bold text-white text-[26px]">Create for free</button>
//           </div>



//         </div>
//         {/* <div className="inline-flex h-[100px] justify-center gap-4"> 
//           <div className="flex flex-col justify-center">
//             <h1 className="text-[30px] font-bold text-white">20,000,000+</h1>
//             <h2 className="text-center font-bold text-white p-2 text-[14px] ">USERS</h2>
//           </div>
//           <div id="slider" className="overflow-hidden rounded-lg">
//             <div className={`flex transition-transform ease-in-out duration-500 transform ${transformValue}`}>
//                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-64 object-cover" /> 
//             </div>
//           </div>
//         </div> */}

//         {/* This div is for slider */}
//         <div className="flex">

//           <div>
//             <p>20,000,000+</p>
//             <p>Users</p>
//           </div>

//           {/* this div is for image slider */}
//           {/* <div>
//           <Slider {...settings}>
//           {images.map((image, index) => (
//             <div key={index}>
//               <img src={image} alt={`Slide ${index + 1}`} />
//             </div>
//           ))} */}
//         {/* </Slider>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HeroSection;