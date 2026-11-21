
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import {
    ArrowLeft,
    ArrowUpRight,
    Check,
    MailX,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
    token: string;
    unsubscribed: boolean;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function WaitlistUnsubscribe({
                                                token,
                                                unsubscribed,
                                            }: Props) {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');
    const reduceMotion = useReducedMotion();

    const handleUnsubscribe = () => {
        if (processing || unsubscribed) return;

        setError('');

        router.post(
            `/book-waitlist/unsubscribe/${encodeURIComponent(token)}`,
            {},
            {
                preserveScroll: true,
                onStart: () => setProcessing(true),
                onFinish: () => setProcessing(false),
                onError: () => {
                    setError(
                        'Something went wrong. Please try again.',
                    );
                },
            },
        );
    };

    return (
        <>
            <Head
                title={
                    unsubscribed
                        ? 'Unsubscribed | The Taste of Inspiration'
                        : 'Email Preferences | The Taste of Inspiration'
                }
            />

            <Navbar />

            <main className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#f3eee6] text-[#25221f]">

                {/* Background decorations */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute -left-48 top-[20%] h-[380px] w-[380px] rounded-full border border-[#8a6a48]/10 sm:h-[520px] sm:w-[520px]" />

                    <div className="absolute -left-24 top-[28%] h-[220px] w-[220px] rounded-full border border-[#8a6a48]/10 sm:h-[320px] sm:w-[320px]" />

                    <div className="absolute -right-40 bottom-[-180px] h-[460px] w-[460px] rounded-full bg-[#dfd0bc]/25 blur-[80px]" />
                </div>

                <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-16">

                    {/* Page heading / breadcrumb */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : { opacity: 0, y: -10 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease,
                        }}
                        className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/20 pb-4"
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a6a48] transition hover:text-[#25221f]"
                        >
                            <ArrowLeft
                                size={14}
                                strokeWidth={1.5}
                                className="transition-transform group-hover:-translate-x-1"
                            />

                            Back to Home
                        </Link>

                        <span className="text-right text-[9px] uppercase tracking-[0.2em] text-stone-400">
                            Email Preferences
                        </span>
                    </motion.div>

                    {/* Centered content */}
                    <div className="flex flex-1 items-center justify-center py-14 sm:py-20">

                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 25 }
                            }
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.1,
                                ease,
                            }}
                            className="w-full max-w-[620px] text-center"
                        >

                            {/* Icon */}
                            <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-[#8a6a48]/20 bg-[#faf8f4]/70 sm:h-20 sm:w-20">
                                {unsubscribed ? (
                                    <Check
                                        size={30}
                                        strokeWidth={1.5}
                                        className="text-[#8a6a48]"
                                    />
                                ) : (
                                    <MailX
                                        size={30}
                                        strokeWidth={1.3}
                                        className="text-[#8a6a48]"
                                    />
                                )}
                            </div>

                            {/* Eyebrow */}
                            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                {unsubscribed
                                    ? 'Preferences Updated'
                                    : 'The Taste of Inspiration'}
                            </p>

                            {/* Title */}
                            <h1 className="mt-5 font-serif text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.045em]">
                                {unsubscribed ? (
                                    <>
                                        You've
                                        <span className="block italic text-[#8a6a48]">
                                            unsubscribed.
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        Leaving the
                                        <span className="block italic text-[#8a6a48]">
                                            waitlist?
                                        </span>
                                    </>
                                )}
                            </h1>

                            {/* Decorative line */}
                            <div className="mx-auto mt-8 h-px w-14 bg-[#8a6a48]/60" />

                            {/* Message */}
                            <p className="mx-auto mt-7 max-w-[440px] text-[15px] leading-8 text-[#746b61] sm:text-base">
                                {unsubscribed
                                    ? "Your preferences have been updated. You won't receive further book launch announcements from us."
                                    : "We're sorry to see you go. If you unsubscribe, you'll no longer receive emails about the launch of The Taste of Inspiration."}
                            </p>

                            {/* Secondary message */}
                            <p className="mx-auto mt-4 max-w-[410px] font-serif text-lg italic leading-7 text-[#8a6a48]">
                                {unsubscribed
                                    ? 'Thank you for being part of our journey.'
                                    : 'You can always join again in the future.'}
                            </p>

                            {/* Actions */}
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                                {!unsubscribed && (
                                    <button
                                        type="button"
                                        onClick={handleUnsubscribe}
                                        disabled={processing}
                                        className="inline-flex min-h-13 w-full items-center justify-center gap-3 bg-[#25221f] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition-all duration-300 hover:bg-[#8a6a48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                                    >
                                        {processing
                                            ? 'Unsubscribing...'
                                            : 'Confirm Unsubscribe'}
                                    </button>
                                )}

                                <Link
                                    href="/"
                                    className={`group inline-flex min-h-13 w-full items-center justify-center gap-3 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] transition-colors duration-300 sm:w-auto ${
                                        unsubscribed
                                            ? 'bg-[#25221f] text-white hover:bg-[#8a6a48]'
                                            : 'border border-[#8a6a48]/40 text-[#25221f] hover:border-[#25221f]'
                                    }`}
                                >
                                    {unsubscribed
                                        ? 'Return to Website'
                                        : 'Keep Me Subscribed'}

                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.5}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>
                            </div>

                            {/* Error */}
                            {error && (
                                <p
                                    role="alert"
                                    className="mt-5 text-sm text-red-700"
                                >
                                    {error}
                                </p>
                            )}

                            {/* Confirmation information */}
                            <p className="mt-8 text-xs leading-6 text-stone-400">
                                {unsubscribed
                                    ? 'Your unsubscribe request has been completed.'
                                    : 'You are in control of the emails you receive.'}
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom editorial line */}
                    <div className="flex flex-col items-center justify-between gap-3 border-t border-[#8a6a48]/20 pt-5 sm:flex-row">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            The Taste of Inspiration
                        </span>

                        <span className="font-serif text-sm italic text-[#746b61]">
                            Five paintings. Five dishes. One book.
                        </span>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
