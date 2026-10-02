import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';

import { useBookCart } from '@/components/BookCartContext';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { quantity, openCart } = useBookCart();

    const handleOpenCart = () => {
        setMenuOpen(false);
        openCart();
    };

    const desktopLink =
        'group relative text-sm font-medium text-stone-600 transition hover:text-stone-950';

    const mobileLink =
        'border-b border-stone-200 py-4 text-base font-medium text-stone-700 transition hover:pl-2 hover:text-[#8a6a48]';

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-stone-200/60 bg-[#f7f3ec]/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">

                {/* BRAND */}
                <Link
                    href="/"
                    className="group flex items-center gap-3"
                    onClick={() => setMenuOpen(false)}
                >
                    {/* Brand symbol */}
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8a6a48]/30 bg-white/70 shadow-sm transition duration-300 group-hover:scale-105 group-hover:border-[#8a6a48]">
                        <div className="absolute h-4 w-4 rounded-full border border-[#8a6a48]/50" />

                        <div className="h-1.5 w-1.5 rounded-full bg-[#8a6a48]" />
                    </div>

                    {/* Brand text */}
                    <div>
                        <p className="text-xs font-semibold tracking-[0.14em] text-stone-900 uppercase sm:text-sm lg:text-base">
                            The Taste of Inspiration
                        </p>

                        <p className="hidden text-[9px] tracking-[0.2em] text-stone-400 uppercase sm:block">
                            Food × Art × Inspiration
                        </p>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden items-center gap-7 md:flex">

                    {/* Our Story */}
                    <a
                        href="/#story"
                        className={desktopLink}
                    >
                        Our Story

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* Journey */}
                    <a
                        href="/#journey"
                        className={desktopLink}
                    >
                        The Journey

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* Paintings */}
                    <Link
                        href="/paintings"
                        className={desktopLink}
                    >
                        Paintings

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </Link>

                    {/* Book */}
                    <a
                        href="/#book"
                        className={desktopLink}
                    >
                        The Book

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* Contact */}
                    <a
                        href="/#contact"
                        className={desktopLink}
                    >
                        Contact

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* CART */}
                    <button
                        type="button"
                        onClick={handleOpenCart}
                        className="group relative ml-1 flex items-center gap-3 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48] hover:shadow-lg"
                    >
                        <ShoppingBag
                            size={17}
                            className="transition duration-300 group-hover:scale-110"
                        />

                        <span>Cart</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white/15 px-1.5 text-[11px] font-semibold">
                            {quantity}
                        </span>
                    </button>
                </nav>

                {/* MOBILE BUTTONS */}
                <div className="flex items-center gap-2 md:hidden">

                    {/* Mobile cart */}
                    <button
                        type="button"
                        onClick={handleOpenCart}
                        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white/60 text-stone-900 shadow-sm transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                        aria-label="Open cart"
                    >
                        <ShoppingBag size={18} />

                        {quantity > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#8a6a48] px-1 text-[10px] font-bold text-white">
                                {quantity}
                            </span>
                        )}
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white/60 text-stone-900 shadow-sm transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                        aria-label={
                            menuOpen
                                ? 'Close menu'
                                : 'Open menu'
                        }
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>
            </div>

            {/* MOBILE NAVIGATION */}
            <div
                className={`overflow-hidden border-t bg-[#f7f3ec]/98 transition-all duration-300 md:hidden ${
                    menuOpen
                        ? 'max-h-[650px] border-stone-200 opacity-100'
                        : 'max-h-0 border-transparent opacity-0'
                }`}
            >
                <nav className="flex flex-col px-6 py-6">

                    {/* Our Story */}
                    <a
                        href="/#story"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        Our Story
                    </a>

                    {/* Journey */}
                    <a
                        href="/#journey"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        The Journey
                    </a>

                    {/* Paintings */}
                    <Link
                        href="/paintings"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        <div className="flex items-center justify-between">
                            <span>
                                Paintings
                            </span>

                            <span className="text-[10px] font-medium tracking-[0.18em] text-[#8a6a48] uppercase">
                                Collection
                            </span>
                        </div>
                    </Link>

                    {/* Book */}
                    <a
                        href="/#book"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        The Book
                    </a>

                    {/* Contact */}
                    <a
                        href="/#contact"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        Contact
                    </a>

                    {/* Mobile cart button */}
                    <button
                        type="button"
                        onClick={handleOpenCart}
                        className="mt-6 flex items-center justify-center gap-3 rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition duration-300 hover:bg-[#8a6a48]"
                    >
                        <ShoppingBag size={18} />

                        Cart

                        <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">
                            {quantity}
                        </span>
                    </button>

                    {/* Brand footer inside mobile menu */}
                    <div className="mt-7 text-center">
                        <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-stone-400">
                            The Taste of Inspiration
                        </p>

                        <p className="mt-2 font-serif text-sm italic text-[#8a6a48]">
                            Where flavour becomes colour,
                            <br />
                            and food becomes art.
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    );
}
