import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';

type Status =
    | 'submitted'
    | 'awaiting_return'
    | 'return_received'
    | 'refund_pending'
    | 'closed';

type Withdrawal = {
    id: number;
    reference: string;
    order_id: number | null;
    order_number: string;
    name: string;
    email: string;
    quantity: number | null;
    reason: string | null;
    status: Status;
    submitted_at: string;
    verified_at: string | null;
    return_received_at: string | null;
    return_evidence_received_at: string | null;
    admin_notes: string | null;

    order: {
        id: number;
        name: string;
        email: string;
        total_price: string;
        status: string;
        fulfillment_status: string;
        shipped_at: string | null;
    } | null;

    refunds: {
        id: number;
        amount: string;
        status: string;
    }[];
};

const inputClass =
    'mt-2 min-h-12 w-full border border-[#70512f]/25 bg-white px-4 py-3 text-sm focus:outline-2 focus:outline-[#70512f]';

const buttonClass =
    'mt-5 min-h-12 w-full bg-[#25221f] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#70512f] disabled:opacity-40';

function formatStatus(status: string) {
    return status
        .replaceAll('_', ' ')
        .replace(/^./, (character) => character.toUpperCase());
}

function formatDate(value: string | null) {
    if (!value) return 'Not recorded';

    return new Date(value).toLocaleString('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });
}

function formatPrice(value: number | string) {
    return new Intl.NumberFormat('en-IE', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(value));
}

function Section({
                     title,
                     children,
                 }: {
    title: string;
    children: ReactNode;
}) {
    return (
        <section className="border border-[#70512f]/20 bg-white p-6">
            <h2 className="border-b border-[#70512f]/15 pb-5 font-serif text-2xl">
                {title}
            </h2>

            <div className="mt-6">
                {children}
            </div>
        </section>
    );
}

function Detail({
                    label,
                    value,
                }: {
    label: string;
    value: ReactNode;
}) {
    return (
        <div className="flex flex-wrap items-start justify-between gap-3 text-sm">
            <span className="text-[#746b61]">
                {label}
            </span>

            <span className="break-all font-medium">
                {value}
            </span>
        </div>
    );
}

function ErrorMessage({ message }: {
    message?: string;
}) {
    return message ? (
        <p role="alert" className="mt-2 text-sm text-red-700">
            {message}
        </p>
    ) : null;
}

export default function WithdrawalShow({
                                           withdrawal,
                                       }: {
    withdrawal: Withdrawal;
}) {
    const endpoint = `/admin/withdrawals/${withdrawal.id}`;

    const orderForm = useForm({
        order_id: withdrawal.order_id
            ? String(withdrawal.order_id)
            : '',
    });

    const verifyForm = useForm({
        confirmed: false,
    });

    const statusForm = useForm({
        status: withdrawal.status,
    });

    const notesForm = useForm({
        admin_notes: withdrawal.admin_notes ?? '',
    });

    const evidenceForm = useForm({
        evidence_notes: '',
    });
    useEffect(() => {
        notesForm.setData(
            'admin_notes',
            withdrawal.admin_notes ?? ''
        );
    }, [withdrawal.admin_notes]);

    const isVerified = Boolean(withdrawal.verified_at);

    const requiresReturn = Boolean(
        withdrawal.order?.shipped_at
        || ['shipped', 'completed'].includes(
            withdrawal.order?.fulfillment_status ?? '',
        ),
    );

    const canPrepareRefund =
        withdrawal.order?.status === 'paid'
        && (
            !requiresReturn
            || Boolean(withdrawal.return_received_at)
            || Boolean(withdrawal.return_evidence_received_at)
        );

    const transitions: Record<Status, Status[]> = {
        submitted: [
            'awaiting_return',
            'return_received',
            'refund_pending',
        ],
        awaiting_return: [
            'return_received',
            'refund_pending',
        ],
        return_received: ['refund_pending'],
        refund_pending: [],
        closed: [],
    };

    const availableStatuses = [
        withdrawal.status,
        ...transitions[withdrawal.status],
    ].filter((status) =>
        status !== 'refund_pending'
        || canPrepareRefund
        || withdrawal.status === 'refund_pending'
    );

    const refundedAmount = withdrawal.refunds
        .filter((refund) => refund.status === 'refunded')
        .reduce(
            (total, refund) => total + Number(refund.amount),
            0,
        );

    return (
        <>
            <Head title={`Withdrawal ${withdrawal.reference}`} />

            <main className="min-h-screen bg-[#f7f3ec] p-5 text-[#25221f] sm:p-8 lg:p-10">
                <div className="mx-auto max-w-6xl">

                    <Link
                        href="/admin/withdrawals"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-[#70512f]"
                    >
                        <ArrowLeft size={16} />
                        Back to Withdrawals
                    </Link>

                    <header className="mb-8 border-b border-[#70512f]/20 pb-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#70512f]">
                            Customer Care
                        </p>

                        <h1 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
                            Withdrawal.
                        </h1>

                        <p className="mt-3 text-sm text-[#746b61]">
                            {withdrawal.reference}
                        </p>
                    </header>

                    <div className="grid items-start gap-6 lg:grid-cols-2">

                        {/* Customer withdrawal */}
                        <Section title="Withdrawal Information">
                            <div className="space-y-5">
                                <Detail
                                    label="Customer"
                                    value={withdrawal.name}
                                />

                                <Detail
                                    label="Email"
                                    value={withdrawal.email}
                                />

                                <Detail
                                    label="Order reference"
                                    value={withdrawal.order_number}
                                />

                                <Detail
                                    label="Quantity"
                                    value={withdrawal.quantity ?? 'Unknown'}
                                />

                                <Detail
                                    label="Submitted"
                                    value={formatDate(withdrawal.submitted_at)}
                                />

                                <Detail
                                    label="Status"
                                    value={formatStatus(withdrawal.status)}
                                />

                                <div className="border-t border-[#70512f]/15 pt-5">
                                    <p className="text-xs text-[#746b61]">
                                        Customer's reason
                                    </p>

                                    <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7">
                                        {withdrawal.reason || 'No reason provided.'}
                                    </p>
                                </div>
                            </div>
                        </Section>

                        {/* Associated order */}
                        <Section title="Associated Order">
                            {withdrawal.order ? (
                                <div className="space-y-5">
                                    <Detail
                                        label="Order"
                                        value={
                                            <Link
                                                href={`/admin/orders/${withdrawal.order.id}`}
                                                className="text-[#70512f] underline"
                                            >
                                                #{withdrawal.order.id}
                                            </Link>
                                        }
                                    />

                                    <Detail
                                        label="Customer"
                                        value={withdrawal.order.name}
                                    />

                                    <Detail
                                        label="Order email"
                                        value={withdrawal.order.email}
                                    />

                                    <Detail
                                        label="Payment status"
                                        value={formatStatus(
                                            withdrawal.order.status
                                        )}
                                    />

                                    <Detail
                                        label="Fulfillment"
                                        value={formatStatus(
                                            withdrawal.order.fulfillment_status
                                        )}
                                    />

                                    <Detail
                                        label="Order total"
                                        value={formatPrice(
                                            withdrawal.order.total_price
                                        )}
                                    />
                                </div>
                            ) : (
                                <p className="text-sm text-amber-800">
                                    No order has been linked.
                                </p>
                            )}

                            {!isVerified && (
                                <form
                                    className="mt-6 border-t border-[#70512f]/15 pt-5"
                                    onSubmit={(event) => {
                                        event.preventDefault();

                                        orderForm.patch(`${endpoint}/order`, {
                                            preserveScroll: true,
                                        });
                                    }}
                                >
                                    <label
                                        htmlFor="order-id"
                                        className="text-sm font-medium"
                                    >
                                        Associate order ID
                                    </label>

                                    <input
                                        id="order-id"
                                        type="number"
                                        min="1"
                                        required
                                        value={orderForm.data.order_id}
                                        onChange={(event) =>
                                            orderForm.setData(
                                                'order_id',
                                                event.target.value
                                            )
                                        }
                                        className={inputClass}
                                    />

                                    <ErrorMessage
                                        message={orderForm.errors.order_id}
                                    />

                                    <button
                                        type="submit"
                                        disabled={orderForm.processing}
                                        className={buttonClass}
                                    >
                                        Link order
                                    </button>
                                </form>
                            )}
                        </Section>

                        {/* Verification */}
                        <Section title="Withdrawal Verification">
                            {isVerified ? (
                                <div>
                                    <div className="flex items-center gap-2 text-sm text-emerald-800">
                                        <ShieldCheck size={20} />
                                        Verified by administrator
                                    </div>

                                    <p className="mt-3 text-sm text-[#746b61]">
                                        {formatDate(withdrawal.verified_at)}
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();

                                        verifyForm.patch(`${endpoint}/verify`, {
                                            preserveScroll: true,
                                        });
                                    }}
                                >
                                    <p className="text-sm leading-7 text-[#746b61]">
                                        Review the notice and independently
                                        verify the customer and associated
                                        purchase before continuing.
                                    </p>

                                    <label className="mt-5 flex items-start gap-3 text-sm leading-6">
                                        <input
                                            type="checkbox"
                                            checked={verifyForm.data.confirmed}
                                            onChange={(event) =>
                                                verifyForm.setData(
                                                    'confirmed',
                                                    event.target.checked
                                                )
                                            }
                                            className="mt-1 accent-[#70512f]"
                                        />

                                        I have verified this withdrawal.
                                    </label>

                                    <ErrorMessage
                                        message={verifyForm.errors.confirmed}
                                    />

                                    <button
                                        type="submit"
                                        disabled={
                                            !withdrawal.order
                                            || !verifyForm.data.confirmed
                                            || verifyForm.processing
                                        }
                                        className={buttonClass}
                                    >
                                        Verify withdrawal
                                    </button>
                                </form>
                            )}
                        </Section>

                        {/* Return management */}
                        <Section title="Return Management">
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();

                                    statusForm.patch(`${endpoint}/status`, {
                                        preserveScroll: true,
                                    });
                                }}
                            >
                                <label
                                    htmlFor="withdrawal-status"
                                    className="text-sm font-medium"
                                >
                                    Withdrawal status
                                </label>

                                <select
                                    id="withdrawal-status"
                                    value={statusForm.data.status}
                                    disabled={!isVerified}
                                    onChange={(event) =>
                                        statusForm.setData(
                                            'status',
                                            event.target.value as Status
                                        )
                                    }
                                    className={inputClass}
                                >
                                    {availableStatuses.map((status) => (
                                        <option key={status} value={status}>
                                            {formatStatus(status)}
                                        </option>
                                    ))}
                                </select>

                                <ErrorMessage
                                    message={statusForm.errors.status}
                                />

                                <button
                                    type="submit"
                                    disabled={
                                        !isVerified
                                        || statusForm.processing
                                        || statusForm.data.status === withdrawal.status
                                    }
                                    className={buttonClass}
                                >
                                    Update status
                                </button>
                            </form>

                            <div className="mt-6 space-y-4 border-t border-[#70512f]/15 pt-5">
                                <Detail
                                    label="Return received"
                                    value={formatDate(
                                        withdrawal.return_received_at
                                    )}
                                />

                                <Detail
                                    label="Return evidence"
                                    value={formatDate(
                                        withdrawal.return_evidence_received_at
                                    )}
                                />
                            </div>

                            {isVerified && withdrawal.status !== 'closed' && (
                                <form
                                    className="mt-6 border-t border-[#70512f]/15 pt-5"
                                    onSubmit={(event) => {
                                        event.preventDefault();

                                        evidenceForm.patch(`${endpoint}/evidence`, {
                                            preserveScroll: true,
                                            onSuccess: () => evidenceForm.reset(),
                                        });
                                    }}
                                >
                                    <label
                                        htmlFor="return-evidence"
                                        className="text-sm font-medium"
                                    >
                                        Evidence of return
                                    </label>

                                    <textarea
                                        id="return-evidence"
                                        rows={3}
                                        required
                                        maxLength={2000}
                                        value={evidenceForm.data.evidence_notes}
                                        onChange={(event) =>
                                            evidenceForm.setData(
                                                'evidence_notes',
                                                event.target.value
                                            )
                                        }
                                        placeholder="Return tracking number or evidence..."
                                        className={inputClass}
                                    />

                                    <ErrorMessage
                                        message={evidenceForm.errors.evidence_notes}
                                    />

                                    <button
                                        type="submit"
                                        disabled={evidenceForm.processing}
                                        className={buttonClass}
                                    >
                                        Register return evidence
                                    </button>
                                </form>
                            )}
                        </Section>

                        {/* Refund information */}
                        <Section title="Refund Information">
                            <div className="space-y-5">
                                <Detail
                                    label="Original payment"
                                    value={
                                        withdrawal.order
                                            ? formatPrice(withdrawal.order.total_price)
                                            : 'Unknown'
                                    }
                                />

                                <Detail
                                    label="Refunded for this withdrawal"
                                    value={formatPrice(refundedAmount)}
                                />

                                {withdrawal.status === 'refund_pending' && (
                                    <div className="bg-[#eee7dc] p-4 text-sm leading-6 text-[#70512f]">
                                        This withdrawal is ready for refund review.
                                    </div>
                                )}

                                <p className="text-sm leading-7 text-[#746b61]">
                                    Refund processing through Mollie
                                    will be available in the next phase.
                                </p>
                            </div>
                        </Section>

                        {/* Admin notes */}
                        <Section title="Internal Notes">
                            <form
                                key={withdrawal.admin_notes ?? ''}
                                onSubmit={(event) => {
                                    event.preventDefault();

                                    notesForm.patch(`${endpoint}/notes`, {
                                        preserveScroll: true,
                                    });
                                }}
                            >
                                <p className="text-sm text-[#746b61]">
                                    Only visible to administrators.
                                </p>

                                <textarea
                                    aria-label="Internal notes"
                                    rows={6}
                                    maxLength={10000}
                                    value={notesForm.data.admin_notes}
                                    onChange={(event) =>
                                        notesForm.setData(
                                            'admin_notes',
                                            event.target.value
                                        )
                                    }
                                    className={inputClass}
                                />

                                <ErrorMessage
                                    message={notesForm.errors.admin_notes}
                                />

                                <button
                                    type="submit"
                                    disabled={notesForm.processing}
                                    className={buttonClass}
                                >
                                    Save notes
                                </button>
                            </form>
                        </Section>
                    </div>
                </div>
            </main>
        </>
    );
}
