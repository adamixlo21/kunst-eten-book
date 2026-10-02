import { useForm } from '@inertiajs/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function ContactSection() {
    const [messageSent, setMessageSent] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: 'Question about the book',
        message: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/contact', {
            preserveScroll: true,

            onSuccess: () => {
                reset();
                setMessageSent(true);
            },
        });
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#f7f3ec] px-6 py-24 sm:py-32"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#8a6a48]/5 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                    {/* CONTACT INFORMATION */}
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="h-px w-10 bg-[#8a6a48]" />

                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Contact
                            </p>
                        </div>

                        <h2 className="mt-6 max-w-md font-serif text-4xl font-normal leading-tight text-stone-900 sm:text-5xl">
                            Let&apos;s start a
                            <span className="block italic text-[#8a6a48]">
                                conversation.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-8 text-stone-600">
                            Have a question about The Taste of Inspiration,
                            your order, one of the original artworks, or a
                            possible collaboration? We would love to hear from
                            you.
                        </p>

                        <div className="mt-10 space-y-6 border-t border-stone-300 pt-8">

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                                    <Mail
                                        size={18}
                                        className="text-[#8a6a48]"
                                    />
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:info@jouwdomein.nl"
                                        className="mt-1 block text-sm text-stone-800 transition hover:text-[#8a6a48]"
                                    >
                                        info@jouwdomein.nl
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                                    <Phone
                                        size={18}
                                        className="text-[#8a6a48]"
                                    />
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+31600000000"
                                        className="mt-1 block text-sm text-stone-800 transition hover:text-[#8a6a48]"
                                    >
                                        +31 6 00 00 00 00
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Small message */}
                        <div className="mt-12 border-l-2 border-[#8a6a48] pl-6">
                            <p className="max-w-sm font-serif text-xl italic leading-8 text-stone-600">
                                “Where flavour becomes colour, and food becomes
                                art.”
                            </p>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="border border-stone-300 bg-white p-7 shadow-[0_20px_60px_rgba(68,55,40,0.05)] sm:p-10">

                        <div className="mb-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Send a Message
                            </p>

                            <h3 className="mt-3 font-serif text-3xl text-stone-900">
                                How can we help?
                            </h3>
                        </div>

                        {/* SUCCESS MESSAGE */}
                        {messageSent && (
                            <div className="mb-8 border border-[#8a6a48]/30 bg-[#f7f3ec] p-6">
                                <div className="flex items-start gap-4">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#66765d] text-white">
                                        ✓
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#66765d]">
                                            Message Sent
                                        </p>

                                        <h3 className="mt-2 font-serif text-xl text-stone-900">
                                            Thank you for getting in touch.
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-stone-600">
                                            We have received your message and
                                            will get back to you as soon as
                                            possible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">

                            {/* NAME + EMAIL */}
                            <div className="grid gap-6 sm:grid-cols-2">

                                <Field
                                    label="Name"
                                    error={errors.name}
                                >
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData(
                                                'name',
                                                e.target.value,
                                            )
                                        }
                                        className={inputClass}
                                        placeholder="Your name"
                                    />
                                </Field>

                                <Field
                                    label="Email Address"
                                    error={errors.email}
                                >
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData(
                                                'email',
                                                e.target.value,
                                            )
                                        }
                                        className={inputClass}
                                        placeholder="name@email.com"
                                    />
                                </Field>
                            </div>

                            {/* PHONE */}
                            <Field
                                label="Phone Number"
                                optional
                                error={errors.phone}
                            >
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData(
                                            'phone',
                                            e.target.value,
                                        )
                                    }
                                    className={inputClass}
                                    placeholder="+31 6 12345678"
                                />
                            </Field>

                            {/* SUBJECT */}
                            <Field
                                label="Subject"
                                error={errors.subject}
                            >
                                <select
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData(
                                            'subject',
                                            e.target.value,
                                        )
                                    }
                                    className={inputClass}
                                >
                                    <option>
                                        Question about the book
                                    </option>

                                    <option>
                                        Question about my order
                                    </option>

                                    <option>
                                        Question about an artwork
                                    </option>

                                    <option>
                                        Collaboration
                                    </option>

                                    <option>
                                        Press & Media
                                    </option>

                                    <option>
                                        Other
                                    </option>
                                </select>
                            </Field>

                            {/* MESSAGE */}
                            <Field
                                label="Message"
                                error={errors.message}
                            >
                                <textarea
                                    rows={6}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData(
                                            'message',
                                            e.target.value,
                                        )
                                    }
                                    className={`${inputClass} resize-none`}
                                    placeholder="How can we help you?"
                                />
                            </Field>

                            {/* SUBMIT */}
                            <div className="flex flex-col gap-4 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

                                <p className="max-w-xs text-xs leading-5 text-stone-400">
                                    We&apos;ll only use your information to
                                    respond to your message.
                                </p>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group flex items-center justify-center gap-3 bg-stone-900 px-7 py-4 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {processing
                                        ? 'Sending...'
                                        : 'Send Message'}

                                    {!processing && (
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

const inputClass =
    'w-full border border-stone-300 bg-white px-4 py-3.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-[#8a6a48] focus:ring-1 focus:ring-[#8a6a48]';

function Field({
                   label,
                   optional = false,
                   error,
                   children,
               }: {
    label: string;
    optional?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-stone-800">
                    {label}
                </label>

                {optional && (
                    <span className="text-xs text-stone-400">
                        Optional
                    </span>
                )}
            </div>

            {children}

            {error && (
                <p className="mt-2 text-xs text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}
