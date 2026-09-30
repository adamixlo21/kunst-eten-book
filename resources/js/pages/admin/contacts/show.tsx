import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    is_read: boolean;
    created_at: string;
}

interface Props {
    contact: Contact;
}

export default function ContactShow({ contact }: Props) {
    const deleteContact = () => {
        if (!confirm('Weet je zeker dat je dit bericht wilt verwijderen?')) {
            return;
        }

        router.delete(`/admin/contacts/${contact.id}`);
    };

    return (
        <>
            <Head title={contact.subject} />

            <div className="min-h-screen bg-[#f7f3ec] p-6 md:p-10">
                <div className="mx-auto max-w-4xl">

                    <Link
                        href="/admin/contacts"
                        className="mb-8 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6a48] transition hover:text-[#292722]"
                    >
                        ← Terug naar berichten
                    </Link>

                    <div className="border border-[#e5ddd2] bg-white">

                        {/* Header */}
                        <div className="border-b border-[#e5ddd2] bg-[#efe8dd] p-7 md:p-10">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Contactbericht
                            </p>

                            <h1 className="font-serif text-3xl text-[#292722] md:text-4xl">
                                {contact.subject}
                            </h1>

                            <p className="mt-3 text-sm text-[#77716a]">
                                Ontvangen op{' '}
                                {new Date(contact.created_at).toLocaleString(
                                    'nl-NL',
                                )}
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="border-b border-[#e5ddd2] p-7 md:p-10">
                            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                Contactgegevens
                            </p>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <p className="text-xs text-[#8a847c]">
                                        Naam
                                    </p>

                                    <p className="mt-1 font-medium text-[#292722]">
                                        {contact.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-[#8a847c]">
                                        E-mail
                                    </p>

                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="mt-1 block text-[#8a6a48] hover:underline"
                                    >
                                        {contact.email}
                                    </a>
                                </div>

                                {contact.phone && (
                                    <div>
                                        <p className="text-xs text-[#8a847c]">
                                            Telefoon
                                        </p>

                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="mt-1 block text-[#292722] hover:text-[#8a6a48]"
                                        >
                                            {contact.phone}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="p-7 md:p-10">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                Bericht
                            </p>

                            <div className="border-l-2 border-[#8a6a48] pl-6">
                                <p className="whitespace-pre-line text-[15px] leading-8 text-[#625e57]">
                                    {contact.message}
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 border-t border-[#e5ddd2] bg-[#faf8f4] p-7 sm:flex-row md:px-10">
                            <a
                                href={`mailto:${contact.email}?subject=${encodeURIComponent(
                                    `Re: ${contact.subject}`,
                                )}`}
                                className="bg-[#8a6a48] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#75583c]"
                            >
                                Beantwoorden
                            </a>

                            <button
                                type="button"
                                onClick={deleteContact}
                                className="border border-[#d9cec1] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#77695d] transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                            >
                                Bericht verwijderen
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
