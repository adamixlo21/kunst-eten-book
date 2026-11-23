
import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, BookOpen } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="relative overflow-hidden bg-[#f3eee6] text-[#25221f]"
        >
            {/* Decorative background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full border border-[#70512f]/10" />
                <div className="absolute -left-20 top-1/3 h-[260px] w-[260px] rounded-full border border-[#70512f]/10" />
                <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#e9dfd0]/50 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-16 lg:pb-20 lg:pt-32">
                {/* Top information */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#70512f]/25 pb-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                        The Taste of Inspiration
                    </span>

                    <span className="text-xs font-medium text-[#564b40]">
                        An Art &amp; Culinary Book
                    </span>
                </div>

                {/* Main content */}
                <div className="grid items-center gap-12 py-12 sm:py-16 lg:min-h-[650px] lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-14">
                    {/* Left: Introduction */}
                    <div className="relative z-10 order-1">
                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 12 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                                ease,
                            }}
                            className="mb-6 flex items-center gap-3"
                        >
                            <BookOpen
                                size={19}
                                strokeWidth={1.7}
                                aria-hidden="true"
                                className="text-[#70512f]"
                            />

                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                Discover the Book
                            </p>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            id="hero-heading"
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 20 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 0.2,
                                ease,
                            }}
                            className="max-w-[700px] font-serif text-[clamp(3rem,6.3vw,7.5rem)] font-light leading-[1.03] tracking-[-0.05em]"
                        >
                            Five Paintings.
                            <span className="block">Five Dishes.</span>
                            <span className="block italic text-[#70512f]">
                                One Book.
                            </span>
                        </motion.h1>

                        {/* Decorative line */}
                        <div
                            aria-hidden="true"
                            className="mt-8 h-px w-16 bg-[#70512f]"
                        />

                        {/* Introduction */}
                        <motion.p
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 15 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.45,
                                ease,
                            }}
                            className="mt-7 max-w-[490px] text-base leading-8 text-[#564b40] sm:text-lg sm:leading-9"
                        >
                            Discover The Taste of Inspiration, a unique
                            book bringing together Nour&apos;s original
                            paintings and Patrick&apos;s culinary
                            creations in one shared story.
                        </motion.p>

                        <p className="mt-5 max-w-[470px] text-base leading-8 text-[#564b40]">
                            The book is coming soon. Join the waitlist
                            to be among the first to hear when it
                            becomes available.
                        </p>

                        {/* Actions */}
                        <motion.div
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
                            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5"
                        >
                            <a
                                href="#book"
                                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#25221f] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#70512f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                            >
                                Join the Waitlist

                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1.7}
                                    aria-hidden="true"
                                    className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                                />
                            </a>

                            <a
                                href="#story"
                                className="group inline-flex min-h-11 items-center gap-2 border-b border-[#70512f] text-sm font-semibold text-[#70512f] transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                            >
                                Our Story

                                <ArrowDown
                                    size={17}
                                    strokeWidth={1.7}
                                    aria-hidden="true"
                                />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Book cover */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 30,
                                    scale: 0.97,
                                }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease,
                        }}
                        className="relative order-2 mx-auto flex w-full max-w-[570px] flex-col items-center justify-center"
                    >
                        {/* Soft glow */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9c8ae]/40 blur-[70px]"
                        />

                        <div className="relative z-10 flex w-full items-center justify-center">
                            <img
                                src="/images/paintings/taste-of-inspiration-cover.webp"
                                alt="Concept cover for The Taste of Inspiration"
                                fetchPriority="high"
                                loading="eager"
                                decoding="async"
                                className="h-auto max-h-[490px] w-auto max-w-full object-contain drop-shadow-[0_25px_30px_rgba(50,35,20,0.17)] sm:max-h-[580px] lg:max-h-[680px]"
                            />
                        </div>

                        <p className="relative z-10 mt-5 text-center text-sm text-[#564b40]">
                            Concept cover — final design may vary.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom strip */}
                <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#70512f]/25 pt-6">
                    <p className="font-serif text-base italic text-[#564b40]">
                        A story told through art and food.
                    </p>

                    <Link
                        href="/paintings"
                        className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#70512f] transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                    >
                        Discover the Artworks

                        <ArrowUpRight
                            size={17}
                            strokeWidth={1.7}
                            aria-hidden="true"
                            className="transition-transform motion-safe:group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
