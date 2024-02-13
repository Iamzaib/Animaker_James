import React from "react";
import video from "../../assets/img/Templates.mp4";

export default function Template() {
    return (
        // THis is the outer div of the template component
        <div className="mt-20 mx-3">
            {/* This div is for heading */}
            <div
                className="md:w-[50%] md:relative rounded-t-xl pt-12 md:pt-0 bg-white md:bg-transparent top-44 left-10"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
            >
                <h1 className="text-3xl font-bold px-4">
                    1000s of Unique Video Templates
                </h1>
                <p className="px-4 text-gray-400 text-lg">
                    Pick from 1000s of templates! Use them to create videos in
                    under 5 minutes!
                </p>
            </div>

            {/* This div is for video */}
            <div className="">
                <video
                    // controls

                    loop
                    autoPlay
                    muted
                    className=" rounded-xl mx-auto xl:w-[1150px]"
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
