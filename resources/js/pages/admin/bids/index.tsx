
import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    ArrowLeft,
    ChevronDown,
    Gavel,
    Mail,
    Phone,
    Search,
    SlidersHorizontal,
    Users,
    Wallet,
    X,
} from 'lucide-react';

interface Painting {
    id: number;
    title: string;
    slug: string;
}

interface Bid {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    amount: string | number;
    created_at: string;
    painting: Painting | null;
}

interface Props {
    bids: Bid[];
}

type SortOption =
    | 'newest'
    | 'oldest'
    | 'highest'
    | 'lowest';

type ViewMode = 'all' | 'grouped';

const formatPrice = (value: string | number) =>
    new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(value) || 0);

const formatDate = (value: string) =>
    new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(value));

function StatCard({
                      label,
                      value,
                      description,
                      icon,
                  }: {
    label: string;
    value: string;
    description: string;
    icon: ReactNode;
}) {
    return (
        <div className="border border-[#8a6a48]/20 bg-white p-6">
            <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#746b61]">
                    {label}
                </p>

                <span className="text-[#8a6a48]">{icon}</span>
            </div>

            <p className="mt-5 break-words font-serif text-3xl font-light text-[#25221f] sm:text-4xl">
                {value}
            </p>

            <p className="mt-3 text-xs leading-5 text-[#746b61]">
                {description}
            </p>
        </div>
    );
}

