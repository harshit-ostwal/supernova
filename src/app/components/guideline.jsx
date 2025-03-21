import { PerksData } from '@/constants/perks';
import React from 'react'

function Guideline() {
    return (
        <div className="flex flex-col gap-20  items-center justify-center w-full">
            <div className="flex flex-col items-center text-center gap-6">
                <h1 className="text-[2.5rem] sm:text-[4rem] leano font-righteous font-semibold tracking-normal">Guidelines For <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Supernova</span></h1>
                <div className="w-28 rounded-full h-1 bg-orange-500" />
            </div>  
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-fit gap-10">
                {PerksData.map((data, index) => (
                    <div className="flex gap-4 md:gap-6 items-center border p-4 rounded" key={index}>
                        <span className="text-white p-3 rounded-md" style={{ backgroundColor: data.bgColor }}>
                            {data.Icon}
                        </span>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">{data.title}</h3>
                            <h4 className="text-lg lg:text-xl text-black/70">{data.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Guideline;