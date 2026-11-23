
import { useForm } from '@inertiajs/react';
import {
    ArrowUpRight,
    CheckCircle2,
    Instagram,
    Mail,
    X,
} from 'lucide-react';
import {
    useEffect,
    useRef,
    useState,
    type FormEvent,
    type ReactNode,
} from 'react';

const colors = {
    background: '#e8dfd3',
    surface: '#faf8f4',
    dark: '#25221f',
    gold: '#70512f',
    body: '#564b40',
    border: '#c8b8a6',
};

const inputClass =
    'w-full min-h-12 border border-[#c8b8a6] bg-[#faf8f4] px-4 py-3 text-base text-[#25221f] outline-none transition-colors placeholder:text-[#746b61] focus:border-[#70512f] focus:ring-2 focus:ring-[#70512f]/20';

export default function ContactSection() {
    const [messageSent, setMessageSent] = useState(false);

    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: 'Question about the book',
        message: '',
    });

    // Accessible success dialog.
    useEffect(() => {
        if (!messageSent) return;

        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement as HTMLElement | null;

        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMessageSent(false);
                return;
            }

            if (event.key !== 'Tab') return;

            const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
                'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
            );

            if (!focusable?.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === last
            ) {
                event.preventDefault();
                first.focus();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
            previousFocus?.focus();
        };
    }, [messageSent]);

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessageSent(false);

        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setMessageSent(true);
            },
        });
    }

    return (
        <>
            <section
                id="contact"
                aria-labelledby="contact-heading"
                className="relative overflow-hidden bg-[#e8dfd3] text-[#25221f]"
            >
                <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
                    {/* Top heading */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#70512f]/25 pb-5">
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                            Contact
                        </span>

                        <span className="text-xs font-medium text-[#564b40]">
                            The Taste of Inspiration
                        </span>
                    </div>

                    {/* Title */}
                    <div className="max-w-3xl py-12 sm:py-16">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                            We'd love to hear from you
                        </p>

                        <h2
                            id="contact-heading"
                            className="font-serif text-[clamp(3.2rem,7vw,6rem)] font-light leading-[1.08] tracking-[-0.05em]"
                        >
                            Let's
                            <span className="italic text-[#70512f]">
                                {' '}connect.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-[#564b40] sm:text-lg">
                            Have a question about the book, an artwork
                            or a possible collaboration? We'd love
                            to hear from you.
                        </p>
                    </div>

                    {/* Main content */}
                    <div className="grid gap-12 border-t border-[#70512f]/25 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-14">
                        {/* Contact information */}
                        <div className="lg:pr-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                Get in touch
                            </p>

                            <h3 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
                                Every great story
                                <span className="block italic text-[#70512f]">
                                    starts somewhere.
                                </span>
                            </h3>

                            <p className="mt-5 max-w-sm text-base leading-8 text-[#564b40]">
                                Whether you're curious about the project
                                or interested in working together,
                                feel free to reach out.
                            </p>

                            <div className="mt-10 space-y-7">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c8b8a6] bg-[#faf8f4]">
                                        <Mail
                                            size={19}
                                            strokeWidth={1.6}
                                            className="text-[#70512f]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-[#25221f]">
                                            Email
                                        </p>

                                        <a
                                            href="mailto:thetasteofinspiration@gmail.com"
                                            className="mt-1 block break-all text-base leading-7 text-[#564b40] underline decoration-[#70512f]/40 underline-offset-4 transition-colors hover:text-[#70512f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                        >
                                            thetasteofinspiration@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Instagram */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c8b8a6] bg-[#faf8f4]">
                                        <Instagram
                                            size={19}
                                            strokeWidth={1.6}
                                            className="text-[#70512f]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-[#25221f]">
                                            Instagram
                                        </p>

                                        <a
                                            href="https://www.instagram.com/thetasteofinspiration_/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 block break-words text-base leading-7 text-[#564b40] underline decoration-[#70512f]/40 underline-offset-4 transition-colors hover:text-[#70512f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                        >
                                            @thetasteofinspiration_
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact form */}
                        <div className="min-w-0">
                            <div className="mb-7">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                    Your Message
                                </p>

                                <h3 className="mt-3 font-serif text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                                    Send us a message
                                </h3>
                            </div>

                            <form
                                onSubmit={submit}
                                className="space-y-6"
                            >
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <Field
                                        label="Your name"
                                        htmlFor="contact-name"
                                        error={errors.name}
                                    >
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            maxLength={255}
                                            value={data.name}
                                            onChange={(event) =>
                                                setData('name', event.target.value)
                                            }
                                            aria-invalid={Boolean(errors.name)}
                                            aria-describedby={
                                                errors.name
                                                    ? 'contact-name-error'
                                                    : undefined
                                            }
                                            placeholder="Your name"
                                            className={inputClass}
                                        />
                                    </Field>

                                    <Field
                                        label="Email address"
                                        htmlFor="contact-email"
                                        error={errors.email}
                                    >
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            maxLength={255}
                                            value={data.email}
                                            onChange={(event) =>
                                                setData('email', event.target.value)
                                            }
                                            aria-invalid={Boolean(errors.email)}
                                            aria-describedby={
                                                errors.email
                                                    ? 'contact-email-error'
                                                    : undefined
                                            }
                                            placeholder="name@example.com"
                                            className={inputClass}
                                        />
                                    </Field>
                                </div>

                                <Field
                                    label="Phone number"
                                    htmlFor="contact-phone"
                                    optional
                                    error={errors.phone}
                                >
                                    <input
                                        id="contact-phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        maxLength={50}
                                        value={data.phone}
                                        onChange={(event) =>
                                            setData('phone', event.target.value)
                                        }
                                        aria-invalid={Boolean(errors.phone)}
                                        aria-describedby={
                                            errors.phone
                                                ? 'contact-phone-error'
                                                : undefined
                                        }
                                        placeholder="+31 6 12345678"
                                        className={inputClass}
                                    />
                                </Field>

                                <Field
                                    label="Subject"
                                    htmlFor="contact-subject"
                                    error={errors.subject}
                                >
                                    <select
                                        id="contact-subject"
                                        name="subject"
                                        required
                                        value={data.subject}
                                        onChange={(event) =>
                                            setData('subject', event.target.value)
                                        }
                                        aria-invalid={Boolean(errors.subject)}
                                        aria-describedby={
                                            errors.subject
                                                ? 'contact-subject-error'
                                                : undefined
                                        }
                                        className={inputClass}
                                    >
                                        <option value="Question about the book">
                                            Question about the book
                                        </option>

                                        <option value="Question about my order">
                                            Question about my order
                                        </option>

                                        <option value="Question about an artwork">
                                            Question about an artwork
                                        </option>

                                        <option value="Collaboration">
                                            Collaboration
                                        </option>

                                        <option value="Press & Media">
                                            Press &amp; Media
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </Field>

                                <Field
                                    label="Your message"
                                    htmlFor="contact-message"
                                    error={errors.message}
                                >
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={5}
                                        required
                                        maxLength={5000}
                                        value={data.message}
                                        onChange={(event) =>
                                            setData('message', event.target.value)
                                        }
                                        aria-invalid={Boolean(errors.message)}
                                        aria-describedby={
                                            errors.message
                                                ? 'contact-message-error'
                                                : undefined
                                        }
                                        placeholder="Write your message here..."
                                        className={`${inputClass} resize-y`}
                                    />
                                </Field>

                                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#25221f] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#70512f] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                    >
                                        {processing
                                            ? 'Sending...'
                                            : 'Send Message'}

                                        {!processing && (
                                            <ArrowUpRight
                                                size={18}
                                                strokeWidth={1.6}
                                                aria-hidden="true"
                                                className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                                            />
                                        )}
                                    </button>

                                    <p className="text-sm leading-6 text-[#564b40]">
                                        We'll reply as soon as possible.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </section>

            {/* Success confirmation */}
            {messageSent && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#25221f]/65 px-4 py-6 backdrop-blur-sm"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setMessageSent(false);
                        }
                    }}
                >
                    <div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-success-title"
                        aria-describedby="contact-success-description"
                        className="relative my-auto w-full max-w-[520px] border border-[#c8b8a6] bg-[#faf8f4] px-6 py-12 text-center shadow-2xl sm:px-12"
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            aria-label="Close confirmation"
                            onClick={() => setMessageSent(false)}
                            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-[#564b40] hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70512f]"
                        >
                            <X size={22} aria-hidden="true" />
                        </button>

                        <div className="mb-7 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#70512f]/25 bg-[#eee7dc]">
                                <CheckCircle2
                                    size={40}
                                    strokeWidth={1.5}
                                    className="text-[#70512f]"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                            The Taste of Inspiration
                        </p>


                        <h2
                            id="contact-success-title"
                            className="mt-5 font-serif text-4xl font-normal leading-tight tracking-[-0.04em] text-[#25221f] sm:text-5xl"
                        >
                            <span className="block text-[#25221f]">
                                Message sent
                            </span>

                            <span className="block italic text-[#70512f]">
                                successfully.
                            </span>
                        </h2>

                        <p
                            id="contact-success-description"
                            className="mx-auto mt-6 max-w-sm text-base leading-8 text-[#564b40]"
                        >
                            Thank you for getting in touch!
                            Your message has been received.
                            We'll get back to you as soon as possible.
                        </p>

                        <button
                            type="button"
                            onClick={() => setMessageSent(false)}
                            className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-[#25221f] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#70512f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                        >
                            Continue Exploring

                            <ArrowUpRight
                                size={18}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

function Field({
                   label,
                   htmlFor,
                   optional = false,
                   error,
                   children,
               }: {
    label: string;
    htmlFor: string;
    optional?: boolean;
    error?: string;
    children: ReactNode;
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between gap-3">
                <label
                    htmlFor={htmlFor}
                    className="text-sm font-semibold text-[#25221f]"
                >
                    {label}
                </label>

                {optional && (
                    <span className="text-xs text-[#564b40]">
                        Optional
                    </span>
                )}
            </div>

            {children}

            {error && (
                <p
                    id={`${htmlFor}-error`}
                    role="alert"
                    className="mt-2 text-sm leading-6 text-[#a12626]"
                >
                    {error}
                </p>
            )}
        </div>
    );
}
