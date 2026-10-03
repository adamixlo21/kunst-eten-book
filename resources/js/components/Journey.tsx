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
            <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-32">

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
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 0.8,
                        ease,
                    }}
                    className="flex items-center justify-between border-b border-[#8a6a48]/25 pb-4"
                >
                    <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.35em]">
                            02 / The Journey
                        </span>

                        <span className="hidden h-px w-10 bg-[#8a6a48]/40 sm:block" />

                        <span className="hidden text-[9px] uppercase tracking-[0.28em] text-stone-400 md:block">
                            From one expression to another
                        </span>
                    </div>

                    <span className="text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                        Plate → Canvas
                    </span>
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
                    className="pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-28 lg:pt-20"
                >
                    <h2 className="font-serif text-[14vw] font-light uppercase leading-[0.88] tracking-[-0.055em] text-[#25221f] sm:text-[11vw] lg:text-[8rem] xl:text-[10rem]">
                        From Plate
                    </h2>

                    <h2 className="mt-2 font-serif text-[14vw] font-light italic leading-[0.88] tracking-[-0.05em] text-[#8a6a48] sm:text-[11vw] lg:ml-[18%] lg:text-[8rem] xl:text-[10rem]">
                        to Canvas.
                    </h2>
                </motion.div>

                {/* =====================================================
                    MOBILE JOURNEY
                ===================================================== */}
                <div className="relative lg:hidden">
                    {/* Vertical timeline */}
                    <div className="absolute bottom-8 left-[22px] top-8 w-px bg-[#8a6a48]/20" />

                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    scaleY: 0,
                                }
                        }
                        whileInView={{
                            scaleY: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 1.3,
                            ease,
                        }}
                        style={{
                            transformOrigin: 'top',
                        }}
                        className="absolute bottom-8 left-[22px] top-8 w-px bg-[#8a6a48]/60"
                    />

                    <div>
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
                                                x: -15,
                                            }
                                    }
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.5,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.08,
                                        ease,
                                    }}
                                    className="relative grid grid-cols-[46px_1fr] gap-5 border-b border-[#8a6a48]/15 py-6 first:pt-2 last:border-b-0 last:pb-2"
                                >
                                    {/* ICON */}
                                    <div className="relative z-10">
                                        <div className="flex h-[46px] w-[46px] items-center justify-center border border-[#8a6a48]/25 bg-[#f7f3ec]">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.2}
                                                className="text-[#8a6a48]"
                                            />
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-[7px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                                                {step.number} / 04
                                            </p>

                                            <h3 className="mt-2 font-serif text-[2rem] font-light leading-none tracking-[-0.035em]">
                                                {step.title}
                                            </h3>

                                            <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                                {step.word}
                                            </p>
                                        </div>

                                        <span className="font-serif text-4xl font-light italic text-[#8a6a48]/15">
                                            {step.number}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* =====================================================
                    DESKTOP JOURNEY
                ===================================================== */}
                <div className="relative hidden lg:block">

                    {/* CONNECTING LINE */}
                    <div className="absolute left-0 right-0 top-[54px]">
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

                    <div className="grid grid-cols-4">
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
                                    className="group relative border-r border-[#8a6a48]/20 px-8 first:pl-0 last:border-r-0 last:pr-0"
                                >
                                    {/* ICON */}
                                    <div className="relative z-10 flex h-[108px] items-start">
                                        <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#f7f3ec]">
                                            <Icon
                                                size={23}
                                                strokeWidth={1.2}
                                                className="text-[#8a6a48] transition-transform duration-500 group-hover:-translate-y-1"
                                            />
                                        </div>
                                    </div>

                                    {/* NUMBER */}
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                                        {step.number} / 04
                                    </p>

                                    {/* TITLE */}
                                    <h3 className="mt-5 font-serif text-4xl font-light">
                                        {step.title}
                                    </h3>

                                    {/* WORD */}
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
                    className="mt-14 border-t border-[#8a6a48]/25 pt-7 sm:mt-20 sm:pt-8 lg:mt-28 lg:grid lg:grid-cols-[0.65fr_1.35fr] lg:gap-10 lg:pt-10"
                >
                    <div>
                        <span className="text-[7px] font-semibold uppercase tracking-[0.32em] text-stone-400 sm:text-[8px]">
                            Next / 03
                        </span>
                    </div>

                    <div className="mt-5 flex items-end justify-between gap-6 lg:mt-0">
                        <h3 className="font-serif text-[2.4rem] font-light leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                            The experience

                            <span className="block italic text-[#8a6a48]">
                                becomes art.
                            </span>
                        </h3>

                        <a
                            href="/#paintings"
                            aria-label="Go to the painting collection"
                            className="group shrink-0"
                        >
                            <span className="flex h-11 w-11 items-center justify-center border border-[#8a6a48]/30 text-[#8a6a48] transition-colors duration-300 group-hover:bg-[#8a6a48] group-hover:text-[#f7f3ec]">
                                <ArrowDown
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-y-1"
                                />
                            </span>
                        </a>
                    </div>

                    <a
                        href="/#paintings"
                        className="mt-4 inline-block text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48] lg:hidden"
                    >
                        The Collection
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
