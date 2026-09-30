import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

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

export default function PaintingIndex({ paintings }: Props) {
    const deletePainting = (painting: Painting) => {
        const confirmed = confirm(
            `Weet je zeker dat je "${painting.title}" wilt verwijderen?\n\nAlle biedingen voor dit schilderij worden ook verwijderd.`,
        );

        if (!confirmed) {
            return;
        }

        router.delete(`/admin/paintings/${painting.id}`, {
            preserveScroll: true,
        });
    };

    const formatPrice = (price: string) => {
        return new Intl.NumberFormat('nl-NL', {
            style: 'currency',
            currency: 'EUR',
        }).format(Number(price));
    };

    return (
        <>
            <Head title="Schilderijen" />

            <div className="min-h-screen bg-[#f7f3ec] p-6 md:p-10">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-10">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="font-serif text-4xl text-[#292722]">
                            Schilderijen
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#625e57]">
                            Beheer de schilderijen, startprijzen en
                            beschikbaarheid voor biedingen.
                        </p>
                    </div>

                    {paintings.length === 0 ? (
                        <div className="border border-[#e5ddd2] bg-white p-10 text-center">
                            <h2 className="font-serif text-2xl text-[#292722]">
                                Geen schilderijen
                            </h2>

                            <p className="mt-2 text-sm text-[#77716a]">
                                Er zijn momenteel geen schilderijen.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-5">
                            {paintings.map((painting) => (
                                <div
                                    key={painting.id}
                                    className="border border-[#e5ddd2] bg-white p-6"
                                >
                                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                                        {/* Painting image */}
                                        <div className="h-40 w-full shrink-0 overflow-hidden bg-[#efe8dd] md:h-40 md:w-32">
                                            {painting.image ? (
                                                <img
                                                    src={`/storage/${painting.image}`}
                                                    alt={painting.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center px-4 text-center">
                                                    <span className="text-xs uppercase tracking-[0.15em] text-[#9b9186]">
                                                        Geen afbeelding
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="mb-3 flex flex-wrap items-center gap-3">
                                                <span
                                                    className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                                                        painting.bidding_open
                                                            ? 'bg-[#e8efe5] text-[#53664c]'
                                                            : 'bg-stone-200 text-stone-600'
                                                    }`}
                                                >
                                                    {painting.bidding_open
                                                        ? 'Bieden open'
                                                        : 'Bieden gesloten'}
                                                </span>

                                                <span className="text-xs text-[#8a847c]">
                                                    Volgorde {painting.sort_order}
                                                </span>
                                            </div>

                                            <h2 className="font-serif text-2xl text-[#292722]">
                                                {painting.title}
                                            </h2>

                                            <div className="mt-3">
                                                <p className="text-xs uppercase tracking-wider text-[#8a847c]">
                                                    Startprijs
                                                </p>

                                                <p className="mt-1 font-serif text-xl text-[#8a6a48]">
                                                    {formatPrice(
                                                        painting.starting_price,
                                                    )}
                                                </p>
                                            </div>

                                            {painting.description && (
                                                <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-[#77716a]">
                                                    {painting.description}
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex shrink-0 flex-wrap gap-3">

                                            <div className="flex shrink-0 flex-wrap gap-3">
                                                <Link
                                                    href={`/admin/paintings/${painting.id}/edit`}
                                                    className="bg-[#292722] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#8a6a48]"
                                                >
                                                    Bewerken
                                                </Link>

                                                <button
                                                    type="button"
                                                    onClick={() => deletePainting(painting)}
                                                    className="border border-[#d9cec1] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#77695d] transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                                                >
                                                    Verwijderen
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
