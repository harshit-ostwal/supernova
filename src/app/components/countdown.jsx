"use client";
import React, { useState, useEffect } from "react";

function CountDown() {
    const targetDate = new Date("2025-04-18T08:30:00").getTime(); // Set your event date & time

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <div className="w-full h-[80vh] md:h-[60vh] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute -z-20 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-to-r from-orange-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-[80px]"></div>
            </div>

            <div className="w-full max-w-4xl px-6 transition-opacity duration-500 opacity-100">
                {/* Eyebrow text */}
                <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold tracking-widest uppercase">
                        Are you ready?
                    </span>
                </div>

                {/* Main heading */}
                <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-10 leading-tight">
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                        8HR HACKATHON
                    </span>
                </h1>

                {/* Countdown container */}
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { value: timeLeft.days, label: "DAYS" },
                        { value: timeLeft.hours, label: "HOURS" },
                        { value: timeLeft.minutes, label: "MINUTES" },
                        { value: timeLeft.seconds, label: "SECONDS" }
                    ].map((item, index) => (
                        <div key={index} className="relative group will-change-transform">
                            <div className="w-28 h-28 md:w-36 md:h-36 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-md flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105">
                                <div className="text-4xl md:text-5xl font-black tabular-nums tracking-tight bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">
                                    {item.value}
                                </div>
                                <div className="font-bold tracking-widest text-black mt-2">
                                    {item.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
                    <p className="text-center text-xl font-bold mt-6 text-red-500">
                        🎉 The event has started! 🎉
                    </p>
                )}
            </div>
        </div>
    );
}

export default CountDown;