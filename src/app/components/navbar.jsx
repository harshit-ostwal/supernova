import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <>
      <div className="w-full hidden sticky lg:flex items-center px-5 justify-between">
        <Image
          draggable={false}
          src={"/1.png"}
          width={320}
          className="w-60 h-32 object-contain"
          height={320}
          alt="Logo"
          quality={100}
          fetchPriority="high"
          loading="eager"
        />
        <h1 className="text-5xl font-righteous font-bold flex">SUPER <span className="text-[#004aac]">NOVA</span></h1>
        <Image
          draggable={false}
          src={"/2.png"}
          className="lg:h-40 lg:w-60 h-20 object-contain"
          width={320}
          height={320}
          alt="Logo"
          quality={100}
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <div className="w-full flex flex-col sticky lg:hidden items-center justify-between">
        <div className="flex items-center gap-4 pr-2">
          <Image
            draggable={false}
            src={"/1.png"}
            width={320}
            className="lg:w-60 lg:h-32 w-fit h-20 object-contain"
            height={320}
            alt="Logo"
            quality={100}
            fetchPriority="high"
            loading="eager"
          />
          <Image
            draggable={false}
            src={"/2.png"}
            className="h-40 w-60 object-contain"
            width={320}
            height={320}
            alt="Logo"
            quality={100}
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <h1 className="text-5xl font-righteous font-bold flex">SUPER <span className="text-[#004aac]">NOVA</span></h1>
      </div>
    </>
  )
}

export default Navbar