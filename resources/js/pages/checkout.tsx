import { Head, Link, useForm } from '@inertiajs/react';
import {
    ArrowLeft,
    LockKeyhole,
    Minus,
    Plus,
    ShoppingBag,
    Truck,
} from 'lucide-react';

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

    const price = 249.99;
    const total = price * data.quantity;

    const decreaseQuantity = () => {
        setData('quantity', Math.max(1, data.quantity - 1));
    };

    const increaseQuantity = () => {
        setData('quantity', data.quantity + 1);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/orders');
    };

    const inputClass =
        'w-full border border-stone-300 bg-[#fdfcf9] px-4 py-3.5 text-sm text-stone-900 outline-none transition duration-200 placeholder:text-stone-400 focus:border-[#8a6a48] focus:bg-white';

    return (
        <>
            <Head title="Checkout" />

            <main className="min-h-screen bg-[#f7f3ec] text-stone-900">
                {/* Top bar */}
                <div className="border-b border-stone-300 bg-[#f7f3ec]/95">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm text-stone-600 transition hover:text-stone-950"
                        >
                            <ArrowLeft size={16} />
                            Terug naar de website
                        </Link>

                        <p className="text-sm font-semibold tracking-[0.22em] uppercase">
                            Kunst Eten
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
                    {/* Heading */}
                    <div className="mb-12 max-w-2xl">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="h-px w-8 bg-[#8a6a48]" />

                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Checkout
                            </p>
                        </div>

                        <h1 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Rond je bestelling
                            <br />
                            <span className="text-stone-500">
                                rustig af.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-7 text-stone-500">
                            Vul hieronder je gegevens in. Controleer daarna je
                            bestelling voordat je deze plaatst.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        {/* Checkout form */}
                        <form
                            id="checkout-form"
                            onSubmit={submit}
                        >
                            <div className="border border-stone-300 bg-white">
                                {/* Section header */}
                                <div className="border-b border-stone-200 px-6 py-5 sm:px-8">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                                        01 — Contactgegevens
                                    </p>
                                </div>

                                <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-sm font-medium">
                                            Volledige naam
                                        </label>

                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            placeholder="Voor- en achternaam"
                                            className={inputClass}
                                        />

                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium">
                                            E-mailadres
                                        </label>

                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            placeholder="naam@email.nl"
                                            className={inputClass}
                                        />

                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium">
                                            Telefoon
                                        </label>

                                        <input
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData('phone', e.target.value)
                                            }
                                            placeholder="06 12345678"
                                            className={inputClass}
                                        />

                                        {errors.phone && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="border-t border-stone-200">
                                    <div className="border-b border-stone-200 px-6 py-5 sm:px-8">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                                            02 — Bezorgadres
                                        </p>
                                    </div>

                                    <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
                                        <div className="sm:col-span-2">
                                            <label className="mb-2 block text-sm font-medium">
                                                Adres
                                            </label>

                                            <input
                                                type="text"
                                                value={data.address}
                                                onChange={(e) =>
                                                    setData(
                                                        'address',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Straatnaam en huisnummer"
                                                className={inputClass}
                                            />

                                            {errors.address && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.address}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Postcode
                                            </label>

                                            <input
                                                type="text"
                                                value={data.postal_code}
                                                onChange={(e) =>
                                                    setData(
                                                        'postal_code',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="1234 AB"
                                                className={inputClass}
                                            />

                                            {errors.postal_code && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.postal_code}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Plaats
                                            </label>

                                            <input
                                                type="text"
                                                value={data.city}
                                                onChange={(e) =>
                                                    setData(
                                                        'city',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Plaats"
                                                className={inputClass}
                                            />

                                            {errors.city && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.city}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile submit */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="mt-6 flex w-full items-center justify-center gap-3 bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50 lg:hidden"
                            >
                                <ShoppingBag size={17} />

                                {processing
                                    ? 'Bestelling verwerken...'
                                    : 'Bestelling plaatsen'}
                            </button>
                        </form>

                        {/* Order summary */}
                        <aside className="lg:sticky lg:top-8">
                            <div className="border border-stone-300 bg-[#efe8dd]">
                                <div className="border-b border-stone-300 px-6 py-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6a48]">
                                        Besteloverzicht
                                    </p>
                                </div>

                                {/* Product */}
                                <div className="flex gap-5 border-b border-stone-300 p-6">
                                    <div className="flex h-36 w-28 shrink-0 items-center justify-center bg-white">
                                        <img
                                            src="/images/book cover.png"
                                            alt="Kunst Eten boek"
                                            className="max-h-[125px] max-w-[90px] object-contain drop-shadow-lg"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between py-1">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48]">
                                                Hardcover
                                            </p>

                                            <h2 className="mt-2 text-lg font-medium">
                                                Kunst Eten
                                            </h2>

                                            <p className="mt-1 text-sm text-stone-500">
                                                Vijf schilderijen.
                                                <br />
                                                Vijf gerechten.
                                                <br />
                                                Eén verhaal.
                                            </p>
                                        </div>

                                        <p className="mt-4 font-medium">
                                            €{' '}
                                            {price
                                                .toFixed(2)
                                                .replace('.', ',')}
                                        </p>
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div className="border-b border-stone-300 p-6">
                                    <div className="mb-3 flex items-center justify-between">
                                        <p className="text-sm font-medium">
                                            Aantal
                                        </p>

                                        <p className="text-xs text-stone-500">
                                            {data.quantity}{' '}
                                            {data.quantity === 1
                                                ? 'boek'
                                                : 'boeken'}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border border-stone-300 bg-white">
                                        <button
                                            type="button"
                                            onClick={decreaseQuantity}
                                            disabled={data.quantity <= 1}
                                            className="flex h-12 w-12 items-center justify-center transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            <Minus size={16} />
                                        </button>

                                        <span className="font-medium">
                                            {data.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={increaseQuantity}
                                            className="flex h-12 w-12 items-center justify-center bg-stone-900 text-white transition hover:bg-[#8a6a48]"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-stone-500">
                                        <span>Boek(en)</span>

                                        <span>
                                            €{' '}
                                            {total
                                                .toFixed(2)
                                                .replace('.', ',')}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between text-sm text-stone-500">
                                        <span>Verzending</span>

                                        <span>Nader te bepalen</span>
                                    </div>

                                    <div className="mt-6 border-t border-stone-300 pt-6">
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <p className="text-sm text-stone-500">
                                                    Totaal
                                                </p>

                                                <p className="mt-1 text-xs text-stone-400">
                                                    Inclusief btw
                                                </p>
                                            </div>

                                            <p className="text-3xl font-light tracking-tight">
                                                €{' '}
                                                {total
                                                    .toFixed(2)
                                                    .replace('.', ',')}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        form="checkout-form"
                                        disabled={processing}
                                        className="mt-7 hidden w-full items-center justify-center gap-3 bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50 lg:flex"
                                    >
                                        <LockKeyhole size={16} />

                                        {processing
                                            ? 'Bestelling verwerken...'
                                            : 'Bestelling plaatsen'}
                                    </button>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="mt-5 grid grid-cols-2 gap-3">
                                <div className="border border-stone-300 bg-white/60 p-4">
                                    <Truck
                                        size={17}
                                        className="text-[#8a6a48]"
                                    />

                                    <p className="mt-3 text-xs font-medium">
                                        Zorgvuldig verzonden
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-stone-500">
                                        Veilig verpakt voor verzending.
                                    </p>
                                </div>

                                <div className="border border-stone-300 bg-white/60 p-4">
                                    <LockKeyhole
                                        size={17}
                                        className="text-[#8a6a48]"
                                    />

                                    <p className="mt-3 text-xs font-medium">
                                        Veilig bestellen
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-stone-500">
                                        Je gegevens worden veilig verwerkt.
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}
