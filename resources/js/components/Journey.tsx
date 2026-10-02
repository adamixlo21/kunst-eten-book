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
            <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-16 lg:py-36">

                {/* =====================================================
                    CHAPTER HEADER
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 20,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 0.9,
                        ease,
                    }}
                    className="flex items-center justify-between border-b border-[#8a6a48]/25 pb-4"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            02 / The Journey
                        </span>

                        <span className="hidden h-px w-10 bg-[#8a6a48]/40 sm:block" />

                        <span className="hidden text-[9px] uppercase tracking-[0.28em] text-stone-400 sm:block">
                            From one expression to another
                        </span>
                    </div>

                    <span className="text-[8px] uppercase tracking-[0.28em] text-stone-400">
                        Plate → Canvas
                    </span>
                </motion.div>

                {/* =====================================================
                        LARGE TITLE
                    ===================================================== */}
                <div className="pb-24 pt-16 lg:pb-32 lg:pt-24">
                    <h2 className="font-serif text-[16vw] font-light uppercase leading-[0.78] tracking-[-0.07em] text-[#25221f] sm:text-[13vw] lg:text-[9rem] xl:text-[11rem]">
                        From Plate
                    </h2>

                    <h2 className="mt-3 font-serif text-[16vw] font-light italic leading-[0.78] tracking-[-0.07em] text-[#8a6a48] sm:text-[13vw] lg:ml-[18%] lg:text-[9rem] xl:text-[11rem]">
                        to Canvas.
                    </h2>
                </div>

                {/* =====================================================
                    PROCESS
                ===================================================== */}
                <div className="relative">

                    {/* DESKTOP CONNECTING LINE */}
                    <div className="absolute left-0 right-0 top-[54px] hidden lg:block">
                        <div className="relative h-px bg-[#8a6a48]/15">
                            <motion.div
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            scaleX: 0,
                                        }
                                }
                                whileInView={{
                                    scaleX: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.5,
                                }}
                                transition={{
                                    duration: 1.4,
                                    ease,
                                }}
                                style={{
                                    transformOrigin: 'left',
                                }}
                                className="absolute inset-0 bg-[#8a6a48]/45"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
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
                                                y: 30,
                                            }
                                    }
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.4,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                        ease,
                                    }}
                                    className="group relative border-b border-[#8a6a48]/20 py-8 sm:border sm:p-8 lg:border-0 lg:border-r lg:border-[#8a6a48]/20 lg:px-8 lg:py-0 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
                                >
                                    {/* ICON */}
                                    <div className="relative z-10 flex h-[108px] items-start">
                                        <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#f7f3ec]">
                                            <Icon
                                                size={23}
                                                strokeWidth={1.2}
                                                className="text-[#8a6a48]"
                                            />
                                        </div>
                                    </div>

                                    {/* NUMBER */}
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                                        {step.number} / 04
                                    </p>

                                    {/* TITLE */}
                                    <h3 className="mt-5 font-serif text-3xl font-light sm:text-4xl">
                                        {step.title}
                                    </h3>

                                    {/* SINGLE WORD */}
                                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#8a6a48]">
                                        {step.word}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* =====================================================
                    END / LEAD INTO PAINTINGS
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
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 0.9,
                        ease,
                    }}
                    className="mt-24 grid gap-10 border-t border-[#8a6a48]/25 pt-10 lg:mt-32 lg:grid-cols-[0.65fr_1.35fr]"
                >
                    <div>
                        <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-stone-400">
                            Next / 03
                        </span>
                    </div>

                    <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
                        <h3 className="font-serif text-4xl font-light leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                            The experience
                            <span className="block italic text-[#8a6a48]">
                                becomes art.
                            </span>
                        </h3>

                        <a
                            href="/#paintings"
                            className="group flex items-center gap-4"
                        >
                            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Collection
                            </span>

                            <span className="flex h-10 w-10 items-center justify-center border border-[#8a6a48]/30 transition-colors duration-300 group-hover:bg-[#8a6a48] group-hover:text-[#f7f3ec]">
                                <ArrowDown
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-y-1"
                                />
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
