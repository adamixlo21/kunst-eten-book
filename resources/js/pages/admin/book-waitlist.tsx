
import { Head, Link, router } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import {
    ArrowLeft,
    Mail,
    Send,
    Users,
    UserRound,
    Search,
} from 'lucide-react';

type Subscriber = {
    id: number;
    email: string;
    created_at: string;
    notified_at: string | null;
    unsubscribed_at: string | null;
    notification_queued_at: string | null;
};

type PageLink = {
    url: string | null;
    label: string;
    active: boolean;
};

type Props = {
    subscribers: {
        data: Subscriber[];
        total: number;
        links: PageLink[];
    };
    stats: {
        total: number;
        active: number;
        notified: number;
        unsubscribed: number;
    };
    filters: {
        search?: string;
    };
};

const inputClass =
    'w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6a48] focus:ring-2 focus:ring-[#8a6a48]/15';

export default function BookWaitlistAdmin({
                                              subscribers,
                                              stats,
                                              filters,
                                          }: Props) {
    const [search, setSearch] = useState(filters.search ?? '');
    const [subject, setSubject] = useState(
        'The Taste of Inspiration — The Book Is Here!',
    );
    const [message, setMessage] = useState(
        "The wait is over!\n\nWe're delighted to announce that The Taste of Inspiration is now available.\n\nDiscover five paintings, five culinary creations, and one extraordinary story.",
    );
    const [processing, setProcessing] = useState(false);
    const [feedback, setFeedback] = useState('');

    function searchSubscribers(event: FormEvent) {
        event.preventDefault();

        router.get(
            '/admin/book-waitlist',
            { search },
            { preserveState: true },
        );
    }

    function send(
        action: 'test' | 'one' | 'all',
        subscriber?: Subscriber,
    ) {
        if (!subject.trim() || !message.trim()) {
            setFeedback('Please enter a subject and message.');
            return;
        }

        if (action === 'all') {
            const confirmed = window.confirm(
                `Send this announcement to all ${stats.active} active waitlist subscribers who have not already been notified?\n\nThis action will queue real emails.`,
            );

            if (!confirmed) return;
        }

        if (action === 'one' && subscriber) {
            const confirmed = window.confirm(
                `Send the announcement to ${subscriber.email}?`,
            );

            if (!confirmed) return;
        }

        const url =
            action === 'test'
                ? '/admin/book-waitlist/send-test'
                : action === 'all'
                    ? '/admin/book-waitlist/send-all'
                    : `/admin/book-waitlist/${subscriber?.id}/send`;

        setFeedback('');

        router.post(
            url,
            { subject, message },
            {
                preserveScroll: true,
                onStart: () => setProcessing(true),
                onFinish: () => setProcessing(false),
                onSuccess: () => {
                    setFeedback(
                        action === 'test'
                            ? 'Test email submitted.'
                            : 'Email notification queued.',
                    );
                },
                onError: (errors) => {
                    setFeedback(
                        Object.values(errors).join(' ') ||
                        'Something went wrong.',
                    );
                },
            },
        );
    }

    const statCards = [
        { title: 'Total Signups', value: stats.total, icon: Users },
        { title: 'Active Subscribers', value: stats.active, icon: UserRound },
        { title: 'Launch Emails Sent', value: stats.notified, icon: Send },
        { title: 'Unsubscribed', value: stats.unsubscribed, icon: Mail },
    ];

    return (
        <>
            <Head title="Book Waitlist | Admin" />

            <main className="min-h-screen bg-[#f7f3ec] px-5 py-10 text-[#25221f] sm:px-8">
                <div className="mx-auto max-w-6xl">
                    <Link
                        href="/admin"
                        className="inline-flex items-center gap-2 text-sm text-[#8a6a48] hover:underline"
                    >
                        <ArrowLeft size={16} />
                        Back to Dashboard
                    </Link>

                    <header className="mt-9">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            The Taste of Inspiration
                        </p>
                        <h1 className="mt-3 font-serif text-4xl font-light sm:text-5xl">
                            Book Waitlist
                        </h1>
                        <p className="mt-3 text-sm leading-7 text-stone-500">
                            Manage subscribers and book launch announcements.
                        </p>
                    </header>

                    {/* Statistics */}
                    <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {statCards.map((stat) => (
                            <div
                                key={stat.title}
                                className="rounded-xl border border-stone-200 bg-white p-5 sm:p-6"
                            >
                                <stat.icon
                                    size={19}
                                    strokeWidth={1.5}
                                    className="text-[#8a6a48]"
                                />
                                <p className="mt-4 font-serif text-3xl sm:text-4xl">
                                    {stat.value}
                                </p>
                                <p className="mt-2 text-xs text-stone-500">
                                    {stat.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Email composer */}
                    <section className="mt-9 rounded-xl border border-stone-200 bg-white p-5 sm:p-8">
                        <div className="flex items-start gap-3">
                            <div className="rounded-lg bg-[#f3eee6] p-3">
                                <Mail
                                    size={21}
                                    className="text-[#8a6a48]"
                                />
                            </div>
                            <div>
                                <h2 className="font-serif text-2xl">
                                    Email Announcement
                                </h2>
                                <p className="mt-1 text-sm text-stone-500">
                                    Write your book launch message and choose
                                    who should receive it.
                                </p>
                            </div>
                        </div>

                        <div className="mt-7 space-y-5">
                            <div>
                                <label
                                    htmlFor="email-subject"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Subject
                                </label>
                                <input
                                    id="email-subject"
                                    className={inputClass}
                                    value={subject}
                                    onChange={(e) =>
                                        setSubject(e.target.value)
                                    }
                                    maxLength={200}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email-message"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="email-message"
                                    className={`${inputClass} min-h-52 resize-y leading-7`}
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                    maxLength={5000}
                                />
                            </div>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3 border-t border-stone-100 pt-6">
                            <button
                                type="button"
                                disabled={processing}
                                onClick={() => send('test')}
                                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium transition hover:bg-stone-50 disabled:opacity-50"
                            >
                                <Mail size={16} />
                                Send Test
                            </button>

                            <button
                                type="button"
                                disabled={
                                    processing ||
                                    stats.active === 0 ||
                                    stats.notified >= stats.total
                                }
                                onClick={() => send('all')}
                                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#25221f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:opacity-50"
                            >
                                <Send size={16} />
                                Send to All Eligible
                            </button>
                        </div>

                        {feedback && (
                            <p
                                role="status"
                                className="mt-5 text-sm text-[#746b61]"
                            >
                                {feedback}
                            </p>
                        )}

                        <p className="mt-4 text-xs leading-6 text-stone-500">
                            Test emails go to your logged-in admin email.
                            Sending to all excludes unsubscribed subscribers
                            and those already notified.
                        </p>
                    </section>

                    {/* Subscriber list */}
                    <section className="mt-9 overflow-hidden rounded-xl border border-stone-200 bg-white">
                        <div className="flex flex-col justify-between gap-5 border-b border-stone-200 p-5 sm:flex-row sm:items-center sm:p-6">
                            <div>
                                <h2 className="font-serif text-2xl">
                                    Subscribers
                                </h2>
                                <p className="mt-1 text-xs text-stone-500">
                                    {subscribers.total} results
                                </p>
                            </div>

                            <form
                                onSubmit={searchSubscribers}
                                className="flex gap-2"
                            >
                                <input
                                    type="search"
                                    value={search}
                                    placeholder="Search email..."
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    className="min-w-0 rounded-lg border border-stone-200 px-3 py-2 text-sm outline-none focus:border-[#8a6a48]"
                                />
                                <button
                                    type="submit"
                                    aria-label="Search subscribers"
                                    className="rounded-lg bg-[#25221f] px-4 text-white"
                                >
                                    <Search size={17} />
                                </button>
                            </form>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[720px] text-left text-sm">
                                <thead className="bg-[#f3eee6] text-stone-600">
                                <tr>
                                    <th className="px-6 py-4 font-medium">
                                        Subscriber
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Joined
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Status
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Launch Email
                                    </th>
                                    <th className="px-6 py-4 text-right font-medium">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {subscribers.data.map((subscriber) => {
                                    const inactive =
                                        !!subscriber.unsubscribed_at;
                                    const sent = !!subscriber.notified_at;
                                    const queued =
                                        !!subscriber.notification_queued_at;

                                    return (
                                        <tr
                                            key={subscriber.id}
                                            className="border-t border-stone-100"
                                        >
                                            <td className="px-6 py-4 font-medium">
                                                {subscriber.email}
                                            </td>
                                            <td className="px-6 py-4 text-stone-500">
                                                {new Date(
                                                    subscriber.created_at,
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                    <span
                                                        className={
                                                            inactive
                                                                ? 'text-stone-400'
                                                                : 'text-emerald-700'
                                                        }
                                                    >
                                                        {inactive
                                                            ? 'Unsubscribed'
                                                            : 'Active'}
                                                    </span>
                                            </td>
                                            <td className="px-6 py-4 text-stone-600">
                                                {sent
                                                    ? 'Sent'
                                                    : queued
                                                        ? 'Queued'
                                                        : 'Not sent'}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    type="button"
                                                    disabled={
                                                        processing ||
                                                        inactive ||
                                                        sent ||
                                                        queued
                                                    }
                                                    onClick={() =>
                                                        send(
                                                            'one',
                                                            subscriber,
                                                        )
                                                    }
                                                    className="rounded-lg border border-[#8a6a48]/30 px-4 py-2 text-xs font-medium text-[#8a6a48] transition hover:bg-[#f3eee6] disabled:cursor-not-allowed disabled:opacity-40"
                                                >
                                                    Send Email
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>

                            {subscribers.data.length === 0 && (
                                <p className="p-10 text-center text-sm text-stone-500">
                                    No subscribers found.
                                </p>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2 border-t border-stone-100 p-5">
                            {subscribers.links.map((link, i) => {
                                const label = link.label
                                    .replace(/&laquo;/g, '«')
                                    .replace(/&raquo;/g, '»')
                                    .replace(/&hellip;/g, '…')
                                    .replace(/<[^>]*>/g, '');

                                return link.url ? (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        preserveScroll
                                        className={`rounded-lg border px-3 py-2 text-xs ${
                                            link.active
                                                ? 'bg-[#25221f] text-white'
                                                : 'bg-white text-stone-600 hover:bg-stone-50'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                ) : (
                                    <span
                                        key={i}
                                        className="rounded-lg border px-3 py-2 text-xs text-stone-300"
                                    >
                                        {label}
                                    </span>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
