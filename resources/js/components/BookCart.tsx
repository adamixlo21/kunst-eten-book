
import { Link } from '@inertiajs/react';
import {
    Minus,
    Plus,
    ShoppingBag,
    X,
} from 'lucide-react';

import { useBookCart } from '@/components/BookCartContext';

export default function BookCart() {
    const {
        quantity,
        cartOpen,
        increaseQuantity,
        decreaseQuantity,
        closeCart,
    } = useBookCart();

    // const price = 249.99;
    const price = 0;

    const total = price * quantity;

    return (
        <>
            {/* Overlay */}
            <div
                onClick={closeCart}
                className={`fixed inset-0 z-[80] bg-black/35 backdrop-blur-[3px] transition-opacity duration-300 ${
                    cartOpen
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
            />

            {/* Shopping cart drawer */}
            <aside
                role="dialog"
                aria-modal={cartOpen}
                aria-label="Shopping cart"
                aria-hidden={!cartOpen}
                className={`fixed right-0 top-0 z-[90] flex h-full w-full max-w-[440px] flex-col border-l border-stone-200/80 bg-[#f7f3ec] shadow-[-20px_0_60px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out ${
                    cartOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-stone-200/80 px-6 py-6 sm:px-7">
                    <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white shadow-sm">
                            <ShoppingBag size={18} />
                        </div>

                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Your Cart
                            </p>

                            <h2 className="mt-1 text-xl font-medium text-stone-900">
                                Your Order
                            </h2>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={closeCart}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white/70 text-stone-700 transition duration-300 hover:rotate-90 hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                        aria-label="Close shopping cart"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-7">
                    {/* Product card */}
                    <div className="rounded-[1.75rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
                        <div className="flex gap-5">
                            <div className="h-40 w-28 shrink-0 overflow-hidden rounded-[1.25rem] bg-stone-100 shadow-sm">
                                <img
                                    src="/images/book cover.png"
                                    alt="The Taste of Inspiration book cover"
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8a6a48]">
                                        Hardcover
                                    </p>

                                    <h3 className="mt-2 text-xl font-medium text-stone-900">
                                        The Taste of Inspiration
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-stone-500">
                                        Five paintings.
                                        <br />
                                        Five dishes.
                                        <br />
                                        One story.
                                    </p>
                                </div>

                                <p className="mt-4 text-lg font-medium text-stone-900">
                                    € {price.toFixed(2).replace('.', ',')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="mt-9">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-sm font-medium text-stone-800">
                                Number of Books
                            </p>

                            <p className="text-xs text-stone-400">
                                Choose your quantity
                            </p>
                        </div>

                        <div className="flex items-center justify-between rounded-[1.25rem] border border-stone-200 bg-white p-2 shadow-sm">
                            <button
                                type="button"
                                onClick={decreaseQuantity}
                                disabled={quantity === 1}
                                aria-label="Decrease quantity"
                                className="flex h-11 w-11 items-center justify-center rounded-xl text-stone-700 transition hover:bg-[#f1ece4] disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <Minus size={17} />
                            </button>

                            <div className="text-center">
                                <p className="text-xl font-medium text-stone-900">
                                    {quantity}
                                </p>

                                <p className="text-[10px] uppercase tracking-wider text-stone-400">
                                    {quantity === 1 ? 'book' : 'books'}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={increaseQuantity}
                                aria-label="Increase quantity"
                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 text-white transition hover:bg-[#8a6a48]"
                            >
                                <Plus size={17} />
                            </button>
                        </div>
                    </div>

                    {/* Product information */}
                    <div className="mt-8 rounded-[1.25rem] bg-[#eee7dc] p-5">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8a6a48]">
                            Art × Gastronomy
                        </p>

                        <p className="mt-2 text-sm leading-6 text-stone-600">
                            A unique book bringing together the worlds of
                            painting and gastronomy in one inspiring journey.
                        </p>
                    </div>
                </div>

                {/* Checkout footer */}
                <div className="border-t border-stone-200 bg-white/95 px-6 py-6 backdrop-blur sm:px-7">
                    <div className="mb-5 flex items-end justify-between">
                        <div>
                            <p className="text-sm text-stone-500">
                                Total
                            </p>

                            <p className="mt-1 text-xs text-stone-400">
                                {quantity} {quantity === 1 ? 'book' : 'books'}
                            </p>
                        </div>

                        <p className="text-3xl font-light tracking-tight text-stone-900">
                            € {total.toFixed(2).replace('.', ',')}
                        </p>
                    </div>

                    <Link
                        href={`/checkout?quantity=${quantity}`}
                        className="group flex w-full items-center justify-center gap-3 rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48] hover:shadow-lg"
                    >
                        Proceed to Checkout

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>

                    <button
                        type="button"
                        onClick={closeCart}
                        className="mt-3 w-full py-3 text-sm text-stone-500 transition hover:text-stone-900"
                    >
                        Continue Shopping
                    </button>
                </div>
            </aside>
        </>
    );
}
