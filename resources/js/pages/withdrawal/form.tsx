import { Link } from '@inertiajs/react';
import { Printer } from 'lucide-react';

import OrderLayout from '@/components/OrderLayout';

export default function WithdrawalForm() {
    return (
        <OrderLayout
            title="Standard Withdrawal Form"
            heading="Withdrawal"
            accent="form."
            description="Complete and return this form if you wish to withdraw from your purchase."
        >
            <div className="border border-[#70512f]/20 bg-white p-6 sm:p-10">
                <h2 className="font-serif text-2xl">
                    Model withdrawal form
                </h2>

                <div className="mt-6 space-y-2 text-sm leading-7">
                    <p>To: [LEGAL BUSINESS NAME]</p>
                    <p>[BUSINESS POSTAL ADDRESS]</p>
                    <p>thetasteofinspiration@gmail.com</p>
                </div>

                <p className="mt-8 text-sm leading-7">
                    I/We hereby give notice that I/we withdraw
                    from my/our contract of sale of the
                    following goods:
                </p>

                {[
                    'Product(s)',
                    'Ordered on / received on',
                    'Name of consumer(s)',
                    'Address of consumer(s)',
                    'Signature (only if submitted on paper)',
                    'Date',
                ].map((label) => (
                    <div key={label} className="mt-8">
                        <p className="text-sm font-medium">
                            {label}
                        </p>

                        <div className="mt-6 border-b border-[#70512f]/30" />
                    </div>
                ))}

                <p className="mt-8 text-xs text-[#564b40]">
                    Delete as appropriate.
                </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 print:hidden">
                <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex min-h-12 items-center gap-2 bg-[#70512f] px-6 text-sm font-semibold text-white"
                >
                    <Printer size={17} aria-hidden="true" />
                    Print or save as PDF
                </button>

                <Link
                    href="/withdrawal"
                    className="inline-flex min-h-12 items-center px-3 text-sm font-semibold text-[#70512f] underline underline-offset-4"
                >
                    Withdraw online instead
                </Link>
            </div>
        </OrderLayout>
    );
}
