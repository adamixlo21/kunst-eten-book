import { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface Painting {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    starting_price: string;
    bidding_open: boolean;
    sort_order: number;
    image: string | null;
}

interface Props {
    painting: Painting;
}

export default function PaintingEdit({ painting }: Props) {
    const { data, setData, patch, processing, errors, post } = useForm({
        title: painting.title,
        description: painting.description ?? '',
        starting_price: painting.starting_price,
        bidding_open: painting.bidding_open,
        sort_order: painting.sort_order,
        image: null as File | null,
        _method: 'patch',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(`/admin/paintings/${painting.id}`, {
            preserveScroll: true,
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title={`Bewerk ${painting.title}`} />

            <div className="min-h-screen bg-[#f7f3ec] p-6 md:p-10">
                <div className="mx-auto max-w-3xl">

                    <Link
                        href="/admin/paintings"
                        className="mb-8 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6a48]"
                    >
                        ← Terug naar schilderijen
                    </Link>

                    <div className="border border-[#e5ddd2] bg-white">

                        <div className="border-b border-[#e5ddd2] bg-[#efe8dd] p-8">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Kunst Eten
                            </p>

                            <h1 className="font-serif text-3xl text-[#292722]">
                                Schilderij bewerken
                            </h1>

                            <p className="mt-2 text-sm text-[#77716a]">
                                Pas de gegevens en biedingsinstellingen aan.
                            </p>
                        </div>

                        <form
                            onSubmit={submit}
                            className="space-y-7 p-8"
                        >
                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#625e57]">
                                    Naam
                                </label>

                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData('title', e.target.value)
                                    }
                                    className="w-full border border-[#d9cec1] bg-white px-4 py-3 text-[#292722] outline-none transition focus:border-[#8a6a48]"
                                />

                                {errors.title && (
                                    <p className="mt-2 text-xs text-red-600">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#625e57]">
                                    Beschrijving
                                </label>

                                <textarea
                                    rows={6}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData(
                                            'description',
                                            e.target.value,
                                        )
                                    }
                                    className="w-full resize-none border border-[#d9cec1] bg-white px-4 py-3 text-[#292722] outline-none transition focus:border-[#8a6a48]"
                                />

                                {errors.description && (
                                    <p className="mt-2 text-xs text-red-600">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            {/* Price + order */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#625e57]">
                                        Startprijs (€)
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={data.starting_price}
                                        onChange={(e) =>
                                            setData(
                                                'starting_price',
                                                e.target.value,
                                            )
                                        }
                                        className="w-full border border-[#d9cec1] bg-white px-4 py-3 text-[#292722] outline-none transition focus:border-[#8a6a48]"
                                    />

                                    {errors.starting_price && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.starting_price}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#625e57]">
                                        Volgorde
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        value={data.sort_order}
                                        onChange={(e) =>
                                            setData(
                                                'sort_order',
                                                Number(e.target.value),
                                            )
                                        }
                                        className="w-full border border-[#d9cec1] bg-white px-4 py-3 text-[#292722] outline-none transition focus:border-[#8a6a48]"
                                    />

                                    {errors.sort_order && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.sort_order}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Image */}
                            <div>
                                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#625e57]">
                                    Afbeelding
                                </label>

                                <div className="grid gap-5 md:grid-cols-[180px_1fr]">
                                    <div className="overflow-hidden border border-[#e5ddd2] bg-[#f7f3ec]">
                                        {data.image ? (
                                            <img
                                                src={URL.createObjectURL(data.image)}
                                                alt="Nieuwe afbeelding"
                                                className="h-56 w-full object-cover"
                                            />
                                        ) : painting.image ? (
                                            <img
                                                src={`/storage/${painting.image}`}
                                                alt={painting.title}
                                                className="h-56 w-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-56 items-center justify-center p-5 text-center">
                                                <span className="text-xs uppercase tracking-[0.15em] text-[#9b9186]">
                                                    Geen afbeelding
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <input
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp"
                                            onChange={(e) =>
                                                setData(
                                                    'image',
                                                    e.target.files?.[0] ?? null,
                                                )
                                            }
                                            className="
                                                block w-full text-sm text-[#625e57]
                                                file:mr-4 file:border-0
                                                file:bg-[#292722]
                                                file:px-5 file:py-3
                                                file:text-xs file:font-semibold
                                                file:uppercase file:tracking-wider
                                                file:text-white
                                                hover:file:bg-[#8a6a48]
                                            "
                                        />

                                        <p className="mt-3 text-xs leading-5 text-[#8a847c]">
                                            JPG, PNG of WebP. Maximaal 5 MB.
                                        </p>

                                        {painting.image && !data.image && (
                                            <p className="mt-2 text-xs text-[#8a6a48]">
                                                De huidige afbeelding blijft behouden als je geen
                                                nieuwe afbeelding kiest.
                                            </p>
                                        )}

                                        {data.image && (
                                            <button
                                                type="button"
                                                onClick={() => setData('image', null)}
                                                className="mt-4 w-fit text-xs font-semibold text-[#8a6a48] underline"
                                            >
                                                Nieuwe afbeelding verwijderen
                                            </button>
                                        )}

                                        {errors.image && (
                                            <p className="mt-2 text-xs text-red-600">
                                                {errors.image}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bidding */}
                            <div className="border border-[#e5ddd2] bg-[#faf8f4] p-5">
                                <label className="flex cursor-pointer items-center justify-between gap-5">
                                    <div>
                                        <p className="font-medium text-[#292722]">
                                            Bieden toestaan
                                        </p>

                                        <p className="mt-1 text-sm text-[#77716a]">
                                            Bezoekers kunnen een privébod
                                            plaatsen wanneer dit is ingeschakeld.
                                        </p>
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={data.bidding_open}
                                        onChange={(e) =>
                                            setData(
                                                'bidding_open',
                                                e.target.checked,
                                            )
                                        }
                                        className="h-5 w-5 accent-[#8a6a48]"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-end border-t border-[#e5ddd2] pt-7">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-[#8a6a48] px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#75583c] disabled:opacity-50"
                                >
                                    {processing
                                        ? 'Opslaan...'
                                        : 'Wijzigingen opslaan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
