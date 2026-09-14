import { ShoppingBag } from 'lucide-react';

import { useBookCart } from '@/components/BookCartContext';

export default function BookSection() {
    const { openCart } = useBookCart();

    return (
        <section
            id="boek"
            className="relative overflow-hidden bg-white px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            {/* Background decoration */}
            <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#8a6a48]/5 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                {/* Book image */}
                <div className="relative mx-auto w-full max-w-xl">
                    <div className="absolute inset-8 rounded-[3rem] bg-[#f7f3ec]" />

                    <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#faf8f4] px-8 py-12 shadow-[0_30px_80px_rgba(70,55,40,0.10)] sm:px-12">
                        <img
                            src="/images/book cover.png"
                            alt="Kunst Eten boek"
                            className="relative z-10 max-h-[520px] w-auto max-w-full object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)] transition duration-700 hover:-translate-y-2 hover:scale-[1.02]"
                        />
                    </div>

                    {/* Floating label */}
                    <div className="absolute -bottom-6 right-5 rounded-[1.5rem] border border-stone-200 bg-white/95 px-6 py-5 shadow-xl backdrop-blur sm:right-8">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <p className="mt-1 text-lg font-medium text-stone-900">
                            Vijf verhalen in één boek
                        </p>

                        <p className="mt-1 text-xs text-stone-400">
                            Kunst × Gastronomie
                        </p>
                    </div>
                </div>

                {/* Text */}
                <div>
                    <div className="mb-6 flex items-center gap-4">
                        <div className="h-px w-10 bg-[#8a6a48]" />

                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            Het boek
                        </p>
                    </div>

                    <h2 className="max-w-xl text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                        Kunst om te zien.
                        <br />

                        <span className="text-stone-500">
                            Gerechten om te beleven.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
                        Ontdek het volledige verhaal achter vijf schilderijen en
                        vijf gerechten. Een boek waarin kunst, inspiratie en
                        gastronomie samenkomen.
                    </p>

                    {/* Features */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
                            <p className="text-2xl font-light">
                                5
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-400">
                                Schilderijen
                            </p>
                        </div>

                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
                            <p className="text-2xl font-light">
                                5
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-400">
                                Gerechten
                            </p>
                        </div>

                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
                            <p className="text-2xl font-light">
                                1
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-400">
                                Verhaal
                            </p>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mt-10 border-y border-stone-200 py-7">
                        <div className="flex items-end justify-between gap-6">
                            <div>
                                <p className="text-sm font-medium text-stone-900">
                                    Kunst Eten
                                </p>

                                <p className="mt-1 text-sm text-stone-400">
                                    Hardcover boek
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-xs uppercase tracking-[0.18em] text-stone-400">
                                    Prijs
                                </p>

                                <p className="mt-1 text-3xl font-light tracking-tight">
                                    € 249,99
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            type="button"
                            onClick={openCart}
                            className="group flex items-center gap-3 rounded-full bg-stone-900 px-8 py-4 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48] hover:shadow-lg"
                        >
                            <ShoppingBag
                                size={17}
                                className="transition duration-300 group-hover:scale-110"
                            />

                            Bestel het boek
                        </button>

                        <a
                            href="#kunstwerken"
                            className="rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-medium text-stone-700 transition duration-300 hover:-translate-y-0.5 hover:border-stone-900"
                        >
                            Bekijk kunstwerken
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
