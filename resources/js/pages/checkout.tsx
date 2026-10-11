
import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    LockKeyhole,
    Minus,
    Plus,
    ShieldCheck,
} from 'lucide-react';

interface CheckoutProps {
    quantity: number;
}

interface CheckoutFieldProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'email' | 'tel';
    placeholder?: string;
    autoComplete?: string;
    error?: string;
    required?: boolean;
}

const BOOK_PRICE = 249.99;

const formatPrice = (amount: number) =>
    new Intl.NumberFormat('en-IE', {
        style: 'currency',
        currency: 'EUR',
    }).format(amount);

function CheckoutField({
                           id,
                           label,
                           value,
                           onChange,
                           type = 'text',
                           placeholder,
                           autoComplete,
                           error,
                           required = false,
                       }: CheckoutFieldProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-2.5 block text-xs font-medium tracking-[0.08em] text-[#49443e]"
            >
                {label}
                {required && (
                    <span className="ml-1 text-[#8a6a48]">*</span>
                )}
            </label>

            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                autoComplete={autoComplete}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
                className={`w-full rounded-none border bg-transparent px-4 py-3.5 text-sm text-[#25221f] outline-none transition-colors placeholder:text-stone-400 focus:bg-white focus:ring-1 focus:ring-[#8a6a48]/10 ${
                    error
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#cfc6b9] focus:border-[#8a6a48]'
                }`}
            />

            {error && (
                <p
                    id={`${id}-error`}
                    className="mt-2 text-xs text-red-600"
                >
                    {error}
                </p>
            )}
        </div>
    );
}

