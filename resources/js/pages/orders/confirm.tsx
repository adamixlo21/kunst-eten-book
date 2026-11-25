import { useForm } from '@inertiajs/react';

import OrderLayout from '@/components/OrderLayout';

export default function ConfirmOrderAccess() {
    const { post, processing } = useForm({});

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        post('/orders/access/verify');
    }

    return (
        <OrderLayout
            title="Access My Orders"
            heading="Your"
            accent="orders."
            description="Confirm below to securely access your purchases."
            backHref="/orders"
            backLabel="Back to My Orders"
        >
            <form onSubmit={submit} className="max-w-xl">
                <button
                    type="submit"
                    disabled={processing}
                    className="min-h-12 w-full bg-[#70512f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#56402a] focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-60"
                >
                    {processing ? 'Verifying...' : 'View my orders'}
                </button>

                <p className="mt-5 text-sm leading-7 text-[#564b40]">
                    This secure access link can only be used once.
                </p>
            </form>
        </OrderLayout>
    );
}
