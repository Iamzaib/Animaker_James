import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/home/HeroSection";
import Awards from "../components/home/Awards";
import Template from "../components/home/Template";
import EditingTools from "../components/home/EditingTools";
import FaqSection from "../components/home/Faq";
import Reviews from "../components/home/Reviews";
import WhyAnimaker from "../components/home/WhyAnimaker";
import TopProductsSection from "../components/home/TopProductsSection";
import FirstVideo from "../components/home/FirstVideo";
import SliderSection from "../components/home/SliderSection";

export default function LandingPage() {
    return (
        <div className="bg-gradient-to-b from-[#7b22e8] to-[#0a0f40]">
            <HeroSection />

            {/* This div is for wrap the other component */}
            <div className="bg-zinc-200 py-2 lg:py-10 lg:rounded-[120px]">
                <div className="lg:mx-36 xl:mx-44 2xl:mx-64">
                    <Awards />
                    <WhyAnimaker />
                    <Template />
                    <EditingTools />
                    <SliderSection />
                    <TopProductsSection />
                    <Reviews />
                    <FaqSection />
                    <FirstVideo />
                </div>
            </div>
        </div>
    );
}
