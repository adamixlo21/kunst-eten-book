
import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import {
    ArrowLeft,
    CheckCircle2,
    Clock3,
    CreditCard,
    Mail,
    MapPin,
    Package,
    Phone,
    ShoppingBag,
    Truck,
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
    phone?: string | null;
    address: string;
    postal_code: string;
    city: string;
    quantity: number;
    total_price: string | number;
    status: string;
    fulfillment_status: FulfillmentStatus;
    mollie_payment_id?: string | null;
    created_at: string;

    // Delivery tracking
    shipping_carrier: string | null;
    tracking_number: string | null;
    tracking_url: string | null;
    shipped_at: string | null;
    delivered_at: string | null;

    // Shipping email
    shipping_email_status: 'pending' | 'sending' | 'sent';
    shipping_email_sent_at: string | null;
};

type Props = {
    order: Order;
    errors?: {
        fulfillment_status?: string;
        shipping_carrier?: string;
        tracking_number?: string;
        tracking_url?: string;
    };
};
const fulfillmentOptions: {
    value: FulfillmentStatus;
    label: string;
    description: string;
}[] = [
    {
        value: 'unfulfilled',
        label: 'Unfulfilled',
        description: 'Not yet prepared for shipment.',
    },
    {
        value: 'processing',
        label: 'Processing',
        description: 'Preparing the order for shipment.',
    },
    {
        value: 'shipped',
        label: 'Shipped',
        description: 'The order has been dispatched.',
    },
    {
        value: 'completed',
        label: 'Completed',
        description: 'The customer has received the order.',
    },
];

const formatCurrency = (value: number | string) =>
    new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(value) || 0);

const formatDate = (value: string) =>
    new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(value));

function InfoCard({
                      title,
                      icon: Icon,
                      children,
                  }: {
    title: string;
    icon: typeof ShoppingBag;
    children: React.ReactNode;
}) {
    return (
        <section className="border border-[#8a6a48]/20 bg-white p-6 sm:p-7">
            <div className="flex items-center gap-2 border-b border-[#8a6a48]/15 pb-5">
                <Icon size={18} className="text-[#8a6a48]" />
                <h2 className="font-serif text-xl font-light">{title}</h2>
            </div>

            <div className="mt-6">{children}</div>
        </section>
    );
}

