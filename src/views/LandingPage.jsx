import React from 'react'
import Header from '../components/header/Header'
import HeroSection from '../components/home/HeroSection'
import Awards from '../components/home/Awards'
import Template from '../components/home/Template'
import EditingTools from '../components/home/EditingTools';

export default function LandingPage() {
  return (
    <>
      <HeroSection />

      {/* This div is for wrap the other component */}
      <div className='bg-zinc-200'>
        <div className='lg:mx-36'> 
          <Awards />
          <Template />
          <EditingTools/>

        </div>

      </div>

    </>
  )
}
