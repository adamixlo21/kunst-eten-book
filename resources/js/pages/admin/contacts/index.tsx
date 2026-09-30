import { Head, Link, router } from '@inertiajs/react';


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
    contacts: Contact[];
}

export default function ContactIndex({ contacts }: Props) {
    const deleteContact = (id: number) => {
        if (!confirm('Weet je zeker dat je dit bericht wilt verwijderen?')) {
            return;
        }

        router.delete(`/admin/contacts/${id}`, {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Contactberichten" />

            <div className="min-h-screen bg-[#f7f3ec] p-6 md:p-10">
                <div className="mx-auto max-w-6xl">

                    {/* Header */}
                    <div className="mb-10">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="font-serif text-4xl text-[#292722]">
                            Contactberichten
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#625e57]">
                            Bekijk de berichten die via het contactformulier
                            op de website zijn verstuurd.
                        </p>
                    </div>

                    {contacts.length === 0 ? (
                        <div className="border border-[#e5ddd2] bg-white p-10 text-center">
                            <div className="font-serif text-2xl text-[#292722]">
                                Nog geen berichten
                            </div>

                            <p className="mt-2 text-sm text-[#77716a]">
                                Nieuwe contactberichten verschijnen hier automatisch.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-hidden border border-[#e5ddd2] bg-white">

                            {contacts.map((contact, index) => (
                                <div
                                    key={contact.id}
                                    className={`p-6 transition hover:bg-[#faf8f4] ${
                                        index !== contacts.length - 1
                                            ? 'border-b border-[#e5ddd2]'
                                            : ''
                                    }`}
                                >
                                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                                        <div className="min-w-0 flex-1">
                                            <div className="mb-2 flex flex-wrap items-center gap-3">

                                                {!contact.is_read && (
                                                    <span className="bg-[#8a6a48] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                                                        Nieuw
                                                    </span>
                                                )}

                                                <span className="text-xs text-[#8a847c]">
                                                    {new Date(
                                                        contact.created_at,
                                                    ).toLocaleString('nl-NL')}
                                                </span>
                                            </div>

                                            <h2 className="font-serif text-xl text-[#292722]">
                                                {contact.subject}
                                            </h2>

                                            <div className="mt-1 text-sm text-[#625e57]">
                                                {contact.name}
                                                <span className="mx-2 text-[#c8bfb4]">
                                                    •
                                                </span>
                                                {contact.email}
                                            </div>

                                            <p className="mt-3 line-clamp-2 max-w-3xl text-sm leading-6 text-[#77716a]">
                                                {contact.message}
                                            </p>
                                        </div>

                                        <div className="flex shrink-0 items-center gap-3">
                                            <Link
                                                href={`/admin/contacts/${contact.id}`}
                                                className="bg-[#292722] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#8a6a48]"
                                            >
                                                Bekijken
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    deleteContact(contact.id)
                                                }
                                                className="border border-[#d9cec1] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#77695d] transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                                            >
                                                Verwijderen
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
