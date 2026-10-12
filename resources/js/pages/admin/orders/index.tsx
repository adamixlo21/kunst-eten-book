
import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    ShoppingBag,
    Package,
    PackageCheck,
    Clock3,
    CheckCircle2,
    CreditCard,
} from 'lucide-react';

type FulfillmentStatus =
    | 'unfulfilled'
    | 'processing'
    | 'shipped'
    | 'completed';

type Order = {
    id: number;
    name: string;
    email: string;
    quantity: number;
    total_price: string | number;
    status: string;
    fulfillment_status: FulfillmentStatus | null;
    created_at: string;
};

type Props = {
    orders: Order[];
};

type Tab = 'active' | 'completed' | 'all';

const formatCurrency = (value: number | string) =>
    new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(value) || 0);

const formatDate = (value: string) =>
    new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(new Date(value));

function PaymentBadge({ status }: { status: string }) {
    const normalized = status.toLowerCase();

    const styles =
        normalized === 'paid'
            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
            : normalized === 'pending' || normalized === 'open'
                ? 'border-amber-200 bg-amber-50 text-amber-700'
                : normalized === 'failed' ||
                normalized === 'cancelled' ||
                normalized === 'canceled' ||
                normalized === 'expired'
                    ? 'border-red-200 bg-red-50 text-red-700'
                    : 'border-stone-200 bg-stone-50 text-stone-600';

    return (
        <span
            className={`inline-flex whitespace-nowrap border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${styles}`}
        >
            {status.replaceAll('_', ' ')}
        </span>
    );
}

function FulfillmentBadge({
                              status,
                          }: {
    status: FulfillmentStatus | null;
}) {
    const value = status ?? 'unfulfilled';

    const styles: Record<FulfillmentStatus, string> = {
        unfulfilled: 'border-stone-200 bg-stone-50 text-stone-600',
        processing: 'border-amber-200 bg-amber-50 text-amber-700',
        shipped: 'border-blue-200 bg-blue-50 text-blue-700',
        completed: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    };

    return (
        <span
            className={`inline-flex whitespace-nowrap border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${styles[value] ?? styles.unfulfilled}`}
        >
            {value}
        </span>
    );
}

