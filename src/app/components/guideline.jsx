import { PerksData } from '@/constants/perks';
import React from 'react'

function Guideline() {
    return (
        <div className="flex flex-col gap-20 py-20 items-center justify-center w-full">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-[2.5rem] sm:text-[4rem] leano font-righteous font-semibold tracking-normal">Guidelines For <span className="text-amber-500">Supernova</span></h1>
                <div className="w-28 rounded-full h-1 bg-amber-500" />
            </div>
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-20 xl:gap-x-28 lg:gap-x-16 gap-x-4 py-8 md:py-16 xl:px-28 lg:px-16 px-4 monitor:place-items-center">
                {PerksData.map((data, index) => (
                    <div className="flex gap-6 items-center" key={index}>
                        <span className="text-white p-4 rounded-md" style={{ backgroundColor: data.bgColor }}>
                            {data.Icon}
                        </span>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-4xl font-bold">{data.title}</h3>
                            <h4 className="text-xl text-black/70">{data.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Guideline;