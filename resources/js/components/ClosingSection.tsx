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
                SUBTLE BACKGROUND ART
            ===================================================== */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-48 top-20 h-[400px] w-[400px] rounded-full border border-[#8a6a48]/10" />

                <div className="absolute -right-20 top-40 h-[220px] w-[220px] rounded-full border border-[#8a6a48]/10" />

                <div className="absolute bottom-0 left-[15%] h-32 w-32 rounded-full bg-[#8a6a48]/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">

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
                            05 / The Invitation
                        </span>

                        <span className="hidden h-px w-10 bg-[#8a6a48]/40 sm:block" />

                        <span className="hidden text-[9px] uppercase tracking-[0.28em] text-stone-400 sm:block">
                            The Taste of Inspiration
                        </span>
                    </div>

                    <span className="text-[8px] uppercase tracking-[0.28em] text-stone-400">
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
                                y: 20,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.9,
                        ease,
                    }}
                    className="pt-10 lg:pt-12"
                >
                    <div className="flex items-center gap-4">
                        <span className="h-px w-10 bg-[#8a6a48]" />

                        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            From our story to yours
                        </p>
                    </div>
                </motion.div>

                {/* =====================================================
                    MAIN TITLE
                ===================================================== */}
                <div className="py-9 lg:py-12">
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 35,
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
                    >
                        <h2 className="font-serif text-[12vw] font-light leading-[0.95] tracking-[-0.04em] sm:text-[10vw] lg:text-[5.5rem] xl:text-[6.5rem]">
                            The story continues
                        </h2>

                        <h2 className="mt-1 font-serif text-[12vw] font-light italic leading-[0.95] tracking-[-0.035em] text-[#8a6a48] sm:text-[10vw] lg:ml-[12%] lg:text-[5.5rem] xl:text-[6.5rem]">
                            with you.
                        </h2>
                    </motion.div>
                </div>

                {/* =====================================================
                    CLOSING CONTENT
                ===================================================== */}
                <div className="grid gap-10 border-t border-[#8a6a48]/25 pt-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">

                    {/* LEFT */}
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
                    >
                        <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#8a6a48]">
                            05.1 / Your Experience
                        </p>

                        <p className="mt-4 text-[8px] uppercase leading-6 tracking-[0.25em] text-stone-400">
                            Look
                            <br />
                            Feel
                            <br />
                            Taste
                            <br />
                            Create
                        </p>
                    </motion.div>

                    {/* RIGHT */}
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
                            duration: 1,
                            delay: 0.1,
                            ease,
                        }}
                    >
                        {/* QUOTE */}
                        <p className="max-w-2xl font-serif text-2xl font-light leading-[1.2] tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                            Where flavour becomes colour,

                            <span className="block italic text-[#8a6a48]">
                                and food becomes art.
                            </span>
                        </p>

                        {/* SHORT CLOSING */}
                        <p className="mt-5 max-w-md text-sm leading-7 text-stone-500">
                            Take your time. Look closer. Feel something.
                            Let the experience become your own.
                        </p>

                        {/* ACTIONS */}
                        <div className="mt-8 flex flex-wrap items-center gap-7">
                            <Link
                                href="/paintings"
                                className="group inline-flex items-center gap-4 border-b border-[#25221f] pb-2 text-[9px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48]"
                            >
                                Explore the Paintings

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>

                            <a
                                href="#book"
                                className="group inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-stone-400 transition-colors duration-300 hover:text-[#8a6a48]"
                            >
                                Discover the Book

                                <ArrowUpRight
                                    size={14}
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
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                    }}
                    className="mt-12 flex items-center justify-between border-t border-[#8a6a48]/20 pt-5 lg:mt-16"
                >
                    <span className="text-[7px] uppercase tracking-[0.3em] text-stone-400">
                        05 / The Invitation
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.3em] text-[#8a6a48]">
                        Food · Art · Inspiration
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
