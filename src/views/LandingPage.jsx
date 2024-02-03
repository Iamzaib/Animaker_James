import React from 'react'
import Header from '../components/header/Header'
import HeroSection from '../components/home/HeroSection'
import Awards from '../components/home/Awards'
import Template from '../components/home/Template'
import EditingTools from '../components/home/EditingTools';
import FaqSection from '../components/home/Faq'
import Reviews from '../components/home/Reviews'
import WhyAnimaker from '../components/home/WhyAnimaker'
import TopProductsSection from '../components/home/TopProductsSection'
import FirstVideo from '../components/home/FirstVideo'

export default function LandingPage() {
  return (
    <div className='bg-gradient-to-b from-[#2543ca] to-[#0a0f40]'>
      <HeroSection />

      {/* This div is for wrap the other component */}
      <div className='bg-zinc-200 py-10 rounded-[120px]'>
        <div className='lg:mx-36'>
          <Awards />
          <WhyAnimaker />
          <Template />
          <EditingTools />
          {/* <TopProductsSection /> */}
          <Reviews/>
          <FaqSection />
          <FirstVideo/>

          
        </div>
      </div>

    </div>
  )
}