export default function OrdersIndex({ orders }: Props) {
    const [activeTab, setActiveTab] = useState<Tab>('active');

    const activeOrders = orders.filter(
        (order) =>
            order.status.toLowerCase() === 'paid' &&
            order.fulfillment_status !== 'completed',
    );

    const completedOrders = orders.filter(
        (order) =>
            order.status.toLowerCase() === 'paid' &&
            order.fulfillment_status === 'completed',
    );

    const visibleOrders =
        activeTab === 'active'
            ? activeOrders
            : activeTab === 'completed'
                ? completedOrders
                : orders;

    const tabs: {
        key: Tab;
        title: string;
        count: number;
        icon: typeof ShoppingBag;
    }[] = [
        {
            key: 'active',
            title: 'Active Orders',
            count: activeOrders.length,
            icon: Clock3,
        },
        {
            key: 'completed',
            title: 'Completed',
            count: completedOrders.length,
            icon: PackageCheck,
        },
        {
            key: 'all',
            title: 'All Orders',
            count: orders.length,
            icon: ShoppingBag,
        },
    ];

    return (
        <>
            <Head title="Orders | The Taste of Inspiration" />

            <main className="min-h-full bg-[#f7f3ec] p-6 text-[#25221f] lg:p-10">
                <div className="mx-auto max-w-7xl">

                    {/* HEADER */}
                    <div className="mb-10 flex flex-col gap-5 border-b border-[#8a6a48]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </p>

                            <h1 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
                                Customer
                                <span className="italic text-[#8a6a48]">
                                    {' '}Orders.
                                </span>
                            </h1>

                            <p className="mt-4 text-sm leading-7 text-[#746b61]">
                                Manage book purchases, payment confirmations,
                                and deliveries.
                            </p>
                        </div>

                        <Link
                            href="/admin"
                            className="inline-flex items-center gap-2 text-xs font-medium text-[#8a6a48] hover:text-[#25221f]"
                        >
                            Back to Dashboard
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    {/* OVERVIEW */}
                    <div className="mb-8 grid gap-4 sm:grid-cols-3">
                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <Clock3
                                size={20}
                                className="text-[#8a6a48]"
                            />

                            <p className="mt-5 text-xs text-[#746b61]">
                                Active Paid Orders
                            </p>

                            <p className="mt-2 font-serif text-3xl">
                                {activeOrders.length}
                            </p>
                        </div>

                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <CheckCircle2
                                size={20}
                                className="text-[#8a6a48]"
                            />

                            <p className="mt-5 text-xs text-[#746b61]">
                                Completed Orders
                            </p>

                            <p className="mt-2 font-serif text-3xl">
                                {completedOrders.length}
                            </p>
                        </div>

                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <CreditCard
                                size={20}
                                className="text-[#8a6a48]"
                            />

                            <p className="mt-5 text-xs text-[#746b61]">
                                All Orders
                            </p>

                            <p className="mt-2 font-serif text-3xl">
                                {orders.length}
                            </p>
                        </div>
                    </div>

                    {/* ORDERS TABLE */}
                    <div className="overflow-hidden border border-[#8a6a48]/20 bg-white">

                        {/* TABS */}
                        <div className="border-b border-[#8a6a48]/20">
                            <div
                                className="flex gap-1 overflow-x-auto px-4 pt-3 sm:px-6"
                                role="tablist"
                                aria-label="Filter orders"
                            >
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    const selected = activeTab === tab.key;

                                    return (
                                        <button
                                            key={tab.key}
                                            type="button"
                                            role="tab"
                                            aria-selected={selected}
                                            onClick={() => setActiveTab(tab.key)}
                                            className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-4 text-xs font-medium transition ${
                                                selected
                                                    ? 'border-[#8a6a48] text-[#25221f]'
                                                    : 'border-transparent text-[#746b61] hover:text-[#25221f]'
                                            }`}
                                        >
                                            <Icon size={16} />
                                            {tab.title}

                                            <span
                                                className={`rounded-full px-2 py-0.5 text-[10px] ${
                                                    selected
                                                        ? 'bg-[#eee7dc] text-[#8a6a48]'
                                                        : 'bg-stone-100 text-stone-500'
                                                }`}
                                            >
                                                {tab.count}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* TABLE HEADING */}
                        <div className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/15 px-6 py-5">
                            <h2 className="font-serif text-2xl font-light">
                                {activeTab === 'active'
                                    ? 'Orders to Fulfill'
                                    : activeTab === 'completed'
                                        ? 'Completed Orders'
                                        : 'Order History'}
                            </h2>

                            <span className="text-xs text-[#746b61]">
                                {visibleOrders.length}{' '}
                                {visibleOrders.length === 1
                                    ? 'order'
                                    : 'orders'}
                            </span>
                        </div>

                        {/* TABLE */}
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] text-left">
                                <thead className="bg-[#eee7dc]">
                                <tr className="text-[10px] uppercase tracking-[0.15em] text-[#8a6a48]">
                                    <th className="px-6 py-4 font-medium">
                                        Order
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Customer
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Qty
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Total
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Date
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Payment
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Fulfillment
                                    </th>
                                    <th className="px-6 py-4 font-medium" />
                                </tr>
                                </thead>

                                <tbody className="divide-y divide-[#8a6a48]/15">
                                {visibleOrders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="transition-colors hover:bg-[#f7f3ec]"
                                    >
                                        <td className="px-6 py-5">
                                                <span className="font-serif text-lg">
                                                    #{order.id}
                                                </span>
                                        </td>

                                        <td className="px-6 py-5">
                                            <p className="text-sm font-medium">
                                                {order.name}
                                            </p>

                                            <a
                                                href={`mailto:${order.email}`}
                                                className="mt-1 block text-xs text-[#746b61] hover:text-[#8a6a48]"
                                            >
                                                {order.email}
                                            </a>
                                        </td>

                                        <td className="px-6 py-5 text-sm">
                                            {order.quantity}
                                        </td>

                                        <td className="px-6 py-5">
                                                <span className="font-serif text-lg text-[#8a6a48]">
                                                    {formatCurrency(
                                                        order.total_price,
                                                    )}
                                                </span>
                                        </td>

                                        <td className="px-6 py-5 text-xs text-[#746b61]">
                                            {order.created_at
                                                ? formatDate(
                                                    order.created_at,
                                                )
                                                : '—'}
                                        </td>

                                        <td className="px-6 py-5">
                                            <PaymentBadge
                                                status={order.status}
                                            />
                                        </td>

                                        <td className="px-6 py-5">
                                            <FulfillmentBadge
                                                status={
                                                    order.fulfillment_status
                                                }
                                            />
                                        </td>

                                        <td className="px-6 py-5 text-right">
                                            <Link
                                                href={`/admin/orders/${order.id}`}
                                                className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-[#8a6a48] hover:text-[#25221f]"
                                            >
                                                View Details
                                                <ArrowUpRight size={14} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}

                                {visibleOrders.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={8}
                                            className="px-6 py-20 text-center"
                                        >
                                            <Package
                                                size={32}
                                                strokeWidth={1.2}
                                                className="mx-auto mb-5 text-[#8a6a48]"
                                            />

                                            <h3 className="font-serif text-2xl">
                                                {activeTab === 'active'
                                                    ? 'No active orders.'
                                                    : activeTab ===
                                                    'completed'
                                                        ? 'No completed orders.'
                                                        : 'No orders yet.'}
                                            </h3>

                                            <p className="mt-3 text-sm text-[#746b61]">
                                                {activeTab === 'active'
                                                    ? 'Paid orders awaiting completion will appear here.'
                                                    : activeTab ===
                                                    'completed'
                                                        ? 'Delivered orders will appear here after you mark them completed.'
                                                        : 'Customer orders will appear here when submitted.'}
                                            </p>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="mt-5 text-xs leading-6 text-[#746b61]">
                        Payment status is managed by Mollie. Open an order
                        to update its fulfillment status. Completed orders
                        remain in your order history.
                    </p>
                </div>
            </main>
        </>
    );
}
