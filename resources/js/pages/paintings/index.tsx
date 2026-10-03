import { Head, Link } from '@inertiajs/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
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
    starting_price: string;
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

export default function PaintingsIndex({ paintings }: Props) {
    const reduceMotion = useReducedMotion();

    const formatPrice = (price: string) =>
        new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(Number(price));

    return (
        <BookCartProvider>
            <Head title="Paintings | The Taste of Inspiration" />

            <Navbar />

            <main className="overflow-hidden bg-[#f3eee6] text-[#25221f]">

                {/* =====================================================
                    OPENING
                ===================================================== */}
                <section className="relative min-h-[75vh] border-b border-[#8a6a48]/20">
                    <div className="mx-auto flex min-h-[75vh] max-w-[1500px] flex-col px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-16 lg:pt-36">

                        {/* TOP */}
                        <div className="flex items-start justify-between gap-6 border-b border-[#8a6a48]/20 pb-4">
                            <div>
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    03 / The Collection
                                </p>

                                <p className="mt-1.5 text-[7px] uppercase tracking-[0.22em] text-stone-400 sm:text-[8px]">
                                    The Taste of Inspiration
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-[7px] uppercase tracking-[0.22em] text-stone-400 sm:text-[8px]">
                                    {String(paintings.length).padStart(2, '0')} Works
                                </p>

                                <p className="mt-1.5 text-[7px] uppercase tracking-[0.22em] text-stone-400 sm:text-[8px]">
                                    Original Paintings
                                </p>
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className="flex flex-1 items-center py-16 sm:py-20">
                            <div className="w-full">
                                <motion.p
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
                                        ease,
                                    }}
                                    className="mb-5 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]"
                                >
                                    An exhibition in five works
                                </motion.p>

                                <div className="overflow-hidden">
                                    <motion.h1
                                        initial={
                                            reduceMotion
                                                ? false
                                                : {
                                                    y: '105%',
                                                }
                                        }
                                        animate={{
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 1.1,
                                            ease,
                                        }}
                                        className="font-serif text-[17vw] font-light leading-[0.78] tracking-[-0.065em] sm:text-[13vw] lg:text-[8.5rem] xl:text-[10rem]"
                                    >
                                        The
                                        <span className="block italic text-[#8a6a48]">
                                            Collection
                                        </span>
                                    </motion.h1>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM */}
                        <div className="flex items-end justify-between gap-8 border-t border-[#8a6a48]/20 pt-5">
                            <p className="max-w-sm font-serif text-xl font-light leading-[1.2] sm:text-2xl">
                                Five moments.
                                <span className="block italic text-[#8a6a48]">
                                    Five expressions.
                                </span>
                            </p>

                            <a
                                href="#collection"
                                aria-label="View the collection"
                                className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#8a6a48]/30 text-[#8a6a48] transition-colors duration-300 hover:bg-[#8a6a48] hover:text-white"
                            >
                                <ArrowDown
                                    size={15}
                                    strokeWidth={1.4}
                                />
                            </a>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    COLLECTION
                ===================================================== */}
                <section id="collection">
                    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">

                        {paintings.length > 0 ? (
                            paintings.map((painting, index) => {
                                const artworkImage =
                                    paintingImages[painting.slug];

                                const reverse = index % 2 === 1;

                                return (
                                    <motion.article
                                        key={painting.id}
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
                                            amount: 0.12,
                                        }}
                                        transition={{
                                            duration: 0.9,
                                            ease,
                                        }}
                                        className="border-b border-[#8a6a48]/20 py-14 sm:py-20 lg:py-28"
                                    >
                                        {/* NUMBER / INDEX */}
                                        <div className="mb-7 flex items-center justify-between border-b border-[#8a6a48]/20 pb-4 lg:mb-10">
                                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                                Artwork{' '}
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </p>

                                            <p className="text-[7px] uppercase tracking-[0.25em] text-stone-400">
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                                {' / '}
                                                {String(
                                                    paintings.length,
                                                ).padStart(2, '0')}
                                            </p>
                                        </div>

                                        {/* ARTWORK LAYOUT */}
                                        <div
                                            className={`grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20`}
                                        >
                                            {/* =================================
                                                IMAGE
                                            ================================= */}
                                            <div
                                                className={
                                                    reverse
                                                        ? 'lg:order-2 lg:col-span-7'
                                                        : 'lg:col-span-7'
                                                }
                                            >
                                                <Link
                                                    href={`/paintings/${painting.slug}`}
                                                    className="group block"
                                                >
                                                    <div className="relative overflow-hidden bg-[#e5ded3]">
                                                        {artworkImage ? (
                                                            <img
                                                                src={
                                                                    artworkImage
                                                                }
                                                                alt={
                                                                    painting.title
                                                                }
                                                                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                                                            />
                                                        ) : (
                                                            <div className="flex aspect-[4/5] items-center justify-center">
                                                                <p className="text-[8px] uppercase tracking-[0.25em] text-stone-400">
                                                                    Artwork
                                                                    coming
                                                                    soon
                                                                </p>
                                                            </div>
                                                        )}

                                                        {/* SMALL NUMBER */}
                                                        <div className="absolute left-0 top-0 bg-[#f3eee6] px-4 py-3">
                                                            <span className="font-serif text-lg font-light text-[#8a6a48]">
                                                                {String(
                                                                    index + 1,
                                                                ).padStart(
                                                                    2,
                                                                    '0',
                                                                )}
                                                            </span>
                                                        </div>

                                                        {/* VIEW */}
                                                        <div className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-between bg-[#25221f] px-5 py-4 text-[#f7f3ec] transition-transform duration-500 group-hover:translate-y-0">
                                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em]">
                                                                View Artwork
                                                            </span>

                                                            <ArrowUpRight
                                                                size={14}
                                                                strokeWidth={
                                                                    1.4
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                            {/* =================================
                                                INFORMATION
                                            ================================= */}
                                            <div
                                                className={
                                                    reverse
                                                        ? 'lg:order-1 lg:col-span-5'
                                                        : 'lg:col-span-5'
                                                }
                                            >
                                                {/* LARGE NUMBER */}
                                                <p className="font-serif text-6xl font-light leading-none text-[#8a6a48]/20 sm:text-7xl lg:text-8xl">
                                                    {String(
                                                        index + 1,
                                                    ).padStart(2, '0')}
                                                </p>

                                                {/* TITLE */}
                                                <Link
                                                    href={`/paintings/${painting.slug}`}
                                                    className="group mt-5 block"
                                                >
                                                    <h2 className="max-w-lg font-serif text-[2.7rem] font-light leading-[0.95] tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#8a6a48] sm:text-5xl lg:text-6xl">
                                                        {painting.title}
                                                    </h2>
                                                </Link>

                                                {/* META */}
                                                <div className="mt-8 border-y border-[#8a6a48]/20">
                                                    <div className="flex items-center justify-between gap-5 border-b border-[#8a6a48]/20 py-4">
                                                        <span className="text-[7px] font-semibold uppercase tracking-[0.24em] text-stone-400">
                                                            Type
                                                        </span>

                                                        <span className="text-[8px] uppercase tracking-[0.2em]">
                                                            Original Painting
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-between gap-5 border-b border-[#8a6a48]/20 py-4">
                                                        <span className="text-[7px] font-semibold uppercase tracking-[0.24em] text-stone-400">
                                                            Starting Price
                                                        </span>

                                                        <span className="font-serif text-xl font-light text-[#8a6a48]">
                                                            {formatPrice(
                                                                painting.starting_price,
                                                            )}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-between gap-5 py-4">
                                                        <span className="text-[7px] font-semibold uppercase tracking-[0.24em] text-stone-400">
                                                            Status
                                                        </span>

                                                        <div className="flex items-center gap-2">
                                                            <span
                                                                className={`h-1.5 w-1.5 rounded-full ${
                                                                    painting.bidding_open
                                                                        ? 'bg-[#66765d]'
                                                                        : 'bg-stone-400'
                                                                }`}
                                                            />

                                                            <span className="text-[8px] uppercase tracking-[0.18em]">
                                                                {painting.bidding_open
                                                                    ? 'Available'
                                                                    : 'Bidding Closed'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* VIEW LINK */}
                                                <Link
                                                    href={`/paintings/${painting.slug}`}
                                                    className="group mt-7 inline-flex items-center gap-4 border-b border-[#25221f] pb-2 text-[8px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48]"
                                                >
                                                    Discover Artwork

                                                    <ArrowUpRight
                                                        size={14}
                                                        strokeWidth={1.4}
                                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.article>
                                );
                            })
                        ) : (
                            <div className="py-24 text-center sm:py-32">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    Coming Soon
                                </p>

                                <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
                                    The collection is being prepared.
                                </h2>
                            </div>
                        )}
                    </div>
                </section>

                {/* =====================================================
                    ACQUISITION
                ===================================================== */}
                {paintings.length > 0 && (
                    <section className="bg-[#25221f] text-[#f3eee6]">
                        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

                            <div className="flex items-start justify-between gap-6 border-b border-white/15 pb-4">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#c5a27d]">
                                    Private Acquisition
                                </p>

                                <p className="text-right text-[7px] uppercase tracking-[0.25em] text-white/40">
                                    Original Works
                                </p>
                            </div>

                            <div className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20 lg:py-14">

                                <h2 className="font-serif text-[12vw] font-light leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-8xl">
                                    Make a work

                                    <span className="block italic text-[#c5a27d]">
                                        part of your story.
                                    </span>
                                </h2>

                                <div>
                                    <p className="max-w-md text-[13px] leading-6 text-white/55 sm:text-sm sm:leading-7">
                                        Each artwork is available through
                                        private acquisition. Select a work to
                                        submit your offer.
                                    </p>

                                    <p className="mt-4 text-[11px] leading-5 text-white/35">
                                        Offers and bidder information remain
                                        private.
                                    </p>

                                    <a
                                        href="#collection"
                                        className="group mt-7 inline-flex items-center gap-4 border-b border-white/60 pb-2 text-[8px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#c5a27d] hover:text-[#c5a27d]"
                                    >
                                        View the Collection

                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.4}
                                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-5">
                                <span className="text-[7px] uppercase tracking-[0.25em] text-white/35">
                                    The Taste of Inspiration
                                </span>

                                <span className="text-right text-[7px] uppercase tracking-[0.25em] text-[#c5a27d]">
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
