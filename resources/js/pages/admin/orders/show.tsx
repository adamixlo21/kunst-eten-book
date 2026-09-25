import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

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
    mollie_payment_id?: string | null;
    created_at: string;
};

type Props = {
    order: Order;
};

export default function OrderShow({ order }: Props) {
    const updateStatus = (status: string) => {
        router.patch(`/admin/orders/${order.id}/status`, {
            status,
        });
    };

    return (
        <>
            <Head title={`Bestelling #${order.id}`} />

            <div className="min-h-full bg-[#f7f3ec] p-6 text-stone-900 lg:p-10">
                <div className="mx-auto max-w-5xl">
                    <Link
                        href="/admin/orders"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-900"
                    >
                        <ArrowLeft size={16} />
                        Terug naar bestellingen
                    </Link>

                    <div className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="mt-3 text-4xl font-light">
                            Bestelling #{order.id}
                        </h1>

                        <p className="mt-3 text-sm text-stone-500">
                            Bekijk de klantgegevens en bestelstatus.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <section className="border border-stone-300 bg-white p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                                Klant
                            </p>

                            <div className="mt-5 space-y-4 text-sm">
                                <div>
                                    <p className="text-stone-500">Naam</p>
                                    <p className="mt-1 font-medium">
                                        {order.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-stone-500">
                                        E-mailadres
                                    </p>
                                    <p className="mt-1 font-medium">
                                        {order.email}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-stone-500">
                                        Telefoon
                                    </p>
                                    <p className="mt-1 font-medium">
                                        {order.phone || 'Niet ingevuld'}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="border border-stone-300 bg-white p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                                Bezorgadres
                            </p>

                            <div className="mt-5 text-sm leading-7">
                                <p>{order.address}</p>
                                <p>
                                    {order.postal_code} {order.city}
                                </p>
                            </div>
                        </section>

                        <section className="border border-stone-300 bg-white p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                                Bestelling
                            </p>

                            <div className="mt-5 space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-stone-500">
                                        Aantal boeken
                                    </span>
                                    <span>{order.quantity}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-stone-500">
                                        Totaal
                                    </span>
                                    <span className="font-medium">
                                        €{' '}
                                        {Number(order.total_price)
                                            .toFixed(2)
                                            .replace('.', ',')}
                                    </span>
                                </div>

                                {order.mollie_payment_id && (
                                    <div>
                                        <p className="text-stone-500">
                                            Mollie betaling
                                        </p>
                                        <p className="mt-1 break-all text-xs">
                                            {order.mollie_payment_id}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>

                        <section className="border border-stone-300 bg-[#efe8dd] p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                Status
                            </p>

                            <p className="mt-4 text-2xl font-light capitalize">
                                {order.status}
                            </p>

                            <div className="mt-6 grid gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        updateStatus('processing')
                                    }
                                    className="border border-stone-300 bg-white px-4 py-3 text-left text-sm transition hover:border-[#8a6a48]"
                                >
                                    In behandeling
                                </button>

                                <button
                                    type="button"
                                    onClick={() => updateStatus('shipped')}
                                    className="border border-stone-300 bg-white px-4 py-3 text-left text-sm transition hover:border-[#8a6a48]"
                                >
                                    Verzonden
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        updateStatus('cancelled')
                                    }
                                    className="border border-stone-300 bg-white px-4 py-3 text-left text-sm transition hover:border-red-400"
                                >
                                    Geannuleerd
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
