import React from "react";

function CountDown() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute -z-20 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-to-r from-amber-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-[80px]"></div>
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
                    <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                        8HR HACKATHON
                    </span>
                </h1>

                {/* Countdown container */}
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { value: "12", label: "DAYS" },
                        { value: "12", label: "HOURS" },
                        { value: "12", label: "MINUTES" },
                        { value: "12", label: "SECONDS" }
                    ].map((item, index) => (
                        <div key={index} className="relative group will-change-transform">
                            <div className="w-28 h-28 md:w-36 md:h-36 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-md flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105">
                                <span className="text-4xl md:text-5xl font-black tabular-nums tracking-tight bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">
                                    {item.value}
                                </span>
                                <span className="font-bold tracking-widest text-black mt-2">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CountDown;