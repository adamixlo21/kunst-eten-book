import { Link } from '@inertiajs/react';
import { ArrowUpRight, BookOpen, Package } from 'lucide-react';

import OrderLayout from '@/components/OrderLayout';

type Order = {
    id: number;
    name: string;
    email: string;
    address: string;
    postal_code: string;
    city: string;
    quantity: number;
    total_price: string;
    status: string;
    fulfillment_status: string;
    shipping_carrier: string | null;
    tracking_number: string | null;
    tracking_url: string | null;
    shipped_at: string | null;
    delivered_at: string | null;
    created_at: string;
};

function formatStatus(status: string) {
    return status
        .replaceAll('_', ' ')
        .replace(/^./, (character) => character.toUpperCase());
}

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-GB');
}

function safeTrackingUrl(value: string | null) {
    if (!value) return null;

    try {
        const url = new URL(value);

        return url.protocol === 'https:' ? url.href : null;
    } catch {
        return null;
    }
}

export default function ShowOrder({ order }: { order: Order }) {
    const trackingUrl = safeTrackingUrl(order.tracking_url);

    const total = new Intl.NumberFormat('en-NL', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(order.total_price));

    return (
        <OrderLayout
            title={`Order #${order.id}`}
            heading="Order"
            accent={`#${order.id}.`}
            description={`Placed on ${formatDate(order.created_at)}`}
            backHref="/orders"
            backLabel="Back to My Orders"
        >
            <div className="space-y-8">

                {/* Status */}
                <section className="grid gap-5 bg-[#eee7dc] p-6 sm:grid-cols-2">
                    <div>
                        <p className="text-sm text-[#564b40]">
                            Payment status
                        </p>

                        <p className="mt-2 font-medium">
                            {formatStatus(order.status)}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-[#564b40]">
                            Delivery status
                        </p>

                        <p className="mt-2 font-medium">
                            {formatStatus(order.fulfillment_status)}
                        </p>
                    </div>
                </section>

                {/* Purchased book */}
                <section className="border-b border-[#70512f]/20 pb-8">
                    <h2 className="font-serif text-2xl">
                        Your purchase
                    </h2>

                    <div className="mt-6 flex items-center gap-5">
                        <div className="flex h-24 w-16 shrink-0 items-center justify-center bg-[#eee7dc]">
                            <BookOpen
                                size={28}
                                className="text-[#70512f]"
                                aria-hidden="true"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-serif text-xl">
                                The Taste of Inspiration
                            </h3>

                            <p className="mt-2 text-sm text-[#564b40]">
                                Quantity: {order.quantity}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between border-t border-[#70512f]/15 pt-5">
                        <span>Total</span>
                        <span className="font-semibold">{total}</span>
                    </div>
                </section>

                {/* Address */}
                <section className="border-b border-[#70512f]/20 pb-8">
                    <h2 className="font-serif text-2xl">
                        Delivery address
                    </h2>

                    <address className="mt-4 text-base not-italic leading-8 text-[#564b40]">
                        {order.name}<br />
                        {order.address}<br />
                        {order.postal_code} {order.city}
                    </address>
                </section>

                {/* Tracking */}
                <section className="border-b border-[#70512f]/20 pb-8">
                    <h2 className="font-serif text-2xl">
                        Delivery tracking
                    </h2>

                    {order.tracking_number || trackingUrl ? (
                        <div className="mt-5 space-y-4">
                            {order.shipping_carrier && (
                                <p className="text-sm">
                                    Carrier: {order.shipping_carrier}
                                </p>
                            )}

                            {order.tracking_number && (
                                <p className="break-all text-sm">
                                    Tracking number: {order.tracking_number}
                                </p>
                            )}

                            {order.shipped_at && (
                                <p className="text-sm">
                                    Shipped: {formatDate(order.shipped_at)}
                                </p>
                            )}

                            {trackingUrl && (
                                <a
                                    href={trackingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-12 items-center gap-3 bg-[#70512f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#56402a] focus-visible:outline-2"
                                >
                                    Track your delivery
                                    <ArrowUpRight size={17} aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    ) : (
                        <div className="mt-5 flex items-start gap-3 text-sm leading-7 text-[#564b40]">
                            <Package
                                size={20}
                                className="mt-1 shrink-0"
                                aria-hidden="true"
                            />

                            <p>
                                Tracking information will appear here
                                when it becomes available.
                            </p>
                        </div>
                    )}
                </section>

                {/* Returns */}
                <section className="border-b border-[#70512f]/20 pb-8">
                    <h2 className="font-serif text-2xl">
                        Returns &amp; refunds
                    </h2>

                    <p className="mt-4 text-base leading-8 text-[#564b40]">
                        If you would like to return your purchase,
                        please read our Shipping &amp; Returns policy
                        for information about your rights.
                    </p>

                    <Link
                        href="/shipping-and-returns"
                        className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#70512f] underline underline-offset-4"
                    >
                        Shipping &amp; Returns
                    </Link>
                    {order.status === 'paid' && (
                        <Link
                            href={`/withdrawal?order=${order.id}`}
                            className="mt-5 inline-flex min-h-12 items-center justify-center border border-[#70512f] px-6 py-3 text-sm font-semibold text-[#70512f] transition hover:bg-[#eee7dc]"
                        >
                            Withdraw from this order
                        </Link>
                    )}
                </section>

                {/* Contact */}
                <section className="bg-[#eee7dc] p-6 sm:p-8">
                    <h2 className="font-serif text-2xl">
                        Need help with your order?
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#564b40]">
                        Contact us and include your order number
                        #{order.id} so we can assist you.
                    </p>

                    <a
                        href="mailto:thetasteofinspiration@gmail.com"
                        className="mt-4 inline-flex min-h-11 break-all text-sm font-semibold text-[#70512f] underline underline-offset-4"
                    >
                        thetasteofinspiration@gmail.com
                    </a>
                </section>
            </div>
        </OrderLayout>
    );
}