function BidTable({ bids }: { bids: Bid[] }) {
    if (bids.length === 0) {
        return (
            <div className="px-6 py-16 text-center">
                <Gavel
                    size={32}
                    strokeWidth={1.2}
                    className="mx-auto mb-5 text-[#8a6a48]"
                />

                <h3 className="font-serif text-2xl">
                    No matching offers.
                </h3>

                <p className="mt-3 text-sm text-[#746b61]">
                    Try changing your search or filters.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left">
                <thead className="bg-[#eee7dc]">
                <tr className="text-[10px] uppercase tracking-[0.15em] text-[#8a6a48]">
                    <th className="px-6 py-4 font-medium">
                        Artwork
                    </th>
                    <th className="px-6 py-4 font-medium">
                        Customer
                    </th>
                    <th className="px-6 py-4 font-medium">
                        Offer Amount
                    </th>
                    <th className="px-6 py-4 font-medium">
                        Submitted
                    </th>
                    <th className="px-6 py-4 font-medium">
                        Contact
                    </th>
                </tr>
                </thead>

                <tbody className="divide-y divide-[#8a6a48]/15">
                {bids.map((bid) => (
                    <tr
                        key={bid.id}
                        className="transition-colors hover:bg-[#f7f3ec]"
                    >
                        <td className="px-6 py-5">
                            {bid.painting ? (
                                <Link
                                    href={`/paintings/${bid.painting.slug}`}
                                    className="group inline-flex items-center gap-2 font-serif text-lg hover:text-[#8a6a48]"
                                >
                                        <span>
                                            {bid.painting.title}
                                        </span>

                                    <ArrowUpRight
                                        size={14}
                                        className="shrink-0 text-[#8a6a48]"
                                    />
                                </Link>
                            ) : (
                                <span className="text-sm text-[#746b61]">
                                        Artwork unavailable
                                    </span>
                            )}
                        </td>

                        <td className="px-6 py-5">
                            <p className="text-sm font-medium">
                                {bid.name}
                            </p>

                            <a
                                href={`mailto:${bid.email}`}
                                className="mt-1 block break-all text-xs text-[#746b61] hover:text-[#8a6a48]"
                            >
                                {bid.email}
                            </a>

                            {bid.phone && (
                                <a
                                    href={`tel:${bid.phone}`}
                                    className="mt-1 block text-xs text-[#746b61] hover:text-[#8a6a48]"
                                >
                                    {bid.phone}
                                </a>
                            )}
                        </td>

                        <td className="px-6 py-5">
                                <span className="font-serif text-xl text-[#8a6a48]">
                                    {formatPrice(bid.amount)}
                                </span>
                        </td>

                        <td className="px-6 py-5 text-xs text-[#746b61]">
                            {formatDate(bid.created_at)}
                        </td>

                        <td className="px-6 py-5">
                            <div className="flex gap-2">
                                <a
                                    href={`mailto:${bid.email}?subject=${encodeURIComponent(
                                        `Regarding your offer for ${bid.painting?.title ?? 'an artwork'}`,
                                    )}`}
                                    aria-label={`Email ${bid.name}`}
                                    title="Email customer"
                                    className="flex h-9 w-9 items-center justify-center border border-[#8a6a48]/25 text-[#8a6a48] transition hover:bg-[#8a6a48] hover:text-white"
                                >
                                    <Mail size={15} />
                                </a>

                                {bid.phone && (
                                    <a
                                        href={`tel:${bid.phone}`}
                                        aria-label={`Call ${bid.name}`}
                                        title="Call customer"
                                        className="flex h-9 w-9 items-center justify-center border border-[#8a6a48]/25 text-[#8a6a48] transition hover:bg-[#8a6a48] hover:text-white"
                                    >
                                        <Phone size={15} />
                                    </a>
                                )}
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default function BidsIndex({ bids }: Props) {
    const [search, setSearch] = useState('');
    const [paintingFilter, setPaintingFilter] = useState('all');
    const [sort, setSort] = useState<SortOption>('newest');
    const [viewMode, setViewMode] = useState<ViewMode>('all');

    const paintings = useMemo(() => {
        const unique = new Map<number, Painting>();

        bids.forEach((bid) => {
            if (bid.painting) {
                unique.set(bid.painting.id, bid.painting);
            }
        });

        return Array.from(unique.values()).sort((a, b) =>
            a.title.localeCompare(b.title),
        );
    }, [bids]);

    const totalOffered = bids.reduce(
        (total, bid) => total + Number(bid.amount),
        0,
    );

    const highestOffer = bids.reduce(
        (highest, bid) =>
            Math.max(highest, Number(bid.amount)),
        0,
    );

    const filteredBids = useMemo(() => {
        const query = search.trim().toLowerCase();

        return bids
            .filter((bid) => {
                const matchesSearch =
                    query === '' ||
                    bid.name.toLowerCase().includes(query) ||
                    bid.email.toLowerCase().includes(query) ||
                    (bid.phone ?? '').toLowerCase().includes(query) ||
                    (bid.painting?.title ?? '')
                        .toLowerCase()
                        .includes(query);

                const matchesPainting =
                    paintingFilter === 'all' ||
                    String(bid.painting?.id) === paintingFilter;

                return matchesSearch && matchesPainting;
            })
            .sort((a, b) => {
                switch (sort) {
                    case 'oldest':
                        return (
                            new Date(a.created_at).getTime() -
                            new Date(b.created_at).getTime()
                        );

                    case 'highest':
                        return Number(b.amount) - Number(a.amount);

                    case 'lowest':
                        return Number(a.amount) - Number(b.amount);

                    case 'newest':
                    default:
                        return (
                            new Date(b.created_at).getTime() -
                            new Date(a.created_at).getTime()
                        );
                }
            });
    }, [bids, search, paintingFilter, sort]);

    const groupedBids = useMemo(() => {
        const groups = new Map<
            string,
            { title: string; bids: Bid[] }
        >();

        filteredBids.forEach((bid) => {
            const key = bid.painting
                ? String(bid.painting.id)
                : 'unavailable';

            if (!groups.has(key)) {
                groups.set(key, {
                    title: bid.painting?.title ?? 'Artwork unavailable',
                    bids: [],
                });
            }

            groups.get(key)!.bids.push(bid);
        });

        return Array.from(groups.entries()).map(
            ([key, group]) => ({
                key,
                ...group,
            }),
        );
    }, [filteredBids]);

    const resetFilters = () => {
        setSearch('');
        setPaintingFilter('all');
        setSort('newest');
    };

    const hasActiveFilters =
        search.trim() !== '' ||
        paintingFilter !== 'all' ||
        sort !== 'newest';

    return (
        <>
            <Head title="Artwork Bids | The Taste of Inspiration" />

            <main className="min-h-full bg-[#f7f3ec] px-5 py-10 text-[#25221f] sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    {/* HEADER */}
                    <div className="mb-10 flex flex-col gap-5 border-b border-[#8a6a48]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Taste of Inspiration / Administration
                            </p>

                            <h1 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
                                Artwork
                                <span className="italic text-[#8a6a48]">
                                    {' '}Bids.
                                </span>
                            </h1>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#746b61]">
                                Review private offers, compare bids by painting,
                                and contact interested collectors.
                            </p>
                        </div>

                        <Link
                            href="/admin"
                            className="inline-flex items-center gap-2 self-start text-xs font-medium text-[#8a6a48] hover:text-[#25221f]"
                        >
                            <ArrowLeft size={16} />
                            Back to Dashboard
                        </Link>
                    </div>

                    {/* STATS */}
                    <div className="mb-9 grid gap-4 sm:grid-cols-3">
                        <StatCard
                            label="Total Offers"
                            value={String(bids.length)}
                            description="All private bids received."
                            icon={<Gavel size={20} />}
                        />

                        <StatCard
                            label="Combined Offer Amount"
                            value={formatPrice(totalOffered)}
                            description="Sum of offers, not confirmed revenue."
                            icon={<Wallet size={20} />}
                        />

                        <StatCard
                            label="Paintings With Offers"
                            value={String(paintings.length)}
                            description={`Highest individual offer: ${formatPrice(
                                highestOffer,
                            )}`}
                            icon={<Users size={20} />}
                        />
                    </div>

                    {/* MAIN PANEL */}
                    <div className="overflow-hidden border border-[#8a6a48]/20 bg-white">

                        {/* TOOLBAR */}
                        <div className="border-b border-[#8a6a48]/20 p-5 sm:p-7">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                        Private Acquisition
                                    </p>

                                    <h2 className="mt-2 font-serif text-2xl">
                                        Offer Management
                                    </h2>

                                    <p className="mt-2 text-xs text-[#746b61]">
                                        Showing {filteredBids.length} of{' '}
                                        {bids.length} offers
                                    </p>
                                </div>

                                <div className="relative w-full lg:max-w-sm">
                                    <Search
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6a48]"
                                    />

                                    <input
                                        type="search"
                                        value={search}
                                        onChange={(event) =>
                                            setSearch(event.target.value)
                                        }
                                        placeholder="Search artwork or customers..."
                                        aria-label="Search artwork bids"
                                        className="w-full border border-[#8a6a48]/25 bg-[#f7f3ec] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-[#9b9186] focus:border-[#8a6a48]"
                                    />
                                </div>
                            </div>

                            {/* FILTERS */}
                            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
                                <div>
                                    <label
                                        htmlFor="painting-filter"
                                        className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#746b61]"
                                    >
                                        Painting
                                    </label>

                                    <div className="relative">
                                        <select
                                            id="painting-filter"
                                            value={paintingFilter}
                                            onChange={(event) =>
                                                setPaintingFilter(
                                                    event.target.value,
                                                )
                                            }
                                            className="w-full appearance-none border border-[#8a6a48]/25 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-[#8a6a48]"
                                        >
                                            <option value="all">
                                                All Paintings
                                            </option>

                                            {paintings.map((painting) => (
                                                <option
                                                    key={painting.id}
                                                    value={String(painting.id)}
                                                >
                                                    {painting.title}
                                                </option>
                                            ))}
                                        </select>

                                        <ChevronDown
                                            size={16}
                                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8a6a48]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="sort-offers"
                                        className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#746b61]"
                                    >
                                        Sort By
                                    </label>

                                    <div className="relative">
                                        <select
                                            id="sort-offers"
                                            value={sort}
                                            onChange={(event) =>
                                                setSort(
                                                    event.target.value as SortOption,
                                                )
                                            }
                                            className="w-full appearance-none border border-[#8a6a48]/25 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-[#8a6a48]"
                                        >
                                            <option value="newest">
                                                Newest First
                                            </option>

                                            <option value="oldest">
                                                Oldest First
                                            </option>

                                            <option value="highest">
                                                Highest Offer
                                            </option>

                                            <option value="lowest">
                                                Lowest Offer
                                            </option>
                                        </select>

                                        <ChevronDown
                                            size={16}
                                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8a6a48]"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-end">
                                    <button
                                        type="button"
                                        onClick={resetFilters}
                                        disabled={!hasActiveFilters}
                                        className="inline-flex w-full items-center justify-center gap-2 border border-[#8a6a48]/25 px-5 py-3 text-xs font-medium text-[#746b61] hover:bg-[#eee7dc] disabled:cursor-not-allowed disabled:opacity-40 lg:w-auto"
                                    >
                                        <X size={15} />
                                        Reset Filters
                                    </button>
                                </div>
                            </div>

                            {/* VIEW MODE */}
                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#8a6a48]/15 pt-5">
                                <div className="inline-flex border border-[#8a6a48]/25 p-1">
                                    <button
                                        type="button"
                                        aria-pressed={viewMode === 'all'}
                                        onClick={() => setViewMode('all')}
                                        className={`px-4 py-2.5 text-xs font-medium transition ${
                                            viewMode === 'all'
                                                ? 'bg-[#25221f] text-white'
                                                : 'text-[#746b61] hover:bg-[#eee7dc]'
                                        }`}
                                    >
                                        All Offers
                                    </button>

                                    <button
                                        type="button"
                                        aria-pressed={viewMode === 'grouped'}
                                        onClick={() => setViewMode('grouped')}
                                        className={`px-4 py-2.5 text-xs font-medium transition ${
                                            viewMode === 'grouped'
                                                ? 'bg-[#25221f] text-white'
                                                : 'text-[#746b61] hover:bg-[#eee7dc]'
                                        }`}
                                    >
                                        Group by Painting
                                    </button>
                                </div>

                                <span className="flex items-center gap-2 text-xs text-[#746b61]">
                                    <SlidersHorizontal size={15} />
                                    {filteredBids.length} matching offers
                                </span>
                            </div>
                        </div>

                        {/* BIDS CONTENT */}
                        {bids.length === 0 ? (
                            <div className="px-6 py-20 text-center">
                                <Gavel
                                    size={36}
                                    strokeWidth={1.2}
                                    className="mx-auto mb-5 text-[#8a6a48]"
                                />

                                <h3 className="font-serif text-2xl">
                                    No private offers yet.
                                </h3>

                                <p className="mt-3 text-sm text-[#746b61]">
                                    Customer bids will appear here after they
                                    submit an offer for an artwork.
                                </p>
                            </div>
                        ) : viewMode === 'all' ? (
                            <BidTable bids={filteredBids} />
                        ) : groupedBids.length === 0 ? (
                            <BidTable bids={[]} />
                        ) : (
                            <div className="divide-y divide-[#8a6a48]/20">
                                {groupedBids.map((group) => {
                                    const groupTotal = group.bids.reduce(
                                        (sum, bid) =>
                                            sum + Number(bid.amount),
                                        0,
                                    );

                                    const groupHighest = group.bids.reduce(
                                        (highest, bid) =>
                                            Math.max(
                                                highest,
                                                Number(bid.amount),
                                            ),
                                        0,
                                    );

                                    return (
                                        <section key={group.key}>
                                            <div className="flex flex-col gap-3 bg-[#faf8f4] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                                                <div>
                                                    <h3 className="font-serif text-xl">
                                                        {group.title}
                                                    </h3>

                                                    <p className="mt-1 text-xs text-[#746b61]">
                                                        {group.bids.length}{' '}
                                                        {group.bids.length === 1
                                                            ? 'offer'
                                                            : 'offers'}
                                                    </p>
                                                </div>

                                                <div className="text-xs text-[#746b61] sm:text-right">
                                                    <p>
                                                        Highest offer:{' '}
                                                        <strong className="text-[#8a6a48]">
                                                            {formatPrice(
                                                                groupHighest,
                                                            )}
                                                        </strong>
                                                    </p>

                                                    <p className="mt-1">
                                                        Combined offers:{' '}
                                                        {formatPrice(groupTotal)}
                                                    </p>
                                                </div>
                                            </div>

                                            <BidTable bids={group.bids} />
                                        </section>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* FOOTER NOTE */}
                    <p className="mt-6 text-xs leading-6 text-[#746b61]">
                        All offers are private and confidential. An offer does
                        not become a confirmed sale until it is explicitly
                        accepted. Combined bid values should not be treated
                        as revenue.
                    </p>
                </div>
            </main>
        </>
    );
}
