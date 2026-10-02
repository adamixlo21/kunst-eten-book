import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

import { useBookCart } from '@/components/BookCartContext';

export default function BookSection() {
    const { quantity, setQuantity, openCart } = useBookCart();

    const handleOrder = () => {
        if (quantity === 0) {
            setQuantity(1);
        }

        openCart();
    };

    return (
        <section
            id="book"
            className="relative overflow-hidden bg-white px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#8a6a48]/5 blur-3xl" />

            <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#b99a75]/5 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">

                {/* BOOK IMAGE */}
                <div className="relative mx-auto w-full max-w-xl">
                    <div className="absolute inset-8 rounded-[3rem] bg-[#f7f3ec]" />

                    <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#faf8f4] px-8 py-12 shadow-[0_30px_80px_rgba(70,55,40,0.10)] sm:px-12">
                        <img
                            src="/images/book cover.png"
                            alt="The Taste of Inspiration book"
                            className="relative z-10 max-h-[520px] w-auto max-w-full object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)] transition duration-700 hover:-translate-y-2 hover:scale-[1.02]"
                        />
                    </div>

                    {/* Floating label */}
                    <div className="absolute -bottom-6 right-5 rounded-[1.5rem] border border-stone-200 bg-white/95 px-6 py-5 shadow-xl backdrop-blur sm:right-8">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            The Taste of Inspiration
                        </p>

                        <p className="mt-1 text-lg font-medium text-stone-900">
                            Food becomes art
                        </p>

                        <p className="mt-1 text-xs text-stone-400">
                            Food × Art × Inspiration
                        </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div>
                    {/* Label */}
                    <div className="mb-6 flex items-center gap-4">
                        <div className="h-px w-10 bg-[#8a6a48]" />

                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            The Book
                        </p>
                    </div>

                    {/* Heading */}
                    <h2 className="max-w-xl font-serif text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                        Where flavour
                        <br />

                        <span className="italic text-[#8a6a48]">
                            becomes colour.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
                        The Taste of Inspiration brings together food,
                        painting and personal stories in one sensory journey.
                        Discover how a dish can become a feeling, how a feeling
                        can become an image, and how an image can become art.
                    </p>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-stone-500">
                        Through Patrick&apos;s culinary creations and
                        Nour&apos;s paintings, the book invites you to slow
                        down, look closer and experience food and art in a
                        different way.
                    </p>

                    {/* Quote */}
                    <div className="mt-8 border-l-2 border-[#8a6a48] pl-6">
                        <p className="font-serif text-xl italic leading-8 text-stone-700">
                            “A taste became an image.
                            <br />
                            An image became a feeling.”
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
                            <p className="font-serif text-3xl font-light">
                                5
                            </p>

                            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-400">
                                Original Paintings
                            </p>
                        </div>

                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
                            <p className="font-serif text-3xl font-light">
                                5
                            </p>

                            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-400">
                                Culinary Creations
                            </p>
                        </div>

                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
                            <p className="font-serif text-3xl font-light">
                                1
                            </p>

                            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-400">
                                Shared Journey
                            </p>
                        </div>
                    </div>

                    {/* PRODUCT / PRICE */}
                    <div className="mt-10 border-y border-stone-200 py-7">
                        <div className="flex items-end justify-between gap-6">

                            <div>
                                <p className="font-serif text-lg text-stone-900">
                                    The Taste of Inspiration
                                </p>

                                <p className="mt-1 text-sm text-stone-400">
                                    Hardcover book
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                                    Price
                                </p>

                                <p className="mt-1 font-serif text-3xl tracking-tight">
                                    €249.99
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            type="button"
                            onClick={handleOrder}
                            className="group flex items-center gap-3 rounded-full bg-stone-900 px-8 py-4 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48] hover:shadow-lg"
                        >
                            <ShoppingBag
                                size={17}
                                className="transition duration-300 group-hover:scale-110"
                            />

                            Order the Book
                        </button>

                        <Link
                            href="/paintings"
                            className="group flex items-center gap-3 rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-medium text-stone-700 transition duration-300 hover:-translate-y-0.5 hover:border-[#8a6a48] hover:text-[#8a6a48]"
                        >
                            Explore the Paintings

                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    {/* Small note */}
                    <p className="mt-6 text-xs leading-6 text-stone-400">
                        A book created to be experienced slowly — through
                        flavour, colour, memory and imagination.
                    </p>
                </div>
            </div>
        </section>
    );
}
