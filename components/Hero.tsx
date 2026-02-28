"use client"; 
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
    const greetings = ["HELLO,", "HOLA,", "NAMASTE,", "BONJOUR,", "CIAO,", "SALAAM,"];
    const [index, setIndex] = useState(0);
    const [time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length);
        }, 2500);
        
        const clock = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
        }, 1000);

        return () => {
            clearInterval(timer);
            clearInterval(clock);
        };
    }, [greetings.length]);

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* LEFT SIDE: Info */}
                <div className="lg:col-span-7">
                    <div className="h-16 md:h-24 overflow-y-hidden flex items-end">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={greetings[index]}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-700 italic font-serif pr-4 uppercase"
                            >
                                {greetings[index]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mt-2 mb-8 tracking-tighter text-black leading-[0.9]">
                        I'm <span className="text-zinc-900 font-serif italic">Srivatsav.</span>
                    </h1>

                    <p className="max-w-xl text-lg md:text-xl text-zinc-800 font-medium leading-relaxed border-l-4 border-black pl-6">
                      I architect digital products that transition seamlessly between web and mobile. 
                      With a track record of deploying interactive web platforms and native Android experiences, I focus on the delicate balance between high-performance engineering and intuitive product design. 
                      I don't just write code; I<span className="bg-zinc-100 px-1 font-bold">build</span>tools that feel natural in the user's hand.
                    </p>
                </div>

                {/* RIGHT SIDE: The Developer Bento Grid */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    
                    {/* Card 1: Live Clock */}
                    <div className="col-span-2 bg-white border border-zinc-200 p-8 rounded-[32px] shadow-sm flex flex-col justify-between min-h-[160px]">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Local Time / IST</p>
                        <h4 className="text-4xl md:text-5xl font-mono font-bold text-black tracking-tighter tabular-nums">
                            {time}
                        </h4>
                    </div>


                </div>
            </div>

            <div className="mt-24 animate-bounce opacity-30">
                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-zinc-500">
                    Scroll Down
                </span>
            </div>
        </section>
    );
}