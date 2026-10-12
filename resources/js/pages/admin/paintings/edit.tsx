
import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Image as ImageIcon,
    Save,
    Upload,
    X,
} from 'lucide-react';

interface Painting {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    starting_price: string | number;
    bidding_open: boolean;
    sort_order: number;
    image: string | null;
}

interface Props {
    painting: Painting;
}

function paintingImageUrl(image: string | null): string | null {
    if (!image) return null;

    if (
        image.startsWith('https://') ||
        image.startsWith('http://') ||
        image.startsWith('/')
    ) {
        return image;
    }

    return `/storage/${image}`;
}

const inputClass =
    'w-full border border-[#d9cec1] bg-white px-4 py-3.5 text-sm text-[#25221f] outline-none transition placeholder:text-[#a49b90] focus:border-[#8a6a48] focus:ring-1 focus:ring-[#8a6a48]/20';

const labelClass =
    'mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#746b61]';

export default function PaintingEdit({ painting }: Props) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        isDirty,
    } = useForm({
        title: painting.title,
        description: painting.description ?? '',
        starting_price: String(painting.starting_price),
        bidding_open: Boolean(painting.bidding_open),
        sort_order: Number(painting.sort_order),
        image: null as File | null,
        _method: 'patch',
    });

    const [savedPreview, setSavedPreview] = useState(false);

    const uploadedPreview = useMemo(() => {
        if (!data.image) return null;
        return URL.createObjectURL(data.image);
    }, [data.image]);

    useEffect(() => {
        return () => {
            if (uploadedPreview) {
                URL.revokeObjectURL(uploadedPreview);
            }
        };
    }, [uploadedPreview]);

    const imagePreview =
        uploadedPreview ?? paintingImageUrl(painting.image);

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSavedPreview(false);

        post(`/admin/paintings/${painting.id}`, {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => setSavedPreview(true),
        });
    };

    return (
        <>
            <Head
                title={`Edit ${painting.title} | The Taste of Inspiration`}
            />

            <main className="min-h-full bg-[#f7f3ec] px-5 py-8 text-[#25221f] sm:px-8 lg:px-12 lg:py-12">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <Link
                            href="/admin/paintings"
                            className="inline-flex items-center gap-2 text-xs font-medium text-[#8a6a48] transition hover:text-[#25221f]"
                        >
                            <ArrowLeft size={16} />
                            Back to Paintings
                        </Link>

                        <Link
                            href={`/paintings/${painting.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-medium text-[#8a6a48] hover:text-[#25221f]"
                        >
                            View Public Page
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    {/* HEADER */}
                    <div className="mb-9 border-b border-[#8a6a48]/20 pb-8">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            The Taste of Inspiration / Artwork Management
                        </p>

                        <h1 className="font-serif text-4xl font-light sm:text-5xl">
                            Edit
                            <span className="italic text-[#8a6a48]">
                                {' '}Painting.
                            </span>
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#746b61]">
                            Update the artwork information, image, starting
                            price, display position and private bidding
                            availability.
                        </p>
                    </div>

                    {savedPreview && (
                        <div
                            role="status"
                            className="mb-6 flex items-center gap-3 border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800"
                        >
                            <CheckCircle2 size={18} />
                            Painting changes saved successfully.
                        </div>
                    )}

                    <form
                        onSubmit={submit}
                        className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]"
                    >
                        {/* FORM */}
                        <div className="space-y-6">
                            <section className="border border-[#8a6a48]/20 bg-white p-5 sm:p-8">
                                <div className="mb-7 border-b border-[#8a6a48]/15 pb-5">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                        01 / Artwork Details
                                    </p>

                                    <h2 className="mt-3 font-serif text-2xl">
                                        About the Painting
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="painting-title"
                                            className={labelClass}
                                        >
                                            Artwork Title
                                        </label>

                                        <input
                                            id="painting-title"
                                            type="text"
                                            value={data.title}
                                            onChange={(event) =>
                                                setData(
                                                    'title',
                                                    event.target.value,
                                                )
                                            }
                                            maxLength={255}
                                            required
                                            className={inputClass}
                                        />

                                        {errors.title && (
                                            <p className="mt-2 text-xs text-red-700">
                                                {errors.title}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="painting-description"
                                            className={labelClass}
                                        >
                                            Description
                                        </label>

                                        <textarea
                                            id="painting-description"
                                            rows={6}
                                            maxLength={5000}
                                            value={data.description}
                                            onChange={(event) =>
                                                setData(
                                                    'description',
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="Describe the inspiration and story behind the artwork..."
                                            className={`${inputClass} resize-y`}
                                        />

                                        <div className="mt-2 flex justify-between gap-4">
                                            <span className="text-xs text-[#746b61]">
                                                Optional
                                            </span>

                                            <span className="text-xs text-[#746b61]">
                                                {data.description.length}/5000
                                            </span>
                                        </div>

                                        {errors.description && (
                                            <p className="mt-2 text-xs text-red-700">
                                                {errors.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="painting-price"
                                                className={labelClass}
                                            >
                                                Starting Price (€)
                                            </label>

                                            <input
                                                id="painting-price"
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                required
                                                value={data.starting_price}
                                                onChange={(event) =>
                                                    setData(
                                                        'starting_price',
                                                        event.target.value,
                                                    )
                                                }
                                                className={inputClass}
                                            />

                                            {errors.starting_price && (
                                                <p className="mt-2 text-xs text-red-700">
                                                    {errors.starting_price}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="painting-order"
                                                className={labelClass}
                                            >
                                                Display Order
                                            </label>

                                            <input
                                                id="painting-order"
                                                type="number"
                                                min="0"
                                                step="1"
                                                required
                                                value={data.sort_order}
                                                onChange={(event) =>
                                                    setData(
                                                        'sort_order',
                                                        Number(event.target.value),
                                                    )
                                                }
                                                className={inputClass}
                                            />

                                            <p className="mt-2 text-xs leading-5 text-[#746b61]">
                                                Lower numbers appear first.
                                            </p>

                                            {errors.sort_order && (
                                                <p className="mt-2 text-xs text-red-700">
                                                    {errors.sort_order}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* BIDDING */}
                            <section className="border border-[#8a6a48]/20 bg-white p-5 sm:p-8">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                    02 / Private Offers
                                </p>

                                <h2 className="mt-3 font-serif text-2xl">
                                    Bidding Settings
                                </h2>

                                <label className="mt-7 flex cursor-pointer items-start justify-between gap-5 border border-[#8a6a48]/20 bg-[#f7f3ec] p-5">
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold">
                                            Accept Private Offers
                                        </p>

                                        <p className="mt-2 text-xs leading-6 text-[#746b61]">
                                            When enabled, visitors can submit
                                            private bids for this artwork.
                                            Turning it off closes new bidding
                                            without deleting previous offers.
                                        </p>

                                        <p className="mt-3 text-xs font-medium text-[#8a6a48]">
                                            {data.bidding_open
                                                ? 'Bidding currently enabled'
                                                : 'Bidding currently disabled'}
                                        </p>
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={data.bidding_open}
                                        onChange={(event) =>
                                            setData(
                                                'bidding_open',
                                                event.target.checked,
                                            )
                                        }
                                        className="mt-1 h-5 w-5 shrink-0 accent-[#8a6a48]"
                                    />
                                </label>

                                {errors.bidding_open && (
                                    <p className="mt-2 text-xs text-red-700">
                                        {errors.bidding_open}
                                    </p>
                                )}
                            </section>
                        </div>

                        {/* IMAGE AND ACTIONS */}
                        <div className="space-y-6 lg:sticky lg:top-6">
                            <section className="border border-[#8a6a48]/20 bg-white p-5 sm:p-6">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                    03 / Artwork Image
                                </p>

                                <h2 className="mt-3 font-serif text-2xl">
                                    Image Preview
                                </h2>

                                <div className="mt-6 aspect-[3/4] overflow-hidden bg-[#eee7dc]">
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt={data.title || painting.title}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center text-[#8a6a48]">
                                            <ImageIcon
                                                size={30}
                                                strokeWidth={1.2}
                                            />
                                            <p className="text-xs uppercase tracking-wider">
                                                No Image Available
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <label
                                    htmlFor="painting-image"
                                    className="mt-5 flex cursor-pointer items-center justify-center gap-2 border border-[#8a6a48]/30 px-4 py-3 text-xs font-medium text-[#8a6a48] transition hover:bg-[#eee7dc]"
                                >
                                    <Upload size={16} />
                                    Choose New Image
                                </label>

                                <input
                                    id="painting-image"
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    onChange={(event) =>
                                        setData(
                                            'image',
                                            event.target.files?.[0] ?? null,
                                        )
                                    }
                                    className="sr-only"
                                />

                                <p className="mt-3 text-xs leading-5 text-[#746b61]">
                                    JPG, PNG or WebP. Maximum 10 MB.
                                    Choosing a new image replaces the current
                                    upload when saved.
                                </p>

                                {data.image && (
                                    <div className="mt-4 flex items-center justify-between gap-3 border border-[#8a6a48]/15 bg-[#f7f3ec] p-3">
                                        <p className="min-w-0 truncate text-xs text-[#62584c]">
                                            {data.image.name}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setData('image', null);
                                                const input = document.getElementById(
                                                    'painting-image',
                                                ) as HTMLInputElement | null;

                                                if (input) input.value = '';
                                            }}
                                            className="shrink-0 text-[#8a6a48] hover:text-red-700"
                                            aria-label="Remove selected image"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                )}

                                {errors.image && (
                                    <p className="mt-3 text-xs text-red-700">
                                        {errors.image}
                                    </p>
                                )}
                            </section>

                            <section className="border border-[#8a6a48]/20 bg-[#eee7dc] p-5 sm:p-6">
                                <h2 className="font-serif text-xl">
                                    Save Changes
                                </h2>

                                <p className="mt-3 text-xs leading-6 text-[#746b61]">
                                    Changes to the painting will be reflected
                                    on your public gallery after saving.
                                </p>

                                <button
                                    type="submit"
                                    disabled={processing || !isDirty}
                                    className="mt-6 flex w-full items-center justify-center gap-2 bg-[#25221f] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <Save size={16} />
                                    {processing
                                        ? 'Saving Changes...'
                                        : 'Save Changes'}
                                </button>

                                <Link
                                    href="/admin/paintings"
                                    className="mt-3 flex items-center justify-center px-5 py-3 text-xs font-medium text-[#746b61] hover:text-[#25221f]"
                                >
                                    Cancel
                                </Link>
                            </section>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
