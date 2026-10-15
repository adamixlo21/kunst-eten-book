
import { useForm } from '@inertiajs/react';
import {
    ArrowUpRight,
    CheckCircle2,
    Mail,
    Phone,
    X,
} from 'lucide-react';
import {
    useEffect,
    useState,
    type FormEvent,
    type ReactNode,
} from 'react';

export default function ContactSection() {
    const [messageSent, setMessageSent] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: 'Question about the book',
        message: '',
    });

    // Allow closing the popup with Escape and prevent
    // scrolling while the confirmation is visible.
    useEffect(() => {
        if (!messageSent) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMessageSent(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleEscape);
        };
    }, [messageSent]);

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMessageSent(false);

        post('/contact', {
            preserveScroll: true,

            onSuccess: () => {
                reset();

                // Scroll directly to the top of the page
                // on both mobile and desktop.
                window.scrollTo({
                    top: 0,
                    behavior: 'auto',
                });

                // Show the confirmation popup.
                setMessageSent(true);
            },
        });
    };

    const closeConfirmation = () => {
        setMessageSent(false);

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* SUCCESS CONFIRMATION */}
            {messageSent && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#25221f]/60 px-4 py-6 backdrop-blur-sm sm:px-6"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            closeConfirmation();
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-success-title"
                        aria-describedby="contact-success-description"
                        className="relative my-auto w-full max-w-[560px] border border-[#d9cec0] bg-[#f7f3ec] px-6 py-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:px-12 sm:py-14"
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            aria-label="Close confirmation"
                            onClick={closeConfirmation}
                            className="absolute right-4 top-4 p-2 text-[#746b61] transition-colors hover:text-[#25221f]"
                        >
                            <X size={21} strokeWidth={1.5} />
                        </button>

                        {/* Success icon */}
                        <div className="mb-7 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#66765d]/25 bg-[#66765d]/10">
                                <CheckCircle2
                                    size={42}
                                    strokeWidth={1.2}
                                    className="text-[#66765d]"
                                />
                            </div>
                        </div>

                        {/* Branding */}
                        <div className="mb-6 flex items-center justify-center gap-3">
                            <div className="h-px w-6 bg-[#8a6a48]" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] sm:tracking-[0.3em]">
                                The Taste of Inspiration
                            </span>

                            <div className="h-px w-6 bg-[#8a6a48]" />
                        </div>

                        {/* Title */}
                        <h2
                            id="contact-success-title"
                            className="font-serif text-4xl font-light leading-[1.12] tracking-[-0.04em] text-[#25221f] sm:text-5xl"
                        >
                            Message sent
                            <span className="block italic text-[#8a6a48]">
                                successfully.
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            id="contact-success-description"
                            className="mx-auto mt-6 max-w-sm text-sm leading-7 text-[#746b61]"
                        >
                            Thank you for getting in touch!
                            Your message has been received.
                            We'll get back to you as soon as possible.
                        </p>

                        {/* Divider */}
                        <div className="mx-auto my-8 h-px w-16 bg-[#8a6a48]/40" />

                        {/* Continue button */}
                        <button
                            type="button"
                            onClick={closeConfirmation}
                            className="group inline-flex w-full items-center justify-center gap-3 bg-[#25221f] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8a6a48] sm:w-auto"
                        >
                            Continue Exploring

                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.5}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </button>

                        {/* Bottom text */}
                        <p className="mt-7 text-[9px] uppercase tracking-[0.2em] text-[#a69a8a]">
                            Food · Art · Inspiration
                        </p>
                    </div>
                </div>
            )}

            {/* CONTACT SECTION */}
            <section
                id="contact"
                className="bg-[#f7f3ec] text-[#25221f]"
            >
                <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">

                    {/* HEADER */}
                    <div className="border-b border-[#8a6a48]/20 pb-4">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Contact
                        </p>
                    </div>

                    {/* TITLE */}
                    <div className="py-10 sm:py-14">
                        <h2 className="font-serif text-5xl font-light tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                            Let&apos;s talk.
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-7 text-stone-500">
                            Questions about the book, the artwork or a
                            collaboration? Send us a message.
                        </p>
                    </div>

                    {/* CONTENT */}
                    <div className="grid border-t border-[#8a6a48]/20 lg:grid-cols-[0.7fr_1.3fr]">

                        {/* CONTACT INFO */}
                        <div className="py-8 lg:py-12 lg:pr-14">
                            <h3 className="font-serif text-2xl font-light">
                                Get in touch
                            </h3>

                            <div className="mt-7 space-y-6">

                                {/* Email */}
                                <div className="flex items-center gap-3">
                                    <Mail
                                        size={17}
                                        strokeWidth={1.4}
                                        className="shrink-0 text-[#8a6a48]"
                                    />

                                    <a
                                        href="mailto:info@jouwdomein.nl"
                                        className="break-all text-sm transition-colors hover:text-[#8a6a48]"
                                    >
                                        info@jouwdomein.nl
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-3">
                                    <Phone
                                        size={17}
                                        strokeWidth={1.4}
                                        className="shrink-0 text-[#8a6a48]"
                                    />

                                    <a
                                        href="tel:+31600000000"
                                        className="text-sm transition-colors hover:text-[#8a6a48]"
                                    >
                                        +31 6 00 00 00 00
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* FORM */}
                        <div className="border-t border-[#8a6a48]/20 py-8 lg:border-l lg:border-t-0 lg:py-12 lg:pl-14">
                            <h3 className="mb-8 font-serif text-3xl font-light">
                                Send a message
                            </h3>

                            <form
                                onSubmit={submit}
                                className="space-y-6"
                            >
                                {/* Name + Email */}
                                <div className="grid gap-6 sm:grid-cols-2">

                                    <Field
                                        label="Name"
                                        htmlFor="contact-name"
                                        error={errors.name}
                                    >
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            required
                                            maxLength={255}
                                            autoComplete="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            className={inputClass}
                                            placeholder="Your name"
                                        />
                                    </Field>

                                    <Field
                                        label="Email"
                                        htmlFor="contact-email"
                                        error={errors.email}
                                    >
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            required
                                            maxLength={255}
                                            autoComplete="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            className={inputClass}
                                            placeholder="name@email.com"
                                        />
                                    </Field>

                                </div>

                                {/* Phone */}
                                <Field
                                    label="Phone"
                                    htmlFor="contact-phone"
                                    optional
                                    error={errors.phone}
                                >
                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        name="phone"
                                        maxLength={50}
                                        autoComplete="tel"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        className={inputClass}
                                        placeholder="+31 6 12345678"
                                    />
                                </Field>

                                {/* Subject */}
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
                                        onChange={(e) =>
                                            setData('subject', e.target.value)
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
                                            Press & Media
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </Field>

                                {/* Message */}
                                <Field
                                    label="Message"
                                    htmlFor="contact-message"
                                    error={errors.message}
                                >
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={4}
                                        required
                                        maxLength={5000}
                                        value={data.message}
                                        onChange={(e) =>
                                            setData('message', e.target.value)
                                        }
                                        className={`${inputClass} resize-y`}
                                        placeholder="Your message..."
                                    />
                                </Field>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group inline-flex w-full items-center justify-center gap-3 bg-[#25221f] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                                >
                                    {processing
                                        ? 'Sending...'
                                        : 'Send Message'}

                                    {!processing && (
                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.5}
                                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    )}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

const inputClass =
    'w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-base text-[#25221f] outline-none placeholder:text-stone-400 focus:border-[#8a6a48] focus:ring-0 sm:text-sm';

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
            <div className="mb-1 flex items-center justify-between gap-3">
                <label
                    htmlFor={htmlFor}
                    className="text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-500"
                >
                    {label}
                </label>

                {optional && (
                    <span className="text-[8px] uppercase tracking-[0.2em] text-stone-400">
                        Optional
                    </span>
                )}
            </div>

            {children}

            {error && (
                <p className="mt-2 text-xs text-red-600" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
