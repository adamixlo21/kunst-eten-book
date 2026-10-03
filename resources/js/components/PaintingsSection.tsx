import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const paintings = [
    {
        title: 'Beyond the Surface',
        slug: 'beyond-the-surface',
        course: 'The Starters',
        image: '/images/paintings/beyond-the-surface.jpg',
    },
    {
        title: 'Essence',
        slug: 'essence',
        course: 'The Starters',
        image: '/images/paintings/essence.jpg',
    },
    {
        title: 'The Silent Melody',
        slug: 'the-silent-melody',
        course: 'The Main Courses',
        image: '/images/paintings/the-silent-melody.jpg',
    },
    {
        title: 'A Moment to Savour',
        slug: 'a-moment-to-savour',
        course: 'The Main Courses',
        image: '/images/paintings/a-moment-to-savour.jpg',
    },
    {
        title: 'In Bloom',
        slug: 'in-bloom',
        course: 'The Dessert',
        image: '/images/paintings/in-bloom.jpg',
    },
];

export default function PaintingsSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="paintings"
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
                    className="flex items-start justify-between gap-5 border-b border-[#8a6a48]/25 pb-4"
                >
                    <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.35em]">
                            03 / The Collection
                        </p>

                        <p className="mt-1.5 text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                            Five Original Paintings
                        </p>
                    </div>

                    <span className="shrink-0 text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                        01 — 05
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
                    className="py-12 sm:py-16 lg:py-20"
                >
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8">
                        <div>
                            <p className="mb-3 text-[7px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48] sm:mb-5 sm:text-[8px] sm:tracking-[0.35em]">
                                The Art
                            </p>

                            <h2 className="font-serif text-[13vw] font-light leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
                                The
                                <span className="ml-2 italic text-[#8a6a48] sm:ml-4 lg:ml-5">
                                    Collection.
                                </span>
                            </h2>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-5">
                            <span className="h-px w-7 bg-[#8a6a48]/50 sm:w-10" />

                            <p className="text-[7px] uppercase tracking-[0.22em] text-stone-400 sm:text-[8px] sm:tracking-[0.3em]">
                                Food → Feeling → Art
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* =====================================================
                    MOVING GALLERY
                    Same gallery on every device
                ===================================================== */}
                <div className="relative overflow-hidden">

                    {/* EDGE FADES */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-6 bg-gradient-to-r from-[#eee7dc] via-[#eee7dc]/70 to-transparent sm:w-16 lg:w-24" />

                    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-6 bg-gradient-to-l from-[#eee7dc] via-[#eee7dc]/70 to-transparent sm:w-16 lg:w-24" />

                    <motion.div
                        initial={{
                            x: '-50%',
                        }}
                        animate={
                            reduceMotion
                                ? {
                                    x: '-50%',
                                }
                                : {
                                    x: ['-50%', '0%'],
                                }
                        }
                        transition={
                            reduceMotion
                                ? undefined
                                : {
                                    duration: 32,
                                    ease: 'linear',
                                    repeat: Infinity,
                                }
                        }
                        className="flex w-max"
                    >
                        {/* FIRST COPY */}
                        <div className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-8 lg:pr-8">
                            {paintings.map((painting, index) => (
                                <PaintingCard
                                    key={`first-${painting.slug}`}
                                    painting={painting}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* SECOND COPY */}
                        <div className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-8 lg:pr-8">
                            {paintings.map((painting, index) => (
                                <PaintingCard
                                    key={`second-${painting.slug}`}
                                    painting={painting}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
                    BOTTOM
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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.9,
                        ease,
                    }}
                    className="mt-12 border-t border-[#8a6a48]/25 pt-7 sm:mt-16 sm:pt-8 lg:mt-20"
                >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                        <div>
                            <p className="text-[7px] font-semibold uppercase tracking-[0.26em] text-stone-400 sm:text-[8px] sm:tracking-[0.3em]">
                                03 / The Collection
                            </p>

                            <h3 className="mt-3 max-w-xl font-serif text-[1.9rem] font-light leading-[1.05] tracking-[-0.03em] sm:text-4xl">
                                Five moments.
                                <span className="block italic text-[#8a6a48] sm:ml-2 sm:inline">
                                    Five expressions.
                                </span>
                            </h3>
                        </div>

                        <Link
                            href="/paintings"
                            className="group inline-flex w-fit items-center gap-3 border-b border-[#25221f] pb-2 text-[8px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48] sm:tracking-[0.28em]"
                        >
                            Explore All Paintings

                            <ArrowUpRight
                                size={13}
                                strokeWidth={1.4}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* =========================================================
    PAINTING CARD
========================================================= */

function PaintingCard({
                          painting,
                          index,
                      }: {
    painting: (typeof paintings)[number];
    index: number;
}) {
    return (
        <article className="group w-[185px] shrink-0 sm:w-[230px] lg:w-[265px] xl:w-[280px]">
            <Link
                href={`/paintings/${painting.slug}`}
                className="block"
            >
                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e5ded3]">
                    <img
                        src={painting.image}
                        alt={painting.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    {/* NUMBER */}
                    <div className="absolute left-0 top-0 bg-[#eee7dc] px-3 py-2.5 sm:px-4 sm:py-3">
                        <span className="text-[7px] font-semibold tracking-[0.25em] text-[#8a6a48] sm:text-[8px] sm:tracking-[0.3em]">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    {/* HOVER */}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="flex w-full items-center justify-between p-4 text-white sm:p-5">
                            <span className="text-[7px] font-semibold uppercase tracking-[0.22em] sm:text-[8px] sm:tracking-[0.25em]">
                                View Artwork
                            </span>

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.4}
                            />
                        </div>
                    </div>
                </div>

                {/* CAPTION */}
                <div className="mt-3 border-t border-[#8a6a48]/20 pt-3 sm:mt-4 sm:pt-4">
                    <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48] sm:tracking-[0.3em]">
                        {painting.course}
                    </p>

                    <div className="mt-2 flex items-start justify-between gap-3 sm:gap-4">
                        <h3 className="font-serif text-lg font-light leading-tight tracking-[-0.025em] sm:text-2xl">
                            {painting.title}
                        </h3>

                        <ArrowUpRight
                            size={13}
                            strokeWidth={1.3}
                            className="mt-1 shrink-0 text-[#8a6a48] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </Link>
        </article>
    );
}
