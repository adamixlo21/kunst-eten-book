import {
    ChefHat,
    Eye,
    Palette,
    Sparkles,
    ArrowDown,
} from 'lucide-react';

import { motion, useReducedMotion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
    {
        icon: ChefHat,
        number: '01',
        title: 'Create',
        word: 'Food',
    },
    {
        icon: Eye,
        number: '02',
        title: 'Experience',
        word: 'Senses',
    },
    {
        icon: Sparkles,
        number: '03',
        title: 'Inspire',
        word: 'Emotion',
    },
    {
        icon: Palette,
        number: '04',
        title: 'Transform',
        word: 'Art',
    },
];

export default function Journey() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="journey"
            className="relative overflow-hidden bg-[#f7f3ec] text-[#25221f]"
        >
            <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">

                {/* =====================================================
                    CHAPTER HEADER
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 15,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease,
                    }}
                    className="flex items-start justify-between gap-6 border-b border-[#8a6a48]/25 pb-4"
                >
                    <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.35em]">
                            02 / The Journey
                        </p>

                        <p className="mt-1.5 text-[7px] uppercase tracking-[0.18em] text-stone-400 sm:text-[8px] sm:tracking-[0.25em]">
                            From one expression to another
                        </p>
                    </div>

                    <p className="shrink-0 text-right text-[7px] uppercase tracking-[0.18em] text-stone-400 sm:text-[8px] sm:tracking-[0.25em]">
                        Plate → Canvas
                    </p>
                </motion.div>

                {/* =====================================================
                    TITLE
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 30,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 1,
                        ease,
                    }}
                    className="py-12 sm:py-16 lg:py-20"
                >
                    <h2 className="font-serif text-[14vw] font-light uppercase leading-[0.9] tracking-[-0.055em] sm:text-[11vw] lg:text-[7.5rem] xl:text-[9rem]">
                        From Plate
                    </h2>

                    <h2 className="mt-1 font-serif text-[14vw] font-light italic leading-[0.9] tracking-[-0.05em] text-[#8a6a48] sm:mt-2 sm:text-[11vw] lg:ml-[18%] lg:text-[7.5rem] xl:text-[9rem]">
                        to Canvas.
                    </h2>
                </motion.div>

                {/* =====================================================
                    JOURNEY PROCESS

                    One layout.
                    Phone: 2 columns
                    Desktop: 4 columns
                ===================================================== */}
                <div className="grid grid-cols-2 border-l border-t border-[#8a6a48]/20 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.number}
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            y: 25,
                                        }
                                }
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.08,
                                    ease,
                                }}
                                className="group relative min-w-0 border-b border-r border-[#8a6a48]/20 p-5 sm:p-7 lg:min-h-[300px] lg:p-8"
                            >
                                {/* NUMBER */}
                                <div className="flex items-start justify-between gap-3">
                                    <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-stone-400 sm:text-[8px] sm:tracking-[0.3em]">
                                        {step.number} / 04
                                    </span>

                                    <span className="font-serif text-xl font-light italic text-[#8a6a48]/20 sm:text-2xl">
                                        {step.number}
                                    </span>
                                </div>

                                {/* ICON */}
                                <div className="mt-8 sm:mt-10 lg:mt-12">
                                    <Icon
                                        size={24}
                                        strokeWidth={1.2}
                                        className="text-[#8a6a48] transition-transform duration-500 group-hover:-translate-y-1"
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="mt-5 font-serif text-[1.7rem] font-light leading-none tracking-[-0.035em] sm:text-3xl lg:mt-8 lg:text-4xl">
                                    {step.title}
                                </h3>

                                {/* WORD */}
                                <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48] sm:mt-3 sm:text-[8px] sm:tracking-[0.3em]">
                                    {step.word}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* =====================================================
                    NEXT CHAPTER
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 25,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.9,
                        ease,
                    }}
                    className="mt-14 border-t border-[#8a6a48]/25 pt-7 sm:mt-20 sm:pt-8 lg:mt-24 lg:grid lg:grid-cols-[0.65fr_1.35fr] lg:gap-10 lg:pt-10"
                >
                    <div>
                        <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-stone-400 sm:text-[8px] sm:tracking-[0.32em]">
                            Next / 03
                        </span>
                    </div>

                    <div className="mt-5 lg:mt-0">
                        <h3 className="font-serif text-[2.4rem] font-light leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                            The experience

                            <span className="block italic text-[#8a6a48]">
                                becomes art.
                            </span>
                        </h3>

                        <a
                            href="/#paintings"
                            className="group mt-6 inline-flex items-center gap-4 border-b border-[#25221f] pb-2 text-[8px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48] sm:text-[9px]"
                        >
                            The Collection

                            <span className="flex h-7 w-7 items-center justify-center border border-[#8a6a48]/30 text-[#8a6a48] transition-colors duration-300 group-hover:bg-[#8a6a48] group-hover:text-[#f7f3ec]">
                                <ArrowDown
                                    size={12}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                                />
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
