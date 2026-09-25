import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    CircleDollarSign,
    Clock3,
    ShoppingBag,
    WalletCards,
} from 'lucide-react';

type Props = {
    stats: {
        orders: number;
        paid: number;
        pending: number;
        revenue: number | string;
    };
};

export default function Dashboard({ stats }: Props) {
    const revenue = Number(stats.revenue ?? 0);

    return (
        <>
            <Head title="Admin dashboard" />

            <div className="min-h-full bg-[#f7f3ec] p-6 text-stone-900 lg:p-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="mt-3 text-4xl font-light tracking-tight">
                            Dashboard
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-stone-500">
                            Overzicht van je bestellingen en omzet.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        <div className="border border-stone-300 bg-white p-6">
                            <ShoppingBag size={20} className="text-[#8a6a48]" />

                            <p className="mt-6 text-sm text-stone-500">
                                Bestellingen
                            </p>

                            <p className="mt-2 text-3xl font-light">
                                {stats.orders}
                            </p>
                        </div>

                        <div className="border border-stone-300 bg-white p-6">
                            <WalletCards size={20} className="text-[#8a6a48]" />

                            <p className="mt-6 text-sm text-stone-500">
                                Betaald
                            </p>

                            <p className="mt-2 text-3xl font-light">
                                {stats.paid}
                            </p>
                        </div>

                        <div className="border border-stone-300 bg-white p-6">
                            <Clock3 size={20} className="text-[#8a6a48]" />

                            <p className="mt-6 text-sm text-stone-500">
                                In afwachting
                            </p>

                            <p className="mt-2 text-3xl font-light">
                                {stats.pending}
                            </p>
                        </div>

                        <div className="border border-stone-300 bg-white p-6">
                            <CircleDollarSign
                                size={20}
                                className="text-[#8a6a48]"
                            />

                            <p className="mt-6 text-sm text-stone-500">
                                Omzet
                            </p>

                            <p className="mt-2 text-3xl font-light">
                                € {revenue.toFixed(2).replace('.', ',')}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-5 lg:grid-cols-2">
                        <Link
                            href="/admin/orders"
                            className="border border-stone-300 bg-[#efe8dd] p-7 transition hover:border-[#8a6a48]"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Beheer
                            </p>

                            <h2 className="mt-3 text-2xl font-light">
                                Bestellingen bekijken
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-stone-500">
                                Bekijk klanten, bedragen en de status van iedere bestelling.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                                Open bestellingen
                                <ArrowUpRight size={15} />
                            </div>
                        </Link>

                        <Link
                            href="/"
                            className="border border-stone-300 bg-white p-7 transition hover:border-[#8a6a48]"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Website
                            </p>

                            <h2 className="mt-3 text-2xl font-light">
                                Website bekijken
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-stone-500">
                                Bekijk Kunst Eten zoals je bezoekers hem zien.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                                Naar website
                                <ArrowUpRight size={15} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
