"use client"
import React, { useState, useEffect, useRef } from 'react';

function CountDown() {
    const eventDate = new Date('2024-04-20T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isVisible, setIsVisible] = useState(false);
    const prevSecond = useRef(null);

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = eventDate - now;
        
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }

    useEffect(() => {
        setIsVisible(true);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    // Add leading zero if needed
    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute -z-20 w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-[120px]"></div>
            </div>
            
            {/* Secondary decorative gradients */}
            <div className="absolute -z-10 top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

            <div className={`w-full max-w-4xl px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Eyebrow text */}
                <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-sm font-bold tracking-widest uppercase">Are you ready?</span>
                </div>
                
                {/* Main heading */}
                <h1 className="text-center text-6xl font-extrabold mb-12 leading-tight">
                    <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                        8HR HACKATHON
                    </span>
                </h1>
                
                {/* Countdown container */}
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { value: formatNumber(timeLeft.days), label: "DAYS" },
                        { value: formatNumber(timeLeft.hours), label: "HOURS" },
                        { value: formatNumber(timeLeft.minutes), label: "MINUTES" },
                        { value: formatNumber(timeLeft.seconds), label: "SECONDS" }
                    ].map((item, index) => (
                        <div key={index} className="relative group">
                            {/* Card with glass effect */}
                            <div className="w-36 h-36 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10">
                                {/* Decorative circle */}
                                <div className="absolute -z-10 w-24 h-24 rounded-full bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Number */}
                                <span className="text-5xl font-black tabular-nums tracking-tight bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">
                                    {item.value}
                                </span>
                                
                                {/* Label */}
                                <span className="text-xs font-bold tracking-widest text-white/60 mt-2">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* CTA Button */}
                <div className="mt-16 flex justify-center">
                    <button className="group relative px-8 py-4 overflow-hidden rounded-full bg-transparent backdrop-blur-sm border border-white/10 hover:border-white/25 transition-all duration-300">
                        {/* Button hover effect */}
                        <div className="absolute inset-0 w-full h-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 blur-md"></div>
                        </div>
                        
                        <span className="font-medium text-white group-hover:text-white/90 transition-colors duration-300">
                            Register Now
                        </span>
                    </button>
                </div>
                
                {/* Date display */}
                <div className="mt-12 text-center">
                    <p className="text-white/60 text-sm font-medium">April 20, 2024</p>
                </div>
            </div>
        </div>
    );
}

export default CountDown;