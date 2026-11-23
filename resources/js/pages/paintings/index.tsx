
import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookCartProvider } from '@/components/BookCartContext';
import BookCart from '@/components/BookCart';

interface Painting {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    image: string | null;
    starting_price: string | number;
    bidding_open: boolean;
    sort_order: number;
}

interface Props {
    paintings: Painting[];
}

const paintingImages: Record<string, string> = {
    'beyond-the-surface':
        '/images/paintings/beyond-the-surface.webp',
    'essence':
        '/images/paintings/essence.webp',
    'the-silent-melody':
        '/images/paintings/the-silent-melody.webp',
    'a-moment-to-savour':
        '/images/paintings/a-moment-to-savour.webp',
    'in-bloom':
        '/images/paintings/in-bloom.webp',
};

const ease = [0.16, 1, 0.3, 1] as const;

function formatPrice(price: string | number) {
    const amount = Number(price);

    if (!Number.isFinite(amount)) {
        return 'Price on request';
    }

    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

function getPaintingImage(painting: Painting): string | null {
    const staticImage = paintingImages[painting.slug];

    if (staticImage) {
        return staticImage;
    }

    const image = painting.image?.trim();

    if (!image) {
        return null;
    }

    if (
        image.startsWith('https://') ||
        image.startsWith('http://') ||
        image.startsWith('/')
    ) {
        return image;
    }

    if (image.startsWith('storage/')) {
        return `/${image}`;
    }

    return `/storage/${image}`;
}

export default function PaintingsIndex({ paintings }: Props) {
    const reduceMotion = useReducedMotion();

    const sortedPaintings = [...paintings].sort(
        (a, b) => a.sort_order - b.sort_order
    );

    return (
        <BookCartProvider>
            <Head>
                <title>
                    The Collection | The Taste of Inspiration
                </title>

                <meta
                    head-key="description"
                    name="description"
                    content="Explore five original paintings by Nour, featured in The Taste of Inspiration. Discover a unique collection where art, creativity and gastronomy meet."
                />
            </Head>

            <Navbar />

            <main className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#25221f]">
                {/* COLLECTION - NO INTRO SECTION */}
                <section
                    id="collection"
                    aria-labelledby="collection-heading"
                    className="scroll-mt-24"
                >
                    <div className="mx-auto max-w-[1300px] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-28 lg:pt-36">

                        {/* Collection heading */}
                        <div className="mb-12 flex flex-wrap items-end justify-between gap-5 border-b border-[#70512f]/25 pb-7 sm:mb-16">
                            <div>
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                    The Taste of Inspiration
                                </p>

                                <h1
                                    id="collection-heading"
                                    className="font-serif text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.045em]"
                                >
                                    Original
                                    <span className="italic text-[#70512f]">
                                        {' '}Works.
                                    </span>
                                </h1>
                            </div>

                            <p className="pb-1 text-sm font-medium text-[#564b40]">
                                {String(sortedPaintings.length).padStart(2, '0')}{' '}
                                {sortedPaintings.length === 1
                                    ? 'Artwork'
                                    : 'Artworks'}
                            </p>
                        </div>

                        {sortedPaintings.length > 0 ? (
                            /* Gallery */
                            <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16 lg:gap-x-14 lg:gap-y-20">
                                {sortedPaintings.map((painting, index) => {
                                    const artworkImage = getPaintingImage(painting);
                                    const artworkUrl = `/paintings/${painting.slug}`;

                                    return (
                                        <motion.article
                                            key={painting.id}
                                            initial={
                                                reduceMotion
                                                    ? false
                                                    : { opacity: 0, y: 24 }
                                            }
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.1,
                                            }}
                                            transition={{
                                                duration: 0.75,
                                                delay: reduceMotion
                                                    ? 0
                                                    : (index % 2) * 0.12,
                                                ease,
                                            }}
                                            className="group min-w-0"
                                        >
                                            {/* Painting image */}
                                            <Link
                                                href={artworkUrl}
                                                aria-label={`View ${painting.title}`}
                                                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                            >
                                                <div className="relative aspect-[4/5] overflow-hidden bg-[#e8dfd2]">
                                                    {artworkImage ? (
                                                        <img
                                                            src={artworkImage}
                                                            alt={painting.title}
                                                            loading="lazy"
                                                            decoding="async"
                                                            className="h-full w-full object-contain transition-transform duration-700 motion-safe:group-hover:scale-[1.035] motion-safe:group-focus-within:scale-[1.035]"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-3 text-center">
                                                            <span className="font-serif text-4xl text-[#70512f] sm:text-6xl">
                                                                {String(index + 1).padStart(2, '0')}
                                                            </span>

                                                            <span className="text-xs font-medium text-[#564b40]">
                                                                Artwork Coming Soon
                                                            </span>
                                                        </div>
                                                    )}

                                                    {/* Number */}
                                                    <div className="absolute left-0 top-0 bg-[#faf8f4] px-3 py-2.5 sm:px-5 sm:py-4">
                                                        <span className="font-serif text-lg text-[#70512f] sm:text-2xl">
                                                            {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                    </div>

                                                    {/* Hover action */}
                                                    <div
                                                        aria-hidden="true"
                                                        className="absolute bottom-0 right-0 hidden h-12 w-12 translate-y-full items-center justify-center bg-[#25221f] text-white transition-transform duration-500 group-hover:translate-y-0 group-focus-within:translate-y-0 sm:flex"
                                                    >
                                                        <ArrowUpRight
                                                            size={20}
                                                            strokeWidth={1.6}
                                                        />
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* Painting information */}
                                            <div className="pt-5 sm:pt-7">

                                                {/* Artwork type */}
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#70512f]">
                                                        Artwork {String(index + 1).padStart(2, '0')}
                                                    </span>

                                                    <span className="hidden text-xs text-[#564b40] sm:block">
                                                        Original Painting
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <Link
                                                    href={artworkUrl}
                                                    className="mt-3 block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                                >
                                                    <h2 className="font-serif text-[clamp(1.5rem,3vw,2.7rem)] font-light leading-[1.15] tracking-[-0.035em] transition-colors hover:text-[#70512f]">
                                                        {painting.title}
                                                    </h2>
                                                </Link>

                                                {/* Price and status */}
                                                <div className="mt-6 border-t border-[#70512f]/20 pt-5 sm:mt-7">
                                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                                                        {/* Price */}
                                                        <div>
                                                            <p className="mb-2 text-xs font-medium text-[#564b40]">
                                                                Starting Price
                                                            </p>

                                                            <p className="font-serif text-xl font-light text-[#70512f] sm:text-2xl">
                                                                {formatPrice(painting.starting_price)}
                                                            </p>
                                                        </div>

                                                        {/* Bidding status */}
                                                        <div className="flex items-center gap-2">
                                                            <span
                                                                aria-hidden="true"
                                                                className={`h-2 w-2 shrink-0 rounded-full ${
                                                                    painting.bidding_open
                                                                        ? 'bg-[#426340]'
                                                                        : 'bg-[#756b60]'
                                                                }`}
                                                            />

                                                            <span className="text-xs font-medium text-[#564b40]">
                                                                {painting.bidding_open
                                                                    ? 'Open for Offers'
                                                                    : 'Bidding Closed'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action */}
                                                <Link
                                                    href={artworkUrl}
                                                    className="group/link mt-6 inline-flex min-h-11 items-center gap-2 border-b border-[#70512f] text-sm font-semibold text-[#70512f] transition-colors hover:border-[#25221f] hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f] sm:mt-7"
                                                >
                                                    <span>
                                                        {painting.bidding_open
                                                            ? 'Make an Offer'
                                                            : 'View Artwork'}
                                                    </span>

                                                    <ArrowUpRight
                                                        size={17}
                                                        strokeWidth={1.6}
                                                        aria-hidden="true"
                                                        className="shrink-0 transition-transform motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5"
                                                    />
                                                </Link>
                                            </div>
                                        </motion.article>
                                    );
                                })}
                            </div>
                        ) : (
                            /* Empty collection */
                            <div className="py-20 text-center">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                    Coming Soon
                                </p>

                                <h2 className="mt-5 font-serif text-3xl font-light sm:text-5xl">
                                    The collection is being prepared.
                                </h2>

                                <p className="mx-auto mt-5 max-w-md text-base leading-8 text-[#564b40]">
                                    Our original artworks will be available
                                    to explore here soon.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Private acquisition */}
                {sortedPaintings.length > 0 && (
                    <section
                        aria-labelledby="acquisition-heading"
                        className="bg-[#eee7dc]"
                    >
                        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

                            {/* Section label */}
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#70512f]/25 pb-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                    Private Acquisition
                                </p>

                                <span className="text-xs text-[#564b40]">
                                    Original Art
                                </span>
                            </div>

                            {/* Content */}
                            <motion.div
                                initial={
                                    reduceMotion
                                        ? false
                                        : { opacity: 0, y: 20 }
                                }
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease,
                                }}
                                className="grid gap-10 py-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:py-16"
                            >
                                {/* Heading */}
                                <div>
                                    <h2
                                        id="acquisition-heading"
                                        className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.04em]"
                                    >
                                        Art that becomes
                                        <span className="block italic text-[#70512f]">
                                            part of your story.
                                        </span>
                                    </h2>
                                </div>

                                {/* Description */}
                                <div className="lg:border-l lg:border-[#70512f]/25 lg:pl-12">
                                    <p className="max-w-md text-base leading-8 text-[#564b40]">
                                        Selected original artworks are available
                                        through private offers. Choose a painting
                                        to discover more and submit your offer.
                                    </p>

                                    <p className="mt-5 max-w-md text-sm leading-7 text-[#564b40]">
                                        All offers and bidder information
                                        remain private.
                                    </p>

                                    <a
                                        href="#collection"
                                        className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#70512f] text-sm font-semibold text-[#70512f] transition-colors hover:border-[#25221f] hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                    >
                                        Explore the Collection

                                        <ArrowUpRight
                                            size={18}
                                            strokeWidth={1.6}
                                            aria-hidden="true"
                                            className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                                        />
                                    </a>
                                </div>
                            </motion.div>

                            {/* Bottom detail */}
                            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#70512f]/25 pt-6">
                                <span className="text-xs text-[#564b40]">
                                    The Taste of Inspiration
                                </span>

                                <span className="text-xs font-medium text-[#70512f]">
                                    Food · Art · Inspiration
                                </span>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <BookCart />

            <Footer />
        </BookCartProvider>
    );
}
