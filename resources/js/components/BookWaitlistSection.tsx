
import { useState, type FormEvent } from 'react';
import { router } from '@inertiajs/react';
import { ArrowUpRight, Check, Mail, AlertCircle } from 'lucide-react';

export default function BookWaitlistSection() {
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    const [website, setWebsite] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError('');

        if (!consent) {
            setError(
                'Please agree to receive the book launch notification.'
            );
            return;
        }

        router.post(
            '/book-waitlist',
            { email, consent, website },
            {
                preserveScroll: true,
                onStart: () => setLoading(true),
                onFinish: () => setLoading(false),
                onSuccess: () => {
                    setSuccess(true);
                    setEmail('');
                    setConsent(false);
                },
                onError: (errors) => {
                    setError(
                        errors.email ??
                        errors.consent ??
                        'Something went wrong. Please try again.'
                    );
                },
            }
        );
    }

    return (
        <section
            id="book"
            className="relative overflow-hidden bg-[#f3eee6] px-5 py-20 text-[#25221f] sm:px-8 sm:py-28 lg:px-16"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Book image */}
                <div className="relative flex flex-col items-center justify-center">
                    <div className="pointer-events-none absolute inset-12 rounded-full bg-[#ddccb5]/50 blur-3xl" />

                    <img
                        src="/images/paintings/taste-of-inspiration-cover.webp"
                        alt="The Taste of Inspiration concept book cover featuring five original artworks"
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 max-h-[560px] w-full max-w-[460px] object-contain drop-shadow-2xl"
                    />

                    <p className="relative z-10 mt-4 text-center text-[10px] tracking-[0.08em] text-[#746b61]">
                        Concept cover — final design may vary.
                    </p>
                </div>

                {/* Content */}
                <div>
                    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                        The Taste of Inspiration · Coming Soon
                    </p>

                    <h2 className="font-serif text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                        A book worth
                        <span className="block italic text-[#8a6a48]">
                            waiting for.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-md text-sm leading-7 text-[#746b61] sm:text-base">
                        Five original paintings. Five culinary creations.
                        One unique story bringing art and gastronomy together.
                    </p>

                    <p className="mt-4 max-w-md text-sm leading-7 text-[#746b61]">
                        The book is not available yet. Join the waitlist
                        and be among the first to know when it launches.
                    </p>

                    {success ? (
                        <div
                            role="status"
                            className="mt-9 flex items-start gap-3 border border-[#8a6a48]/30 bg-white/60 p-5"
                        >
                            <Check
                                size={21}
                                className="shrink-0 text-[#8a6a48]"
                            />

                            <div>
                                <h3 className="font-serif text-xl">
                                    You&apos;re on the list!
                                </h3>

                                <p className="mt-2 text-sm text-[#746b61]">
                                    Thank you for your interest. We&apos;ll
                                    let you know when the book is available.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <form
                            onSubmit={submit}
                            className="mt-9 max-w-md"
                        >
                            <label
                                htmlFor="waitlist-email"
                                className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48]"
                            >
                                Your email address
                            </label>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    id="waitlist-email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    aria-invalid={Boolean(error)}
                                    aria-describedby={
                                        error
                                            ? 'waitlist-error'
                                            : undefined
                                    }
                                    className="min-h-13 min-w-0 flex-1 border border-[#8a6a48]/30 bg-white/70 px-4 py-3 text-sm outline-none transition-colors focus:border-[#8a6a48] focus:ring-2 focus:ring-[#8a6a48]/20"
                                />

                                <button
                                    type="submit"
                                    disabled={loading || !consent}
                                    className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#25221f] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {loading
                                        ? 'Joining...'
                                        : 'Join Waitlist'}

                                    {!loading && (
                                        <ArrowUpRight size={16} />
                                    )}
                                </button>
                            </div>

                            {/* Honeypot */}
                            <div
                                className="absolute -left-[9999px]"
                                aria-hidden="true"
                            >
                                <label htmlFor="waitlist-website">
                                    Website
                                </label>

                                <input
                                    id="waitlist-website"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={website}
                                    onChange={(event) =>
                                        setWebsite(event.target.value)
                                    }
                                />
                            </div>

                            {/* Consent */}
                            <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#746b61]">
                                <input
                                    type="checkbox"
                                    required
                                    checked={consent}
                                    onChange={(event) =>
                                        setConsent(event.target.checked)
                                    }
                                    className="mt-1 accent-[#8a6a48]"
                                />

                                <span>
                                    I agree to receive an email when
                                    The Taste of Inspiration launches.
                                </span>
                            </label>

                            {/* Inline validation and rate-limit errors */}
                            {error && (
                                <div
                                    id="waitlist-error"
                                    role="alert"
                                    className="mt-5 flex items-start gap-3 border border-[#d9b58d] bg-[#fff8f0] p-4"
                                >
                                    <AlertCircle
                                        size={19}
                                        className="mt-0.5 shrink-0 text-[#8a6a48]"
                                    />

                                    <div>
                                        <p className="text-sm font-semibold text-[#77502f]">
                                            Unable to join right now
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-[#77502f]">
                                            {error}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="mt-5 flex items-center gap-2 text-xs text-[#746b61]">
                                <Mail size={14} />

                                <span>
                                    Only book updates. No spam.
                                </span>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
