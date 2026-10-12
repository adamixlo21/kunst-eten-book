
import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import {
    ArrowLeft,
    CalendarDays,
    Mail,
    Phone,
    UserRound,
    MessageSquare,
    Reply,
    Trash2,
    CheckCircle2,
} from 'lucide-react';

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

function formatDate(value: string) {
    return new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'long',
        timeStyle: 'short',
    }).format(new Date(value));
}

export default function ContactShow({ contact }: Props) {
    const [deleting, setDeleting] = useState(false);

    const deleteContact = () => {
        const confirmed = window.confirm(
            `Are you sure you want to delete this message from ${contact.name}?\n\nThis action cannot be undone.`,
        );

        if (!confirmed || deleting) return;

        router.delete(`/admin/contacts/${contact.id}`, {
            preserveScroll: true,
            onStart: () => setDeleting(true),
            onFinish: () => setDeleting(false),
        });
    };

    const replySubject = contact.subject
        .toLowerCase()
        .startsWith('re:')
        ? contact.subject
        : `Re: ${contact.subject}`;

    const replyUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        replySubject,
    )}`;

    return (
        <>
            <Head
                title={`${contact.subject} | The Taste of Inspiration`}
            />

            <main className="min-h-full bg-[#f7f3ec] px-5 py-8 text-[#25221f] sm:px-8 lg:px-12 lg:py-12">
                <div className="mx-auto max-w-5xl">

                    {/* BACK LINK */}
                    <Link
                        href="/admin/contacts"
                        className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-[#8a6a48] transition hover:text-[#25221f]"
                    >
                        <ArrowLeft size={16} />
                        Back to Messages
                    </Link>

                    {/* PAGE HEADER */}
                    <div className="mb-9 flex flex-col gap-5 border-b border-[#8a6a48]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </p>

                            <h1 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
                                Contact
                                <span className="italic text-[#8a6a48]">
                                    {' '}Message.
                                </span>
                            </h1>

                            <p className="mt-4 text-sm leading-7 text-[#746b61]">
                                Review customer inquiries and respond directly.
                            </p>
                        </div>

                        <span
                            className={`inline-flex items-center gap-2 self-start px-4 py-2 text-xs font-medium ${
                                contact.is_read
                                    ? 'bg-emerald-50 text-emerald-800'
                                    : 'bg-amber-50 text-amber-800'
                            }`}
                        >
                            <CheckCircle2 size={15} />
                            {contact.is_read ? 'Read' : 'Unread'}
                        </span>
                    </div>

                    {/* MESSAGE CARD */}
                    <div className="overflow-hidden border border-[#8a6a48]/20 bg-white">

                        {/* MESSAGE HEADING */}
                        <div className="border-b border-[#8a6a48]/20 bg-[#eee7dc] p-6 sm:p-9">
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                Customer Inquiry
                            </p>

                            <h2 className="break-words font-serif text-2xl font-light leading-tight sm:text-4xl">
                                {contact.subject}
                            </h2>

                            <div className="mt-5 flex items-center gap-2 text-xs text-[#746b61]">
                                <CalendarDays
                                    size={15}
                                    className="text-[#8a6a48]"
                                />
                                Received on {formatDate(contact.created_at)}
                            </div>
                        </div>

                        {/* CUSTOMER DETAILS */}
                        <div className="border-b border-[#8a6a48]/20 p-6 sm:p-9">
                            <div className="mb-7 flex items-center gap-2">
                                <UserRound
                                    size={18}
                                    className="text-[#8a6a48]"
                                />

                                <h3 className="font-serif text-2xl font-light">
                                    Customer Information
                                </h3>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#746b61]">
                                        Full Name
                                    </p>

                                    <p className="mt-2 text-sm font-medium">
                                        {contact.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#746b61]">
                                        Email Address
                                    </p>

                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="mt-2 block break-all text-sm text-[#8a6a48] hover:underline"
                                    >
                                        {contact.email}
                                    </a>
                                </div>

                                {contact.phone && (
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#746b61]">
                                            Phone Number
                                        </p>

                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="mt-2 block text-sm hover:text-[#8a6a48]"
                                        >
                                            {contact.phone}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* MESSAGE CONTENT */}
                        <div className="p-6 sm:p-9">
                            <div className="mb-7 flex items-center gap-2">
                                <MessageSquare
                                    size={18}
                                    className="text-[#8a6a48]"
                                />

                                <h3 className="font-serif text-2xl font-light">
                                    Message
                                </h3>
                            </div>

                            <div className="border-l-2 border-[#8a6a48] bg-[#faf8f4] px-5 py-6 sm:px-7">
                                <p className="whitespace-pre-wrap break-words text-sm leading-8 text-[#62584c] sm:text-[15px]">
                                    {contact.message}
                                </p>
                            </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex flex-col gap-3 border-t border-[#8a6a48]/20 bg-[#faf8f4] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
                            <a
                                href={replyUrl}
                                className="inline-flex items-center justify-center gap-2 bg-[#25221f] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#8a6a48]"
                            >
                                <Reply size={17} />
                                Reply by Email
                            </a>

                            <button
                                type="button"
                                onClick={deleteContact}
                                disabled={deleting}
                                className="inline-flex items-center justify-center gap-2 border border-red-200 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <Trash2 size={16} />
                                {deleting ? 'Deleting...' : 'Delete Message'}
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-xs leading-6 text-[#746b61]">
                        Reply by Email opens your default email application.
                        Deleting this message permanently removes it from
                        the contact inbox.
                    </p>
                </div>
            </main>
        </>
    );
}
