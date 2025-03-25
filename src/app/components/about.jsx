import { Lightbulb } from 'lucide-react';
import React from 'react'

function About() {
    return (
        <div className="relative flex flex-col gap-20 items-center justify-center">
            <div className="absolute -z-20 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-to-r from-orange-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-[80px]"></div>
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-righteous font-bold">About</h1>
                <h3 className="text-xl md:text-2xl lg:text-3xl tracking-normal font-medium max-w-7xl">SuperNova Hackathon 2025 is a national-level hybrid hackathon, set to ignite innovation on April 18, 2025. With an open innovation theme, this event brings together 500+ participants bright minds to brainstorm, build, and showcase groundbreaking solutions. Split into two phases—an online kickoff followed by an offline showdown—SuperNova challenges participants to push the boundaries of technology. Whether you're into AI, IoT, fintech, sustainability, or beyond, this hackathon is your chance to innovate, compete, and connect with like-minded tech enthusiasts.</h3>
            </div>

            <div className="border border-black p-5 flex flex-col items-start gap-4 max-w-7xl justify-center rounded backdrop-blur-md bg-white/30">
                <Lightbulb className="w-10 h-10" />
                <h1 className="flex items-center gap-4 font-bold text-2xl md:text-3xl">Ready to Innovate?</h1>
                <p className="text-xl lg:text-2xl">Whether you're into cutting-edge technology or sustainable solutions, this hackathon is your chance to innovate, compete, and connect with like-minded tech enthusiasts.</p>
            </div>

        </div>
    )
}

export default About