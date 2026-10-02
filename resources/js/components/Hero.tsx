import { Link } from '@inertiajs/react';
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'motion/react';

import { useRef } from 'react';

import {
    ArrowDown,
    ArrowUpRight,
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {

        const reduceMotion = useReducedMotion();
        const heroRef = useRef<HTMLElement>(null);

        const { scrollY } = useScroll();

        const titleY = useTransform(scrollY, [0, 1000], [0, -120]);
        const imageY = useTransform(scrollY, [0, 1000], [0, 180]);
        const inspirationY = useTransform(scrollY, [0, 1000], [0, -160]);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-[#f3eee6] text-[#25221f]"
        >

            {/* =====================================================
                BACKGROUND ART
            ===================================================== */}
            <div className="pointer-events-none absolute inset-0">

                {/* Large circle */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                scale: 0.8,
                            }
                    }
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.8,
                        delay: 0.4,
                        ease,
                    }}
                    className="absolute -left-40 top-[18%] h-[420px] w-[420px] rounded-full border border-[#8a6a48]/10"
                />

                {/* Small circle */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                scale: 0.7,
                            }
                    }
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.6,
                        delay: 0.65,
                        ease,
                    }}
                    className="absolute -left-20 top-[24%] h-[280px] w-[280px] rounded-full border border-[#8a6a48]/10"
                />

                {/* Vertical line */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                scaleY: 0,
                            }
                    }
                    animate={{
                        scaleY: 1,
                    }}
                    transition={{
                        duration: 1.4,
                        delay: 1,
                        ease,
                    }}
                    style={{
                        transformOrigin: 'top',
                    }}
                    className="absolute right-[8%] top-[5%] h-32 w-px bg-[#8a6a48]/15"
                />

                <div className="absolute bottom-[12%] left-[45%] h-40 w-40 rounded-full bg-[#bca17d]/10 blur-3xl" />
            </div>


            <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-32 sm:px-8 lg:px-16 lg:pb-24 lg:pt-40">

                {/* EDITORIAL TOP INFORMATION */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: -15,
                            }
                    }
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.1,
                        ease,
                    }}
                    className="relative z-40 mb-8 flex items-center justify-between border-b border-[#8a6a48]/20 pb-4"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            00 / Opening
                        </span>

                        <span className="hidden h-px w-10 bg-[#8a6a48]/40 sm:block" />

                        <span className="hidden text-[9px] uppercase tracking-[0.28em] text-stone-400 sm:block">
                            The Taste of Inspiration
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="hidden text-[8px] uppercase tracking-[0.28em] text-stone-400 md:block">
                            Art · Food · Experience
                        </span>

                        <span className="text-[8px] uppercase tracking-[0.28em] text-stone-400">
                            NL / 2026
                        </span>
                    </div>
                </motion.div>


                {/* =====================================================
                    TOP LABEL
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: -10,
                            }
                    }
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.15,
                        ease,
                    }}
                    className="relative z-30 flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <motion.span
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                        scaleX: 0,
                                    }
                            }
                            animate={{
                                scaleX: 1,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.4,
                                ease,
                            }}
                            style={{
                                transformOrigin: 'left',
                            }}
                            className="h-px w-9 bg-[#8a6a48]"
                        />

                        <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#8a6a48] sm:text-[10px]">
                            Food × Art × Inspiration
                        </p>
                    </div>

                    <p className="hidden text-[9px] uppercase tracking-[0.28em] text-stone-400 md:block">
                        A culinary art experience
                    </p>
                </motion.div>

                {/* =====================================================
                    MAIN COMPOSITION
                ===================================================== */}
                <div className="relative mt-10 lg:mt-12">

                    {/* =================================================
                        THE TASTE — REVEAL
                    ================================================= */}
                    <motion.div
                        style={{ y: titleY }}
                        className="relative z-30 overflow-hidden pb-5"
                    >
                        <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-stone-400 lg:hidden">
                            00 / Opening
                        </p>

                        <motion.h1
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                        y: '110%',
                                    }
                            }
                            animate={{
                                y: 0,
                            }}
                            transition={{
                                duration: 1.25,
                                delay: 0.2,
                                ease,
                            }}
                            className="font-serif text-[18vw] font-light uppercase leading-[0.72] tracking-[-0.075em] sm:text-[15vw] lg:text-[10.5rem] xl:text-[12.5rem]"
                        >
                            The Taste
                        </motion.h1>
                    </motion.div>

                    {/* =================================================
                        TEXT + IMAGE
                    ================================================= */}
                    <div className="relative mt-8 grid gap-10 lg:mt-3 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">

                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                        opacity: 0,
                                        y: 35,
                                    }
                            }
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 1,
                                ease,
                            }}
                            className="relative z-30 flex flex-col justify-end lg:pb-20"
                        >
                            <p className="max-w-sm font-serif text-2xl font-light leading-[1.25] text-[#8a6a48] sm:text-3xl">
                                Where flavour becomes colour,

                                <span className="block italic">
                                    and food becomes art.
                                </span>
                            </p>

                            <motion.div
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            scaleX: 0,
                                        }
                                }
                                animate={{
                                    scaleX: 1,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.35,
                                    ease,
                                }}
                                style={{
                                    transformOrigin: 'left',
                                }}
                                className="mt-8 h-px w-14 bg-[#8a6a48]/50"
                            />

                            <p className="mt-7 max-w-sm text-sm leading-7 text-stone-600">
                                Patrick creates through food. Nour experiences
                                through colour, feeling and atmosphere. One
                                creative expression becomes the beginning of
                                another.
                            </p>

                            {/* LINKS */}
                            <motion.div
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            y: 15,
                                        }
                                }
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.45,
                                    ease,
                                }}
                                className="mt-9 flex flex-wrap items-center gap-6"
                            >
                                <a
                                    href="/#journey"
                                    className="group inline-flex items-center gap-4 border-b border-stone-900 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-900 transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48]"
                                >
                                    Discover the Journey

                                    <ArrowDown
                                        size={14}
                                        strokeWidth={1.5}
                                        className="transition-transform duration-300 group-hover:translate-y-1"
                                    />
                                </a>

                                <Link
                                    href="/paintings"
                                    className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400 transition-colors duration-300 hover:text-[#8a6a48]"
                                >
                                    The Collection

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.5}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* =================================================
                            IMAGE
                        ================================================= */}
                        <div className="relative">

                            {/* NUMBER */}
                            <motion.div
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            x: -15,
                                        }
                                }
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.3,
                                    ease,
                                }}
                                className="absolute -left-4 top-7 z-30 hidden -translate-x-full items-center gap-3 lg:flex"
                            >
                                <span className="text-[9px] tracking-[0.25em] text-stone-400">
                                    01
                                </span>

                                <span className="h-px w-8 bg-stone-300" />
                            </motion.div>

                            <motion.div
                                style={{ y: imageY }}
                                className="relative z-10 ml-auto w-full lg:w-[92%]"
                            >

                                {/* CINEMATIC IMAGE REVEAL */}
                                <motion.div
                                    initial={
                                        reduceMotion
                                            ? false
                                            : {
                                                clipPath:
                                                    'inset(100% 0% 0% 0%)',
                                            }
                                    }
                                    animate={{
                                        clipPath:
                                            'inset(0% 0% 0% 0%)',
                                    }}
                                    transition={{
                                        duration: 1.4,
                                        delay: 0.55,
                                        ease,
                                    }}
                                    className="relative overflow-hidden"
                                >
                                    <motion.img
                                        initial={
                                            reduceMotion
                                                ? false
                                                : {
                                                    scale: 1.12,
                                                }
                                        }
                                        animate={{
                                            scale: 1,
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: 0.55,
                                            ease,
                                        }}
                                        src="/images/patrick-nour.jpg"
                                        alt="Patrick and Nour — The Taste of Inspiration"
                                        className="h-[520px] w-full object-cover sm:h-[650px] lg:h-[680px] xl:h-[760px]"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-[#5d4934]/[0.04]" />

                                    {/* PHOTO CAPTION */}
                                    <motion.div
                                        initial={
                                            reduceMotion
                                                ? false
                                                : {
                                                    opacity: 0,
                                                    y: 20,
                                                }
                                        }
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 1.7,
                                            ease,
                                        }}
                                        className="absolute bottom-0 left-0 bg-[#f3eee6] px-5 py-4 sm:px-6"
                                    >
                                        <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                            Food / Art / Emotion
                                        </p>

                                        <p className="mt-1 font-serif text-sm italic text-stone-500">
                                            Two passions, one journey.
                                        </p>
                                    </motion.div>
                                </motion.div>

                                {/* IMAGE CAPTION */}
                                <motion.div
                                    initial={
                                        reduceMotion
                                            ? false
                                            : {
                                                opacity: 0,
                                            }
                                    }
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.8,
                                    }}
                                    className="mt-4 flex items-start justify-between gap-6"
                                >
                                    <p className="max-w-xs text-[8px] uppercase leading-5 tracking-[0.2em] text-stone-400">
                                        The Taste of Inspiration
                                        <br />
                                        A collaboration between food and art
                                    </p>

                                    <p className="text-right text-[8px] uppercase leading-5 tracking-[0.2em] text-stone-400">
                                        NL
                                        <br />
                                        2026
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* VERTICAL TEXT */}
                            <motion.p
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                        }
                                }
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 2,
                                }}
                                className="absolute -right-4 top-12 hidden origin-top-left translate-x-full rotate-90 text-[8px] uppercase tracking-[0.35em] text-[#8a6a48]/60 xl:block"
                            >
                                Taste · Colour · Feeling · Memory
                            </motion.p>
                        </div>
                    </div>

                    {/* =====================================================
                        OF INSPIRATION — SECOND REVEAL
                    ===================================================== */}
                    <motion.div
                        style={{ y: inspirationY }}
                        className="pointer-events-none relative z-20 -mt-4 overflow-hidden pb-5 lg:-mt-24"
                    >                        <motion.h2
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                        y: '115%',
                                    }
                            }
                            animate={{
                                y: 0,
                            }}
                            transition={{
                                duration: 1.25,
                                delay: 0.9,
                                ease,
                            }}
                            className="font-serif text-[16vw] font-light uppercase leading-[0.8] tracking-[-0.075em] text-[#8a6a48] sm:text-[14vw] lg:text-[9.4rem] xl:text-[11rem]"
                        >
                            <span className="block lg:ml-[7%]">
                                of
                            </span>

                            <span className="block italic lg:ml-[17%]">
                                Inspiration
                            </span>
                        </motion.h2>
                    </motion.div>
                </div>

                {/* =====================================================
                    NUMBERS
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
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.6,
                        ease,
                    }}
                    className="relative z-30 mt-14 grid gap-10 border-t border-[#8a6a48]/20 pt-7 sm:grid-cols-3 lg:mt-8"
                >
                    <div>
                        <p className="font-serif text-3xl font-light">
                            05
                        </p>

                        <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                            Original Paintings
                        </p>
                    </div>

                    <div>
                        <p className="font-serif text-3xl font-light">
                            05
                        </p>

                        <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                            Culinary Creations
                        </p>
                    </div>

                    <div className="sm:text-right">
                        <p className="font-serif text-3xl font-light italic text-[#8a6a48]">
                            One
                        </p>

                        <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                            Shared Journey
                        </p>
                    </div>
                </motion.div>

                {/* =====================================================
                    SCROLL INDICATOR
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                            }
                    }
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 2,
                    }}
                    className="mt-14 flex justify-center"
                >
                    <a
                        href="/#story"
                        aria-label="Continue to the story"
                        className="group flex flex-col items-center gap-3"
                    >
                        <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-stone-400">
                            Continue
                        </span>

                        <span className="relative h-14 w-px overflow-hidden bg-stone-300">
                            <motion.span
                                animate={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            y: [-20, 55],
                                        }
                                }
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute left-0 top-0 h-5 w-px bg-[#8a6a48]"
                            />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
