import Image from 'next/image'
import React from 'react'

function Organiser() {
    return (
        <div className="flex flex-col items-center mx-auto gap-20">
            <div className="flex flex-col items-center gap-6 text-center">
                <h1 className="text-[2.5rem] sm:text-[4rem] font-righteous font-semibold tracking-normal">Organizer <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Lead</span></h1>
                <div className="w-28 rounded-full h-1 bg-orange-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <span className="w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full overflow-hidden border-black">
                        <Image src="/moksha.jpeg" width={1600} height={1066} alt="Moksha Kohli" quality={100} fetchPriority="high" loading="eager" className="w-full h-full object-cover" draggable="false" />
                    </span>
                    <div className="flex flex-col items-center justify-center">
                        <h5 className="text-2xl font-bold">Moksha Kohli</h5>
                        <h5 className="text-lg font-mono">Organizer</h5>
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center">
                    <span className="w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full overflow-hidden border-black">
                        <Image src="/harshit.jpg" width={1600} height={1066} alt="Moksha Kohli" quality={100} fetchPriority="high" loading="eager" className="w-full h-full object-cover" draggable="false" />
                    </span>
                    <div className="flex flex-col items-center justify-center">
                        <h5 className="text-2xl font-bold">Harshit Jain</h5>
                        <h5 className="text-lg font-mono">Organizer</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organiser