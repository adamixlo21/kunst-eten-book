
import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, BookOpen } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#f3eee6] text-[#25221f]"
        >
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full border border-[#8a6a48]/10" />
                <div className="absolute -left-20 top-1/3 h-[260px] w-[260px] rounded-full border border-[#8a6a48]/10" />
                <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#e9dfd0]/50 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-16 lg:pb-20 lg:pt-32">
                {/* Top label */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/20 pb-4"
                >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                        The Taste of Inspiration
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500">
                        An Art &amp; Culinary Book
                    </span>
                </motion.div>

                {/* Main hero */}
                <div className="grid items-center gap-12 py-12 sm:py-16 lg:min-h-[650px] lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-12">
                    {/* Left: Book introduction */}
                    <div className="relative z-10 order-1">
                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 15 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease,
                            }}
                            className="mb-7 flex items-center gap-3"
                        >
                            <BookOpen
                                size={16}
                                strokeWidth={1.5}
                                className="text-[#8a6a48]"
                            />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a6a48]">
                                Discover the Book
                            </p>
                        </motion.div>

                        <motion.h1
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 30 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease,
                            }}
                            className="max-w-[700px] font-serif text-[clamp(3.5rem,6.3vw,7.5rem)] font-light leading-[0.98] tracking-[-0.055em]"
                        >
                            Five Paintings. Five Dishes.
                            <span className="block italic text-[#8a6a48]">
                                One Book.
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : { scaleX: 0 }
                            }
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease,
                            }}
                            style={{ transformOrigin: 'left' }}
                            className="mt-8 h-px w-16 bg-[#8a6a48]"
                        />

                        <motion.p
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 15 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.65,
                                ease,
                            }}
                            className="mt-6 max-w-[470px] text-sm leading-7 text-[#746b61] sm:text-base sm:leading-8"
                        >
                            Discover The Taste of Inspiration, a unique book
                            bringing together Nour&apos;s original paintings
                            and Patrick&apos;s culinary creations in one shared
                            story.
                        </motion.p>

                        {/* Main action */}
                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 15 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.8,
                                ease,
                            }}
                            className="mt-9 flex flex-wrap items-center gap-6"
                        >
                            <a
                                href="/#book"
                                className="group inline-flex min-h-13 items-center justify-center gap-4 bg-[#25221f] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#8a6a48]"
                            >
                                Join the Waitlist
                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={1.5}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>

                            <a
                                href="/#story"
                                className="group inline-flex items-center gap-2 border-b border-[#8a6a48]/50 pb-2 text-[11px] font-medium tracking-[0.06em] text-[#746b61] transition-colors hover:text-[#8a6a48]"
                            >
                                Our Story
                                <ArrowDown size={15} strokeWidth={1.5} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Book cover */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : { opacity: 0, y: 40, scale: 0.96 }
                        }
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.35,
                            ease,
                        }}
                        className="relative order-2 mx-auto flex w-full max-w-[570px] flex-col items-center justify-center"
                    >
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9c8ae]/40 blur-[70px]" />

                        <div className="relative z-10 flex w-full items-center justify-center">
                            <img
                                src="/images/paintings/taste-of-inspiration-cover.webp"
                                alt="The Taste of Inspiration concept book cover featuring five original artworks"
                                fetchPriority="high"
                                loading="eager"
                                decoding="async"
                                className="h-auto max-h-[490px] w-auto max-w-full object-contain drop-shadow-[0_25px_30px_rgba(50,35,20,0.17)] sm:max-h-[580px] lg:max-h-[680px]"
                            />
                        </div>

                        <p className="relative z-10 mt-4 text-center text-[10px] tracking-[0.08em] text-[#746b61]">
                            Concept cover — final design may vary.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#8a6a48]/20 pt-5">
                    <p className="font-serif text-sm italic text-[#746b61]">
                        A story told through art and food.
                    </p>

                    <Link
                        href="/paintings"
                        className="group inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:text-[#25221f]"
                    >
                        Discover the Artworks
                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
