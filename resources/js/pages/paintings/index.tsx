
import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
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
        '/images/paintings/beyond-the-surface.jpg',
    essence:
        '/images/paintings/essence.jpg',
    'the-silent-melody':
        '/images/paintings/the-silent-melody.jpg',
    'a-moment-to-savour':
        '/images/paintings/a-moment-to-savour.jpg',
    'in-bloom':
        '/images/paintings/in-bloom.jpg',
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

function getPaintingImage(painting: Painting) {
    const image = painting.image?.trim();

    if (image) {
        if (
            image.startsWith('http://') ||
            image.startsWith('https://') ||
            image.startsWith('/')
        ) {
            return image;
        }

        if (image.startsWith('storage/')) {
            return `/${image}`;
        }

        return `/storage/${image}`;
    }

    return paintingImages[painting.slug] ?? null;
}

export default function PaintingsIndex({ paintings }: Props) {
    const reduceMotion = useReducedMotion();

    const sortedPaintings = [...paintings].sort(
        (a, b) => a.sort_order - b.sort_order
    );

    return (
        <BookCartProvider>
            <Head title="The Collection | The Taste of Inspiration" />

            <Navbar />

            <main className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#25221f]">

                {/* INTRODUCTION */}
                <section className="bg-[#eee7dc]">
                    <div className="mx-auto max-w-[1300px] px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-40 lg:px-16 lg:pb-20">

                        {/* TOP LABEL */}
                        <div className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/25 pb-4">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48]">
                                03 / The Collection
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#746b61]">
                                {String(sortedPaintings.length).padStart(2, '0')} Works
                            </span>
                        </div>

                        {/* TITLE */}
                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 25 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease }}
                            className="py-12 sm:py-16"
                        >
                            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#8a6a48]">
                                An Exhibition in Five Works
                            </p>

                            <h1 className="font-serif text-[clamp(3.5rem,9vw,7.5rem)] font-light leading-[0.95] tracking-[-0.055em]">
                                The
                                <span className="italic text-[#8a6a48]">
                                    {' '}Collection.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-lg font-serif text-xl font-light leading-[1.4] text-[#62584c] sm:text-2xl">
                                Five moments.
                                <span className="italic text-[#8a6a48]">
                                    {' '}Five expressions.
                                </span>
                            </p>
                        </motion.div>

                        {/* BOTTOM */}
                        <div className="flex items-center justify-between gap-4 border-t border-[#8a6a48]/25 pt-4">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#746b61]">
                                Original Artworks
                            </span>

                            <a
                                href="#collection"
                                aria-label="Explore the collection"
                                className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#8a6a48]"
                            >
                                Explore

                                <ArrowDown
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-y-1"
                                />
                            </a>
                        </div>
                    </div>
                </section>

                {/* COLLECTION */}
                <section
                    id="collection"
                    className="scroll-mt-24"
                >
                    <div className="mx-auto max-w-[1300px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">

                        {/* SECTION HEADING */}
                        <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#8a6a48]/25 pb-5 sm:mb-12">
                            <div>
                                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                    Discover
                                </p>

                                <h2 className="font-serif text-2xl font-light tracking-tight sm:text-3xl">
                                    Original Works
                                </h2>
                            </div>

                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#746b61]">
                                {String(sortedPaintings.length).padStart(2, '0')} Artworks
                            </span>
                        </div>

                        {sortedPaintings.length > 0 ? (

                            /* TWO-COLUMN GALLERY */
                            <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-8 sm:gap-y-14 lg:gap-x-14 lg:gap-y-20">

                                {sortedPaintings.map((painting, index) => {
                                    const artworkImage = getPaintingImage(painting);
                                    const artworkUrl = `/paintings/${painting.slug}`;

                                    return (
                                        <motion.article
                                            key={painting.id}
                                            initial={
                                                reduceMotion
                                                    ? false
                                                    : {
                                                        opacity: 0,
                                                        y: 30,
                                                    }
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
                                                duration: 0.8,
                                                delay: reduceMotion
                                                    ? 0
                                                    : (index % 2) * 0.12,
                                                ease,
                                            }}
                                            className="group min-w-0"
                                        >

                                            {/* IMAGE */}
                                            <Link
                                                href={artworkUrl}
                                                aria-label={`View ${painting.title}`}
                                                className="block outline-offset-4"
                                            >
                                                <div className="relative aspect-[4/5] overflow-hidden bg-[#e8dfd2]">

                                                    {artworkImage ? (
                                                        <img
                                                            src={artworkImage}
                                                            alt={painting.title}
                                                            loading="lazy"
                                                            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.035] group-focus-within:scale-[1.035]"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                                                            <span className="font-serif text-4xl font-light text-[#8a6a48]/30 sm:text-6xl">
                                                                {String(index + 1).padStart(2, '0')}
                                                            </span>

                                                            <span className="text-center text-[8px] uppercase tracking-[0.2em] text-[#8a6a48]">
                                                                Artwork Coming Soon
                                                            </span>
                                                        </div>
                                                    )}

                                                    {/* ARTWORK NUMBER */}
                                                    <div className="absolute left-0 top-0 bg-[#f7f3ec] px-3 py-2 sm:px-4 sm:py-3">
                                                        <span className="font-serif text-sm text-[#8a6a48] sm:text-lg">
                                                            {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                    </div>

                                                    {/* DESKTOP HOVER ARROW */}
                                                    <div className="absolute bottom-0 right-0 hidden h-12 w-12 translate-y-full items-center justify-center bg-[#25221f] text-[#f7f3ec] transition-transform duration-500 group-hover:translate-y-0 group-focus-within:translate-y-0 sm:flex">
                                                        <ArrowUpRight
                                                            size={19}
                                                            strokeWidth={1.4}
                                                        />
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* INFORMATION */}
                                            <div className="pt-4 sm:pt-6">

                                                {/* NUMBER / TYPE */}
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] sm:text-[9px]">
                                                        Artwork {String(index + 1).padStart(2, '0')}
                                                    </span>

                                                    <span className="hidden text-[9px] uppercase tracking-[0.15em] text-[#746b61] sm:block">
                                                        Original Painting
                                                    </span>
                                                </div>

                                                {/* TITLE */}
                                                <Link
                                                    href={artworkUrl}
                                                    className="mt-3 block"
                                                >
                                                    <h3 className="font-serif text-[clamp(1.35rem,3vw,2.7rem)] font-light leading-[1.12] tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#8a6a48]">
                                                        {painting.title}
                                                    </h3>
                                                </Link>

                                                {/* PRICE AND STATUS */}
                                                <div className="mt-5 border-t border-[#8a6a48]/20 pt-4 sm:mt-7 sm:pt-5">

                                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

                                                        {/* PRICE */}
                                                        <div>
                                                            <p className="mb-1 text-[8px] uppercase tracking-[0.15em] text-[#746b61]">
                                                                Starting Price
                                                            </p>

                                                            <p className="font-serif text-lg font-light text-[#8a6a48] sm:text-2xl">
                                                                {formatPrice(painting.starting_price)}
                                                            </p>
                                                        </div>

                                                        {/* STATUS */}
                                                        <div className="flex items-center gap-2">
                                                            <span
                                                                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                                                                    painting.bidding_open
                                                                        ? 'bg-[#66765d]'
                                                                        : 'bg-stone-400'
                                                                }`}
                                                            />

                                                            <span className="text-[9px] uppercase tracking-[0.12em] text-[#62584c]">
                                                                {painting.bidding_open
                                                                    ? 'Open for Offers'
                                                                    : 'Bidding Closed'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* ACTION */}
                                                <Link
                                                    href={artworkUrl}
                                                    className="group/link mt-5 inline-flex items-center gap-2 border-b border-[#8a6a48] pb-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8a6a48] transition-colors duration-300 hover:border-[#25221f] hover:text-[#25221f] sm:mt-7 sm:gap-3 sm:tracking-[0.2em]"
                                                >
                                                    <span>
                                                        {painting.bidding_open
                                                            ? 'Make an Offer'
                                                            : 'View Artwork'}
                                                    </span>

                                                    <ArrowUpRight
                                                        size={14}
                                                        strokeWidth={1.5}
                                                        className="shrink-0 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                                    />
                                                </Link>
                                            </div>
                                        </motion.article>
                                    );
                                })}
                            </div>

                        ) : (

                            /* EMPTY COLLECTION */
                            <div className="py-20 text-center">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                    Coming Soon
                                </p>

                                <h2 className="mt-5 font-serif text-3xl font-light sm:text-5xl">
                                    The collection is being prepared.
                                </h2>

                                <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#62584c]">
                                    Our original artworks will be available
                                    to explore here soon.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* PRIVATE ACQUISITION */}
                {sortedPaintings.length > 0 && (
                    <section className="bg-[#eee7dc]">
                        <div className="mx-auto max-w-[1300px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16">

                            <div className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/25 pb-4">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                    Private Acquisition
                                </span>

                                <span className="text-[9px] uppercase tracking-[0.15em] text-[#746b61]">
                                    Original Art
                                </span>
                            </div>

                            <motion.div
                                initial={
                                    reduceMotion
                                        ? false
                                        : { opacity: 0, y: 20 }
                                }
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.8, ease }}
                                className="grid gap-7 py-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16"
                            >
                                <div>
                                    <h2 className="font-serif text-[clamp(2.3rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.04em]">
                                        Art that becomes
                                        <span className="block italic text-[#8a6a48]">
                                            part of your story.
                                        </span>
                                    </h2>
                                </div>

                                <div className="lg:border-l lg:border-[#8a6a48]/25 lg:pl-12">
                                    <p className="max-w-md text-sm leading-7 text-[#62584c]">
                                        Selected original artworks are available
                                        through private offers. Choose a painting
                                        to discover more and submit your offer.
                                    </p>

                                    <p className="mt-3 text-xs leading-6 text-[#746b61]">
                                        All offers and bidder information
                                        remain private.
                                    </p>

                                    <a
                                        href="#collection"
                                        className="group mt-6 inline-flex items-center gap-3 border-b border-[#8a6a48] pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:border-[#25221f] hover:text-[#25221f]"
                                    >
                                        Explore the Collection

                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={1.5}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </a>
                                </div>
                            </motion.div>

                            <div className="flex items-center justify-between gap-4 border-t border-[#8a6a48]/25 pt-4">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#746b61]">
                                    The Taste of Inspiration
                                </span>

                                <span className="text-right text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]">
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
