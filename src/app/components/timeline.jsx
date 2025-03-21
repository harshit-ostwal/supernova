"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    {
        date: "March 15, 2025",
        place: "Online",
        activities: [
            "Online Idea Submission",
            "Evaluation",
            "Shortlisting",
            "Round 1 Qualifiers",
        ],
    },
    {
        date: "April 18, 2025",
        place: "GLBITM",
        activities: [
            { time: "08:30 AM", event: "Registration" },
            { time: "09:30 AM", event: "Commencement" },
            { time: "01:30 - 2:00 PM", event: "Lunch" },
            { time: "06:00 PM", event: "Result Declaration" },
        ],
    },
];

export default function Timeline() {
    const timelineRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ".timeline-item",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div ref={timelineRef} className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">📅 Event Timeline</h2>
            <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
                {timelineData.map((event, index) => (
                    <div key={index} className="timeline-item relative bg-white p-5 rounded-lg shadow-md">
                        <div className="absolute -left-6 top-4 w-4 h-4 bg-blue-500 rounded-full"></div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <CalendarDays className="w-6 h-6 text-blue-500" /> {event.date}
                            </h3>
                            <p className="text-gray-600 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-red-500" /> {event.place}
                            </p>
                        </div>
                        <ul className="mt-3 space-y-2">
                            {event.activities.map((activity, idx) =>
                                typeof activity === "string" ? (
                                    <li key={idx} className="text-lg text-gray-700">• {activity}</li>
                                ) : (
                                    <li key={idx} className="text-lg text-gray-700">
                                        <strong>{activity.time}:</strong> {activity.event}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}