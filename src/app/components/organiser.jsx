import React from 'react'

function Organiser() {
    return (
        <div className="flex flex-col items-center mx-auto gap-20 py-20">
            <div className="flex flex-col items-center">
                <h1 className="text-[2.5rem] sm:text-[4rem] font-righteous font-semibold tracking-normal">Organizer <span className="text-amber-500">Lead</span></h1>
                <div className="w-28 rounded-full h-1 bg-amber-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <span className="w-40 h-40 bg-black rounded-full border-black">

                    </span>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h5 className="text-2xl">Harshit Jain</h5>
                        <h5 className="text-lg">Organizer</h5>
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center">
                    <span className="w-40 h-40 bg-black rounded-full border-black">

                    </span>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h5 className="text-2xl">Harshit Jain</h5>
                        <h5 className="text-lg">Organizer</h5>
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center">
                    <span className="w-40 h-40 bg-black rounded-full border-black">

                    </span>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h5 className="text-2xl">Harshit Jain</h5>
                        <h5 className="text-lg">Organizer</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organiser