"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Cursor() {
    gsap.registerPlugin(useGSAP);
    const pointer = useRef(null);

    useEffect(() => {
        const x = gsap.quickTo(pointer.current, "x", { duration: 0.5, ease: "power2.out" });
        const y = gsap.quickTo(pointer.current, "y", { duration: 0.5, ease: "power2.out" });

        const onPointerMove = (e) => {
            x(e.clientX);
            y(e.clientY);
        };

        window.addEventListener("mousemove", onPointerMove);
        return () => window.removeEventListener("mousemove", onPointerMove);
    }, []);

    return (
        <div ref={pointer} className="absolute pointer-events-none size-6 rounded-full border border-black" />
    );
}

export default Cursor;