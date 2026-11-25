import { Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';

import OrderLayout from '@/components/OrderLayout';

type Props = {
    order: {
        id: number;
        name: string;
        email: string;
    } | null;
};

export default function WithdrawalIndex({ order }: Props) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        order_number: order ? String(order.id) : '',
        name: order?.name ?? '',
        email: order?.email ?? '',
        reason: '',
        confirmed: false,
    });

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        post('/withdrawal', {
            preserveScroll: true,
        });
    }

    const inputClass =
        'mt-2 min-h-12 w-full border border-[#70512f]/30 bg-white px-4 py-3 text-base focus:outline-2 focus:outline-[#70512f]';

    return (
        <OrderLayout
            title="Withdraw from your order"
            heading="Withdraw from"
            accent="your order."
            description="Complete the form below to exercise your right of withdrawal."
        >
            <form
                onSubmit={submit}
                className="max-w-xl space-y-6"
            >
                <div>
                    <label
                        htmlFor="order_number"
                        className="text-sm font-medium"
                    >
                        Order number or reference
                    </label>

                    <input
                        id="order_number"
                        value={data.order_number}
                        onChange={(event) =>
                            setData('order_number', event.target.value)
                        }
                        required
                        maxLength={100}
                        className={inputClass}
                    />

                    {errors.order_number && (
                        <p className="mt-2 text-sm text-red-700">
                            {errors.order_number}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="name"
                        className="text-sm font-medium"
                    >
                        Full name
                    </label>

                    <input
                        id="name"
                        autoComplete="name"
                        value={data.name}
                        onChange={(event) =>
                            setData('name', event.target.value)
                        }
                        required
                        maxLength={255}
                        className={inputClass}
                    />

                    {errors.name && (
                        <p className="mt-2 text-sm text-red-700">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="text-sm font-medium"
                    >
                        Email address
                    </label>

                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={data.email}
                        onChange={(event) =>
                            setData('email', event.target.value)
                        }
                        required
                        className={inputClass}
                    />

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-700">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="reason"
                        className="text-sm font-medium"
                    >
                        Reason (optional)
                    </label>

                    <textarea
                        id="reason"
                        rows={4}
                        maxLength={2000}
                        value={data.reason}
                        onChange={(event) =>
                            setData('reason', event.target.value)
                        }
                        className={inputClass}
                    />

                    <p className="mt-2 text-sm text-[#564b40]">
                        You do not need to provide a reason
                        for withdrawing from your purchase.
                    </p>

                    {errors.reason && (
                        <p className="mt-2 text-sm text-red-700">
                            {errors.reason}
                        </p>
                    )}
                </div>

                <label className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        checked={data.confirmed}
                        onChange={(event) =>
                            setData('confirmed', event.target.checked)
                        }
                        required
                        className="mt-1 h-4 w-4 accent-[#70512f]"
                    />

                    <span className="text-sm leading-6">
                        I confirm that I wish to withdraw
                        from this purchase.
                    </span>
                </label>

                {errors.confirmed && (
                    <p className="text-sm text-red-700">
                        {errors.confirmed}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={processing || !data.confirmed}
                    className="min-h-12 w-full bg-[#70512f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#56402a] disabled:opacity-50"
                >
                    {processing
                        ? 'Submitting...'
                        : 'Confirm withdrawal'}
                </button>

                <p className="text-sm leading-7 text-[#564b40]">
                    For information about returns and refunds,
                    please read our{' '}
                    <Link
                        href="/shipping-and-returns"
                        className="font-medium underline underline-offset-4"
                    >
                        Shipping &amp; Returns policy
                    </Link>
                    .
                </p>
            </form>
        </OrderLayout>
    );
}
