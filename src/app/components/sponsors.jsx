import { SponsorsData } from '@/constants/sponsors'
import Image from 'next/image'
import React from 'react'

function Sponsors() {

    return (
        <div className="flex flex-col items-center mx-auto gap-20 relative">
            {/* Blurred gradient background */}
            <div className="absolute -z-20 w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="flex flex-col items-center gap-6 text-center">
                <h1 className="text-[2.5rem] sm:text-[4rem] font-righteous font-semibold tracking-normal">Hackathon <span className="text-[#004aac] drop-shadow-[0_0_15px_#004aac]">Past Sponsors</span></h1>
                <div className="w-28 rounded-full h-1 bg-orange-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
                {SponsorsData.map((data, index) => (
                    <div key={index} className="w-40 lg:w-60 lg:h-40 h-20 flex justify-center items-center">
                        <Image
                            draggable={false}
                            src={data.src}
                            className={`${data.invert ? "invert" : "invert-0"} object-contain`}
                            width={320}
                            height={320}
                            alt={data.title}
                            quality={100}
                            fetchPriority="high"
                            loading="eager"
                        />
                    </div>
                ))}
            </div>
            <button className="bg-orange-500 text-2xl text-white px-5 py-2 font-mono font-bold rounded">Sponsor Us</button>
        </div>
    )
}

export default Sponsors