"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Cursor() {
  gsap.registerPlugin(useGSAP);
  
  useGSAP(() => {
    const cursor = document.querySelector("#cursor");
    
    document.addEventListener("pointermove", (dets) => {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "power2.out"
      });
    });
  });

  return (
    <div id="cursor" className="fixed cursor size-6 rounded-full border border-black pointer-events-none"></div>
  );
}

export default Cursor;