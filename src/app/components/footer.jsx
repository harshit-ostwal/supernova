import { Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {

    return (
        <div className="min-h-96 py-10 flex flex-col gap-10 w-full items-center justify-center p-3">
            <div className="flex flex-col xl:flex-row gap-14 items-start justify-between w-full md:w-11/12">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl xl:text-5xl font-righteous">Reach out to us</h1>
                    <h3 className="text-2xl max-w-lg">And stay informed about new sessions, events and other cool stuff!</h3>
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl xl:text-5xl font-righteous">Follow us on Social Media</h1>
                    <div className="flex gap-2 2xl:justify-end">
                        <Link href="" className="p-4 bg-orange-500 rounded text-white"><Twitter /></Link>
                        <Link href="" className="p-4 bg-orange-500 rounded text-white"><Instagram /></Link>
                        <Link href="" className="p-4 bg-orange-500 rounded text-white"><Linkedin /></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 items-center w-full md:w-11/12 justify-between">
                <h3 className="text-xl lg:text-2xl">COPYRIGHT 2025 - SuperNova</h3>
                <h3 className="text-xl lg:text-2xl">GO TO TOP!</h3>
            </div>
        </div>
    )
}

export default Footer