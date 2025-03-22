import React from 'react'
import Organiser from './components/organiser'
import Sponsors from './components/sponsors'
import Banner from './components/banner'
import Banner2 from './components/banner2'
import CountDown from './components/countdown'
import Participate from './components/participate'
import FAQ from './components/faq'
import Guideline from './components/guideline'
import About from './components/about'
import Tracks from './components/tracks'
import Timeline from './components/timeline'

function page() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden w-full">
      <div className="w-11/12 relative flex flex-col gap-20">
        <Banner />
        <button className="md:text-xl cursor-pointer text-lg lg:text-2xl bg-black w-fit mx-auto text-white px-10 py-4 font-semibold rounded-2xl">Register Now</button>
        <CountDown />
        <Banner2 />
        <Participate />
        <Guideline />
        {/* <Timeline /> */}
        <About />
        <Tracks />
         {/*<Sponsors />*/}
        <Organiser />
        <FAQ />
      </div>
    </div>
  )
}

export default page
