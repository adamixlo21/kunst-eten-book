import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function OurStory() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="story"
            className="relative overflow-hidden bg-[#eee7dc] text-[#25221f]"
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
                            01 / Two Stories
                        </p>

                        <p className="mt-1.5 text-[7px] uppercase tracking-[0.22em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                            Nour & Patrick
                        </p>
                    </div>

                    <span className="text-right text-[7px] uppercase tracking-[0.22em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                        The Beginning
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
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 1,
                        ease,
                    }}
                    className="py-12 sm:py-16 lg:py-20"
                >
                    <h2 className="font-serif font-light">
                        <span className="block text-[14vw] leading-[0.95] tracking-[-0.045em] sm:text-[11vw] lg:text-[7.5rem] xl:text-[9rem]">
                            Two passions.
                        </span>

                        <span className="mt-1 block text-[14vw] italic leading-[0.95] tracking-[-0.04em] text-[#8a6a48] sm:mt-2 sm:text-[11vw] lg:ml-[13%] lg:text-[7.5rem] xl:text-[9rem]">
                            One journey.
                        </span>
                    </h2>
                </motion.div>

                {/* =====================================================
                    NOUR
                ===================================================== */}
                <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">

                    {/* PHOTO */}
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
                        className="w-full lg:max-w-[500px]"
                    >
                        <div className="overflow-hidden">
                            <motion.img
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            scale: 1.05,
                                        }
                                }
                                whileInView={{
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease,
                                }}
                                src="/images/nour.jpg"
                                alt="Nour, artist behind The Taste of Inspiration"
                                className="aspect-[5/6] w-full object-cover sm:aspect-[4/5] lg:h-[540px] lg:aspect-auto"
                            />
                        </div>

                        {/* CAPTION */}
                        <div className="mt-3 flex items-start justify-between gap-5 sm:mt-4 sm:gap-6">
                            <div>
                                <p className="text-[7px] font-semibold uppercase tracking-[0.24em] text-[#8a6a48] sm:text-[8px] sm:tracking-[0.3em]">
                                    01.1 / The Artist
                                </p>

                                <p className="mt-1 font-serif text-lg italic sm:text-xl">
                                    Nour
                                </p>
                            </div>

                            <p className="text-right text-[7px] uppercase leading-4 tracking-[0.2em] text-stone-400 sm:text-[8px] sm:leading-5 sm:tracking-[0.25em]">
                                Colour
                                <br />
                                Emotion
                                <br />
                                Imagination
                            </p>
                        </div>
                    </motion.div>

                    {/* QUOTE */}
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
                            delay: 0.05,
                            ease,
                        }}
                    >
                        <div className="mb-5 flex items-center gap-3 sm:mb-8 sm:gap-4">
                            <span className="h-px w-7 bg-[#8a6a48] sm:w-10" />

                            <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.35em]">
                                Nour
                            </span>
                        </div>

                        <blockquote className="max-w-2xl font-serif text-[2.25rem] font-light leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                            “Painting gives me
                            <span className="block italic text-[#8a6a48]">
                                peace, joy
                            </span>
                            and energy.”
                        </blockquote>
                    </motion.div>
                </div>

                {/* =====================================================
                    TRANSITION
                ===================================================== */}
                <div className="py-10 sm:py-14 lg:py-20">
                    <div className="flex items-center gap-3 sm:gap-5">
                        <span className="text-[7px] uppercase tracking-[0.24em] text-stone-400 sm:text-[8px] sm:tracking-[0.3em]">
                            Canvas
                        </span>

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
                            }}
                            transition={{
                                duration: 1.1,
                                ease,
                            }}
                            style={{
                                transformOrigin: 'left',
                            }}
                            className="h-px flex-1 bg-[#8a6a48]/30"
                        />

                        <ArrowDownRight
                            size={14}
                            strokeWidth={1.2}
                            className="shrink-0 text-[#8a6a48] sm:h-4 sm:w-4"
                        />

                        <span className="text-[7px] uppercase tracking-[0.24em] text-stone-400 sm:text-[8px] sm:tracking-[0.3em]">
                            Plate
                        </span>
                    </div>
                </div>

                {/* =====================================================
                    PATRICK
                ===================================================== */}
                <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">

                    {/* QUOTE */}
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
                        className="order-2 lg:order-1"
                    >
                        <div className="mb-5 flex items-center gap-3 sm:mb-8 sm:gap-4">
                            <span className="h-px w-7 bg-[#8a6a48] sm:w-10" />

                            <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.35em]">
                                Patrick
                            </span>
                        </div>

                        <blockquote className="max-w-2xl font-serif text-[2.25rem] font-light leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                            “Cook from
                            <span className="block italic text-[#8a6a48]">
                                the heart,
                            </span>
                            and follow the seasons.”
                        </blockquote>
                    </motion.div>

                    {/* PHOTO */}
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
                        className="order-1 w-full lg:order-2 lg:max-w-[500px] lg:justify-self-end"
                    >
                        <div className="overflow-hidden">
                            <motion.img
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            scale: 1.05,
                                        }
                                }
                                whileInView={{
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease,
                                }}
                                src="/images/patrick.jpg"
                                alt="Patrick, chef behind The Taste of Inspiration"
                                className="aspect-[5/6] w-full object-cover sm:aspect-[4/5] lg:h-[540px] lg:aspect-auto"
                            />
                        </div>

                        {/* CAPTION */}
                        <div className="mt-3 flex items-start justify-between gap-5 sm:mt-4 sm:gap-6">
                            <div>
                                <p className="text-[7px] font-semibold uppercase tracking-[0.24em] text-[#8a6a48] sm:text-[8px] sm:tracking-[0.3em]">
                                    01.2 / The Chef
                                </p>

                                <p className="mt-1 font-serif text-lg italic sm:text-xl">
                                    Patrick
                                </p>
                            </div>

                            <p className="text-right text-[7px] uppercase leading-4 tracking-[0.2em] text-stone-400 sm:text-[8px] sm:leading-5 sm:tracking-[0.25em]">
                                Flavour
                                <br />
                                Craft
                                <br />
                                Seasonality
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
