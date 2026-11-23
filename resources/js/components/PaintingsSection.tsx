
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const paintings = [
    {
        title: 'Beyond the Surface',
        slug: 'beyond-the-surface',
        course: 'The Starters',
        image: '/images/paintings/beyond-the-surface.webp',
    },
    {
        title: 'Essence',
        slug: 'essence',
        course: 'The Starters',
        image: '/images/paintings/essence.webp',
    },
    {
        title: 'The Silent Melody',
        slug: 'the-silent-melody',
        course: 'The Main Courses',
        image: '/images/paintings/the-silent-melody.webp',
    },
    {
        title: 'A Moment to Savour',
        slug: 'a-moment-to-savour',
        course: 'The Main Courses',
        image: '/images/paintings/a-moment-to-savour.webp',
    },
    {
        title: 'In Bloom',
        slug: 'in-bloom',
        course: 'The Dessert',
        image: '/images/paintings/in-bloom.webp',
    },
];

export default function PaintingsSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="paintings"
            aria-labelledby="paintings-heading"
            className="relative overflow-hidden bg-[#faf8f4] text-[#25221f]"
        >
            <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

                {/* Section header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#70512f]/25 pb-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                        02 / The Collection
                    </p>

                    <span className="text-xs font-medium text-[#564b40]">
                        Five Original Paintings
                    </span>
                </div>

                {/* Main heading */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease }}
                    className="py-12 sm:py-16 lg:py-20"
                >
                    <h2
                        id="paintings-heading"
                        className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[1.05] tracking-[-0.05em]"
                    >
                        The
                        <span className="italic text-[#70512f]">
                            {' '}Collection.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-lg text-base leading-8 text-[#564b40] sm:text-lg">
                        Five original paintings, each with its own
                        character and expression.
                    </p>
                </motion.div>

                {/* Moving artwork gallery */}
                <div className="relative overflow-hidden">

                    {/* Edge fades */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-6 bg-gradient-to-r from-[#faf8f4] via-[#faf8f4]/75 to-transparent sm:w-16 lg:w-24"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-6 bg-gradient-to-l from-[#faf8f4] via-[#faf8f4]/75 to-transparent sm:w-16 lg:w-24"
                    />

                    <motion.div
                        initial={false}
                        animate={
                            reduceMotion
                                ? { x: '-50%' }
                                : { x: ['-50%', '0%'] }
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
                        {/* First gallery copy */}
                        <div className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-8 lg:pr-8">
                            {paintings.map((painting, index) => (
                                <PaintingCard
                                    key={`first-${painting.slug}`}
                                    painting={painting}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Second gallery copy */}
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

                {/* Bottom CTA */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease }}
                    className="mt-12 border-t border-[#70512f]/25 pt-8 sm:mt-16 sm:pt-10 lg:mt-20"
                >
                    <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                Discover the Art
                            </p>

                            <h3 className="mt-3 font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.035em]">
                                Five moments.
                                <span className="block italic text-[#70512f]">
                                    Five expressions.
                                </span>
                            </h3>
                        </div>

                        {/* Visible main button */}
                        <Link
                            href="/paintings"
                            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#25221f] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#70512f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f] sm:w-auto"
                        >
                            Explore All Paintings

                            <ArrowUpRight
                                size={19}
                                strokeWidth={1.7}
                                aria-hidden="true"
                                className="shrink-0 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function PaintingCard({
                          painting,
                          index,
                      }: {
    painting: (typeof paintings)[number];
    index: number;
}) {
    return (
        <article className="w-[195px] shrink-0 sm:w-[235px] lg:w-[265px] xl:w-[280px]">
            <Link
                href={`/paintings/${painting.slug}`}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
            >
                {/* Artwork image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#eee7dc]">
                    <img
                        src={painting.image}
                        alt={painting.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.035]"
                    />

                    {/* Artwork number */}
                    <div className="absolute left-0 top-0 bg-[#faf8f4] px-3 py-2.5 sm:px-4 sm:py-3">
                        <span className="font-serif text-base text-[#70512f] sm:text-lg">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Hover label */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    >
                        <div className="flex w-full items-center justify-between p-4 text-white sm:p-5">
                            <span className="text-sm font-semibold">
                                View Artwork
                            </span>

                            <ArrowUpRight
                                size={18}
                                strokeWidth={1.6}
                            />
                        </div>
                    </div>
                </div>

                {/* Artwork caption */}
                <div className="mt-4 border-t border-[#70512f]/20 pt-4">
                    <p className="text-xs font-semibold text-[#70512f]">
                        {painting.course}
                    </p>

                    <div className="mt-2 flex items-start justify-between gap-3">
                        <h3 className="font-serif text-xl font-light leading-tight tracking-[-0.025em] text-[#25221f] sm:text-2xl">
                            {painting.title}
                        </h3>

                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.5}
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-[#70512f] transition-transform motion-safe:group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </Link>
        </article>
    );
}
