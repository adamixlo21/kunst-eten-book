import { FormEvent, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
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


    const paintingImages: Record<string, string> = {
        'beyond-the-surface': '/images/paintings/beyond-the-surface.jpg',
        'essence': '/images/paintings/essence.jpg',
        'the-silent-melody': '/images/paintings/the-silent-melody.jpg',
        'a-moment-to-savour': '/images/paintings/a-moment-to-savour.jpg',
        'in-bloom': '/images/paintings/in-bloom.jpg',
    };

    return (
        <BookCartProvider>
            <Head
                title={`${painting.title} | The Taste of Inspiration`}
            />

            <Navbar />

            <main className="min-h-screen bg-[#f6f1e9] text-[#25231f]">

                {/* Top navigation */}
                <div className="border-b border-[#d9d0c3]">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-16">

                        <Link
                            href="/paintings"
                            className="group flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#625e57]"
                        >
                            <span className="transition-transform group-hover:-translate-x-1">
                                ←
                            </span>

                            Back to the Collection
                        </Link>

                        <p className="hidden text-[10px] uppercase tracking-[0.25em] text-[#9a9186] sm:block">
                            The Taste of Inspiration
                        </p>
                    </div>
                </div>

                {/* Artwork */}
                <section className="px-6 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

                        {/* Painting */}
                        <div>
                            <div className="relative">
                                <div className="absolute -inset-3 border border-[#cfc4b5]" />

                                <div className="relative overflow-hidden bg-[#e8e0d5] shadow-[0_25px_80px_rgba(68,55,40,0.12)]">
                                    {painting.image ? (
                                        <img
                                            src={paintingImages[painting.slug]}
                                            alt={painting.title}
                                            className="h-auto w-full object-contain"
                                        />
                                    ) : (
                                        <div className="flex aspect-[4/5] items-center justify-center">
                                            <span className="text-xs uppercase tracking-[0.25em] text-[#948b80]">
                                                Artwork coming soon
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Information */}
                        <div className="flex flex-col justify-center lg:py-10">

                            {/* Label */}
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#a78967]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    Original Artwork
                                </p>
                            </div>

                            {/* Title */}
                            <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl">
                                {painting.title}
                            </h1>

                            {/* Availability */}
                            <div className="mt-7 flex items-center gap-2">
                                <span
                                    className={`h-2 w-2 rounded-full ${
                                        painting.bidding_open
                                            ? 'bg-[#66765d]'
                                            : 'bg-[#9b9186]'
                                    }`}
                                />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77716a]">
                                    {painting.bidding_open
                                        ? 'Available for Private Bidding'
                                        : 'Bidding Closed'}
                                </span>
                            </div>

                            {/* Description */}
                            {painting.description && (
                                <div className="mt-10 border-t border-[#d9d0c3] pt-8">
                                    <p className="whitespace-pre-line text-sm leading-8 text-[#6f6961] md:text-base">
                                        {painting.description}
                                    </p>
                                </div>
                            )}

                            {/* Starting price */}
                            <div className="mt-10 border-y border-[#d9d0c3] py-7">
                                <div className="flex items-end justify-between gap-5">

                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#918a81]">
                                            Starting Price
                                        </p>

                                        <p className="mt-2 font-serif text-3xl text-[#6f5237]">
                                            {formatPrice(
                                                painting.starting_price,
                                            )}
                                        </p>
                                    </div>

                                    <p className="max-w-[190px] text-right text-xs leading-5 text-[#918a81]">
                                        All offers are handled privately.
                                    </p>
                                </div>
                            </div>

                            {/* Private bid form */}
                            {painting.bidding_open ? (
                                <div className="mt-8 bg-[#eee6da] p-6 md:p-8">

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                        Private Acquisition
                                    </p>

                                    <h2 className="mt-3 font-serif text-2xl">
                                        Place a Private Bid
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-[#716a61]">
                                        Your offer and personal information
                                        remain completely private and are
                                        never shown to other visitors. No
                                        automatic payment will be made.
                                    </p>

                                    {/* Success */}
                                    {bidSent && (
                                        <div className="mt-6 overflow-hidden border border-[#8b9b7c] bg-[#f5f7f2]">

                                            <div className="flex items-start gap-4 p-5 md:p-6">

                                                {/* Check icon */}
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#66765d] text-white">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        className="h-5 w-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M5 12.5l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#66765d]">
                                                        Offer Received
                                                    </p>

                                                    <h3 className="mt-1 font-serif text-xl text-[#2f382b]">
                                                        Your private offer has
                                                        been received.
                                                    </h3>

                                                    <p className="mt-2 max-w-md text-sm leading-6 text-[#687062]">
                                                        Thank you for your
                                                        interest in{' '}

                                                        <span className="font-medium text-[#454d40]">
                                                            {painting.title}
                                                        </span>

                                                        . Your offer has been
                                                        stored privately and is
                                                        not visible to other
                                                        visitors.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="border-t border-[#d7ded0] bg-[#edf1e9] px-5 py-3 md:px-6">
                                                <p className="text-xs leading-5 text-[#65705e]">
                                                    We will contact you
                                                    personally if we need any
                                                    additional information
                                                    regarding your offer.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Form */}
                                    <form
                                        onSubmit={submitBid}
                                        className="mt-7 space-y-5"
                                    >
                                        {/* Name */}
                                        <div>
                                            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#746b61]">
                                                Name *
                                            </label>

                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        'name',
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full border border-[#d1c5b6] bg-[#f8f4ee] px-4 py-3 text-sm text-[#25231f] outline-none transition focus:border-[#8a6a48]"
                                                placeholder="Your name"
                                            />

                                            {errors.name && (
                                                <p className="mt-2 text-xs text-red-700">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#746b61]">
                                                Email Address *
                                            </label>

                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full border border-[#d1c5b6] bg-[#f8f4ee] px-4 py-3 text-sm text-[#25231f] outline-none transition focus:border-[#8a6a48]"
                                                placeholder="name@email.com"
                                            />

                                            {errors.email && (
                                                <p className="mt-2 text-xs text-red-700">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#746b61]">
                                                Phone Number (optional)
                                            </label>

                                            <input
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        'phone',
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full border border-[#d1c5b6] bg-[#f8f4ee] px-4 py-3 text-sm text-[#25231f] outline-none transition focus:border-[#8a6a48]"
                                                placeholder="+31 6 ..."
                                            />

                                            {errors.phone && (
                                                <p className="mt-2 text-xs text-red-700">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                        {/* Bid amount */}
                                        <div>
                                            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#746b61]">
                                                Your Offer *
                                            </label>

                                            <div className="relative">
                                                <span className="absolute top-1/2 left-4 -translate-y-1/2 font-serif text-xl text-[#8a6a48]">
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
                                                    className="w-full border border-[#d1c5b6] bg-[#f8f4ee] py-4 pr-4 pl-10 font-serif text-xl text-[#25231f] outline-none transition focus:border-[#8a6a48]"
                                                />
                                            </div>

                                            <p className="mt-2 text-xs text-[#857c72]">
                                                Minimum{' '}
                                                {formatPrice(
                                                    painting.starting_price,
                                                )}
                                            </p>

                                            {errors.amount && (
                                                <p className="mt-2 text-xs text-red-700">
                                                    {errors.amount}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full bg-[#8a6a48] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#75583c] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {processing
                                                ? 'Sending Offer...'
                                                : 'Place Private Bid'}
                                        </button>

                                        <p className="text-center text-[10px] leading-5 text-[#91887e]">
                                            Your offer is private. Other
                                            visitors cannot see the amount you
                                            submit.
                                        </p>
                                    </form>
                                </div>
                            ) : (
                                /* Closed bidding */
                                <div className="mt-8 border border-[#d9d0c3] p-6 text-center">
                                    <p className="text-xs uppercase tracking-[0.18em] text-[#918a81]">
                                        Bidding for this artwork is currently
                                        closed.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Privacy */}
                <section className="mt-8 border-t border-[#d9d0c3] bg-[#eee6da] px-6 py-16 md:py-20">
                    <div className="mx-auto max-w-2xl text-center">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Private Bidding
                        </p>

                        <h2 className="mt-4 font-serif text-3xl">
                            Your offer remains private.
                        </h2>

                        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#716a61]">
                            Offer amounts and bidder information are never
                            displayed publicly. After submitting an offer, we
                            may contact you personally to discuss the artwork
                            and the next steps.
                        </p>
                    </div>
                </section>
            </main>

            <BookCart />

            <Footer />
        </BookCartProvider>
    );
}
