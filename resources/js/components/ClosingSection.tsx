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
                BACKGROUND ART — DESKTOP ONLY
            ===================================================== */}
            <div className="pointer-events-none absolute inset-0 hidden md:block">
                <div className="absolute -right-48 top-20 h-[400px] w-[400px] rounded-full border border-[#8a6a48]/10" />

                <div className="absolute -right-20 top-40 h-[220px] w-[220px] rounded-full border border-[#8a6a48]/10" />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 py-14 sm:px-8 md:px-10 md:py-20 lg:px-16">

                {/* =====================================================
                    HEADER
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
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease,
                    }}
                    className="flex items-center justify-between border-b border-[#8a6a48]/25 pb-4"
                >
                    <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                        05 / The Invitation
                    </span>

                    <span className="hidden text-[8px] uppercase tracking-[0.28em] text-stone-400 md:block">
                        The Closing
                    </span>
                </motion.div>

                {/* =====================================================
                    MOBILE
                ===================================================== */}
                <div className="md:hidden">
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
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.9,
                            ease,
                        }}
                        className="py-12"
                    >
                        {/* TITLE */}
                        <h2 className="font-serif text-[13vw] font-light leading-[0.95] tracking-[-0.045em]">
                            The story
                            <br />
                            continues
                        </h2>

                        <p className="mt-1 font-serif text-[13vw] font-light italic leading-[0.95] tracking-[-0.04em] text-[#8a6a48]">
                            with you.
                        </p>

                        {/* SMALL DIVIDER */}
                        <div className="my-8 h-px w-10 bg-[#8a6a48]" />

                        {/* TAGLINE */}
                        <p className="max-w-[280px] font-serif text-xl font-light leading-[1.25]">
                            Where flavour becomes colour,
                            <span className="block italic text-[#8a6a48]">
                                and food becomes art.
                            </span>
                        </p>

                        {/* LINK */}
                        <Link
                            href="/paintings"
                            className="group mt-9 inline-flex items-center gap-3 border-b border-[#25221f] pb-2 text-[8px] font-semibold uppercase tracking-[0.25em]"
                        >
                            Explore the Paintings

                            <ArrowUpRight
                                size={13}
                                strokeWidth={1.5}
                            />
                        </Link>
                    </motion.div>
                </div>

                {/* =====================================================
                    DESKTOP
                ===================================================== */}
                <div className="hidden md:block">

                    {/* INTRO */}
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
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.9,
                            ease,
                        }}
                        className="pt-12"
                    >
                        <div className="flex items-center gap-4">
                            <span className="h-px w-10 bg-[#8a6a48]" />

                            <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                                From our story to yours
                            </p>
                        </div>
                    </motion.div>

                    {/* TITLE */}
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
                        className="py-12"
                    >
                        <h2 className="font-serif text-[9vw] font-light leading-[0.95] tracking-[-0.04em] lg:text-[5.5rem] xl:text-[6.5rem]">
                            The story continues
                        </h2>

                        <h2 className="mt-1 ml-[12%] font-serif text-[9vw] font-light italic leading-[0.95] tracking-[-0.035em] text-[#8a6a48] lg:text-[5.5rem] xl:text-[6.5rem]">
                            with you.
                        </h2>
                    </motion.div>

                    {/* CONTENT */}
                    <div className="grid grid-cols-[0.65fr_1.35fr] gap-16 border-t border-[#8a6a48]/25 pt-8">

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
                            viewport={{ once: true }}
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
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                ease,
                            }}
                        >
                            <p className="max-w-2xl font-serif text-3xl font-light leading-[1.2] tracking-[-0.03em] lg:text-4xl">
                                Where flavour becomes colour,

                                <span className="block italic text-[#8a6a48]">
                                    and food becomes art.
                                </span>
                            </p>

                            <p className="mt-5 max-w-md text-sm leading-7 text-stone-500">
                                Take your time. Look closer. Feel something.
                                Let the experience become your own.
                            </p>

                            <div className="mt-8 flex items-center gap-7">
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
                                    />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* FINAL LINE */}
                    <div className="mt-16 flex items-center justify-between border-t border-[#8a6a48]/20 pt-5">
                        <span className="text-[7px] uppercase tracking-[0.3em] text-stone-400">
                            05 / The Invitation
                        </span>

                        <span className="text-[7px] uppercase tracking-[0.3em] text-[#8a6a48]">
                            Food · Art · Inspiration
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
