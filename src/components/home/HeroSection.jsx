import React,{useState,useEffect} from "react";
import Image from '../../assets/img/HomepageOG.png'
import Image2 from '../../assets/img/GDPR.png'
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Image, Image2, Image];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        console.log('Current Index:', prevIndex); // Add this line
        return (prevIndex + 1) % 3; // Adjust based on the number of slides
      });
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);

  const transformValue = `translate-x-${currentIndex * 100}`;
  return (
    <div className="md:pt-32 pt-14 pb-20 md:pb-[200px] bg-gradient-to-b from-[#2F37CC] to-[#5925C3]  flex justify-center">
      <div className="flex flex-col w-[90%]  items-center justify-between">
        <div className="flex flex-col justify-center items-center font-sans gap-4 mx-auto">
          <h1 className="  text-center   text-[42px] md:text-[60px] font-extrabold text-white mb-[5px] text-balance">
            The Future of <br className=" hidden md:block" />
            Video Making Starts Here. 
          </h1>
          <p className="text-center font-medium text-[18px] text-white text-balance mb-6 ">
            A breakthrough AI-Powered platform to create Animation and Live-Action videos for non-designers & professionals from early-stage startups to seasoned Fortune 500 companies.
          </p>

          {/* <button className="h-[58px]  sm:w-[314px] w-[200px] text-white font-bold sm:text-[25px] text-[15px] border-4 rounded-full border-purple-400 border-r-[#6944f0] border-l-[#ec49bb] to-90% text-center">Create for Free</button> */}
          <button class="border-2 h-[58px] hero-btn sm:w-[314px] w-[200px] text-white font-bold sm:text-[25px] text-[15px]  border-gradient-purple-pink  bg-[#5925C3]  px-4 py-2 mt-4 transition-all duration-300">
            Create for free
          </button>



        </div>
        <div className="inline-flex h-[100px] justify-center gap-4"> {/* Set the height to 100px */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[30px] font-bold text-white">20,000,000+</h1>
            <h2 className="text-center font-bold text-white p-2 text-[14px] ">USERS</h2>
          </div>
          <div id="slider" className="overflow-hidden rounded-lg">
  <div className={`flex transition-transform ease-in-out duration-500 transform ${transformValue}`}>
    {/* Slide 1 */}
    {/* <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-64 object-cover" /> */}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;