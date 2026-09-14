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

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-stone-200/60 bg-[#f7f3ec]/85 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-3"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8a6a48]/30 bg-white/70 shadow-sm transition duration-300 group-hover:scale-105 group-hover:border-[#8a6a48]"
                    >
                        <div className="h-2.5 w-2.5 rounded-full bg-[#8a6a48]" />
                    </div>

                    <div>
                        <p className="text-lg font-semibold tracking-[0.22em] text-stone-900 uppercase">
                            Kunst Eten
                        </p>

                        <p className="hidden text-[10px] tracking-[0.22em] text-stone-400 uppercase sm:block">
                            Kunst × Gastronomie
                        </p>
                    </div>
                </Link>

                {/* Desktop menu */}
                <nav className="hidden items-center gap-8 md:flex">
                    <a
                        href="#over"
                        className="group relative text-sm font-medium text-stone-600 transition hover:text-stone-950"
                    >
                        Over het boek

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="#kunstwerken"
                        className="group relative text-sm font-medium text-stone-600 transition hover:text-stone-950"
                    >
                        Kunstwerken

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="#boek"
                        className="group relative text-sm font-medium text-stone-600 transition hover:text-stone-950"
                    >
                        Het boek

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="#contact"
                        className="group relative text-sm font-medium text-stone-600 transition hover:text-stone-950"
                    >
                        Contact

                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* Cart */}
                    <button
                        type="button"
                        onClick={handleOpenCart}
                        className="group relative ml-2 flex items-center gap-3 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48] hover:shadow-lg"
                    >
                        <ShoppingBag
                            size={17}
                            className="transition group-hover:scale-110"
                        />

                        <span>Winkelwagen</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white/15 px-1.5 text-[11px] font-semibold">
                            {quantity}
                        </span>
                    </button>
                </nav>

                {/* Mobile buttons */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        type="button"
                        onClick={handleOpenCart}
                        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white/60 text-stone-900 shadow-sm transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                    >
                        <ShoppingBag size={18} />

                        <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#8a6a48] px-1 text-[10px] font-bold text-white">
                            {quantity}
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white/60 text-stone-900 shadow-sm transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                        aria-label="Menu openen"
                    >
                        {menuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden border-t border-stone-200 bg-[#f7f3ec]/98 transition-all duration-300 md:hidden ${
                    menuOpen
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 border-transparent opacity-0'
                }`}
            >
                <nav className="flex flex-col px-6 py-6">
                    <a
                        href="#over"
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-stone-200 py-4 text-base font-medium text-stone-700 transition hover:pl-2 hover:text-[#8a6a48]"
                    >
                        Over het boek
                    </a>

                    <a
                        href="#kunstwerken"
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-stone-200 py-4 text-base font-medium text-stone-700 transition hover:pl-2 hover:text-[#8a6a48]"
                    >
                        Kunstwerken
                    </a>

                    <a
                        href="#boek"
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-stone-200 py-4 text-base font-medium text-stone-700 transition hover:pl-2 hover:text-[#8a6a48]"
                    >
                        Het boek
                    </a>

                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-stone-200 py-4 text-base font-medium text-stone-700 transition hover:pl-2 hover:text-[#8a6a48]"
                    >
                        Contact
                    </a>

                    <button
                        type="button"
                        onClick={handleOpenCart}
                        className="mt-6 flex items-center justify-center gap-3 rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:bg-[#8a6a48]"
                    >
                        <ShoppingBag size={18} />

                        Winkelwagen

                        <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">
                            {quantity}
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    );
}
