import React from 'react'
import Organiser from './components/organiser'
import Sponsors from './components/sponsors'
import Banner from './components/banner'
import Banner2 from './components/banner2'
import CountDown from './components/countdown'
import Participate from './components/participate'
import FAQ from './components/faq'
import Guideline from './components/guideline'

function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 overflow-hidden w-full">
      <div className="w-11/12 relative flex flex-col gap-20">
        <Banner />
        <div className="loader left-0 h-40 lg:h-60"></div>
        {/* <Banner2 /> */}
        <Participate />
        <Guideline />
        <CountDown />
        <Sponsors />
        <div className="loader right-0"></div>
        <Organiser />
        <FAQ />
      </div>
    </div>
  )
}

export default page