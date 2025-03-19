import React from 'react'

function Sponsors() {
    return (
        <div className="flex flex-col items-center mx-auto gap-20 py-20">
            <div className="flex flex-col items-center">
                <h1 className="text-[2.5rem] sm:text-[4rem] font-righteous font-semibold tracking-normal">Hackathon <span className="text-amber-500">Past Sponsors</span></h1>
                <div className="w-28 rounded-full h-1 bg-amber-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

            </div>
            <button className="bg-orange-500 text-2xl text-white p-3 font-bold rounded">Sponsor Us</button>
        </div>
    )
}

export default Sponsors