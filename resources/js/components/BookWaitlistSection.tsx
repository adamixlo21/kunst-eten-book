
import { useState, type FormEvent } from 'react';
import { router } from '@inertiajs/react';
import {
    ArrowUpRight,
    CheckCircle2,
    Mail,
    AlertCircle,
} from 'lucide-react';

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
            {
                email,
                consent,
                website,
            },
            {
                preserveScroll: true,

                onStart: () => setLoading(true),

                onFinish: () => setLoading(false),

                onSuccess: () => {
                    setSuccess(true);
                    setEmail('');
                    setConsent(false);
                    setError('');
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
            aria-labelledby="book-heading"
            className="relative overflow-hidden bg-[#f3eee6] text-[#25221f]"
        >
            <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-24">

                {/* Book cover */}
                <div className="relative flex flex-col items-center justify-center">

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-12 rounded-full bg-[#ddccb5]/40 blur-3xl"
                    />

                    <img
                        src="/images/paintings/taste-of-inspiration-cover.webp"
                        alt="Concept cover for The Taste of Inspiration"
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 h-auto max-h-[540px] w-full max-w-[450px] object-contain drop-shadow-2xl"
                    />

                    <p className="relative z-10 mt-5 text-center text-sm leading-6 text-[#564b40]">
                        Concept cover — final design may vary.
                    </p>
                </div>

                {/* Book information */}
                <div className="min-w-0">

                    {/* Section label */}
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                        The Taste of Inspiration · Coming Soon
                    </p>

                    {/* Heading */}
                    <h2
                        id="book-heading"
                        className="font-serif text-[clamp(2.75rem,5vw,5rem)] font-light leading-[1.1] tracking-[-0.045em] text-[#25221f]"
                    >
                        A book worth
                        <span className="block italic text-[#70512f]">
                            waiting for.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-lg text-base leading-8 text-[#564b40] sm:text-lg">
                        Five original paintings. Five culinary creations.
                        One shared story bringing art and gastronomy together.
                    </p>

                    <p className="mt-5 max-w-lg text-base leading-8 text-[#564b40]">
                        The book is coming soon. Join the waitlist
                        to be among the first to know when it launches.
                    </p>

                    {/* Success message */}
                    {success ? (
                        <div
                            role="status"
                            aria-live="polite"
                            className="mt-9 flex items-start gap-4 border border-[#c8b8a6] bg-[#faf8f4] p-5 sm:p-6"
                        >
                            <CheckCircle2
                                size={26}
                                aria-hidden="true"
                                className="mt-1 shrink-0 text-[#426340]"
                            />

                            <div>
                                <h3 className="font-serif text-2xl leading-tight text-[#25221f]">
                                    You're on the list!
                                </h3>

                                <p className="mt-3 text-base leading-8 text-[#564b40]">
                                    Thank you for your interest.
                                    We'll let you know when the book
                                    becomes available.
                                </p>
                            </div>
                        </div>
                    ) : (
                        /* Waitlist form */
                        <form
                            onSubmit={submit}
                            className="mt-9 max-w-lg"
                        >
                            {/* Email label */}
                            <label
                                htmlFor="waitlist-email"
                                className="mb-3 block text-sm font-semibold text-[#25221f]"
                            >
                                Your email address
                            </label>

                            {/* Email and button */}
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    id="waitlist-email"
                                    name="email"
                                    type="email"
                                    required
                                    maxLength={255}
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
                                    className="min-h-12 min-w-0 flex-1 border border-[#c8b8a6] bg-white px-4 py-3 text-base text-[#25221f] outline-none transition-colors placeholder:text-[#746b61] focus:border-[#70512f] focus:ring-2 focus:ring-[#70512f]/20"
                                />

                                <button
                                    type="submit"
                                    disabled={loading || !consent}
                                    className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[#25221f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#70512f] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                >
                                    {loading
                                        ? 'Joining...'
                                        : 'Join Waitlist'}

                                    {!loading && (
                                        <ArrowUpRight
                                            size={18}
                                            strokeWidth={1.7}
                                            aria-hidden="true"
                                            className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                                        />
                                    )}
                                </button>
                            </div>

                            {/* Honeypot - keep for spam protection */}
                            <div
                                className="absolute -left-[9999px]"
                                aria-hidden="true"
                            >
                                <label htmlFor="waitlist-website">
                                    Website
                                </label>

                                <input
                                    id="waitlist-website"
                                    name="website"
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
                            <label className="mt-5 flex cursor-pointer items-start gap-3">
                                <input
                                    type="checkbox"
                                    required
                                    checked={consent}
                                    onChange={(event) =>
                                        setConsent(event.target.checked)
                                    }
                                    className="mt-1.5 h-4 w-4 shrink-0 accent-[#70512f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70512f]"
                                />

                                <span className="text-sm leading-7 text-[#564b40]">
                                    I agree to receive an email when
                                    The Taste of Inspiration launches.
                                </span>
                            </label>

                            {/* Error message */}
                            {error && (
                                <div
                                    id="waitlist-error"
                                    role="alert"
                                    className="mt-6 flex items-start gap-3 border border-[#d9b58d] bg-[#fff8f0] p-4"
                                >
                                    <AlertCircle
                                        size={21}
                                        aria-hidden="true"
                                        className="mt-0.5 shrink-0 text-[#92532d]"
                                    />

                                    <div>
                                        <p className="text-sm font-semibold text-[#77502f]">
                                            Unable to join right now
                                        </p>

                                        <p className="mt-2 text-sm leading-7 text-[#77502f]">
                                            {error}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Privacy note */}
                            <div className="mt-6 flex items-center gap-3 border-t border-[#70512f]/20 pt-5">
                                <Mail
                                    size={18}
                                    strokeWidth={1.6}
                                    aria-hidden="true"
                                    className="shrink-0 text-[#70512f]"
                                />

                                <p className="text-sm leading-6 text-[#564b40]">
                                    Only book updates. No spam.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
