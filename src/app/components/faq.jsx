import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import FaqData from '@/constants/faq'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FAQ() {
    return (
        <div className="flex items-center justify-center flex-col gap-20">
            <div className="flex flex-col items-center sm:flex-row gap-10 justify-start w-full">
                <div className="flex flex-col gap-8">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black max-w-2xl font-righteous">Everything you need to know!</h1>
                    <h2 className="text-2xl xl:text-3xl max-w-4xl text-black/70 font-figtree italic">Hacker Experience is what we prioritize! Have questions, need assistance, or just want to connect? Feel free to reach out!</h2>
                </div>
                <Image src="/question.svg" width={208} height={361} alt="Question" quality={100} fetchPriority="high" loading="eager" className="w-auto h-60 rotate-12 hover:rotate-6 hover:scale-105 duration-300 transition-all" draggable="false" />
            </div>
            <div className="flex w-full lg:flex-row flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-figtree tracking-tighter max-w-4xl">FAQs</h2>
                    <p className="text-xl md:text-2xl max-w-sm md:max-w-md font-figtree text-black/70">Everything you need to know about participating in the Hackathon.</p>
                    <h2 className="text-4xl font-black font-figtree tracking-tighter max-w-4xl">OR</h2>
                    <div className="flex flex-col text-black/70">
                        <p className="text-xl md:text-2xl max-w-sm md:max-w-md font-figtree">Think we missed something?</p>
                        <p className="text-xl md:text-2xl max-w-sm md:max-w-md font-figtree">Reach out at</p>
                    </div>
                    <p className="text-xl md:text-2xl max-w-sm md:max-w-md font-figtree flex items-center gap-3"><Mail /> EMail</p>
                </div>
                <div className="flex-1">
                    <Accordion type="single" collapsible>
                        {FaqData.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FAQ