export default function OrderShow({ order, errors }: Props) {
    const [fulfillment, setFulfillment] = useState<FulfillmentStatus>(
        order.fulfillment_status ?? 'unfulfilled',
    );

    const [shippingCarrier, setShippingCarrier] = useState(
        order.shipping_carrier ?? '',
    );

    const [trackingNumber, setTrackingNumber] = useState(
        order.tracking_number ?? '',
    );

    const [trackingUrl, setTrackingUrl] = useState(
        order.tracking_url ?? '',
    );

    const [saving, setSaving] = useState(false);

    const isPaid = order.status === 'paid';

    const hasChanges =
        fulfillment !== (order.fulfillment_status ?? 'unfulfilled') ||
        shippingCarrier !== (order.shipping_carrier ?? '') ||
        trackingNumber !== (order.tracking_number ?? '') ||
        trackingUrl !== (order.tracking_url ?? '');

    const updateFulfillment = () => {
        if (!isPaid || !hasChanges || saving) return;

        router.patch(
            `/admin/orders/${order.id}/fulfillment`,
            {
                fulfillment_status: fulfillment,
                shipping_carrier: shippingCarrier || null,
                tracking_number: trackingNumber || null,
                tracking_url: trackingUrl || null,
            },
            {
                preserveScroll: true,

                onStart: () => setSaving(true),

                onFinish: () => setSaving(false),

                onSuccess: (page) => {
                    const savedOrder = page.props.order as Order;

                    if (savedOrder) {
                        setFulfillment(
                            savedOrder.fulfillment_status
                        );

                        setShippingCarrier(
                            savedOrder.shipping_carrier ?? ''
                        );

                        setTrackingNumber(
                            savedOrder.tracking_number ?? ''
                        );

                        setTrackingUrl(
                            savedOrder.tracking_url ?? ''
                        );
                    }
                },
            },
        );
    };

    const inputClass =
        'mt-2 min-h-11 w-full border border-[#8a6a48]/25 bg-white px-3 py-3 text-sm text-[#25221f] outline-none transition focus:border-[#8a6a48] focus:ring-1 focus:ring-[#8a6a48] disabled:opacity-60';
    return (
        <>
            <Head
                title={`Order #${order.id} | The Taste of Inspiration`}
            />

            <main className="min-h-full bg-[#f7f3ec] p-6 text-[#25221f] lg:p-10">
                <div className="mx-auto max-w-6xl">

                    {/* BACK */}
                    <Link
                        href="/admin/orders"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-[#746b61] transition hover:text-[#25221f]"
                    >
                        <ArrowLeft size={16} />
                        Back to Orders
                    </Link>

                    {/* HEADER */}
                    <div className="mb-10 flex flex-col gap-5 border-b border-[#8a6a48]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </p>

                            <h1 className="font-serif text-4xl font-light sm:text-5xl">
                                Order
                                <span className="italic text-[#8a6a48]">
                                    {' '}#{order.id}
                                </span>
                            </h1>

                            <p className="mt-4 text-sm text-[#746b61]">
                                Placed on{' '}
                                {order.created_at
                                    ? formatDate(order.created_at)
                                    : 'Unknown date'}
                            </p>
                        </div>

                        <span className="inline-flex items-center gap-2 border border-[#8a6a48]/25 bg-white px-4 py-2 text-xs">
                            <CreditCard size={15} className="text-[#8a6a48]" />
                            Payment: <strong className="capitalize">{order.status}</strong>
                        </span>
                    </div>

                    {/* DETAILS */}
                    <div className="grid gap-6 lg:grid-cols-2">

                        {/* CUSTOMER */}
                        <InfoCard title="Customer Information" icon={Mail}>
                            <div className="space-y-5 text-sm">
                                <div>
                                    <p className="text-xs text-[#746b61]">
                                        Full Name
                                    </p>
                                    <p className="mt-1 font-medium">{order.name}</p>
                                </div>

                                <div>
                                    <p className="text-xs text-[#746b61]">
                                        Email Address
                                    </p>
                                    <a
                                        href={`mailto:${order.email}`}
                                        className="mt-1 block break-all font-medium hover:text-[#8a6a48]"
                                    >
                                        {order.email}
                                    </a>
                                </div>

                                <div>
                                    <p className="flex items-center gap-1 text-xs text-[#746b61]">
                                        <Phone size={13} />
                                        Phone Number
                                    </p>
                                    {order.phone ? (
                                        <a
                                            href={`tel:${order.phone}`}
                                            className="mt-1 block font-medium hover:text-[#8a6a48]"
                                        >
                                            {order.phone}
                                        </a>
                                    ) : (
                                        <p className="mt-1">Not provided</p>
                                    )}
                                </div>
                            </div>
                        </InfoCard>

                        {/* DELIVERY */}
                        <InfoCard title="Delivery Address" icon={MapPin}>
                            <div className="space-y-2 text-sm leading-7">
                                <p className="font-medium">{order.name}</p>
                                <p>{order.address}</p>
                                <p>
                                    {order.postal_code} {order.city}
                                </p>
                            </div>
                        </InfoCard>

                        {/* ORDER INFORMATION */}
                        <InfoCard title="Order Summary" icon={ShoppingBag}>
                            <div className="space-y-5 text-sm">
                                <div className="flex justify-between gap-4">
                                    <span className="text-[#746b61]">
                                        Product
                                    </span>
                                    <span className="text-right font-medium">
                                        The Taste of Inspiration Book
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[#746b61]">
                                        Quantity
                                    </span>
                                    <span>{order.quantity}</span>
                                </div>

                                <div className="flex justify-between border-t border-[#8a6a48]/15 pt-5">
                                    <span className="font-medium">
                                        Total
                                    </span>
                                    <span className="font-serif text-2xl text-[#8a6a48]">
                                        {formatCurrency(order.total_price)}
                                    </span>
                                </div>

                                {order.mollie_payment_id && (
                                    <div className="border-t border-[#8a6a48]/15 pt-5">
                                        <p className="text-xs text-[#746b61]">
                                            Mollie Payment ID
                                        </p>
                                        <p className="mt-2 break-all text-xs">
                                            {order.mollie_payment_id}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </InfoCard>

                        {/* FULFILLMENT */}
                        <section className="border border-[#8a6a48]/20 bg-[#eee7dc] p-6 sm:p-7">
                            <div className="flex items-center gap-2 border-b border-[#8a6a48]/20 pb-5">
                                <Truck size={18} className="text-[#8a6a48]" />
                                <h2 className="font-serif text-xl font-light">
                                    Fulfillment Status
                                </h2>
                            </div>

                            <p className="mt-5 text-sm leading-6 text-[#746b61]">
                                Track the preparation and delivery of this order.
                                Payment status is managed separately by Mollie.
                            </p>

                            <div className="mt-6 space-y-3">
                                {fulfillmentOptions.map((option) => {
                                    const selected = fulfillment === option.value;

                                    return (
                                        <label
                                            key={option.value}
                                            className={`flex cursor-pointer items-start gap-3 border p-4 transition ${
                                                selected
                                                    ? 'border-[#8a6a48] bg-white'
                                                    : 'border-[#8a6a48]/20 bg-white/50 hover:bg-white'
                                            } ${
                                                !isPaid
                                                    ? 'cursor-not-allowed opacity-60'
                                                    : ''
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="fulfillment_status"
                                                value={option.value}
                                                checked={selected}
                                                onChange={() => setFulfillment(option.value)}
                                                disabled={!isPaid || saving}
                                                className="mt-1 accent-[#8a6a48]"
                                            />

                                            <div>
                                                <p className="text-sm font-medium">
                                                    {option.label}
                                                </p>
                                                <p className="mt-1 text-xs leading-5 text-[#746b61]">
                                                    {option.description}
                                                </p>
                                            </div>

                                            {selected && (
                                                <CheckCircle2
                                                    size={17}
                                                    className="ml-auto shrink-0 text-[#8a6a48]"
                                                />
                                            )}
                                        </label>
                                    );
                                })}
                            </div>

                            {/* DELIVERY TRACKING */}
                            <div className="mt-7 border-t border-[#8a6a48]/20 pt-6">
                                <div className="flex items-center gap-2">
                                    <Truck
                                        size={18}
                                        className="text-[#8a6a48]"
                                        aria-hidden="true"
                                    />

                                    <h3 className="font-serif text-xl font-light">
                                        Delivery Tracking
                                    </h3>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-[#746b61]">
                                    Add the delivery information that customers
                                    can view through My Orders.
                                </p>

                                <div className="mt-6 space-y-5">
                                    {/* Shipping carrier */}
                                    <div>
                                        <label
                                            htmlFor="shipping-carrier"
                                            className="text-xs font-medium text-[#62584c]"
                                        >
                                            Shipping carrier
                                        </label>

                                        <input
                                            id="shipping-carrier"
                                            type="text"
                                            value={shippingCarrier}
                                            onChange={(event) =>
                                                setShippingCarrier(event.target.value)
                                            }
                                            disabled={!isPaid || saving}
                                            placeholder="e.g. PostNL, DHL or DPD"
                                            maxLength={100}
                                            className={inputClass}
                                        />

                                        {errors?.shipping_carrier && (
                                            <p className="mt-2 text-xs text-red-700">
                                                {errors.shipping_carrier}
                                            </p>
                                        )}
                                    </div>

                                    {/* Tracking number */}
                                    <div>
                                        <label
                                            htmlFor="tracking-number"
                                            className="text-xs font-medium text-[#62584c]"
                                        >
                                            Tracking number
                                        </label>

                                        <input
                                            id="tracking-number"
                                            type="text"
                                            value={trackingNumber}
                                            onChange={(event) =>
                                                setTrackingNumber(event.target.value)
                                            }
                                            disabled={!isPaid || saving}
                                            placeholder="Enter tracking number"
                                            maxLength={255}
                                            className={inputClass}
                                        />

                                        {errors?.tracking_number && (
                                            <p className="mt-2 text-xs text-red-700">
                                                {errors.tracking_number}
                                            </p>
                                        )}
                                    </div>

                                    {/* Tracking URL */}
                                    <div>
                                        <label
                                            htmlFor="tracking-url"
                                            className="text-xs font-medium text-[#62584c]"
                                        >
                                            Tracking URL
                                        </label>

                                        <input
                                            id="tracking-url"
                                            type="url"
                                            value={trackingUrl}
                                            onChange={(event) =>
                                                setTrackingUrl(event.target.value)
                                            }
                                            disabled={!isPaid || saving}
                                            placeholder="https://..."
                                            maxLength={2048}
                                            className={inputClass}
                                        />

                                        {errors?.tracking_url && (
                                            <p className="mt-2 text-xs text-red-700">
                                                {errors.tracking_url}
                                            </p>
                                        )}

                                        <p className="mt-2 text-xs leading-5 text-[#746b61]">
                                            Use the secure tracking link provided by
                                            the delivery company.
                                        </p>
                                    </div>
                                </div>

                                {/* Shipment dates */}
                                {(order.shipped_at || order.delivered_at) && (
                                    <div className="mt-6 space-y-4 border-t border-[#8a6a48]/20 pt-5">
                                        {order.shipped_at && (
                                            <div>
                                                <p className="text-xs text-[#746b61]">
                                                    Marked as shipped
                                                </p>

                                                <p className="mt-1 text-sm font-medium">
                                                    {formatDate(order.shipped_at)}
                                                </p>
                                            </div>
                                        )}

                                        {order.delivered_at && (
                                            <div>
                                                <p className="text-xs text-[#746b61]">
                                                    Marked as delivered
                                                </p>

                                                <p className="mt-1 text-sm font-medium">
                                                    {formatDate(order.delivered_at)}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {fulfillment === 'shipped' &&
                                    order.shipping_email_status === 'pending' && (
                                        <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-[#70512f]">
                                            <Mail
                                                size={16}
                                                className="mt-1 shrink-0"
                                                aria-hidden="true"
                                            />

                                            Saving this order as shipped will send a
                                            shipping confirmation email to the customer.
                                        </p>
                                    )}
                            </div>

                            {!isPaid && (
                                <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-amber-800">
                                    <Clock3 size={17} className="mt-1 shrink-0" />
                                    Fulfillment can only be updated after
                                    Mollie confirms payment.
                                </p>
                            )}

                            {errors?.fulfillment_status && (
                                <p className="mt-4 text-xs text-red-700">
                                    {errors.fulfillment_status}
                                </p>
                            )}

                            <button
                                type="button"
                                onClick={updateFulfillment}
                                disabled={!isPaid || !hasChanges || saving}
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#25221f] px-5 py-3.5 text-xs font-medium text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <Package size={16} />
                                {saving ? 'Saving...' : 'Save Fulfillment & Tracking'}
                            </button>

                            {order.fulfillment_status === 'completed' && (
                                <p className="mt-4 flex items-center gap-2 text-xs text-green-800">
                                    <CheckCircle2 size={16} />
                                    This order is marked as completed.
                                </p>
                            )}

                            {/* SHIPPING EMAIL STATUS */}
                            <div className="mt-6 border-t border-[#8a6a48]/20 pt-5">
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8a6a48]">
                                        Shipping Email
                                    </p>

                                    <span
                                        className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                                            order.shipping_email_status === 'sent'
                                                ? 'bg-emerald-100 text-emerald-800'
                                                : order.shipping_email_status === 'sending'
                                                    ? 'bg-amber-100 text-amber-800'
                                                    : 'bg-stone-200 text-stone-700'
                                        }`}
                                    >
                                        {order.shipping_email_status ?? 'pending'}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm text-[#62584c]">
                                    {order.shipping_email_status === 'sent'
                                        ? 'Accepted by the email provider.'
                                        : order.shipping_email_status === 'sending'
                                            ? 'Sending or delivery status uncertain. Check Resend before retrying.'
                                            : 'No shipping confirmation has been sent.'}
                                </p>

                                {order.shipping_email_sent_at && (
                                    <p className="mt-2 text-xs text-[#746b61]">
                                        Accepted on{' '}
                                        {new Date(order.shipping_email_sent_at).toLocaleString('en-GB')}
                                    </p>
                                )}
                            </div>

                        </section>

                    </div>
                </div>
            </main>
        </>
    );
}
