import { Link, router } from '@inertiajs/react';
import { ArrowRight, BookOpen, LogOut } from 'lucide-react';

import OrderLayout from '@/components/OrderLayout';

type Order = {
    id: number;
    quantity: number;
    total_price: string;
    status: string;
    fulfillment_status: string;
    created_at: string;
};

type Props = {
    email: string;
    orders: Order[];
};

function formatPrice(value: string) {
    return new Intl.NumberFormat('en-NL', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(value));
}

function formatStatus(status: string) {
    return status
        .replaceAll('_', ' ')
        .replace(/^./, (character) => character.toUpperCase());
}

export default function MyOrders({ email, orders }: Props) {
    return (
        <OrderLayout
            title="My Orders"
            heading="My"
            accent="orders."
            description="View your purchases and delivery information."
        >
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <p className="break-all text-sm text-[#564b40]">
                    {email}
                </p>

                <button
                    type="button"
                    onClick={() => router.post('/orders/logout')}
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#70512f] hover:underline focus-visible:outline-2"
                >
                    <LogOut size={16} aria-hidden="true" />
                    Sign out
                </button>
            </div>

            {orders.length === 0 ? (
                <div className="bg-[#eee7dc] p-8">
                    <h2 className="font-serif text-2xl">
                        No orders yet.
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#564b40]">
                        Orders associated with this email address
                        will appear here.
                    </p>
                </div>
            ) : (
                <div className="space-y-5">
                    {orders.map((order) => (
                        <article
                            key={order.id}
                            className="border border-[#70512f]/20 p-5 sm:p-7"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <h2 className="font-serif text-2xl">
                                        Order #{order.id}
                                    </h2>

                                    <p className="mt-1 text-sm text-[#564b40]">
                                        {new Date(order.created_at)
                                            .toLocaleDateString('en-GB')}
                                    </p>
                                </div>

                                <span className="bg-[#eee7dc] px-3 py-2 text-xs font-medium text-[#70512f]">
                                    {formatStatus(
                                        order.status === 'paid'
                                            ? order.fulfillment_status
                                            : order.status
                                    )}
                                </span>
                            </div>

                            <div className="my-6 flex items-center gap-5 border-y border-[#70512f]/15 py-5">
                                <div className="flex h-20 w-14 shrink-0 items-center justify-center bg-[#eee7dc]">
                                    <BookOpen
                                        size={24}
                                        className="text-[#70512f]"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-serif text-xl">
                                        The Taste of Inspiration
                                    </h3>

                                    <p className="mt-2 text-sm text-[#564b40]">
                                        Quantity: {order.quantity}
                                    </p>

                                    <p className="mt-1 text-sm font-semibold">
                                        {formatPrice(order.total_price)}
                                    </p>
                                </div>
                            </div>

                            <Link
                                href={`/orders/${order.id}`}
                                className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#70512f] hover:underline focus-visible:outline-2"
                            >
                                View order
                                <ArrowRight size={17} aria-hidden="true" />
                            </Link>
                        </article>
                    ))}
                </div>
            )}
        </OrderLayout>
    );
}
