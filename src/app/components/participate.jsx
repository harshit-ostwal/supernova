import Image from 'next/image'
import React from 'react'

function Participate() {
    return (
        <div className="flex flex-col gap-20 py-20 items-center text-center justify-center">
            <h1 className="text-[2.5rem] sm:text-[4rem] font-figtree font-semibold tracking-normal">Why Participate in <span className="decoration-amber-500 decoration-[5px] underline underline-offset-8">Supernova</span>?</h1>
            <Image src="/participate.svg" width={537} height={774} alt="Participate" quality={100} fetchPriority="high" loading="eager" className="w-auto md:h-screen" draggable="false" />
        </div>
    )
}

export default Participate