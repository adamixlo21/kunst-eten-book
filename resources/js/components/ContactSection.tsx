import { useForm } from '@inertiajs/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
export default function ContactSection() {
    const { data, setData, post, processing, errors, reset} =
        useForm({
            name: '',
            email: '',
            phone: '',
            subject: 'Vraag over het boek',
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

    const [messageSent, setMessageSent] = useState(false);

    return (
        <section
            id="contact"
            className="bg-[#f7f3ec] px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                    {/* Contact information */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Contact
                        </p>

                        <h2 className="mt-5 max-w-md font-serif text-4xl font-normal leading-tight text-stone-900 sm:text-5xl">
                            Een vraag over Kunst Eten?
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-8 text-stone-600">
                            Heb je een vraag over het boek, je bestelling of wil
                            je contact opnemen voor een samenwerking? We horen
                            graag van je.
                        </p>

                        <div className="mt-10 space-y-6 border-t border-stone-300 pt-8">
                            <div className="flex items-start gap-4">
                                <Mail
                                    size={19}
                                    className="mt-1 text-[#8a6a48]"
                                />

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                                        E-mail
                                    </p>

                                    <a
                                        href="mailto:info@jouwdomein.nl"
                                        className="mt-1 block text-sm text-stone-800 transition hover:text-[#8a6a48]"
                                    >
                                        info@jouwdomein.nl
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone
                                    size={19}
                                    className="mt-1 text-[#8a6a48]"
                                />

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                                        Telefoon
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
                    </div>

                    {/* Form */}
                    <div className="border border-stone-300 bg-white p-7 sm:p-10">
                        {messageSent && (
                            <div className="mb-8 border border-[#8a6a48]/30 bg-[#f7f3ec] p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8a6a48] text-white">
                                        ✓
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                            Bericht verzonden
                                        </p>

                                        <h3 className="mt-2 font-serif text-xl text-stone-900">
                                            Bedankt voor je bericht.
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-stone-600">
                                            We hebben je bericht goed ontvangen en nemen zo snel
                                            mogelijk contact met je op.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <Field
                                    label="Naam"
                                    error={errors.name}
                                >
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        className={inputClass}
                                        placeholder="Je naam"
                                    />
                                </Field>

                                <Field
                                    label="E-mailadres"
                                    error={errors.email}
                                >
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className={inputClass}
                                        placeholder="naam@email.nl"
                                    />
                                </Field>
                            </div>

                            <Field
                                label="Telefoonnummer"
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
                                    placeholder="+31 612345678"
                                />
                            </Field>

                            <Field
                                label="Onderwerp"
                                error={errors.subject}
                            >
                                <select
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData('subject', e.target.value)
                                    }
                                    className={inputClass}
                                >
                                    <option>Vraag over het boek</option>
                                    <option>Vraag over mijn bestelling</option>
                                    <option>Samenwerking</option>
                                    <option>Pers & media</option>
                                    <option>Anders</option>
                                </select>
                            </Field>

                            <Field
                                label="Bericht"
                                error={errors.message}
                            >
                                <textarea
                                    rows={6}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className={`${inputClass} resize-none`}
                                    placeholder="Waar kunnen we je mee helpen?"
                                />
                            </Field>

                            <button
                                type="submit"
                                disabled={processing}
                                className="group flex w-full items-center justify-center gap-3 bg-stone-900 px-7 py-4 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                            >
                                {processing
                                    ? 'Versturen...'
                                    : 'Bericht versturen'}

                                {!processing && (
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
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
                        Optioneel
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
