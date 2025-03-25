import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className="flex flex-col pt-20 items-center justify-center">
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none">CODE.</h1>
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] text-[#004aac] font-righteous leading-none">CREATE.</h1>
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none">CONQUER.</h1>
            <h1 className="text-[15vw] sm:text-[12vw] relative md:text-[10vw] lg:text-[8vw] leading-none">
                <Image
                    draggable={false}
                    src={"/Star.png"}
                    width={500}
                    className="object-contain absolute -bottom-40 -right-1/2 -z-10"
                    height={500}
                    alt="Logo"
                    quality={100}
                    fetchPriority="high"
                    loading="eager"
                />
                SUPERNOVA
            </h1>
        </div>
    )
}

export default Banner