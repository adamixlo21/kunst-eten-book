import { useForm, usePage } from '@inertiajs/react';
import { Mail } from 'lucide-react';

import OrderLayout from '@/components/OrderLayout';

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
};

export default function OrderAccess() {
    const { flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        post('/orders/access', {
            preserveScroll: true,
        });
    }

    return (
        <OrderLayout
            title="My Orders"
            heading="My"
            accent="orders."
            description="Enter your email address to securely view your orders."
        >
            <div className="max-w-xl">

                {flash?.success && (
                    <div
                        role="status"
                        className="mb-6 bg-[#eee7dc] p-5 text-sm leading-7 text-[#564b40]"
                    >
                        {flash.success}
                    </div>
                )}

                {flash?.error && (
                    <p role="alert" className="mb-6 text-sm text-red-700">
                        {flash.error}
                    </p>
                )}

                <form onSubmit={submit} className="space-y-5">
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
                            name="email"
                            autoComplete="email"
                            required
                            value={data.email}
                            onChange={(event) =>
                                setData('email', event.target.value)
                            }
                            placeholder="Your email address"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={
                                errors.email ? 'email-error' : undefined
                            }
                            className="mt-2 min-h-12 w-full border border-[#70512f]/30 bg-white px-4 text-base focus:border-[#70512f] focus:outline-2 focus:outline-[#70512f]"
                        />

                        {errors.email && (
                            <p id="email-error" className="mt-2 text-sm text-red-700">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="flex min-h-12 w-full items-center justify-center gap-3 bg-[#70512f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#56402a] focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-60"
                    >
                        <Mail size={18} aria-hidden="true" />

                        {processing
                            ? 'Sending...'
                            : 'Send access link'}
                    </button>

                    <p className="text-sm leading-7 text-[#564b40]">
                        No account or password required. We will send
                        a secure access link to the email address
                        used during checkout.
                    </p>
                </form>
            </div>
        </OrderLayout>
    );
}
