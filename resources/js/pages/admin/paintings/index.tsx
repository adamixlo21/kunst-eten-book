
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {
    ArrowUpRight,
    Image as ImageIcon,
    Pencil,
    Trash2,
    Gavel,
    Search,
    ExternalLink,
    AlertTriangle,
} from 'lucide-react';

interface Painting {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    image: string | null;
    starting_price: string | number;
    bidding_open: boolean;
    sort_order: number;
}

interface Props {
    paintings: Painting[];
}

type Filter = 'all' | 'open' | 'closed';

const formatPrice = (price: string | number) =>
    new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(price) || 0);

function paintingImageUrl(image: string | null) {
    if (!image) return null;

    if (
        image.startsWith('http://') ||
        image.startsWith('https://') ||
        image.startsWith('/')
    ) {
        return image;
    }

    // Supports uploaded images stored on Laravel's public disk.
    return `/storage/${image}`;
}

export default function PaintingIndex({ paintings }: Props) {
    const [filter, setFilter] = useState<Filter>('all');
    const [search, setSearch] = useState('');
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const openCount = paintings.filter(
        (painting) => painting.bidding_open,
    ).length;

    const closedCount = paintings.length - openCount;

    const filteredPaintings = paintings.filter((painting) => {
        const matchesSearch = painting.title
            .toLowerCase()
            .includes(search.trim().toLowerCase());

        const matchesFilter =
            filter === 'all' ||
            (filter === 'open' && painting.bidding_open) ||
            (filter === 'closed' && !painting.bidding_open);

        return matchesSearch && matchesFilter;
    });

    const deletePainting = (painting: Painting) => {
        const confirmed = window.confirm(
            `Permanently delete "${painting.title}"?\n\n` +
            'If this painting has private bids, they may also be deleted. ' +
            'Consider closing bidding instead.\n\n' +
            'This action cannot be undone.',
        );

        if (!confirmed) return;


        router.delete(`/admin/paintings/${painting.id}`, {
            preserveScroll: true,

            onStart: () => {
                setDeletingId(painting.id);
            },

            onFinish: () => {
                setDeletingId(null);
            },

            onError: (errors) => {
                window.alert(
                    errors.delete ??
                    'Unable to delete this painting. Please try again.'
                );
            },
        });

    };

    const { errors } = usePage<{
        errors: {
            delete?: string;
        };
    }>().props;

    return (
        <>
            <Head title="Paintings | The Taste of Inspiration" />

            <main className="min-h-full bg-[#f7f3ec] p-5 text-[#25221f] sm:p-8 lg:p-10">
                <div className="mx-auto max-w-7xl">



                    {/* PAGE HEADER */}
                    <div className="mb-9 flex flex-col gap-5 border-b border-[#8a6a48]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </p>

                            <h1 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
                                Manage
                                <span className="italic text-[#8a6a48]">
                                    {' '}Paintings.
                                </span>
                            </h1>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#746b61]">
                                Manage the original artwork collection,
                                starting prices and private bidding availability.
                            </p>
                        </div>

                        <Link
                            href="/paintings"
                            className="inline-flex items-center gap-2 self-start border border-[#8a6a48]/30 bg-white px-5 py-3 text-xs font-medium text-[#8a6a48] transition hover:border-[#8a6a48] hover:bg-[#eee7dc]"
                        >
                            View Public Gallery
                            <ExternalLink size={15} />
                        </Link>
                    </div>
                    {errors?.delete && (
                        <div role="alert" className="mb-6 border border-red-200 bg-red-50 p-5">
                            <p className="text-sm font-medium text-red-800">
                                Unable to delete painting
                            </p>
                            <p className="mt-2 text-sm text-red-700">
                                {String(errors.delete)}
                            </p>
                        </div>
                    )}

                    {/* OVERVIEW */}
                    <div className="mb-8 grid gap-4 sm:grid-cols-3">
                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <ImageIcon size={20} className="text-[#8a6a48]" />

                            <p className="mt-5 text-xs text-[#746b61]">
                                Total Paintings
                            </p>

                            <p className="mt-2 font-serif text-3xl">
                                {paintings.length}
                            </p>
                        </div>

                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <Gavel size={20} className="text-[#8a6a48]" />

                            <p className="mt-5 text-xs text-[#746b61]">
                                Open for Bidding
                            </p>

                            <p className="mt-2 font-serif text-3xl">
                                {openCount}
                            </p>
                        </div>

                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <ImageIcon size={20} className="text-[#8a6a48]" />

                            <p className="mt-5 text-xs text-[#746b61]">
                                Bidding Closed
                            </p>

                            <p className="mt-2 font-serif text-3xl">
                                {closedCount}
                            </p>
                        </div>
                    </div>



                    {/* COLLECTION */}
                    <div className="border border-[#8a6a48]/20 bg-white">
                        <div className="border-b border-[#8a6a48]/20 px-5 py-6 sm:px-7">
                            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2 className="font-serif text-2xl font-light">
                                        Artwork Collection
                                    </h2>

                                    <p className="mt-1 text-xs text-[#746b61]">
                                        {filteredPaintings.length} of {paintings.length} paintings
                                    </p>
                                </div>

                                <div className="relative w-full md:max-w-xs">
                                    <Search
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6a48]"
                                    />

                                    <input
                                        type="search"
                                        value={search}
                                        onChange={(event) =>
                                            setSearch(event.target.value)
                                        }
                                        placeholder="Search paintings..."
                                        aria-label="Search paintings"
                                        className="w-full border border-[#8a6a48]/25 bg-[#f7f3ec] py-3 pl-11 pr-4 text-sm text-[#25221f] outline-none transition placeholder:text-[#9b9186] focus:border-[#8a6a48]"
                                    />
                                </div>
                            </div>

                            {/* FILTERS */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {(
                                    [
                                        {
                                            key: 'all',
                                            label: 'All Paintings',
                                            count: paintings.length,
                                        },
                                        {
                                            key: 'open',
                                            label: 'Bidding Open',
                                            count: openCount,
                                        },
                                        {
                                            key: 'closed',
                                            label: 'Bidding Closed',
                                            count: closedCount,
                                        },
                                    ] as const
                                ).map((item) => (
                                    <button
                                        key={item.key}
                                        type="button"
                                        onClick={() => setFilter(item.key)}
                                        aria-pressed={filter === item.key}
                                        className={`px-4 py-2.5 text-xs font-medium transition ${
                                            filter === item.key
                                                ? 'bg-[#25221f] text-white'
                                                : 'border border-[#8a6a48]/20 bg-[#f7f3ec] text-[#746b61] hover:border-[#8a6a48]'
                                        }`}
                                    >
                                        {item.label} ({item.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* PAINTINGS LIST */}
                        {filteredPaintings.length === 0 ? (
                            <div className="px-6 py-20 text-center">
                                <ImageIcon
                                    size={32}
                                    strokeWidth={1.3}
                                    className="mx-auto mb-5 text-[#8a6a48]"
                                />

                                <h3 className="font-serif text-2xl">
                                    {paintings.length === 0
                                        ? 'No paintings yet.'
                                        : 'No matching paintings.'}
                                </h3>

                                <p className="mt-3 text-sm text-[#746b61]">
                                    {paintings.length === 0
                                        ? 'Your artwork collection will appear here.'
                                        : 'Try another search or filter.'}
                                </p>
                            </div>
                        ) : (
                            <div className="divide-y divide-[#8a6a48]/15">
                                {filteredPaintings.map((painting) => (
                                    <div
                                        key={painting.id}
                                        className="p-5 transition hover:bg-[#faf8f4] sm:p-7"
                                    >
                                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                                            {/* IMAGE */}
                                            <div className="h-52 w-full shrink-0 overflow-hidden bg-[#eee7dc] sm:h-40 sm:w-32">
                                                {painting.image ? (
                                                    <img
                                                        src={paintingImageUrl(
                                                            painting.image,
                                                        ) ?? ''}
                                                        alt={painting.title}
                                                        loading="lazy"
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center px-3 text-center">
                                                        <span className="text-[10px] uppercase tracking-wider text-[#8a6a48]">
                                                            No Image
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* DETAILS */}
                                            <div className="min-w-0 flex-1">
                                                <div className="mb-3 flex flex-wrap items-center gap-3">
                                                    <span
                                                        className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${
                                                            painting.bidding_open
                                                                ? 'bg-emerald-50 text-emerald-700'
                                                                : 'bg-stone-100 text-stone-600'
                                                        }`}
                                                    >
                                                        {painting.bidding_open
                                                            ? 'Bidding Open'
                                                            : 'Bidding Closed'}
                                                    </span>

                                                    <span className="text-xs text-[#8a847c]">
                                                        Display order: {painting.sort_order}
                                                    </span>
                                                </div>

                                                <h3 className="font-serif text-2xl">
                                                    {painting.title}
                                                </h3>

                                                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a847c]">
                                                    Starting Price
                                                </p>

                                                <p className="mt-1 font-serif text-xl text-[#8a6a48]">
                                                    {formatPrice(painting.starting_price)}
                                                </p>

                                                {painting.description && (
                                                    <p className="mt-4 line-clamp-2 max-w-2xl text-sm leading-6 text-[#746b61]">
                                                        {painting.description}
                                                    </p>
                                                )}
                                            </div>

                                            {/* ACTIONS */}
                                            <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-stretch">
                                                <Link
                                                    href={`/admin/paintings/${painting.id}/edit`}
                                                    className="inline-flex items-center justify-center gap-2 bg-[#25221f] px-5 py-3 text-xs font-medium text-white transition hover:bg-[#8a6a48]"
                                                >
                                                    <Pencil size={15} />
                                                    Edit
                                                </Link>

                                                <Link
                                                    href={`/paintings/${painting.slug}`}
                                                    className="inline-flex items-center justify-center gap-2 border border-[#8a6a48]/25 px-5 py-3 text-xs font-medium text-[#8a6a48] transition hover:bg-[#eee7dc]"
                                                >
                                                    <ArrowUpRight size={15} />
                                                    View
                                                </Link>

                                                <button
                                                    type="button"
                                                    disabled={deletingId !== null}
                                                    onClick={() =>
                                                        deletePainting(painting)
                                                    }
                                                    className="inline-flex items-center justify-center gap-2 border border-red-200 px-5 py-3 text-xs font-medium text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                                                >
                                                    {deletingId === painting.id ? (
                                                        'Deleting...'
                                                    ) : (
                                                        <>
                                                            <Trash2 size={15} />
                                                            Delete
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* WARNING */}
                    <div className="mt-6 flex items-start gap-3 border border-amber-200 bg-amber-50 p-5">
                        <AlertTriangle
                            size={18}
                            className="mt-0.5 shrink-0 text-amber-700"
                        />

                        <p className="text-xs leading-6 text-amber-900">
                            <strong>Before deleting artwork:</strong> Private
                            bids may be permanently deleted with the painting,
                            depending on your database relationships.
                            Close bidding instead if you want to preserve
                            the artwork and its offer history.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
