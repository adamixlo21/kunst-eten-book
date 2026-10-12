
import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    CircleDollarSign,
    Clock3,
    ShoppingBag,
    WalletCards,
    Image,
    Gavel,
    Mail,
    LayoutDashboard,
} from 'lucide-react';

type Props = {
    stats: {
        orders: number;
        paid: number;
        pending: number;
        revenue: number | string;
    };
};

const formatCurrency = (value: number | string) =>
    new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(value) || 0);

export default function Dashboard({ stats }: Props) {
    const quickLinks = [
        {
            title: 'Manage Orders',
            description:
                'Review customer orders, payment amounts and order statuses.',
            href: '/admin/orders',
            icon: ShoppingBag,
            label: 'Open Orders',
        },
        {
            title: 'Manage Paintings',
            description:
                'View and manage the original artworks displayed on your website.',
            href: '/admin/paintings',
            icon: Image,
            label: 'Open Paintings',
        },
        {
            title: 'Artwork Bids',
            description:
                'Review private offers from customers interested in your paintings.',
            href: '/admin/bids',
            icon: Gavel,
            label: 'View Offers',
        },
        {
            title: 'Contact Messages',
            description:
                'Read inquiries and messages submitted through your website.',
            href: '/admin/contacts',
            icon: Mail,
            label: 'View Messages',
        },
    ];

    return (
        <>
            <Head title="Dashboard | The Taste of Inspiration" />

            <main className="min-h-full bg-[#f7f3ec] p-6 text-[#25221f] lg:p-10">
                <div className="mx-auto max-w-7xl">

                    {/* HEADER */}
                    <div className="mb-10 flex flex-col gap-6 border-b border-[#8a6a48]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </p>

                            <h1 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
                                Admin
                                <span className="italic text-[#8a6a48]">
                                    {' '}Dashboard.
                                </span>
                            </h1>

                            <p className="mt-4 text-sm leading-7 text-[#746b61]">
                                Manage your artwork, private offers, orders,
                                and customer inquiries in one place.
                            </p>
                        </div>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-xs font-medium text-[#8a6a48] transition hover:text-[#25221f]"
                        >
                            View Website
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    {/* STATISTICS */}
                    <div className="mb-5 flex items-center gap-2">
                        <LayoutDashboard
                            size={16}
                            className="text-[#8a6a48]"
                        />
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#746b61]">
                            Order Overview
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        <StatCard
                            label="Total Orders"
                            value={String(stats.orders)}
                            icon={ShoppingBag}
                        />

                        <StatCard
                            label="Paid Orders"
                            value={String(stats.paid)}
                            icon={WalletCards}
                        />

                        <StatCard
                            label="Pending Orders"
                            value={String(stats.pending)}
                            icon={Clock3}
                        />

                        <StatCard
                            label="Revenue"
                            value={formatCurrency(stats.revenue)}
                            icon={CircleDollarSign}
                        />
                    </div>

                    {/* QUICK ACCESS */}
                    <div className="mb-5 mt-12 flex items-end justify-between gap-4">
                        <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Administration
                            </p>
                            <h2 className="font-serif text-3xl font-light">
                                Quick Access
                            </h2>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {quickLinks.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group border border-[#8a6a48]/20 p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[#8a6a48] hover:shadow-sm ${
                                        index === 0 || index === 3
                                            ? 'bg-[#eee7dc]'
                                            : 'bg-white'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="flex h-11 w-11 items-center justify-center border border-[#8a6a48]/20 text-[#8a6a48]">
                                            <Icon size={21} strokeWidth={1.5} />
                                        </span>

                                        <ArrowUpRight
                                            size={20}
                                            className="text-[#8a6a48] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </div>

                                    <h3 className="mt-7 font-serif text-2xl font-light">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-md text-sm leading-7 text-[#746b61]">
                                        {item.description}
                                    </p>

                                    <div className="mt-7 inline-flex items-center gap-2 border-b border-[#8a6a48] pb-1 text-xs font-medium text-[#8a6a48]">
                                        {item.label}
                                        <ArrowUpRight size={14} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* WEBSITE */}
                    <div className="mt-8 flex flex-col gap-5 border border-[#8a6a48]/20 bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Live Website
                            </p>

                            <h2 className="mt-3 font-serif text-2xl font-light">
                                The Taste of Inspiration
                            </h2>

                            <p className="mt-2 text-sm text-[#746b61]">
                                Preview the website as your visitors see it.
                            </p>
                        </div>

                        <Link
                            href="/"
                            className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#25221f] px-6 py-3 text-xs font-medium text-white transition hover:bg-[#8a6a48]"
                        >
                            Visit Website
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <p className="mt-8 text-center text-xs text-[#746b61]">
                        The Taste of Inspiration · Administration
                    </p>
                </div>
            </main>
        </>
    );
}

type StatCardProps = {
    label: string;
    value: string;
    icon: typeof ShoppingBag;
};

function StatCard({ label, value, icon: Icon }: StatCardProps) {
    return (
        <div className="border border-[#8a6a48]/20 bg-white p-6">
            <div className="flex items-start justify-between gap-3">
                <p className="text-xs text-[#746b61]">
                    {label}
                </p>

                <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#8a6a48]"
                />
            </div>

            <p className="mt-7 break-words font-serif text-3xl font-light sm:text-4xl">
                {value}
            </p>
        </div>
    );
}
