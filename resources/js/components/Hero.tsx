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
        [0, reduceMotion ? 0 : 70],
    );

    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, reduceMotion ? 0 : -30],
    );

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-[#f3eee6] text-[#25221f]"
        >
            {/* =====================================================
                BACKGROUND DETAILS
            ===================================================== */}
            <div className="pointer-events-none absolute inset-0">
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
                    className="absolute -left-52 top-[22%] h-[440px] w-[440px] rounded-full border border-[#8a6a48]/10"
                />

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
                        duration: 1.6,
                        delay: 0.6,
                        ease,
                    }}
                    className="absolute -left-24 top-[29%] h-[260px] w-[260px] rounded-full border border-[#8a6a48]/10"
                />

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
                    className="absolute right-[7%] top-[8%] hidden h-28 w-px bg-[#8a6a48]/15 lg:block"
                />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-6 pb-16 pt-28 sm:px-8 lg:px-16 lg:pb-20 lg:pt-36">

                {/* =====================================================
                    TOP EDITORIAL BAR
                ===================================================== */}
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
                    className="flex items-center justify-between border-b border-[#8a6a48]/20 pb-4"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            00 / Opening
                        </span>

                        <span className="hidden h-px w-10 bg-[#8a6a48]/40 sm:block" />

                        <span className="hidden text-[8px] uppercase tracking-[0.28em] text-stone-400 sm:block">
                            The Taste of Inspiration
                        </span>
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="hidden text-[8px] uppercase tracking-[0.28em] text-stone-400 md:block">
                            Art · Food · Experience
                        </span>

                        <span className="text-[8px] uppercase tracking-[0.28em] text-stone-400">
                            NL / 2026
                        </span>
                    </div>
                </motion.div>

                {/* =====================================================
                    SMALL INTRO LABEL
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
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.25,
                        ease,
                    }}
                    className="mt-8 flex items-center justify-between"
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
                                duration: 1,
                                delay: 0.5,
                                ease,
                            }}
                            style={{
                                transformOrigin: 'left',
                            }}
                            className="h-px w-9 bg-[#8a6a48]"
                        />

                        <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#8a6a48]">
                            Food × Art × Inspiration
                        </p>
                    </div>

                    <p className="hidden text-[8px] uppercase tracking-[0.28em] text-stone-400 lg:block">
                        A culinary art experience
                    </p>
                </motion.div>

                {/* =====================================================
                    MAIN HERO
                    CLEAN TWO-COLUMN COMPOSITION
                ===================================================== */}
                <div className="mt-12 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 xl:gap-24">

                    {/* =================================================
                        LEFT — TITLE + CONTENT
                    ================================================= */}
                    <motion.div
                        style={{
                            y: contentY,
                        }}
                        className="relative z-10"
                    >
                        {/* TITLE */}
                        <div>
                            <div className="overflow-hidden pb-2">
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
                                        duration: 1.15,
                                        delay: 0.3,
                                        ease,
                                    }}
                                    className="font-serif text-[18vw] font-light uppercase leading-[0.78] tracking-[-0.07em] sm:text-[13vw] lg:text-[6.7rem] xl:text-[8rem]"
                                >
                                    The
                                </motion.h1>
                            </div>

                            <div className="overflow-hidden pb-2">
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
                                        duration: 1.15,
                                        delay: 0.45,
                                        ease,
                                    }}
                                    className="font-serif text-[18vw] font-light uppercase leading-[0.78] tracking-[-0.07em] sm:text-[13vw] lg:text-[6.7rem] xl:text-[8rem]"
                                >
                                    Taste
                                </motion.h1>
                            </div>

                            <div className="overflow-hidden pb-3 pt-1">
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
                                        duration: 1.15,
                                        delay: 0.6,
                                        ease,
                                    }}
                                    className="font-serif text-[13vw] font-light italic leading-[0.9] tracking-[-0.06em] text-[#8a6a48] sm:text-[10vw] lg:text-[4.8rem] xl:text-[5.8rem]"
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
                                duration: 1,
                                delay: 1,
                                ease,
                            }}
                            style={{
                                transformOrigin: 'left',
                            }}
                            className="mt-8 h-px w-16 bg-[#8a6a48]/50"
                        />

                        {/* TAGLINE */}
                        <motion.p
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
                                delay: 1,
                                ease,
                            }}
                            className="mt-7 max-w-md font-serif text-2xl font-light leading-[1.25] text-[#8a6a48] sm:text-3xl"
                        >
                            Where flavour becomes colour,
                            <span className="block italic">
                                and food becomes art.
                            </span>
                        </motion.p>

                        {/* SHORT TEASER */}
                        <motion.p
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
                                delay: 1.15,
                                ease,
                            }}
                            className="mt-6 max-w-sm text-sm leading-7 text-stone-500"
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
                                        y: 20,
                                    }
                            }
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 1.3,
                                ease,
                            }}
                            className="mt-9 flex flex-wrap items-center gap-7"
                        >
                            <a
                                href="/#story"
                                className="group inline-flex items-center gap-4 border-b border-[#25221f] pb-2 text-[9px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48]"
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
                                className="group inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-stone-400 transition-colors duration-300 hover:text-[#8a6a48]"
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
                        RIGHT — IMAGE
                    ================================================= */}
                    <div className="relative">
                        {/* IMAGE NUMBER */}
                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                        opacity: 0,
                                        x: 15,
                                    }
                            }
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 1.2,
                                ease,
                            }}
                            className="mb-4 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[8px] font-semibold tracking-[0.28em] text-[#8a6a48]">
                                    01
                                </span>

                                <span className="h-px w-8 bg-[#8a6a48]/40" />

                                <span className="text-[8px] uppercase tracking-[0.25em] text-stone-400">
                                    Patrick & Nour
                                </span>
                            </div>

                            <span className="text-[8px] uppercase tracking-[0.25em] text-stone-400">
                                Portrait
                            </span>
                        </motion.div>

                        <motion.div
                            style={{
                                y: imageY,
                            }}
                        >
                            {/* IMAGE REVEAL */}
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
                                    delay: 0.45,
                                    ease,
                                }}
                                className="relative overflow-hidden"
                            >
                                <motion.img
                                    initial={
                                        reduceMotion
                                            ? false
                                            : {
                                                scale: 1.1,
                                            }
                                    }
                                    animate={{
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: 0.45,
                                        ease,
                                    }}
                                    src="/images/patrick-nour.jpg"
                                    alt="Patrick and Nour — The Taste of Inspiration"
                                    className="h-[480px] w-full object-cover sm:h-[600px] lg:h-[650px] xl:h-[700px]"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-[#5d4934]/[0.04]" />
                            </motion.div>

                            {/* CAPTION — BELOW IMAGE, NOT OVER IT */}
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
                                    delay: 1.5,
                                    ease,
                                }}
                                className="mt-4 flex items-start justify-between gap-6 border-t border-[#8a6a48]/20 pt-4"
                            >
                                <div>
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                        Food / Art / Emotion
                                    </p>

                                    <p className="mt-1 font-serif text-sm italic text-stone-500">
                                        Two passions, one journey.
                                    </p>
                                </div>

                                <p className="text-right text-[8px] uppercase leading-5 tracking-[0.22em] text-stone-400">
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
                        delay: 1.5,
                        ease,
                    }}
                    className="relative z-20 mt-20 grid gap-8 border-t border-[#8a6a48]/20 pt-7 sm:grid-cols-3 lg:mt-24"
                >
                    <div>
                        <p className="font-serif text-3xl font-light">
                            05
                        </p>

                        <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                            Original Paintings
                        </p>
                    </div>

                    <div className="sm:text-center">
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
                        duration: 1,
                        delay: 1.8,
                    }}
                    className="mt-14 flex justify-center"
                >
                    <a
                        href="/#story"
                        aria-label="Continue to the story"
                        className="group flex flex-col items-center gap-3"
                    >
                        <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-stone-400 transition-colors group-hover:text-[#8a6a48]">
                            Continue
                        </span>

                        <span className="relative h-12 w-px overflow-hidden bg-stone-300">
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
