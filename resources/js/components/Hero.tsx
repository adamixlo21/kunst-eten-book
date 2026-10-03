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

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, reduceMotion ? 0 : 35],
    );

    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, reduceMotion ? 0 : -15],
    );

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden bg-[#f3eee6] text-[#25221f]"
        >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                scale: 0.85,
                            }
                    }
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.6,
                        delay: 0.3,
                        ease,
                    }}
                    className="absolute -left-40 top-[22%] h-[300px] w-[300px] rounded-full border border-[#8a6a48]/10 sm:-left-48 sm:h-[400px] sm:w-[400px] lg:-left-52 lg:h-[440px] lg:w-[440px]"
                />

                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                scale: 0.85,
                            }
                    }
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease,
                    }}
                    className="absolute -left-20 top-[28%] h-[180px] w-[180px] rounded-full border border-[#8a6a48]/10 sm:-left-24 sm:h-[240px] sm:w-[240px] lg:h-[260px] lg:w-[260px]"
                />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-16 lg:pb-20 lg:pt-36">

                {/* =====================================================
                    TOP BAR
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: -12,
                            }
                    }
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease,
                    }}
                    className="border-b border-[#8a6a48]/20 pb-3 sm:pb-4"
                >
                    <div className="flex items-start justify-between gap-5">
                        <div>
                            <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.35em]">
                                00 / Opening
                            </p>

                            <p className="mt-1.5 text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.25em]">
                                The Taste of Inspiration
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-[7px] uppercase tracking-[0.18em] text-stone-400 sm:text-[8px] sm:tracking-[0.25em]">
                                Art · Food · Experience
                            </p>

                            <p className="mt-1.5 text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px]">
                                NL / 2026
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* =====================================================
                    INTRO LABEL
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 12,
                            }
                    }
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.25,
                        ease,
                    }}
                    className="mt-6 flex items-center justify-between gap-4 sm:mt-8"
                >
                    <div className="flex items-center gap-3 sm:gap-4">
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
                                duration: 1,
                                delay: 0.45,
                                ease,
                            }}
                            style={{
                                transformOrigin: 'left',
                            }}
                            className="h-px w-6 bg-[#8a6a48] sm:w-9"
                        />

                        <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.38em]">
                            Food × Art × Inspiration
                        </p>
                    </div>

                    <p className="max-w-[90px] text-right text-[7px] uppercase leading-4 tracking-[0.16em] text-stone-400 sm:max-w-none sm:text-[8px] sm:tracking-[0.22em]">
                        A culinary art experience
                    </p>
                </motion.div>

                {/* =====================================================
                    HERO CONTENT

                    Same content on every screen.
                    Phone = stacked.
                    Desktop = two columns.
                ===================================================== */}
                <div className="mt-9 grid gap-10 sm:mt-12 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 xl:gap-24">

                    {/* =================================================
                        TITLE + TEXT
                    ================================================= */}
                    <motion.div
                        style={{
                            y: contentY,
                        }}
                        className="relative z-10"
                    >
                        {/* TITLE */}
                        <div>
                            <div className="overflow-hidden pb-1 sm:pb-2">
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
                                        duration: 1.1,
                                        delay: 0.3,
                                        ease,
                                    }}
                                    className="font-serif text-[17vw] font-light uppercase leading-[0.82] tracking-[-0.065em] sm:text-[13vw] lg:text-[6.7rem] xl:text-[8rem]"
                                >
                                    The
                                </motion.h1>
                            </div>

                            <div className="overflow-hidden pb-1 sm:pb-2">
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
                                        duration: 1.1,
                                        delay: 0.42,
                                        ease,
                                    }}
                                    className="font-serif text-[17vw] font-light uppercase leading-[0.82] tracking-[-0.065em] sm:text-[13vw] lg:text-[6.7rem] xl:text-[8rem]"
                                >
                                    Taste
                                </motion.h1>
                            </div>

                            <div className="overflow-hidden pb-2 pt-1">
                                <motion.h2
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
                                        duration: 1.1,
                                        delay: 0.54,
                                        ease,
                                    }}
                                    className="font-serif text-[12vw] font-light italic leading-[0.95] tracking-[-0.05em] text-[#8a6a48] sm:text-[10vw] lg:text-[4.8rem] xl:text-[5.8rem]"
                                >
                                    of Inspiration
                                </motion.h2>
                            </div>
                        </div>

                        {/* DIVIDER */}
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
                                duration: 0.9,
                                delay: 0.8,
                                ease,
                            }}
                            style={{
                                transformOrigin: 'left',
                            }}
                            className="mt-6 h-px w-12 bg-[#8a6a48]/50 sm:mt-8 sm:w-16"
                        />

                        {/* TAGLINE */}
                        <motion.p
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
                                delay: 0.85,
                                ease,
                            }}
                            className="mt-5 max-w-md font-serif text-[1.4rem] font-light leading-[1.2] text-[#8a6a48] sm:mt-7 sm:text-3xl"
                        >
                            Where flavour becomes colour,
                            <span className="block italic">
                                and food becomes art.
                            </span>
                        </motion.p>

                        {/* TEASER */}
                        <motion.p
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
                                delay: 0.95,
                                ease,
                            }}
                            className="mt-4 max-w-sm text-[13px] leading-6 text-stone-500 sm:mt-6 sm:text-sm sm:leading-7"
                        >
                            Two creative worlds meet through flavour,
                            colour and feeling.
                        </motion.p>

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
                                delay: 1.05,
                                ease,
                            }}
                            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-9 sm:gap-7"
                        >
                            <a
                                href="/#story"
                                className="group inline-flex items-center gap-3 border-b border-[#25221f] pb-2 text-[8px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48] sm:text-[9px]"
                            >
                                Begin the Story

                                <ArrowDown
                                    size={13}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-y-1"
                                />
                            </a>

                            <Link
                                href="/paintings"
                                className="group inline-flex items-center gap-2.5 text-[8px] font-semibold uppercase tracking-[0.22em] text-stone-400 transition-colors duration-300 hover:text-[#8a6a48] sm:text-[9px]"
                            >
                                The Collection

                                <ArrowUpRight
                                    size={13}
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
                        {/* IMAGE LABEL */}
                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                        opacity: 0,
                                        x: 12,
                                    }
                            }
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.9,
                                ease,
                            }}
                            className="mb-3 flex items-center justify-between sm:mb-4"
                        >
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <span className="text-[8px] font-semibold tracking-[0.25em] text-[#8a6a48]">
                                    01
                                </span>

                                <span className="h-px w-6 bg-[#8a6a48]/40 sm:w-8" />

                                <span className="text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.25em]">
                                    Patrick & Nour
                                </span>
                            </div>

                            <span className="text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.25em]">
                                Portrait
                            </span>
                        </motion.div>

                        <motion.div
                            style={{
                                y: imageY,
                            }}
                        >
                            {/* IMAGE */}
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
                                    duration: 1.3,
                                    delay: 0.4,
                                    ease,
                                }}
                                className="relative overflow-hidden"
                            >
                                <motion.img
                                    initial={
                                        reduceMotion
                                            ? false
                                            : {
                                                scale: 1.08,
                                            }
                                    }
                                    animate={{
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        delay: 0.4,
                                        ease,
                                    }}
                                    src="/images/patrick-nour.jpg"
                                    alt="Patrick and Nour — The Taste of Inspiration"
                                    className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:h-[650px] lg:aspect-auto xl:h-[700px]"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-[#5d4934]/[0.04]" />
                            </motion.div>

                            {/* IMAGE CAPTION */}
                            <motion.div
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            y: 10,
                                        }
                                }
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.2,
                                    ease,
                                }}
                                className="mt-3 flex items-start justify-between gap-5 border-t border-[#8a6a48]/20 pt-3 sm:mt-4 sm:pt-4"
                            >
                                <div>
                                    <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48] sm:text-[8px] sm:tracking-[0.3em]">
                                        Food / Art / Emotion
                                    </p>

                                    <p className="mt-1 font-serif text-[13px] italic text-stone-500 sm:text-sm">
                                        Two passions, one journey.
                                    </p>
                                </div>

                                <p className="text-right text-[7px] uppercase leading-4 tracking-[0.18em] text-stone-400 sm:text-[8px] sm:leading-5 sm:tracking-[0.22em]">
                                    NL
                                    <br />
                                    2026
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* =====================================================
                    NUMBERS
                    Same 3 items on every screen.
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
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 1.2,
                        ease,
                    }}
                    className="relative z-20 mt-14 grid grid-cols-3 gap-3 border-t border-[#8a6a48]/20 pt-6 sm:mt-20 sm:gap-8 sm:pt-7 lg:mt-24"
                >
                    <div>
                        <p className="font-serif text-2xl font-light sm:text-3xl">
                            05
                        </p>

                        <p className="mt-2 max-w-[90px] text-[7px] font-semibold uppercase leading-4 tracking-[0.18em] text-stone-400 sm:max-w-none sm:text-[8px] sm:tracking-[0.28em]">
                            Original Paintings
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="font-serif text-2xl font-light sm:text-3xl">
                            05
                        </p>

                        <p className="mx-auto mt-2 max-w-[90px] text-[7px] font-semibold uppercase leading-4 tracking-[0.18em] text-stone-400 sm:max-w-none sm:text-[8px] sm:tracking-[0.28em]">
                            Culinary Creations
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="font-serif text-2xl font-light italic text-[#8a6a48] sm:text-3xl">
                            One
                        </p>

                        <p className="ml-auto mt-2 max-w-[90px] text-[7px] font-semibold uppercase leading-4 tracking-[0.18em] text-stone-400 sm:max-w-none sm:text-[8px] sm:tracking-[0.28em]">
                            Shared Journey
                        </p>
                    </div>
                </motion.div>

                {/* =====================================================
                    CONTINUE
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
                        duration: 0.9,
                        delay: 1.4,
                    }}
                    className="mt-10 flex justify-center sm:mt-14"
                >
                    <a
                        href="/#story"
                        aria-label="Continue to the story"
                        className="group flex flex-col items-center gap-2.5 sm:gap-3"
                    >
                        <span className="text-[7px] font-semibold uppercase tracking-[0.3em] text-stone-400 transition-colors group-hover:text-[#8a6a48] sm:text-[8px] sm:tracking-[0.35em]">
                            Continue
                        </span>

                        <span className="relative h-9 w-px overflow-hidden bg-stone-300 sm:h-12">
                            <motion.span
                                animate={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            y: [-20, 50],
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
