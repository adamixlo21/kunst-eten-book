import { Head, useForm } from '@inertiajs/react';

interface CheckoutProps {
    quantity: number;
}

export default function Checkout({ quantity }: CheckoutProps) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        postal_code: '',
        city: '',
        quantity: quantity,
    });

    const price = 39.95;
    const total = price * data.quantity;

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/orders');
    };

    return (
        <>
            <Head title="Checkout" />

            <main className="min-h-screen bg-[#f7f3ec] px-6 py-16 text-stone-900">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#8a6a48]">
                            Bestellen
                        </p>

                        <h1 className="mt-4 text-4xl font-light sm:text-5xl">
                            Rond je bestelling af.
                        </h1>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                        <form
                            onSubmit={submit}
                            className="rounded-[2rem] bg-white p-8 shadow-sm"
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label className="mb-2 block text-sm">
                                        Naam
                                    </label>

                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                                    />

                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm">
                                        E-mail
                                    </label>

                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                                    />

                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm">
                                        Telefoon
                                    </label>

                                    <input
                                        type="text"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="mb-2 block text-sm">
                                        Adres
                                    </label>

                                    <input
                                        type="text"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData('address', e.target.value)
                                        }
                                        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                                    />

                                    {errors.address && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.address}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm">
                                        Postcode
                                    </label>

                                    <input
                                        type="text"
                                        value={data.postal_code}
                                        onChange={(e) =>
                                            setData('postal_code', e.target.value)
                                        }
                                        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm">
                                        Plaats
                                    </label>

                                    <input
                                        type="text"
                                        value={data.city}
                                        onChange={(e) =>
                                            setData('city', e.target.value)
                                        }
                                        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm">
                                        Aantal
                                    </label>

                                    <input
                                        type="number"
                                        min="1"
                                        value={data.quantity}
                                        onChange={(e) =>
                                            setData(
                                                'quantity',
                                                Number(e.target.value),
                                            )
                                        }
                                        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="mt-8 w-full rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:opacity-50"
                            >
                                {processing
                                    ? 'Bestelling verwerken...'
                                    : 'Bestelling plaatsen'}
                            </button>
                        </form>

                        <div className="h-fit rounded-[2rem] bg-stone-900 p-8 text-white">
                            <p className="text-sm text-stone-400">
                                Besteloverzicht
                            </p>

                            <div className="mt-6 flex justify-between">
                                <span>Kunst Eten</span>
                                <span>€ {price.toFixed(2).replace('.', ',')}</span>
                            </div>

                            <div className="mt-4 flex justify-between text-stone-300">
                                <span>Aantal</span>
                                <span>{data.quantity}</span>
                            </div>

                            <div className="mt-8 border-t border-stone-700 pt-6">
                                <div className="flex justify-between text-xl">
                                    <span>Totaal</span>
                                    <span>
                                        € {total.toFixed(2).replace('.', ',')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
