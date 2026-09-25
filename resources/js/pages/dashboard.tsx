import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    ShoppingBag,
    User,
    LockKeyhole,
} from 'lucide-react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-full bg-[#f7f3ec] p-6 text-stone-900 lg:p-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="mt-3 text-4xl font-light tracking-tight">
                            Dashboard
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500">
                            Beheer hier je website, bestellingen en account.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <Link
                            href="/admin/orders"
                            className="group border border-stone-300 bg-white p-6 transition hover:border-[#8a6a48]"
                        >
                            <ShoppingBag
                                size={22}
                                className="text-[#8a6a48]"
                            />

                            <h2 className="mt-6 text-lg font-medium">
                                Bestellingen
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-stone-500">
                                Bekijk en beheer alle bestellingen.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-stone-900">
                                Openen
                                <ArrowUpRight size={15} />
                            </div>
                        </Link>

                        <Link
                            href="/settings/profile"
                            className="group border border-stone-300 bg-white p-6 transition hover:border-[#8a6a48]"
                        >
                            <User
                                size={22}
                                className="text-[#8a6a48]"
                            />

                            <h2 className="mt-6 text-lg font-medium">
                                Profiel
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-stone-500">
                                Pas je naam en accountgegevens aan.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-stone-900">
                                Bewerken
                                <ArrowUpRight size={15} />
                            </div>
                        </Link>

                        <Link
                            href="/settings/password"
                            className="group border border-stone-300 bg-white p-6 transition hover:border-[#8a6a48]"
                        >
                            <LockKeyhole
                                size={22}
                                className="text-[#8a6a48]"
                            />

                            <h2 className="mt-6 text-lg font-medium">
                                Wachtwoord
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-stone-500">
                                Wijzig het wachtwoord van je adminaccount.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-stone-900">
                                Wijzigen
                                <ArrowUpRight size={15} />
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 border border-stone-300 bg-[#efe8dd] p-6 sm:p-8">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                    Website
                                </p>

                                <h2 className="mt-2 text-2xl font-light">
                                    Bekijk Kunst Eten
                                </h2>

                                <p className="mt-2 text-sm text-stone-500">
                                    Bekijk de website zoals bezoekers hem zien.
                                </p>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 bg-stone-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#8a6a48]"
                            >
                                Website bekijken
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
