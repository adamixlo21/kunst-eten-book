import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ClosingSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="invitation"
            className="relative overflow-hidden bg-[#eee6da] text-[#25221f]"
        >
            {/* =====================================================
                BACKGROUND ART
                Same decorative elements on every screen
            ===================================================== */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 top-24 h-[260px] w-[260px] rounded-full border border-[#8a6a48]/10 sm:-right-44 sm:h-[340px] sm:w-[340px] lg:-right-48 lg:top-20 lg:h-[400px] lg:w-[400px]" />

                <div className="absolute -right-20 top-40 h-[150px] w-[150px] rounded-full border border-[#8a6a48]/10 sm:h-[190px] sm:w-[190px] lg:h-[220px] lg:w-[220px]" />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">

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
                    className="flex items-start justify-between gap-5 border-b border-[#8a6a48]/25 pb-4"
                >
                    <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.35em]">
                            05 / The Invitation
                        </p>

                        <p className="mt-1.5 text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                            The Taste of Inspiration
                        </p>
                    </div>

                    <span className="shrink-0 text-right text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                        The Closing
                    </span>
                </motion.div>

                {/* =====================================================
                    INTRO
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
                    className="pt-8 sm:pt-10 lg:pt-12"
                >
                    <div className="flex items-center gap-3 sm:gap-4">
                        <span className="h-px w-7 bg-[#8a6a48] sm:w-10" />

                        <p className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[8px] sm:tracking-[0.35em]">
                            From our story to yours
                        </p>
                    </div>
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
                                y: 25,
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
                        duration: 0.9,
                        ease,
                    }}
                    className="py-8 sm:py-10 lg:py-12"
                >
                    <h2 className="font-serif text-[11.5vw] font-light leading-[0.95] tracking-[-0.04em] sm:text-[9vw] lg:text-[5.5rem] xl:text-[6.5rem]">
                        The story continues
                    </h2>

                    <h2 className="mt-1 font-serif text-[11.5vw] font-light italic leading-[0.95] tracking-[-0.035em] text-[#8a6a48] sm:text-[9vw] lg:ml-[12%] lg:text-[5.5rem] xl:text-[6.5rem]">
                        with you.
                    </h2>
                </motion.div>

                {/* =====================================================
                    CONTENT

                    Same content on every device.
                    Phone = stacked
                    Desktop = two columns
                ===================================================== */}
                <div className="grid gap-7 border-t border-[#8a6a48]/25 pt-7 sm:gap-10 sm:pt-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">

                    {/* =================================================
                        EXPERIENCE
                    ================================================= */}
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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                            ease,
                        }}
                    >
                        <p className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[8px] sm:tracking-[0.32em]">
                            05.1 / Your Experience
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-5 lg:block">
                            <span className="text-[8px] uppercase tracking-[0.22em] text-stone-400 sm:tracking-[0.25em]">
                                Look
                            </span>

                            <span className="text-[#8a6a48]/40 lg:hidden">
                                ·
                            </span>

                            <span className="text-[8px] uppercase tracking-[0.22em] text-stone-400 sm:tracking-[0.25em] lg:block lg:mt-2">
                                Feel
                            </span>

                            <span className="text-[#8a6a48]/40 lg:hidden">
                                ·
                            </span>

                            <span className="text-[8px] uppercase tracking-[0.22em] text-stone-400 sm:tracking-[0.25em] lg:block lg:mt-2">
                                Taste
                            </span>

                            <span className="text-[#8a6a48]/40 lg:hidden">
                                ·
                            </span>

                            <span className="text-[8px] uppercase tracking-[0.22em] text-stone-400 sm:tracking-[0.25em] lg:block lg:mt-2">
                                Create
                            </span>
                        </div>
                    </motion.div>

                    {/* =================================================
                        CLOSING MESSAGE
                    ================================================= */}
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
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.05,
                            ease,
                        }}
                    >
                        <p className="max-w-2xl font-serif text-2xl font-light leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                            Where flavour becomes colour,

                            <span className="block italic text-[#8a6a48]">
                                and food becomes art.
                            </span>
                        </p>

                        <p className="mt-4 max-w-md text-[13px] leading-6 text-stone-500 sm:mt-5 sm:text-sm sm:leading-7">
                            Take your time. Look closer. Feel something.
                            Let the experience become your own.
                        </p>

                        {/* ACTIONS */}
                        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-8 sm:gap-x-7">
                            <Link
                                href="/paintings"
                                className="group inline-flex items-center gap-3 border-b border-[#25221f] pb-2 text-[8px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48] sm:gap-4 sm:text-[9px] sm:tracking-[0.25em]"
                            >
                                Explore the Paintings

                                <ArrowUpRight
                                    size={13}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>

                            <a
                                href="#book"
                                className="group inline-flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-stone-400 transition-colors duration-300 hover:text-[#8a6a48] sm:gap-4 sm:text-[9px] sm:tracking-[0.25em]"
                            >
                                Discover the Book

                                <ArrowUpRight
                                    size={13}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
                    FINAL LINE
                ===================================================== */}
                <div className="mt-10 flex items-center justify-between gap-5 border-t border-[#8a6a48]/20 pt-5 sm:mt-12 lg:mt-16">
                    <span className="text-[6px] uppercase tracking-[0.22em] text-stone-400 sm:text-[7px] sm:tracking-[0.3em]">
                        05 / The Invitation
                    </span>

                    <span className="text-right text-[6px] uppercase tracking-[0.22em] text-[#8a6a48] sm:text-[7px] sm:tracking-[0.3em]">
                        Food · Art · Inspiration
                    </span>
                </div>
            </div>
        </section>
    );
}
