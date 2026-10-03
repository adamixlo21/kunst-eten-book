import { FormEvent, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

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
}

interface Props {
    painting: Painting;
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

export default function PaintingShow({ painting }: Props) {
    const [bidSent, setBidSent] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        amount: painting.starting_price,
    });

    const submitBid = (e: FormEvent) => {
        e.preventDefault();

        post(`/paintings/${painting.slug}/bids`, {
            preserveScroll: true,

            onSuccess: () => {
                reset('name', 'email', 'phone');
                setBidSent(true);
            },
        });
    };

    const formatPrice = (price: string) =>
        new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(Number(price));

    const artworkImage = paintingImages[painting.slug];

    return (
        <BookCartProvider>
            <Head
                title={`${painting.title} | The Taste of Inspiration`}
            />

            <Navbar />

            <main className="bg-[#f3eee6] text-[#25221f]">

                {/* =====================================================
                    TOP NAVIGATION
                ===================================================== */}
                <section className="border-b border-[#8a6a48]/20">
                    <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 pb-5 pt-28 sm:px-8 sm:pt-32 lg:px-16 lg:pt-36">

                        <Link
                            href="/paintings"
                            className="group flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.24em] transition-colors hover:text-[#8a6a48]"
                        >
                            <ArrowLeft
                                size={14}
                                strokeWidth={1.4}
                                className="transition-transform group-hover:-translate-x-1"
                            />

                            Collection
                        </Link>

                        <p className="text-right text-[7px] uppercase tracking-[0.22em] text-stone-400 sm:text-[8px]">
                            Original Artwork
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    ARTWORK
                ===================================================== */}
                <section>
                    <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">

                        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 xl:gap-24">

                            {/* =========================================
                                IMAGE
                            ========================================= */}
                            <div>
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48]">
                                        The Taste of Inspiration
                                    </span>

                                    <span className="text-[7px] uppercase tracking-[0.22em] text-stone-400">
                                        Original / 2026
                                    </span>
                                </div>

                                <div className="relative bg-[#e6dfd5]">
                                    {artworkImage ? (
                                        <img
                                            src={artworkImage}
                                            alt={painting.title}
                                            className="h-auto w-full object-contain"
                                        />
                                    ) : (
                                        <div className="flex aspect-[4/5] items-center justify-center">
                                            <span className="text-[8px] uppercase tracking-[0.25em] text-stone-400">
                                                Artwork coming soon
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-[7px] uppercase tracking-[0.22em] text-stone-400">
                                        Original Painting
                                    </span>

                                    <span className="text-[7px] uppercase tracking-[0.22em] text-stone-400">
                                        The Collection
                                    </span>
                                </div>
                            </div>

                            {/* =========================================
                                INFORMATION
                            ========================================= */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#8a6a48]" />

                                    <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                        Original Artwork
                                    </p>
                                </div>

                                {/* TITLE */}
                                <h1 className="mt-6 max-w-xl font-serif text-[13vw] font-light leading-[0.88] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                                    {painting.title}
                                </h1>

                                {/* STATUS */}
                                <div className="mt-7 flex items-center gap-2">
                                    <span
                                        className={`h-1.5 w-1.5 rounded-full ${
                                            painting.bidding_open
                                                ? 'bg-[#66765d]'
                                                : 'bg-stone-400'
                                        }`}
                                    />

                                    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                                        {painting.bidding_open
                                            ? 'Available for private offer'
                                            : 'Bidding closed'}
                                    </span>
                                </div>

                                {/* DESCRIPTION */}
                                {painting.description && (
                                    <div className="mt-8 border-t border-[#8a6a48]/20 pt-7">
                                        <p className="max-w-lg whitespace-pre-line text-[13px] leading-7 text-stone-500 sm:text-sm sm:leading-8">
                                            {painting.description}
                                        </p>
                                    </div>
                                )}

                                {/* PRICE */}
                                <div className="mt-8 border-y border-[#8a6a48]/20 py-5">
                                    <div className="flex items-end justify-between gap-6">
                                        <div>
                                            <p className="text-[7px] font-semibold uppercase tracking-[0.24em] text-stone-400">
                                                Starting Price
                                            </p>

                                            <p className="mt-2 font-serif text-3xl font-light text-[#8a6a48]">
                                                {formatPrice(
                                                    painting.starting_price,
                                                )}
                                            </p>
                                        </div>

                                        <p className="max-w-[170px] text-right text-[10px] leading-5 text-stone-400">
                                            Offers are handled privately.
                                        </p>
                                    </div>
                                </div>

                                {/* SCROLL TO OFFER */}
                                {painting.bidding_open && (
                                    <a
                                        href="#private-offer"
                                        className="group mt-7 inline-flex items-center gap-4 border-b border-[#25221f] pb-2 text-[8px] font-semibold uppercase tracking-[0.24em] transition-colors hover:border-[#8a6a48] hover:text-[#8a6a48]"
                                    >
                                        Make a Private Offer

                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.4}
                                            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PRIVATE ACQUISITION
                ===================================================== */}
                <section
                    id="private-offer"
                    className="border-t border-[#8a6a48]/20 bg-[#e9dfd2]"
                >
                    <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

                        {painting.bidding_open ? (
                            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-28">

                                {/* =====================================
                                    INTRO
                                ===================================== */}
                                <div>
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                        Private Acquisition
                                    </p>

                                    <h2 className="mt-5 max-w-md font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                                        Make this work

                                        <span className="block italic text-[#8a6a48]">
                                            part of your story.
                                        </span>
                                    </h2>

                                    <p className="mt-6 max-w-sm text-[13px] leading-7 text-stone-500 sm:text-sm">
                                        Submit a private offer for{' '}
                                        <span className="text-[#25221f]">
                                            {painting.title}
                                        </span>
                                        . Your offer and personal information
                                        are not shown to other visitors.
                                    </p>

                                    <div className="mt-8 border-t border-[#8a6a48]/20 pt-5">
                                        <p className="text-[7px] uppercase tracking-[0.22em] text-stone-400">
                                            Starting Price
                                        </p>

                                        <p className="mt-2 font-serif text-2xl text-[#8a6a48]">
                                            {formatPrice(
                                                painting.starting_price,
                                            )}
                                        </p>
                                    </div>

                                    <p className="mt-5 max-w-xs text-[10px] leading-5 text-stone-400">
                                        Submitting an offer does not make an
                                        automatic payment.
                                    </p>
                                </div>

                                {/* =====================================
                                    FORM
                                ===================================== */}
                                <div className="border-t border-[#8a6a48]/25 pt-7 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">

                                    <div className="flex items-end justify-between gap-5 border-b border-[#8a6a48]/20 pb-5">
                                        <div>
                                            <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                                Private Offer
                                            </p>

                                            <h3 className="mt-2 font-serif text-3xl font-light sm:text-4xl">
                                                Your details
                                            </h3>
                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            strokeWidth={1.2}
                                            className="text-[#8a6a48]"
                                        />
                                    </div>

                                    {/* SUCCESS */}
                                    {bidSent && (
                                        <div className="mt-7 border-l-2 border-[#66765d] bg-[#f3eee6] p-5">
                                            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#66765d]">
                                                Offer Received
                                            </p>

                                            <h3 className="mt-2 font-serif text-xl">
                                                Thank you for your interest.
                                            </h3>

                                            <p className="mt-2 max-w-md text-[13px] leading-6 text-stone-500">
                                                Your private offer for{' '}
                                                <span className="text-[#25221f]">
                                                    {painting.title}
                                                </span>{' '}
                                                has been received.
                                            </p>
                                        </div>
                                    )}

                                    <form
                                        onSubmit={submitBid}
                                        className="mt-7 space-y-6"
                                    >
                                        {/* NAME + EMAIL */}
                                        <div className="grid gap-6 sm:grid-cols-2">

                                            <BidField
                                                label="Name"
                                                error={errors.name}
                                            >
                                                <input
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            'name',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={inputClass}
                                                    placeholder="Your name"
                                                />
                                            </BidField>

                                            <BidField
                                                label="Email Address"
                                                error={errors.email}
                                            >
                                                <input
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            'email',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={inputClass}
                                                    placeholder="name@email.com"
                                                />
                                            </BidField>
                                        </div>

                                        {/* PHONE */}
                                        <BidField
                                            label="Phone Number"
                                            optional
                                            error={errors.phone}
                                        >
                                            <input
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        'phone',
                                                        e.target.value,
                                                    )
                                                }
                                                className={inputClass}
                                                placeholder="+31 6 ..."
                                            />
                                        </BidField>

                                        {/* OFFER */}
                                        <BidField
                                            label="Your Offer"
                                            error={errors.amount}
                                        >
                                            <div className="relative">
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 font-serif text-xl text-[#8a6a48]">
                                                    €
                                                </span>

                                                <input
                                                    type="number"
                                                    min={Number(
                                                        painting.starting_price,
                                                    )}
                                                    step="1"
                                                    value={data.amount}
                                                    onChange={(e) =>
                                                        setData(
                                                            'amount',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full border-0 border-b border-[#bdb1a2] bg-transparent py-3 pl-7 pr-0 font-serif text-xl text-[#25221f] outline-none transition-colors focus:border-[#8a6a48] focus:ring-0"
                                                />
                                            </div>

                                            <p className="mt-2 text-[10px] text-stone-400">
                                                Minimum{' '}
                                                {formatPrice(
                                                    painting.starting_price,
                                                )}
                                            </p>
                                        </BidField>

                                        {/* SUBMIT */}
                                        <div className="border-t border-[#8a6a48]/20 pt-6">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="group flex w-full items-center justify-center gap-3 bg-[#25221f] px-6 py-4 text-[8px] font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                                            >
                                                {processing
                                                    ? 'Sending Offer...'
                                                    : 'Submit Private Offer'}

                                                {!processing && (
                                                    <ArrowUpRight
                                                        size={14}
                                                        strokeWidth={1.4}
                                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                    />
                                                )}
                                            </button>

                                            <p className="mt-4 max-w-md text-[10px] leading-5 text-stone-400">
                                                Your offer is private. Other
                                                visitors cannot see the amount
                                                you submit.
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            /* =========================================
                                BIDDING CLOSED
                            ========================================= */
                            <div className="mx-auto max-w-2xl py-6 text-center">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    Private Acquisition
                                </p>

                                <h2 className="mt-4 font-serif text-4xl font-light">
                                    Bidding is currently closed.
                                </h2>

                                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-stone-500">
                                    Private offers for this artwork are not
                                    currently being accepted.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* =====================================================
                    BACK TO COLLECTION
                ===================================================== */}
                <section className="border-t border-[#8a6a48]/20 bg-[#f3eee6]">
                    <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 py-8 sm:px-8 lg:px-16">

                        <p className="text-[7px] uppercase tracking-[0.22em] text-stone-400">
                            The Taste of Inspiration
                        </p>

                        <Link
                            href="/paintings"
                            className="group inline-flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.24em] transition-colors hover:text-[#8a6a48]"
                        >
                            Back to Collection

                            <ArrowUpRight
                                size={13}
                                strokeWidth={1.4}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </section>
            </main>

            <BookCart />

            <Footer />
        </BookCartProvider>
    );
}

/* =========================================================
    FORM STYLES
========================================================= */

const inputClass =
    'w-full border-0 border-b border-[#bdb1a2] bg-transparent px-0 py-3 text-base text-[#25221f] outline-none transition-colors placeholder:text-stone-400 focus:border-[#8a6a48] focus:ring-0 sm:text-sm';

function BidField({
                      label,
                      optional = false,
                      error,
                      children,
                  }: {
    label: string;
    optional?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="mb-1 flex items-center justify-between gap-4">
                <label className="text-[8px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                    {label}
                </label>

                {optional && (
                    <span className="text-[7px] uppercase tracking-[0.18em] text-stone-400">
                        Optional
                    </span>
                )}
            </div>

            {children}

            {error && (
                <p className="mt-2 text-xs text-red-700">
                    {error}
                </p>
            )}
        </div>
    );
}
