
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <img
                        src="/favicon.webp"
                        alt="The Taste of Inspiration"
                        className="h-11 w-11 shrink-0 object-contain transition duration-300 group-hover:scale-105"
                    />

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
                    <a href="/#story" className={desktopLink}>
                        Our Story
                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a href="/#journey" className={desktopLink}>
                        The Journey
                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <Link href="/paintings" className={desktopLink}>
                        Paintings
                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <a href="/#book" className={desktopLink}>
                        The Book
                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a href="/#contact" className={desktopLink}>
                        Contact
                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8a6a48] transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* PRE-LAUNCH CTA */}
                    <a
                        href="/#book"
                        className="group inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-xs font-medium text-white transition duration-300 hover:bg-[#8a6a48]"
                    >
                        Join Waitlist
                        <ArrowUpRight
                            size={15}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <div className="flex items-center md:hidden">
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white/60 text-stone-900 shadow-sm transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
                    <a
                        href="/#story"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        Our Story
                    </a>

                    <a
                        href="/#journey"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        The Journey
                    </a>

                    <Link
                        href="/paintings"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        <div className="flex items-center justify-between">
                            <span>Paintings</span>
                            <span className="text-[10px] font-medium tracking-[0.18em] text-[#8a6a48] uppercase">
                                Collection
                            </span>
                        </div>
                    </Link>

                    <a
                        href="/#book"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        The Book
                    </a>

                    <a
                        href="/#contact"
                        onClick={() => setMenuOpen(false)}
                        className={mobileLink}
                    >
                        Contact
                    </a>

                    {/* PRE-LAUNCH CTA */}
                    <a
                        href="/#book"
                        onClick={() => setMenuOpen(false)}
                        className="mt-6 flex items-center justify-center gap-3 rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#8a6a48]"
                    >
                        Join the Waitlist
                        <ArrowUpRight size={17} />
                    </a>

                    <div className="mt-7 text-center">
                        <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-stone-400">
                            The Taste of Inspiration
                        </p>

                        <p className="mt-2 font-serif text-sm italic text-[#8a6a48]">
                            Where flavour becomes colour,
                            <span className="block">
                                and food becomes art.
                            </span>
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    );
}
