import React from "react";
const HeroSection = () => {
  return (
    <div className="pt-20 pb-20 md:pb-[300px] bg-gradient-to-b from-[#2F37CC] to-[#5925C3]  w-[100%] flex justify-center">
      <div className="flex flex-col w-[95%]  items-center justify-between">
        <div className="flex flex-col lg:w-full sm:w-[80%] justify-center items-center font-sans gap-4">
          <h1 className="w-fit text-center h-fit text-[40px] md:text-[60px] font-extrabold text-white mb-[16px]">
            The Future of <br />
            Video Making Starts Here. 
          </h1>
          <p className="text-center font-semibold text-[18px] text-white w-[80%]">
            A breakthrough AI-Powered platform to create Animation and Live-Action videos for non-designers & professionals from early-stage startups to seasoned Fortune 500 companies.
          </p>
          <a href="">
            <button className="h-[58px]  sm:w-[314px] w-[200px] text-white font-bold sm:text-[25px] text-[15px] border-4 rounded-full border-[#FF7DAC] border-r-[#FCB654] border-l-[#FCB654] to-90% text-center">Create for Free</button>
          </a>
        </div>
        <div className="inline-flex h-[100px] justify-center gap-4"> {/* Set the height to 100px */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[30px] font-bold text-white">20,000,000+</h1>
            <h2 className="text-center font-bold text-white p-2 text-[14px] tracking-wide">USERS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;