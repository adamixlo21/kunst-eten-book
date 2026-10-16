
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    CheckCircle2,
    Clock3,
} from 'lucide-react';
import { useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    BookCartProvider,
    useBookCart,
} from '@/components/BookCartContext';

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

function ResetCartAfterPayment({ status }: { status: string }) {
    const { resetCart } = useBookCart();

    useEffect(() => {
        if (status === 'paid') {
            resetCart();
        }
    }, [status, resetCart]);

    return null;
}

export default function CheckoutSuccess({
                                            order,
                                        }: CheckoutSuccessProps) {
    const total = Number(order.total_price);
    const isPaid = order.status === 'paid';

    return (
        <BookCartProvider>
            <ResetCartAfterPayment status={order.status} />

            <Head
                title={
                    isPaid
                        ? 'Order Confirmed | The Taste of Inspiration'
                        : 'Payment Status | The Taste of Inspiration'
                }
            />

            <Navbar />

            <main className="flex min-h-screen items-center justify-center bg-[#f7f3ec] px-5 py-20 text-[#25221f] sm:px-8">
                <div className="w-full max-w-2xl border border-[#d9cec0] bg-[#fffdf9] px-6 py-10 shadow-[0_20px_70px_rgba(70,55,40,0.05)] sm:px-12 sm:py-14">

                    {/* Status icon */}
                    <div
                        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border ${
                            isPaid
                                ? 'border-[#66765d]/25 bg-[#66765d]/10 text-[#66765d]'
                                : 'border-[#8a6a48]/25 bg-[#8a6a48]/10 text-[#8a6a48]'
                        }`}
                    >
                        {isPaid ? (
                            <CheckCircle2 size={42} strokeWidth={1.2} />
                        ) : (
                            <Clock3 size={42} strokeWidth={1.2} />
                        )}
                    </div>

                    {/* Heading */}
                    <div className="mt-8 text-center">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            The Taste of Inspiration
                        </p>

                        <h1 className="mt-5 font-serif text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
                            {isPaid ? (
                                <>
                                    Thank you for
                                    <span className="block italic text-[#8a6a48]">
                                        your order.
                                    </span>
                                </>
                            ) : (
                                <>
                                    Payment
                                    <span className="block italic text-[#8a6a48]">
                                        not yet confirmed.
                                    </span>
                                </>
                            )}
                        </h1>

                        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#746b61]">
                            {isPaid
                                ? 'Your payment has been confirmed. Thank you for being part of The Taste of Inspiration.'
                                : 'We have not yet confirmed your payment. Please check your payment status before placing another order.'}
                        </p>
                    </div>

                    {/* Order details */}
                    <div className="mt-10 border-y border-[#d9cec0] py-7">
                        <div className="space-y-5 text-sm">
                            <div className="flex items-start justify-between gap-5">
                                <span className="text-[#746b61]">
                                    Order Number
                                </span>

                                <span className="font-medium">
                                    #{order.id}
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-5">
                                <span className="text-[#746b61]">
                                    Name
                                </span>

                                <span className="break-words text-right font-medium">
                                    {order.name}
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-5">
                                <span className="text-[#746b61]">
                                    Quantity
                                </span>

                                <span className="font-medium">
                                    {order.quantity}{' '}
                                    {order.quantity === 1 ? 'book' : 'books'}
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-5">
                                <span className="text-[#746b61]">
                                    Payment Status
                                </span>

                                <span className="font-medium capitalize">
                                    {order.status.replace(/_/g, ' ')}
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-5 border-t border-[#d9cec0] pt-5">
                                <span className="text-[#746b61]">
                                    Total
                                </span>

                                <span className="text-lg font-medium">
                                    € {total.toFixed(2).replace('.', ',')}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Confirmation note */}
                    {isPaid && (
                        <p className="mt-7 text-center text-xs leading-6 text-[#746b61]">
                            Your order confirmation will be sent to the
                            email address provided during checkout.
                        </p>
                    )}

                    {/* Back to home */}
                    <div className="mt-9 text-center">
                        <Link
                            href="/"
                            className="group inline-flex w-full items-center justify-center gap-3 bg-[#25221f] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8a6a48] sm:w-auto"
                        >
                            Back to Homepage

                            <ArrowRight
                                size={16}
                                strokeWidth={1.5}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    <div className="mt-10 border-t border-[#d9cec0] pt-6 text-center">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]">
                            Food · Art · Inspiration
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </BookCartProvider>
    );
}
