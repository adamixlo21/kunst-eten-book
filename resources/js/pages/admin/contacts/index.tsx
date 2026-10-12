
import { useMemo, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import {
    ArrowUpRight,
    CheckCircle2,
    Clock3,
    Inbox,
    Mail,
    Search,
    Trash2,
    X,
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
    contacts: Contact[];
}

type Filter = 'all' | 'unread' | 'read';
type Sort = 'newest' | 'oldest';

function formatDate(date: string) {
    return new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(date));
}

export default function ContactIndex({ contacts }: Props) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Filter>('all');
    const [sort, setSort] = useState<Sort>('newest');
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const unreadCount = contacts.filter(
        (contact) => !contact.is_read,
    ).length;

    const readCount = contacts.length - unreadCount;

    const filteredContacts = useMemo(() => {
        const query = search.trim().toLowerCase();

        return contacts
            .filter((contact) => {
                const matchesSearch =
                    !query ||
                    [
                        contact.name,
                        contact.email,
                        contact.subject,
                        contact.message,
                        contact.phone ?? '',
                    ].some((value) =>
                        value.toLowerCase().includes(query),
                    );

                const matchesFilter =
                    filter === 'all' ||
                    (filter === 'unread' && !contact.is_read) ||
                    (filter === 'read' && contact.is_read);

                return matchesSearch && matchesFilter;
            })
            .sort((a, b) =>
                sort === 'newest'
                    ? new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                    : new Date(a.created_at).getTime() -
                    new Date(b.created_at).getTime(),
            );
    }, [contacts, search, filter, sort]);

    const deleteContact = (contact: Contact) => {
        const confirmed = window.confirm(
            `Are you sure you want to permanently delete the message from "${contact.name}"?\n\nThis action cannot be undone.`,
        );

        if (!confirmed || deletingId !== null) return;

        router.delete(`/admin/contacts/${contact.id}`, {
            preserveScroll: true,
            onStart: () => setDeletingId(contact.id),
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <>
            <Head title="Contact Messages | The Taste of Inspiration" />

            <main className="min-h-full bg-[#f7f3ec] px-5 py-8 text-[#25221f] sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">

                    {/* HEADER */}
                    <div className="mb-10 flex flex-col gap-5 border-b border-[#8a6a48]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </p>

                            <h1 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
                                Contact
                                <span className="italic text-[#8a6a48]">
                                    {' '}Messages.
                                </span>
                            </h1>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#746b61]">
                                Review inquiries from visitors and respond
                                to your customers.
                            </p>
                        </div>

                        <Link
                            href="/admin"
                            className="inline-flex items-center gap-2 self-start text-xs font-medium text-[#8a6a48] transition hover:text-[#25221f]"
                        >
                            Back to Dashboard
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    {/* STATISTICS */}
                    <div className="mb-8 grid gap-4 sm:grid-cols-3">
                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <Inbox size={20} className="text-[#8a6a48]" />
                            <p className="mt-5 text-xs text-[#746b61]">
                                Total Messages
                            </p>
                            <p className="mt-2 font-serif text-3xl">
                                {contacts.length}
                            </p>
                        </div>

                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <Clock3 size={20} className="text-[#8a6a48]" />
                            <p className="mt-5 text-xs text-[#746b61]">
                                Unread Messages
                            </p>
                            <p className="mt-2 font-serif text-3xl">
                                {unreadCount}
                            </p>
                        </div>

                        <div className="border border-[#8a6a48]/20 bg-white p-6">
                            <CheckCircle2 size={20} className="text-[#8a6a48]" />
                            <p className="mt-5 text-xs text-[#746b61]">
                                Read Messages
                            </p>
                            <p className="mt-2 font-serif text-3xl">
                                {readCount}
                            </p>
                        </div>
                    </div>

                    {/* INBOX */}
                    <div className="overflow-hidden border border-[#8a6a48]/20 bg-white">

                        {/* TOOLBAR */}
                        <div className="border-b border-[#8a6a48]/20 p-5 sm:p-7">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <h2 className="font-serif text-2xl font-light">
                                        Message Inbox
                                    </h2>
                                    <p className="mt-2 text-xs text-[#746b61]">
                                        {filteredContacts.length} of {contacts.length} messages
                                    </p>
                                </div>

                                <div className="relative w-full lg:max-w-sm">
                                    <Search
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6a48]"
                                    />

                                    <input
                                        type="search"
                                        value={search}
                                        onChange={(event) =>
                                            setSearch(event.target.value)
                                        }
                                        placeholder="Search messages..."
                                        aria-label="Search contact messages"
                                        className="w-full border border-[#8a6a48]/25 bg-[#f7f3ec] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-[#9b9186] focus:border-[#8a6a48]"
                                    />
                                </div>
                            </div>

                            {/* FILTERS */}
                            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {(
                                        [
                                            { key: 'all', label: 'All', count: contacts.length },
                                            { key: 'unread', label: 'Unread', count: unreadCount },
                                            { key: 'read', label: 'Read', count: readCount },
                                        ] as const
                                    ).map((item) => (
                                        <button
                                            key={item.key}
                                            type="button"
                                            onClick={() => setFilter(item.key)}
                                            aria-pressed={filter === item.key}
                                            className={`px-4 py-2.5 text-xs font-medium transition ${
                                                filter === item.key
                                                    ? 'bg-[#25221f] text-white'
                                                    : 'border border-[#8a6a48]/20 bg-[#f7f3ec] text-[#746b61] hover:border-[#8a6a48]'
                                            }`}
                                        >
                                            {item.label} ({item.count})
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3">
                                    <label
                                        htmlFor="contact-sort"
                                        className="text-xs text-[#746b61]"
                                    >
                                        Sort
                                    </label>

                                    <select
                                        id="contact-sort"
                                        value={sort}
                                        onChange={(event) =>
                                            setSort(event.target.value as Sort)
                                        }
                                        className="border border-[#8a6a48]/25 bg-white px-4 py-2.5 text-xs outline-none focus:border-[#8a6a48]"
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="oldest">Oldest First</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* MESSAGES */}
                        {filteredContacts.length === 0 ? (
                            <div className="px-6 py-20 text-center">
                                <Mail
                                    size={34}
                                    strokeWidth={1.2}
                                    className="mx-auto mb-5 text-[#8a6a48]"
                                />

                                <h3 className="font-serif text-2xl">
                                    {contacts.length === 0
                                        ? 'No messages yet.'
                                        : 'No matching messages.'}
                                </h3>

                                <p className="mt-3 text-sm text-[#746b61]">
                                    {contacts.length === 0
                                        ? 'New website inquiries will appear here automatically.'
                                        : 'Try a different search or filter.'}
                                </p>

                                {(search || filter !== 'all') && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearch('');
                                            setFilter('all');
                                        }}
                                        className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#8a6a48] hover:text-[#25221f]"
                                    >
                                        <X size={14} />
                                        Clear Filters
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="divide-y divide-[#8a6a48]/15">
                                {filteredContacts.map((contact) => (
                                    <div
                                        key={contact.id}
                                        className={`p-5 transition hover:bg-[#faf8f4] sm:p-7 ${
                                            !contact.is_read
                                                ? 'border-l-4 border-l-[#8a6a48]'
                                                : ''
                                        }`}
                                    >
                                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                                            <div className="min-w-0 flex-1">
                                                <div className="mb-3 flex flex-wrap items-center gap-3">
                                                    {!contact.is_read && (
                                                        <span className="bg-[#8a6a48] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                                                            New
                                                        </span>
                                                    )}

                                                    <span className="text-xs text-[#8a847c]">
                                                        {formatDate(contact.created_at)}
                                                    </span>
                                                </div>

                                                <h3 className="break-words font-serif text-xl sm:text-2xl">
                                                    {contact.subject}
                                                </h3>

                                                <p className="mt-2 break-words text-sm text-[#62584c]">
                                                    <span className="font-medium">
                                                        {contact.name}
                                                    </span>
                                                    <span className="mx-2 text-[#c8bfb4]">
                                                        •
                                                    </span>
                                                    {contact.email}
                                                </p>

                                                <p className="mt-3 line-clamp-2 max-w-3xl whitespace-pre-wrap break-words text-sm leading-6 text-[#746b61]">
                                                    {contact.message}
                                                </p>
                                            </div>

                                            <div className="flex shrink-0 flex-wrap gap-2">
                                                <Link
                                                    href={`/admin/contacts/${contact.id}`}
                                                    className="inline-flex items-center justify-center gap-2 bg-[#25221f] px-5 py-3 text-xs font-medium text-white transition hover:bg-[#8a6a48]"
                                                >
                                                    View Message
                                                    <ArrowUpRight size={15} />
                                                </Link>

                                                <button
                                                    type="button"
                                                    disabled={deletingId !== null}
                                                    onClick={() => deleteContact(contact)}
                                                    className="inline-flex items-center justify-center gap-2 border border-red-200 px-5 py-3 text-xs font-medium text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                                                >
                                                    <Trash2 size={15} />
                                                    {deletingId === contact.id
                                                        ? 'Deleting...'
                                                        : 'Delete'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <p className="mt-6 text-xs leading-6 text-[#746b61]">
                        Open a message to see its full details and reply to
                        the sender using your email application.
                    </p>
                </div>
            </main>
        </>
    );
}
