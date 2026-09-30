import { Head, Link } from '@inertiajs/react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {BookCartProvider} from "@/components/BookCartContext";
import BookCart from "@/components/BookCart";

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

export default function PaintingsIndex({ paintings }: Props) {
    const formatPrice = (price: string) =>
        new Intl.NumberFormat('nl-NL', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(Number(price));

    return (
        <BookCartProvider>

            <Head title="Schilderijen | Kunst Eten" />
            <Navbar />

            <main className="min-h-screen overflow-hidden bg-[#f6f1e9] text-[#25231f]">

                {/* HERO */}
                <section className="relative overflow-hidden border-b border-[#d9d0c3]">
                    {/* Decorative background */}
                    <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#b99a75]/10 blur-3xl" />
                    <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#8a6a48]/10 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-7 flex items-center justify-center gap-4">
                                <span className="h-px w-10 bg-[#a78967]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                                    The Collection
                                </p>

                                <span className="h-px w-10 bg-[#a78967]" />
                            </div>

                            <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[88px]">
                                Original
                                <span className="block italic text-[#8a6a48]">
                                    Paintings
                                </span>
                            </h1>

                            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#6f6961] md:text-base md:leading-8">
                                Een collectie originele werken ontstaan uit de
                                ontmoeting tussen smaak, herinnering en
                                verbeelding.
                            </p>

                            <p className="mx-auto mt-3 max-w-lg text-xs leading-6 text-[#948b80]">
                                Elk schilderij is uniek en kan worden verworven
                                door middel van een privébod.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="px-6 py-12 md:px-10 lg:px-16">
                    <div className="mx-auto flex max-w-7xl items-end justify-between border-b border-[#d9d0c3] pb-6">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Kunst Eten
                            </p>

                            <h2 className="mt-2 font-serif text-2xl md:text-3xl">
                                De collectie
                            </h2>
                        </div>

                        <p className="hidden text-xs uppercase tracking-[0.18em] text-[#948b80] md:block">
                            {paintings.length}{' '}
                            {paintings.length === 1
                                ? 'kunstwerk'
                                : 'kunstwerken'}
                        </p>
                    </div>
                </section>

                {/* PAINTINGS */}
                <section className="px-6 pb-28 md:px-10 md:pb-36 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-x-16 lg:gap-y-28">
                        {paintings.map((painting, index) => (
                            <Link
                                key={painting.id}
                                href={`/paintings/${painting.slug}`}
                                className={`group block ${
                                    index % 2 === 1
                                        ? 'md:translate-y-20'
                                        : ''
                                }`}
                            >
                                {/* IMAGE */}
                                <div className="relative">
                                    <div className="absolute -inset-3 border border-[#cfc4b5]/60 opacity-0 transition-all duration-500 group-hover:-inset-2 group-hover:opacity-100" />

                                    <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e0d5] shadow-[0_18px_60px_rgba(68,55,40,0.08)]">
                                        {painting.image ? (
                                            <img
                                                src={`/storage/${painting.image}`}
                                                alt={painting.title}
                                                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center bg-[#e9e1d6]">
                                                <div className="text-center">
                                                    <div className="mx-auto mb-4 h-px w-12 bg-[#b9aa98]" />

                                                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#948b80]">
                                                        Afbeelding volgt
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Number */}
                                        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-white/40 bg-[#25231f]/25 text-xs text-white backdrop-blur-sm">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        {/* Availability */}
                                        <div className="absolute bottom-5 right-5">
                                            <div className="flex items-center gap-2 bg-[#f7f3ec]/95 px-3 py-2 backdrop-blur">
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${
                                                        painting.bidding_open
                                                            ? 'bg-[#66765d]'
                                                            : 'bg-[#a39b91]'
                                                    }`}
                                                />

                                                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#4f4a44]">
                                                    {painting.bidding_open
                                                        ? 'Beschikbaar'
                                                        : 'Bieden gesloten'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="pt-7">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="min-w-0">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#a0805d]">
                                                Original Artwork
                                            </p>

                                            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#8a6a48] md:text-4xl">
                                                {painting.title}
                                            </h2>
                                        </div>

                                        <div className="shrink-0 text-right">
                                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#9a9186]">
                                                Vanaf
                                            </p>

                                            <p className="mt-2 font-serif text-xl text-[#6f5237]">
                                                {formatPrice(
                                                    painting.starting_price,
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {painting.description && (
                                        <p className="mt-5 line-clamp-3 max-w-xl text-sm leading-7 text-[#746e66]">
                                            {painting.description}
                                        </p>
                                    )}

                                    <div className="mt-7 flex items-center justify-between border-t border-[#d9d0c3] pt-5">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#49453f]">
                                            Bekijk kunstwerk
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bcae9c] transition-all duration-300 group-hover:border-[#8a6a48] group-hover:bg-[#8a6a48] group-hover:text-white">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Needed because every second card is offset */}
                    {paintings.length > 1 && (
                        <div className="hidden h-16 md:block" />
                    )}

                    {/* EMPTY STATE */}
                    {paintings.length === 0 && (
                        <div className="mx-auto max-w-xl py-24 text-center">
                            <div className="mx-auto mb-8 h-px w-16 bg-[#a78967]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Binnenkort
                            </p>

                            <h2 className="mt-4 font-serif text-4xl">
                                De collectie wordt voorbereid
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#77716a]">
                                Binnenkort verschijnen hier de originele
                                schilderijen uit Kunst Eten.
                            </p>
                        </div>
                    )}
                </section>

                {/* BOTTOM STATEMENT */}
                {paintings.length > 0 && (
                    <section className="border-t border-[#d9d0c3] bg-[#eee6da] px-6 py-20 text-center md:py-28">
                        <div className="mx-auto max-w-2xl">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Private acquisition
                            </p>

                            <h2 className="mt-5 font-serif text-3xl leading-tight md:text-5xl">
                                Een kunstwerk dat
                                <span className="block italic text-[#8a6a48]">
                                    bij je blijft.
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#716a61]">
                                Biedingen worden privé behandeld. Andere
                                bezoekers kunnen jouw bod of de biedingen van
                                anderen niet bekijken.
                            </p>
                        </div>
                    </section>
                )}
            </main>
            <BookCart />
            <Footer/>
        </BookCartProvider>
    );
}
