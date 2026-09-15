import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Check } from 'lucide-react';

const FAMILY_FEATURES = [
    'Shared Dashboard',
    'Medication Tracking',
    'Care Updates',
    'Peace of Mind'
];

const FamilyCareHero: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const watermarkRef = useRef<HTMLSpanElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const pillsRef = useRef<HTMLDivElement | null>(null);
    const buttonsRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (prefersReducedMotion) {
                gsap.set([
                    watermarkRef.current, 
                    headingRef.current, 
                    textRef.current, 
                    pillsRef.current, 
                    buttonsRef.current
                ], { opacity: 1, y: 0, scale: 1 });
                
                if (pillsRef.current) {
                    gsap.set(pillsRef.current.children, { opacity: 1, y: 0 });
                }
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(watermarkRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
              .fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
              .fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
              .fromTo(
                  pillsRef.current ? Array.from(pillsRef.current.children) : [], 
                  { opacity: 0, y: 16, scale: 0.95 }, 
                  { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' }, 
                  '-=0.3'
              )
              .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-[550px] flex-col items-center justify-center overflow-hidden bg-[#16002c] py-20 lg:py-28"
        >
            {/* Ambient Blur Orbs */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-[#5301ab]/30 blur-[140px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-40 -right-32 h-[40rem] w-[40rem] rounded-full bg-[#fd5800]/20 blur-[140px]" aria-hidden="true" />
            
            {/* Center soft highlight */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5301ab]/10 blur-[100px]" aria-hidden="true" />

            <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

                    {/* Unique Heading Design */}
                    <div className="relative inline-block w-full">
                        <span
                            ref={watermarkRef}
                            aria-hidden="true"
                            className="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap bg-gradient-to-r from-[#5301ab]/30 to-[#fd5800]/30 bg-clip-text text-7xl font-extrabold text-transparent sm:block lg:-top-16 lg:text-[7.5rem]"
                        >
                            Family Care
                        </span>
                        
                        <h1 ref={headingRef} className="relative z-10 flex flex-col text-5xl font-extrabold tracking-tight text-[#fcfbf7] sm:text-6xl lg:text-[4.5rem]">
                            <span>Care for your family,</span>
                            <span className="bg-gradient-to-r from-[#5301ab] via-[#a236d2] to-[#fd5800] bg-clip-text pb-2 text-transparent">
                                wherever you are.
                            </span>
                        </h1>
                    </div>

                    {/* Paragraph */}
                    <p ref={textRef} className="relative mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 font-medium">
                        Stay connected with your loved ones' health, medications, appointments and daily care — all in one simple place.
                    </p>

                    {/* Culture / Perk Pills */}
                    <div ref={pillsRef} className="relative mt-10 flex w-full flex-wrap justify-center gap-3 sm:gap-4">
                        {FAMILY_FEATURES.map((feature, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1 hover:border-[#fd5800]/50 hover:bg-white/10 cursor-default"
                            >
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white">
                                    <Check className="h-3 w-3" strokeWidth={3} />
                                </div>
                                <span className="text-sm font-bold text-gray-200 tracking-wide">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div ref={buttonsRef} className="mt-14 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
                        <button className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-lg shadow-[#fd5800]/20 flex items-center gap-2">
                            Add Family Member
                            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                        <button className="w-full sm:w-auto justify-center border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-2">
                            View Family Health
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FamilyCareHero;