import { Head, Link, router } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import {
    ArrowUpRight,
    Search,
    RotateCcw,
} from 'lucide-react';

type Withdrawal = {
    id: number;
    reference: string;
    order_id: number | null;
    order_number: string;
    name: string;
    email: string;
    status: string;
    verified_at: string | null;
    submitted_at: string;
};

type Props = {
    withdrawals: {
        data: Withdrawal[];
        total: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
    filters: {
        search: string;
        status: string;
    };
    stats: Record<string, number>;
};

const statuses = [
    { value: 'submitted', label: 'Submitted' },
    { value: 'awaiting_return', label: 'Awaiting return' },
    { value: 'return_received', label: 'Return received' },
    { value: 'refund_pending', label: 'Refund pending' },
    { value: 'closed', label: 'Closed' },
];

function formatStatus(status: string) {
    return statuses.find((item) => item.value === status)?.label
        ?? status;
}

export default function WithdrawalsIndex({
                                             withdrawals,
                                             filters,
                                             stats,
                                         }: Props) {
    const [search, setSearch] = useState(filters.search);
    const [status, setStatus] = useState(filters.status);

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        router.get(
            '/admin/withdrawals',
            { search, status },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
            },
        );
    }

    return (
        <>
            <Head title="Withdrawals | Admin" />

            <main className="min-h-screen bg-[#f7f3ec] p-5 text-[#25221f] sm:p-8 lg:p-10">
                <div className="mx-auto max-w-7xl">

                    {/* Heading */}
                    <header className="mb-8 border-b border-[#70512f]/20 pb-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#70512f]">
                            Administration / Customer Care
                        </p>

                        <h1 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
                            Withdrawals.
                        </h1>

                        <p className="mt-3 text-sm text-[#746b61]">
                            Manage customer withdrawals and returns.
                        </p>
                    </header>

                    {/* Statistics */}
                    <div className="mb-8 grid grid-cols-2 gap-3 xl:grid-cols-5">
                        {statuses.map((item) => (
                            <Link
                                key={item.value}
                                href="/admin/withdrawals"
                                data={{
                                    search,
                                    status: item.value,
                                }}
                                className="border border-[#70512f]/20 bg-white p-5 transition-colors hover:bg-[#eee7dc]"
                            >
                                <p className="text-xs text-[#746b61]">
                                    {item.label}
                                </p>

                                <p className="mt-3 font-serif text-3xl">
                                    {stats[item.value] ?? 0}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {/* Search and filters */}
                    <form
                        onSubmit={submit}
                        className="mb-6 flex flex-col gap-3 sm:flex-row"
                    >
                        <div className="relative flex-1">
                            <Search
                                size={18}
                                className="absolute left-4 top-4 text-[#70512f]"
                            />

                            <input
                                type="search"
                                aria-label="Search withdrawals"
                                placeholder="Search name, email or reference..."
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                className="min-h-12 w-full border border-[#70512f]/25 bg-white py-3 pl-11 pr-4 text-sm"
                            />
                        </div>

                        <select
                            aria-label="Withdrawal status"
                            value={status}
                            onChange={(event) =>
                                setStatus(event.target.value)
                            }
                            className="min-h-12 border border-[#70512f]/25 bg-white px-4 text-sm"
                        >
                            <option value="">All statuses</option>

                            {statuses.map((item) => (
                                <option
                                    key={item.value}
                                    value={item.value}
                                >
                                    {item.label}
                                </option>
                            ))}
                        </select>

                        <button
                            type="submit"
                            className="min-h-12 bg-[#25221f] px-6 text-sm font-semibold text-white"
                        >
                            Filter
                        </button>

                        <Link
                            href="/admin/withdrawals"
                            className="inline-flex min-h-12 items-center justify-center px-4 text-sm text-[#70512f]"
                        >
                            Clear
                        </Link>
                    </form>

                    {/* Withdrawals list */}
                    {withdrawals.data.length === 0 ? (
                        <div className="border border-[#70512f]/20 bg-white p-12 text-center">
                            <RotateCcw
                                size={30}
                                className="mx-auto text-[#70512f]"
                            />

                            <h2 className="mt-5 font-serif text-2xl">
                                No withdrawals found.
                            </h2>

                            <p className="mt-3 text-sm text-[#746b61]">
                                Customer withdrawal notices will appear here.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto border border-[#70512f]/20 bg-white">
                            <table className="w-full min-w-[750px] text-left text-sm">
                                <thead className="bg-[#eee7dc] text-xs text-[#746b61]">
                                <tr>
                                    <th className="p-5">Reference</th>
                                    <th className="p-5">Customer</th>
                                    <th className="p-5">Order</th>
                                    <th className="p-5">Status</th>
                                    <th className="p-5">Submitted</th>
                                    <th className="p-5">Action</th>
                                </tr>
                                </thead>

                                <tbody>
                                {withdrawals.data.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-t border-[#70512f]/15 hover:bg-[#faf8f4]"
                                    >
                                        <td className="p-5 font-medium">
                                            {item.reference}
                                        </td>

                                        <td className="p-5">
                                            <p>{item.name}</p>

                                            <p className="mt-1 text-xs text-[#746b61]">
                                                {item.email}
                                            </p>
                                        </td>

                                        <td className="p-5">
                                            {item.order_id ? (
                                                <Link
                                                    href={`/admin/orders/${item.order_id}`}
                                                    className="text-[#70512f] underline"
                                                >
                                                    #{item.order_id}
                                                </Link>
                                            ) : (
                                                <span className="text-amber-800">
                                                        Unmatched
                                                    </span>
                                            )}
                                        </td>

                                        <td className="p-5">
                                                <span className="inline-block bg-[#eee7dc] px-3 py-2 text-xs text-[#70512f]">
                                                    {formatStatus(item.status)}
                                                </span>

                                            {!item.verified_at && (
                                                <p className="mt-2 text-xs text-amber-800">
                                                    Needs verification
                                                </p>
                                            )}
                                        </td>

                                        <td className="p-5">
                                            {new Date(
                                                item.submitted_at
                                            ).toLocaleDateString('en-GB')}
                                        </td>

                                        <td className="p-5">
                                            <Link
                                                href={`/admin/withdrawals/${item.id}`}
                                                className="inline-flex items-center gap-2 font-semibold text-[#70512f]"
                                            >
                                                View
                                                <ArrowUpRight size={16} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <p className="text-sm text-[#746b61]">
                            {withdrawals.total} withdrawals
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {withdrawals.links.map((link, index) => (
                                link.url ? (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        aria-current={link.active ? 'page' : undefined}
                                        className={`border px-4 py-3 text-xs ${
                                            link.active
                                                ? 'border-[#70512f] bg-[#70512f] text-white'
                                                : 'border-[#70512f]/20 bg-white'
                                        }`}
                                    >
                                        {link.label
                                            .replace('&laquo;', '←')
                                            .replace('&raquo;', '→')}
                                    </Link>
                                ) : (
                                    <span
                                        key={index}
                                        className="px-4 py-3 text-xs opacity-40"
                                    >
                                        {link.label
                                            .replace('&laquo;', '←')
                                            .replace('&raquo;', '→')}
                                    </span>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
