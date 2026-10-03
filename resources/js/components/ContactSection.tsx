import { useForm } from '@inertiajs/react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { FormEvent, ReactNode, useState } from 'react';

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
                        Questions about the book, the artwork or a collaboration?
                        Send us a message.
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

                            <div className="flex items-center gap-3">
                                <Mail
                                    size={17}
                                    strokeWidth={1.4}
                                    className="text-[#8a6a48]"
                                />

                                <a
                                    href="mailto:info@jouwdomein.nl"
                                    className="text-sm hover:text-[#8a6a48]"
                                >
                                    info@jouwdomein.nl
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone
                                    size={17}
                                    strokeWidth={1.4}
                                    className="text-[#8a6a48]"
                                />

                                <a
                                    href="tel:+31600000000"
                                    className="text-sm hover:text-[#8a6a48]"
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

                        {messageSent && (
                            <div className="mb-7 border-l-2 border-[#66765d] bg-[#66765d]/5 p-4">
                                <p className="font-serif text-lg">
                                    Thank you for getting in touch.
                                </p>

                                <p className="mt-1 text-sm text-stone-500">
                                    We&apos;ll get back to you as soon as possible.
                                </p>
                            </div>
                        )}

                        <form
                            onSubmit={submit}
                            className="space-y-6"
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <Field
                                    label="Name"
                                    error={errors.name}
                                >
                                    <input
                                        type="text"
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
                                    error={errors.email}
                                >
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className={inputClass}
                                        placeholder="name@email.com"
                                    />
                                </Field>
                            </div>

                            <Field
                                label="Phone"
                                optional
                                error={errors.phone}
                            >
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData('phone', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="+31 6 12345678"
                                />
                            </Field>

                            <Field
                                label="Subject"
                                error={errors.subject}
                            >
                                <select
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData('subject', e.target.value)
                                    }
                                    className={inputClass}
                                >
                                    <option>Question about the book</option>
                                    <option>Question about my order</option>
                                    <option>Question about an artwork</option>
                                    <option>Collaboration</option>
                                    <option>Press & Media</option>
                                    <option>Other</option>
                                </select>
                            </Field>

                            <Field
                                label="Message"
                                error={errors.message}
                            >
                                <textarea
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className={`${inputClass} resize-none`}
                                    placeholder="Your message..."
                                />
                            </Field>

                            <button
                                type="submit"
                                disabled={processing}
                                className="group inline-flex w-full items-center justify-center gap-3 bg-[#25221f] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#8a6a48] disabled:opacity-50 sm:w-auto"
                            >
                                {processing ? 'Sending...' : 'Send Message'}

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
    );
}

const inputClass =
    'w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-base text-[#25221f] outline-none placeholder:text-stone-400 focus:border-[#8a6a48] focus:ring-0 sm:text-sm';

function Field({
                   label,
                   optional = false,
                   error,
                   children,
               }: {
    label: string;
    optional?: boolean;
    error?: string;
    children: ReactNode;
}) {
    return (
        <div>
            <div className="mb-1 flex justify-between">
                <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-500">
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
                <p className="mt-2 text-xs text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}
