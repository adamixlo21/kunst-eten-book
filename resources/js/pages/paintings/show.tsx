
import { useState, type FormEvent, type ReactNode } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

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
        '/images/paintings/beyond-the-surface.webp',
    essence:
        '/images/paintings/essence.webp',
    'the-silent-melody':
        '/images/paintings/the-silent-melody.webp',
    'a-moment-to-savour':
        '/images/paintings/a-moment-to-savour.webp',
    'in-bloom':
        '/images/paintings/in-bloom.webp',
};

const inputClass =
    'min-h-12 w-full border border-[#c8b8a6] bg-[#faf8f4] px-4 py-3 text-base text-[#25221f] outline-none transition-colors placeholder:text-[#746b61] focus:border-[#70512f] focus:ring-2 focus:ring-[#70512f]/20';

function formatPrice(price: string | number): string {
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

function getArtworkImage(painting: Painting): string | null {
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

export default function PaintingShow({ painting }: Props) {
    const [bidSent, setBidSent] = useState(false);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        name: '',
        email: '',
        phone: '',
        amount: painting.starting_price,
    });

    const artworkImage = getArtworkImage(painting);

    // const seoDescription = painting.description
    //     ? painting.description.replace(/\s+/g, ' ').trim().slice(0, 155)
    //     : `Discover ${painting.title}, an original painting by Nour featured in The Taste of Inspiration. Explore the artwork and private offer details.`;

    function submitBid(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        post(`/paintings/${painting.slug}/bids`, {
            preserveScroll: true,
            onSuccess: () => {
                reset('name', 'email', 'phone');
                setBidSent(true);
            },
        });
    }

    return (
        <BookCartProvider>
            <Head
                title={`${painting.title} | The Taste of Inspiration`}
            >
                <meta
                    head-key="description"
                    name="description"
                    content={`Discover ${painting.title}, an original painting featured in The Taste of Inspiration. Explore the artwork and private offer details.`}
                />
            </Head>

            <Navbar />

            <main className="min-h-screen bg-[#faf8f4] text-[#25221f]">

                {/* Back navigation */}
                <div className="border-b border-[#70512f]/20">
                    <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 pb-5 pt-28 sm:px-8 sm:pt-32 lg:px-16 lg:pt-36">
                        <Link
                            href="/paintings"
                            className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#70512f] transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                        >
                            <ArrowLeft
                                size={18}
                                aria-hidden="true"
                                className="transition-transform motion-safe:group-hover:-translate-x-1"
                            />
                            Back to Collection
                        </Link>

                        <span className="text-xs font-medium text-[#564b40]">
                            Original Artwork
                        </span>
                    </div>
                </div>

                {/* Artwork details */}
                <section
                    aria-labelledby="painting-heading"
                    className="bg-[#faf8f4]"
                >
                    <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">

                        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">

                            {/* Artwork image */}
                            <div className="min-w-0">
                                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#70512f]">
                                        The Taste of Inspiration
                                    </span>

                                    <span className="text-xs text-[#564b40]">
                                        Original Artwork
                                    </span>
                                </div>

                                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#e8dfd2]">
                                    {artworkImage ? (
                                        <img
                                            src={artworkImage}
                                            alt={`Original painting titled ${painting.title}`}
                                            loading="eager"
                                            decoding="async"
                                            fetchPriority="high"
                                            className="h-full w-full object-contain"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center gap-3 p-6 text-center">
                                            <span className="font-serif text-5xl italic text-[#70512f]">
                                                Art
                                            </span>

                                            <p className="text-sm text-[#564b40]">
                                                Artwork coming soon
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#70512f]/20 pb-4">
                                    <span className="text-xs text-[#564b40]">
                                        Original Painting
                                    </span>

                                    <span className="text-xs text-[#564b40]">
                                        The Collection
                                    </span>
                                </div>
                            </div>

                            {/* Artwork information */}
                            <div className="min-w-0 lg:pt-8">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                    Original Artwork
                                </p>

                                <h1
                                    id="painting-heading"
                                    className="mt-5 font-serif text-[clamp(2.75rem,5.5vw,5.5rem)] font-light leading-[1.06] tracking-[-0.045em]"
                                >
                                    {painting.title}
                                </h1>

                                {/* Bidding status */}
                                <div className="mt-7 flex items-center gap-3">
                                    <span
                                        aria-hidden="true"
                                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                                            painting.bidding_open
                                                ? 'bg-[#426340]'
                                                : 'bg-[#756b60]'
                                        }`}
                                    />

                                    <span className="text-sm font-medium text-[#564b40]">
                                        {painting.bidding_open
                                            ? 'Available for Private Offers'
                                            : 'Bidding Currently Closed'}
                                    </span>
                                </div>

                                {/* Description */}
                                {painting.description && (
                                    <div className="mt-9 border-t border-[#70512f]/20 pt-7">
                                        <p className="max-w-lg whitespace-pre-line text-base leading-8 text-[#564b40]">
                                            {painting.description}
                                        </p>
                                    </div>
                                )}

                                {/* Starting price */}
                                <div className="mt-9 border-y border-[#70512f]/20 py-7">
                                    <div className="flex flex-wrap items-end justify-between gap-6">
                                        <div>
                                            <p className="text-sm font-medium text-[#564b40]">
                                                Starting Price
                                            </p>

                                            <p className="mt-3 font-serif text-4xl font-light text-[#70512f] sm:text-5xl">
                                                {formatPrice(
                                                    painting.starting_price
                                                )}
                                            </p>
                                        </div>

                                        <p className="max-w-[190px] text-sm leading-6 text-[#564b40]">
                                            All offers are handled privately.
                                        </p>
                                    </div>
                                </div>

                                {/* Make offer CTA */}
                                {painting.bidding_open && (
                                    <a
                                        href="#private-offer"
                                        className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-[#25221f] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#70512f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                    >
                                        Make a Private Offer

                                        <ArrowUpRight
                                            size={18}
                                            aria-hidden="true"
                                            className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Private acquisition */}
                <section
                    id="private-offer"
                    aria-labelledby="private-offer-heading"
                    className="scroll-mt-24 border-t border-[#70512f]/20 bg-[#eee7dc]"
                >
                    <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

                        {painting.bidding_open ? (
                            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-28">

                                {/* Offer information */}
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                        Private Acquisition
                                    </p>

                                    <h2
                                        id="private-offer-heading"
                                        className="mt-5 max-w-md font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.04em]"
                                    >
                                        Make this work
                                        <span className="block italic text-[#70512f]">
                                            part of your story.
                                        </span>
                                    </h2>

                                    <p className="mt-6 max-w-md text-base leading-8 text-[#564b40]">
                                        Interested in{' '}
                                        <span className="font-medium text-[#25221f]">
                                            {painting.title}
                                        </span>
                                        ? Submit your private offer using
                                        the form.
                                    </p>

                                    <p className="mt-4 max-w-md text-base leading-8 text-[#564b40]">
                                        Your offer and personal information
                                        are not visible to other visitors.
                                    </p>

                                    {/* Price detail */}
                                    <div className="mt-9 max-w-sm border-t border-[#70512f]/25 pt-6">
                                        <p className="text-sm font-medium text-[#564b40]">
                                            Starting Price
                                        </p>

                                        <p className="mt-3 font-serif text-3xl font-light text-[#70512f]">
                                            {formatPrice(
                                                painting.starting_price
                                            )}
                                        </p>
                                    </div>

                                    <p className="mt-6 max-w-sm text-sm leading-7 text-[#564b40]">
                                        Sending an offer does not
                                        automatically charge you or complete
                                        a purchase.
                                    </p>
                                </div>

                                {/* Offer form */}
                                <div className="min-w-0 border-t border-[#70512f]/25 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">

                                    <div className="border-b border-[#70512f]/25 pb-6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                            Private Offer
                                        </p>

                                        <h3 className="mt-3 font-serif text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                                            Your details
                                        </h3>

                                        <p className="mt-3 text-base leading-7 text-[#564b40]">
                                            Fill in the fields below
                                            to submit your offer.
                                        </p>
                                    </div>

                                    {/* Success message */}
                                    {bidSent ? (
                                        <div
                                            role="status"
                                            aria-live="polite"
                                            className="mt-8 flex items-start gap-4 border border-[#c8b8a6] bg-[#faf8f4] p-6"
                                        >
                                            <CheckCircle2
                                                size={25}
                                                aria-hidden="true"
                                                className="mt-0.5 shrink-0 text-[#426340]"
                                            />

                                            <div>
                                                <h4 className="font-serif text-2xl text-[#25221f]">
                                                    Offer received
                                                </h4>

                                                <p className="mt-3 text-base leading-8 text-[#564b40]">
                                                    Thank you for your interest.
                                                    Your private offer for{' '}
                                                    <strong className="font-semibold text-[#25221f]">
                                                        {painting.title}
                                                    </strong>{' '}
                                                    has been received.
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <form
                                            onSubmit={submitBid}
                                            className="mt-8 space-y-6"
                                        >
                                            {/* Name and email */}
                                            <div className="grid gap-6 sm:grid-cols-2">

                                                <BidField
                                                    label="Name"
                                                    htmlFor="bid-name"
                                                    error={errors.name}
                                                >
                                                    <input
                                                        id="bid-name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        maxLength={255}
                                                        autoComplete="name"
                                                        value={data.name}
                                                        onChange={(event) =>
                                                            setData(
                                                                'name',
                                                                event.target.value
                                                            )
                                                        }
                                                        aria-invalid={Boolean(errors.name)}
                                                        aria-describedby={
                                                            errors.name
                                                                ? 'bid-name-error'
                                                                : undefined
                                                        }
                                                        className={inputClass}
                                                        placeholder="Your name"
                                                    />
                                                </BidField>

                                                <BidField
                                                    label="Email Address"
                                                    htmlFor="bid-email"
                                                    error={errors.email}
                                                >
                                                    <input
                                                        id="bid-email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        maxLength={255}
                                                        autoComplete="email"
                                                        value={data.email}
                                                        onChange={(event) =>
                                                            setData(
                                                                'email',
                                                                event.target.value
                                                            )
                                                        }
                                                        aria-invalid={Boolean(errors.email)}
                                                        aria-describedby={
                                                            errors.email
                                                                ? 'bid-email-error'
                                                                : undefined
                                                        }
                                                        className={inputClass}
                                                        placeholder="name@example.com"
                                                    />
                                                </BidField>
                                            </div>

                                            {/* Phone */}
                                            <BidField
                                                label="Phone Number"
                                                htmlFor="bid-phone"
                                                optional
                                                error={errors.phone}
                                            >
                                                <input
                                                    id="bid-phone"
                                                    name="phone"
                                                    type="tel"
                                                    maxLength={50}
                                                    autoComplete="tel"
                                                    value={data.phone}
                                                    onChange={(event) =>
                                                        setData(
                                                            'phone',
                                                            event.target.value
                                                        )
                                                    }
                                                    aria-invalid={Boolean(errors.phone)}
                                                    aria-describedby={
                                                        errors.phone
                                                            ? 'bid-phone-error'
                                                            : undefined
                                                    }
                                                    className={inputClass}
                                                    placeholder="+31 6 12345678"
                                                />
                                            </BidField>

                                            {/* Offer amount */}
                                            <BidField
                                                label="Your Offer"
                                                htmlFor="bid-amount"
                                                error={errors.amount}
                                            >
                                                <div className="relative">
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-serif text-xl text-[#70512f]"
                                                    >
                                                        €
                                                    </span>

                                                    <input
                                                        id="bid-amount"
                                                        name="amount"
                                                        type="number"
                                                        required
                                                        min={Number(painting.starting_price)}
                                                        step="1"
                                                        value={data.amount}
                                                        onChange={(event) =>
                                                            setData(
                                                                'amount',
                                                                event.target.value
                                                            )
                                                        }
                                                        aria-invalid={Boolean(errors.amount)}
                                                        aria-describedby={
                                                            errors.amount
                                                                ? 'bid-amount-hint bid-amount-error'
                                                                : 'bid-amount-hint'
                                                        }
                                                        className={`${inputClass} pl-10 font-serif text-xl`}
                                                    />
                                                </div>

                                                <p
                                                    id="bid-amount-hint"
                                                    className="mt-3 text-sm text-[#564b40]"
                                                >
                                                    Minimum offer:{' '}
                                                    {formatPrice(
                                                        painting.starting_price
                                                    )}
                                                </p>
                                            </BidField>

                                            {/* Submit */}
                                            <div className="border-t border-[#70512f]/25 pt-7">
                                                <button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#25221f] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#70512f] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f] sm:w-auto"
                                                >
                                                    {processing
                                                        ? 'Sending Offer...'
                                                        : 'Submit Private Offer'}

                                                    {!processing && (
                                                        <ArrowUpRight
                                                            size={18}
                                                            aria-hidden="true"
                                                            className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                                                        />
                                                    )}
                                                </button>

                                                <p className="mt-5 max-w-md text-sm leading-7 text-[#564b40]">
                                                    Your offer is private.
                                                    Other visitors cannot
                                                    see the amount you submit.
                                                </p>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        ) : (
                            /* Bidding closed */
                            <div className="mx-auto max-w-2xl py-8 text-center">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                    Private Acquisition
                                </p>

                                <h2
                                    id="private-offer-heading"
                                    className="mt-5 font-serif text-3xl font-light leading-tight sm:text-5xl"
                                >
                                    Bidding is currently closed.
                                </h2>

                                <p className="mx-auto mt-6 max-w-md text-base leading-8 text-[#564b40]">
                                    Private offers for this artwork are
                                    not currently being accepted.
                                </p>

                                <Link
                                    href="/paintings"
                                    className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-[#70512f] text-sm font-semibold text-[#70512f] hover:text-[#25221f]"
                                >
                                    View the Collection
                                    <ArrowUpRight
                                        size={17}
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                {/* Bottom navigation */}
                <div className="border-t border-[#70512f]/20 bg-[#faf8f4]">
                    <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-5 px-5 py-8 sm:px-8 lg:px-16">
                        <p className="font-serif text-base italic text-[#564b40]">
                            The Taste of Inspiration
                        </p>

                        <Link
                            href="/paintings"
                            className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#70512f] transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                        >
                            Back to Collection

                            <ArrowUpRight
                                size={18}
                                aria-hidden="true"
                                className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </div>
            </main>

            <BookCart />

            <Footer />
        </BookCartProvider>
    );
}

function BidField({
                      label,
                      htmlFor,
                      optional = false,
                      error,
                      children,
                  }: {
    label: string;
    htmlFor: string;
    optional?: boolean;
    error?: string;
    children: ReactNode;
}) {
    return (
        <div>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <label
                    htmlFor={htmlFor}
                    className="text-sm font-semibold text-[#25221f]"
                >
                    {label}
                </label>

                {optional && (
                    <span className="text-xs text-[#564b40]">
                        Optional
                    </span>
                )}
            </div>

            {children}

            {error && (
                <p
                    id={`${htmlFor}-error`}
                    role="alert"
                    className="mt-2 text-sm leading-6 text-[#a12626]"
                >
                    {error}
                </p>
            )}
        </div>
    );
}
