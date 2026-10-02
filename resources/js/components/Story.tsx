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
                            01 / Two Stories
                        </span>

                        <span className="hidden h-px w-10 bg-[#8a6a48]/40 sm:block" />

                        <span className="hidden text-[9px] uppercase tracking-[0.28em] text-stone-400 sm:block">
                            Nour & Patrick
                        </span>
                    </div>

                    <span className="text-[8px] uppercase tracking-[0.28em] text-stone-400">
                        The Beginning
                    </span>
                </motion.div>

                {/* =====================================================
                    TITLE
                ===================================================== */}
                <div className="pb-24 pt-14 lg:pb-36 lg:pt-20">
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                        y: '110%',
                                    }
                            }
                            whileInView={{
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1.1,
                                ease,
                            }}
                            className="font-serif text-[15vw] font-light leading-[0.8] tracking-[-0.07em] sm:text-[12vw] lg:text-[8rem] xl:text-[10rem]"
                        >
                            Two passions.
                            <span className="block italic text-[#8a6a48] lg:ml-[13%]">
                                One journey.
                            </span>
                        </motion.h2>
                    </div>
                </div>

                {/* =====================================================
                    NOUR
                ===================================================== */}
                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">

                    {/* PHOTO */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 50,
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
                            duration: 1.1,
                            ease,
                        }}
                    >
                        <div className="overflow-hidden">
                            <motion.img
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            scale: 1.07,
                                        }
                                }
                                whileInView={{
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 1.6,
                                    ease,
                                }}
                                src="/images/nour.jpg"
                                alt="Nour, artist behind The Taste of Inspiration"
                                className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
                            />
                        </div>

                        <div className="mt-4 flex items-start justify-between gap-6">
                            <div>
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    01.1 / The Artist
                                </p>

                                <p className="mt-1 font-serif text-xl italic">
                                    Nour
                                </p>
                            </div>

                            <p className="text-right text-[8px] uppercase leading-5 tracking-[0.25em] text-stone-400">
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
                                    x: 30,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                            ease,
                        }}
                        className="pb-4 lg:pb-16"
                    >
                        <div className="mb-8 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#8a6a48]" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                                Nour
                            </span>
                        </div>

                        <blockquote className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
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
                <div className="py-24 lg:py-40">
                    <div className="flex items-center gap-5">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-stone-400">
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
                                duration: 1.2,
                                ease,
                            }}
                            style={{
                                transformOrigin: 'left',
                            }}
                            className="h-px flex-1 bg-[#8a6a48]/30"
                        />

                        <ArrowDownRight
                            size={16}
                            strokeWidth={1.2}
                            className="text-[#8a6a48]"
                        />

                        <span className="text-[8px] uppercase tracking-[0.3em] text-stone-400">
                            Plate
                        </span>
                    </div>
                </div>

                {/* =====================================================
                    PATRICK
                ===================================================== */}
                <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">

                    {/* QUOTE */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    x: -30,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 1,
                            ease,
                        }}
                        className="order-2 pb-4 lg:order-1 lg:pb-16"
                    >
                        <div className="mb-8 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#8a6a48]" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                                Patrick
                            </span>
                        </div>

                        <blockquote className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
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
                                    y: 50,
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
                            duration: 1.1,
                            ease,
                        }}
                        className="order-1 lg:order-2"
                    >
                        <div className="overflow-hidden">
                            <motion.img
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            scale: 1.07,
                                        }
                                }
                                whileInView={{
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 1.6,
                                    ease,
                                }}
                                src="/images/patrick.jpg"
                                alt="Patrick, chef behind The Taste of Inspiration"
                                className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
                            />
                        </div>

                        <div className="mt-4 flex items-start justify-between gap-6">
                            <div>
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    01.2 / The Chef
                                </p>

                                <p className="mt-1 font-serif text-xl italic">
                                    Patrick
                                </p>
                            </div>

                            <p className="text-right text-[8px] uppercase leading-5 tracking-[0.25em] text-stone-400">
                                Flavour
                                <br />
                                Craft
                                <br />
                                Seasonality
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
                    CONNECTION
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 40,
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
                        duration: 1,
                        ease,
                    }}
                    className="mt-28 border-t border-[#8a6a48]/25 pt-10 lg:mt-40"
                >
                    <div className="grid gap-10 lg:grid-cols-[0.4fr_1.6fr]">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                                The Connection
                            </p>

                            <p className="mt-3 text-[8px] uppercase tracking-[0.25em] text-stone-400">
                                01 / Closing
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                                He creates on a plate.
                                <span className="block italic text-[#8a6a48]">
                                    She responds on canvas.
                                </span>
                            </h3>

                            <div className="mt-9 flex flex-wrap items-center gap-8">
                                <p className="max-w-sm text-sm leading-7 text-stone-500">
                                    Two creative worlds meet in
                                    <span className="text-stone-800">
                                        {' '}The Taste of Inspiration.
                                    </span>
                                </p>

                                <a
                                    href="/#journey"
                                    className="group inline-flex items-center gap-4 border-b border-stone-900 pb-2 text-[9px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48]"
                                >
                                    Discover the Journey

                                    <ArrowDownRight
                                        size={14}
                                        strokeWidth={1.5}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
