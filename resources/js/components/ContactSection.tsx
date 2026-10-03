import { useForm } from '@inertiajs/react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FormEvent, ReactNode, useState } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactSection() {
    const [messageSent, setMessageSent] = useState(false);
    const reduceMotion = useReducedMotion();

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
            className="relative overflow-hidden bg-[#f7f3ec] text-[#25221f]"
        >
            {/* =====================================================
                BACKGROUND DETAIL
            ===================================================== */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-32 h-[380px] w-[380px] rounded-full border border-[#8a6a48]/10" />

                <div className="absolute -left-20 top-52 h-[200px] w-[200px] rounded-full border border-[#8a6a48]/10" />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
                {/* =====================================================
                    SECTION HEADER
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 20,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 0.9,
                        ease,
                    }}
                    className="flex items-center justify-between border-b border-[#8a6a48]/25 pb-4"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            Contact
                        </span>

                        <span className="hidden h-px w-10 bg-[#8a6a48]/40 sm:block" />

                        <span className="hidden text-[9px] uppercase tracking-[0.28em] text-stone-400 sm:block">
                            Enquiries & Collaborations
                        </span>
                    </div>

                    <span className="text-[8px] uppercase tracking-[0.28em] text-stone-400">
                        Get in touch
                    </span>
                </motion.div>

                {/* =====================================================
                    TITLE
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 30,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 1,
                        ease,
                    }}
                    className="py-12 lg:py-16"
                >
                    <p className="mb-5 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                        Start a conversation
                    </p>

                    <h2 className="max-w-5xl font-serif text-[12vw] font-light leading-[0.9] tracking-[-0.045em] sm:text-[9vw] lg:text-[6.5rem] xl:text-[7.5rem]">
                        Let&apos;s talk.
                    </h2>
                </motion.div>

                {/* =====================================================
                    CONTENT
                ===================================================== */}
                <div className="grid border-t border-[#8a6a48]/25 lg:grid-cols-[0.72fr_1.28fr]">
                    {/* =================================================
                        LEFT
                    ================================================= */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 25,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.9,
                            ease,
                        }}
                        className="py-10 lg:pr-16 lg:py-14"
                    >
                        <p className="max-w-sm font-serif text-2xl font-light leading-[1.2] tracking-[-0.025em] sm:text-3xl">
                            Questions about the book,
                            <span className="block italic text-[#8a6a48]">
                                the art or a collaboration?
                            </span>
                        </p>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-stone-500">
                            Send us a message and we&apos;ll get back to you as
                            soon as possible.
                        </p>

                        {/* CONTACT DETAILS */}
                        <div className="mt-10 space-y-7 border-t border-[#8a6a48]/20 pt-8">
                            <div className="group flex items-start gap-4">
                                <Mail
                                    size={17}
                                    strokeWidth={1.4}
                                    className="mt-0.5 text-[#8a6a48]"
                                />

                                <div>
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:info@jouwdomein.nl"
                                        className="mt-2 inline-block text-sm text-[#25221f] transition-colors duration-300 hover:text-[#8a6a48]"
                                    >
                                        info@jouwdomein.nl
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-start gap-4">
                                <Phone
                                    size={17}
                                    strokeWidth={1.4}
                                    className="mt-0.5 text-[#8a6a48]"
                                />

                                <div>
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+31600000000"
                                        className="mt-2 inline-block text-sm text-[#25221f] transition-colors duration-300 hover:text-[#8a6a48]"
                                    >
                                        +31 6 00 00 00 00
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* QUOTE */}
                        <div className="mt-12">
                            <span className="block h-px w-10 bg-[#8a6a48]" />

                            <p className="mt-5 max-w-xs font-serif text-lg italic leading-7 text-stone-500">
                                “Where flavour becomes colour,
                                <span className="block">
                                    and food becomes art.”
                                </span>
                            </p>
                        </div>
                    </motion.div>

                    {/* =================================================
                        FORM
                    ================================================= */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 30,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                            ease,
                        }}
                        className="border-t border-[#8a6a48]/25 py-10 lg:border-l lg:border-t-0 lg:py-14 lg:pl-16"
                    >
                        {/* FORM HEADER */}
                        <div className="mb-9 flex items-end justify-between border-b border-[#8a6a48]/20 pb-5">
                            <div>
                                <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#8a6a48]">
                                    Send a message
                                </p>

                                <h3 className="mt-3 font-serif text-3xl font-light tracking-[-0.025em] sm:text-4xl">
                                    How can we help?
                                </h3>
                            </div>

                            <ArrowUpRight
                                size={20}
                                strokeWidth={1.2}
                                className="hidden text-[#8a6a48] sm:block"
                            />
                        </div>

                        {/* SUCCESS MESSAGE */}
                        {messageSent && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="mb-8 border-l-2 border-[#66765d] bg-[#66765d]/5 px-5 py-4"
                            >
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#66765d]">
                                    Message sent
                                </p>

                                <p className="mt-2 font-serif text-xl text-[#25221f]">
                                    Thank you for getting in touch.
                                </p>

                                <p className="mt-2 text-sm leading-6 text-stone-500">
                                    We have received your message and will get
                                    back to you as soon as possible.
                                </p>
                            </motion.div>
                        )}

                        <form onSubmit={submit} className="space-y-7">
                            {/* NAME + EMAIL */}
                            <div className="grid gap-7 sm:grid-cols-2">
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
                                    label="Email Address"
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
                                        setData('phone', e.target.value)
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

                            {/* MESSAGE */}
                            <Field
                                label="Message"
                                error={errors.message}
                            >
                                <textarea
                                    rows={5}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className={`${inputClass} resize-none`}
                                    placeholder="How can we help you?"
                                />
                            </Field>

                            {/* SUBMIT */}
                            <div className="flex flex-col gap-5 border-t border-[#8a6a48]/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
                                <p className="max-w-xs text-[11px] leading-5 text-stone-400">
                                    We&apos;ll only use your information to
                                    respond to your message.
                                </p>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group inline-flex items-center justify-center gap-4 border-b border-[#25221f] pb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#25221f] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    {processing
                                        ? 'Sending...'
                                        : 'Send Message'}

                                    {!processing && (
                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.5}
                                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const inputClass =
    'w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-sm text-[#25221f] outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-[#8a6a48] focus:ring-0';

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
            <div className="mb-1 flex items-center justify-between">
                <label className="text-[9px] font-semibold uppercase tracking-[0.22em] text-stone-500">
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
