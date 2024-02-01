import React from 'react'
import Header from '../components/header/Header'
import HeroSection from '../components/home/HeroSection'
import Awards from '../components/home/Awards'
import Template from '../components/home/Template'
import EditingTools from '../components/home/EditingTools';
import FaqSection from '../components/home/Faq'
import Reviews from '../components/home/Reviews'
import FirstVideo from '../components/home/FirstVideo'
import WhyAnimaker from '../components/home/WhyAnimaker'
import TopProductsSection from '../components/home/TopProductsSection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      {/* This div is for wrap the other component */}
      <div className='bg-zinc-200'>
        <div className='lg:mx-36'>
          <Awards />
          <WhyAnimaker />
          <Template />
          <EditingTools />
          <Reviews/>
          <FaqSection />
          <FirstVideo/>
          
          <EditingTools/>
          <TopProductsSection />

        </div>

      </div>

    </>
  )
}
