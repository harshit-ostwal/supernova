import { Blocks, Box, Brain, Cloud, Zap } from 'lucide-react'
import React from 'react'

function Tracks() {
    return (
        <div className="flex flex-col gap-20 items-center justify-center">
            <div className="flex flex-col items-center gap-6 text-center">
                <h1 className="text-[2.5rem] sm:text-[4rem] font-righteous font-semibold tracking-normal">SuperNova <span className="text-[#004aac] drop-shadow-[0_0_15px_#004aac]">Tracks</span></h1>
                <div className="w-28 rounded-full h-1 bg-orange-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:w-11/12 2xl:w-4/5 w-full">
                <div className="flex flex-col gap-2 border p-5 shadow-lg rounded justify-center">
                    <Brain size={56} className="bg-orange-100 rounded p-3" />
                    <h1 className="font-bold text-3xl">AI/ML</h1>
                    <p className="text-xl">Explore the frontiers of artificial intelligence and machine learning to create innovative solutions.</p>
                </div>
                <div className="flex flex-col gap-2 border p-5 shadow-lg rounded justify-center">
                    <Cloud size={56} className="bg-purple-100 rounded p-3" />
                    <h1 className="font-bold text-3xl">Cloud</h1>
                    <p className="text-xl">Build scalable and resilient applications using modern cloud technologies and services.</p>
                </div>
                <div className="flex flex-col gap-2 border p-5 shadow-lg rounded justify-center">
                    <Box size={56} className="bg-rose-100 rounded p-3" />
                    <h1 className="font-bold text-3xl">AR/VR</h1>
                    <p className="text-xl">Create immersive experiences and push the boundaries of augmented and virtual reality.</p>
                </div>
                <div className="flex flex-col gap-2 border p-5 shadow-lg rounded justify-center">
                    <Blocks size={56} className="bg-green-100 rounded p-3" />
                    <h1 className="font-bold text-3xl">Web3/Blockchain</h1>
                    <p className="text-xl">Develop decentralized applications and explore the potential of blockchain technology.</p>
                </div>
                <div className="flex flex-col gap-2 border p-5 shadow-lg rounded justify-center">
                    <Zap size={56} className="bg-gray-100 rounded p-3" />
                    <h1 className="font-bold text-3xl">Open Innovation</h1>
                    <p className="text-xl">Bring your own innovative idea and build something amazing that solves real problems.</p>
                </div>
            </div>
        </div>
    )
}

export default Tracks