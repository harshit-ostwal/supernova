import React from 'react'

function Banner() {
    return (
        <div className="flex flex-col relative items-center justify-center">
            <div className="polygon right-[14%] top-[14%] w-14 border-2 lg:w-40 bg-amber-200"></div>
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none">CODE.</h1>
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] text-orange-500 font-righteous leading-none">CREATE.</h1>
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none">CONQUER.</h1>
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none">SUPERNOVA</h1>
        </div>
    )
}

export default Banner