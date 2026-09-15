import { Head, Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookCartProvider } from '@/components/BookCartContext';

interface Order {
    id: number;
    name: string;
    quantity: number;
    total_price: string;
    status: string;
}

interface CheckoutSuccessProps {
    order: Order;
}

export default function CheckoutSuccess({
                                            order,
                                        }: CheckoutSuccessProps) {
    const total = Number(order.total_price);

    return (
        <>
            <BookCartProvider>
                <Head title="Bestelling gelukt" />

                <Navbar/>

                <main className="flex min-h-screen items-center justify-center bg-[#f7f3ec] px-6 text-stone-900">
                    <div className="w-full max-w-2xl border border-stone-300 bg-white p-10 sm:p-14">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8a6a48]/10 text-[#8a6a48]">
                            <CheckCircle2 size={34} />
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Betaling geslaagd
                            </p>

                            <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
                                Bedankt voor je bestelling.
                            </h1>

                            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-stone-500">
                                Je bestelling is succesvol ontvangen en betaald.
                            </p>
                        </div>

                        <div className="mt-10 border-y border-stone-200 py-6">
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-stone-500">
                                        Bestelnummer
                                    </span>
                                    <span className="font-medium">
                                        #{order.id}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-stone-500">
                                        Naam
                                    </span>
                                    <span className="font-medium">
                                        {order.name}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-stone-500">
                                        Aantal
                                    </span>
                                    <span className="font-medium">
                                        {order.quantity}{' '}
                                        {order.quantity === 1
                                            ? 'boek'
                                            : 'boeken'}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-stone-500">
                                        Status
                                    </span>
                                    <span className="font-medium capitalize">
                                        {order.status}
                                    </span>
                                </div>

                                <div className="flex justify-between border-t border-stone-200 pt-4">
                                    <span className="text-stone-500">
                                        Totaal
                                    </span>

                                    <span className="text-lg font-medium">
                                        €{' '}
                                        {total
                                            .toFixed(2)
                                            .replace('.', ',')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-3 bg-stone-900 px-7 py-4 text-sm font-medium text-white transition hover:bg-[#8a6a48]"
                            >
                                Terug naar Kunst Eten

                                <ArrowRight
                                    size={16}
                                    className="transition group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </main>

                <Footer/>
            </BookCartProvider>
        </>
    );
}