export default function Checkout({ quantity }: CheckoutProps) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        postal_code: '',
        city: '',
        quantity: quantity,
    });

    const total = BOOK_PRICE * data.quantity;

    const decreaseQuantity = () => {
        setData('quantity', Math.max(1, data.quantity - 1));
    };

    const increaseQuantity = () => {
        setData('quantity', data.quantity + 1);
    };

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Keep the existing Laravel / Mollie order flow.
        post('/orders');
    };

    return (
        <>
            <Head title="Checkout | The Taste of Inspiration" />

            <main className="min-h-screen bg-[#f7f3ec] text-[#25221f]">
                {/* Top navigation */}
                <header className="border-b border-[#d8cfc3]">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-xs text-stone-600 transition-colors hover:text-[#8a6a48]"
                        >
                            <ArrowLeft
                                size={16}
                                className="transition-transform group-hover:-translate-x-1"
                            />
                            <span>Back to website</span>
                        </Link>

                        <div className="flex items-center gap-2 text-stone-500">
                            <LockKeyhole size={14} />
                            <span className="text-[10px] font-medium tracking-[0.15em] uppercase">
                                Secure Checkout
                            </span>
                        </div>
                    </div>
                </header>

                <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
                    {/* Page introduction */}
                    <div className="mb-12 border-b border-[#d8cfc3] pb-10 lg:mb-16 lg:pb-12">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#8a6a48]" />

                            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#8a6a48] uppercase">
                                The Taste of Inspiration
                            </p>
                        </div>

                        <h1 className="max-w-3xl font-serif text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.045em]">
                            A story worth
                            <br />
                            <span className="italic text-[#8a6a48]">
                                keeping.
                            </span>
                        </h1>

                        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <p className="max-w-md text-sm leading-7 text-stone-600 sm:text-base">
                                You're one step away from bringing
                                The Taste of Inspiration into your home.
                            </p>

                            <p className="text-[10px] tracking-[0.16em] text-stone-500 uppercase">
                                Your Details — Payment
                            </p>
                        </div>
                    </div>

                    {/* Main checkout layout */}
                    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-start lg:gap-16">
                        {/* Customer form */}
                        <form
                            id="checkout-form"
                            onSubmit={submit}
                            className="min-w-0"
                        >
                            {/* Contact details */}
                            <section>
                                <div className="mb-8 flex items-start gap-5 border-b border-[#d8cfc3] pb-6">
                                    <span className="font-serif text-3xl text-[#8a6a48]">
                                        01
                                    </span>

                                    <div>
                                        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                                            Your details
                                        </h2>

                                        <p className="mt-2 text-sm text-stone-500">
                                            How can we reach you about your order?
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <CheckoutField
                                            id="name"
                                            label="Full name"
                                            value={data.name}
                                            onChange={(value) =>
                                                setData('name', value)
                                            }
                                            placeholder="Your full name"
                                            autoComplete="name"
                                            error={errors.name}
                                            required
                                        />
                                    </div>

                                    <CheckoutField
                                        id="email"
                                        label="Email address"
                                        type="email"
                                        value={data.email}
                                        onChange={(value) =>
                                            setData('email', value)
                                        }
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        error={errors.email}
                                        required
                                    />

                                    <CheckoutField
                                        id="phone"
                                        label="Phone number"
                                        type="tel"
                                        value={data.phone}
                                        onChange={(value) =>
                                            setData('phone', value)
                                        }
                                        placeholder="+31 6 12345678"
                                        autoComplete="tel"
                                        error={errors.phone}
                                    />
                                </div>
                            </section>

                            {/* Shipping address */}
                            <section className="mt-14">
                                <div className="mb-8 flex items-start gap-5 border-b border-[#d8cfc3] pb-6">
                                    <span className="font-serif text-3xl text-[#8a6a48]">
                                        02
                                    </span>

                                    <div>
                                        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                                            Delivery address
                                        </h2>

                                        <p className="mt-2 text-sm text-stone-500">
                                            Where should we send your book?
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <CheckoutField
                                            id="address"
                                            label="Street and house number"
                                            value={data.address}
                                            onChange={(value) =>
                                                setData('address', value)
                                            }
                                            placeholder="Street name and house number"
                                            autoComplete="street-address"
                                            error={errors.address}
                                            required
                                        />
                                    </div>

                                    <CheckoutField
                                        id="postal_code"
                                        label="Postal code"
                                        value={data.postal_code}
                                        onChange={(value) =>
                                            setData('postal_code', value)
                                        }
                                        placeholder="1234 AB"
                                        autoComplete="postal-code"
                                        error={errors.postal_code}
                                        required
                                    />

                                    <CheckoutField
                                        id="city"
                                        label="City"
                                        value={data.city}
                                        onChange={(value) =>
                                            setData('city', value)
                                        }
                                        placeholder="Your city"
                                        autoComplete="address-level2"
                                        error={errors.city}
                                        required
                                    />
                                </div>
                            </section>

                            {/* Payment explanation */}
                            <section className="mt-14 border-t border-[#d8cfc3] pt-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#cfc6b9]">
                                        <LockKeyhole
                                            size={18}
                                            className="text-[#8a6a48]"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-xl">
                                            Secure payment
                                        </h3>

                                        <p className="mt-2 max-w-md text-sm leading-6 text-stone-500">
                                            After submitting your details,
                                            you'll continue to Mollie to
                                            complete your payment securely.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </form>

                        {/* Order summary */}
                        <aside className="min-w-0 lg:sticky lg:top-8">
                            <div className="border border-[#d6cbbd] bg-[#eee7dc]">
                                <div className="flex items-center justify-between border-b border-[#d6cbbd] px-6 py-5 sm:px-8">
                                    <h2 className="font-serif text-2xl">
                                        Your order
                                    </h2>

                                    <span className="text-[10px] tracking-[0.18em] text-[#8a6a48] uppercase">
                                        01 Item
                                    </span>
                                </div>

                                {/* Book presentation */}
                                <div className="border-b border-[#d6cbbd] p-6 sm:p-8">
                                    <div className="flex flex-col gap-6 sm:flex-row lg:flex-col xl:flex-row">
                                        <div className="flex aspect-[4/5] w-full max-w-[180px] shrink-0 items-center justify-center bg-[#e5dbce] p-4">
                                            <img
                                                src="/images/book cover.png"
                                                alt="The Taste of Inspiration book cover"
                                                className="h-full w-full object-contain drop-shadow-xl"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col justify-center">
                                            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8a6a48] uppercase">
                                                Art Book
                                            </p>

                                            <h3 className="mt-3 font-serif text-2xl leading-tight tracking-tight">
                                                The Taste of Inspiration
                                            </h3>

                                            <p className="mt-3 max-w-xs text-sm leading-6 text-stone-600">
                                                Where flavour becomes colour,
                                                and food becomes art.
                                            </p>

                                            <p className="mt-5 text-sm font-semibold">
                                                {formatPrice(BOOK_PRICE)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div className="border-b border-[#d6cbbd] px-6 py-6 sm:px-8">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-medium">
                                                Quantity
                                            </p>

                                            <p className="mt-1 text-xs text-stone-500">
                                                Number of copies
                                            </p>
                                        </div>

                                        <div className="flex items-center border border-[#c6b9a8] bg-[#f7f3ec]">
                                            <button
                                                type="button"
                                                onClick={decreaseQuantity}
                                                disabled={data.quantity <= 1}
                                                aria-label="Decrease quantity"
                                                className="flex h-11 w-11 items-center justify-center transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                                            >
                                                <Minus size={15} />
                                            </button>

                                            <span className="min-w-10 text-center text-sm font-medium tabular-nums">
                                                {data.quantity}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={increaseQuantity}
                                                aria-label="Increase quantity"
                                                className="flex h-11 w-11 items-center justify-center transition hover:bg-white"
                                            >
                                                <Plus size={15} />
                                            </button>
                                        </div>
                                    </div>

                                    {errors.quantity && (
                                        <p className="mt-3 text-xs text-red-600">
                                            {errors.quantity}
                                        </p>
                                    )}
                                </div>

                                {/* Totals */}
                                <div className="px-6 py-7 sm:px-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-between gap-4 text-sm">
                                            <span className="text-stone-600">
                                                Book subtotal
                                            </span>

                                            <span className="font-medium tabular-nums">
                                                {formatPrice(total)}
                                            </span>
                                        </div>

                                        <div className="flex justify-between gap-4 text-sm">
                                            <span className="text-stone-600">
                                                Shipping
                                            </span>

                                            <span className="text-right text-stone-500">
                                                To be confirmed
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-7 flex items-end justify-between gap-4 border-t border-[#c6b9a8] pt-6">
                                        <div>
                                            <p className="text-sm font-medium">
                                                Book total
                                            </p>

                                            <p className="mt-1 text-xs text-stone-500">
                                                Excluding any shipping charge
                                            </p>
                                        </div>

                                        <p className="font-serif text-3xl tracking-tight tabular-nums sm:text-4xl">
                                            {formatPrice(total)}
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        form="checkout-form"
                                        disabled={processing}
                                        className="group mt-8 flex w-full items-center justify-center gap-3 bg-[#25221f] px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-[#8a6a48] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing ? (
                                            'Processing your order...'
                                        ) : (
                                            <>
                                                Continue to payment
                                                <ArrowRight
                                                    size={17}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </>
                                        )}
                                    </button>

                                    <div className="mt-5 flex items-center justify-center gap-2 text-stone-500">
                                        <ShieldCheck size={15} />

                                        <p className="text-xs">
                                            Secure payment via Mollie
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 border-l-2 border-[#8a6a48] pl-5">
                                <p className="font-serif text-lg italic text-[#8a6a48]">
                                    A meeting of food and art.
                                </p>

                                <p className="mt-2 text-xs leading-6 text-stone-500">
                                    Thank you for becoming part of this story.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>

                {/* Minimal footer */}
                <footer className="border-t border-[#d8cfc3] px-5 py-7 sm:px-8 lg:px-12">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
                        <span>The Taste of Inspiration</span>

                        <span>
                            Where flavour becomes colour, and food becomes art.
                        </span>
                    </div>
                </footer>
            </main>
        </>
    );
}
