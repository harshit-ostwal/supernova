import React from 'react'

function Organiser() {
    return (
        <div className="flex flex-col items-center mx-auto gap-20 py-20">
            <div className="flex flex-col items-center gap-10 text-center">
                <h1 className="text-[2.5rem] sm:text-[4rem] font-righteous font-semibold tracking-normal">Organizer <span className="text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Lead</span></h1>
                <div className="w-28 rounded-full h-1 bg-amber-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <span className="w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full border-black">

                    </span>
                    <div className="flex flex-col items-center justify-center">
                        <h5 className="text-2xl font-bold">Harshit Jain</h5>
                        <h5 className="text-lg font-mono">Organizer</h5>
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center">
                    <span className="w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full border-black">

                    </span>
                    <div className="flex flex-col items-center justify-center">
                        <h5 className="text-2xl font-bold">Harshit Jain</h5>
                        <h5 className="text-lg font-mono">Organizer</h5>
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center">
                    <span className="w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full border-black">

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