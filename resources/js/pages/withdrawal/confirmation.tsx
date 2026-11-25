import { Link } from '@inertiajs/react';
import { CheckCircle2 } from 'lucide-react';

import OrderLayout from '@/components/OrderLayout';

export default function WithdrawalConfirmation({
                                                   reference,
                                               }: {
    reference: string;
}) {
    return (
        <OrderLayout
            title="Withdrawal received"
            heading="Withdrawal"
            accent="received."
            description="Your withdrawal notice has been recorded."
        >
            <div className="max-w-xl bg-[#eee7dc] p-6 sm:p-8">
                <CheckCircle2
                    size={36}
                    className="text-[#70512f]"
                    aria-hidden="true"
                />

                <h2 className="mt-5 font-serif text-2xl">
                    Thank you.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#564b40]">
                    We have received your withdrawal notice.
                    Please keep the reference below for
                    your records.
                </p>

                <p className="mt-5 text-xs uppercase tracking-wider text-[#70512f]">
                    Withdrawal reference
                </p>

                <p className="mt-2 break-all font-medium">
                    {reference}
                </p>

                <p className="mt-5 text-sm leading-7 text-[#564b40]">
                    We will provide information about the
                    return and refund process where applicable.
                </p>

                <Link
                    href="/orders"
                    className="mt-6 inline-flex min-h-11 items-center bg-[#70512f] px-6 text-sm font-semibold text-white"
                >
                    My Orders
                </Link>
            </div>
        </OrderLayout>
    );
}
