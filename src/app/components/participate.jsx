import Image from 'next/image'
import React from 'react'

function Participate() {
    return (
        <div className="flex flex-col gap-20 items-center text-center justify-center">
            <div className="flex flex-col items-center text-center gap-6">
                <h1 className="text-[2.5rem] sm:text-[4rem] leano font-righteous font-semibold tracking-normal">Why Participate In <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Supernova</span></h1>
                <div className="w-28 rounded-full h-1 bg-orange-500" />
            </div>
            <Image src="/participate.svg" width={537} height={774} alt="Participate" quality={100} fetchPriority="high" loading="eager" className="w-auto md:h-screen" draggable="false" />
        </div>
    )
}

export default Participate