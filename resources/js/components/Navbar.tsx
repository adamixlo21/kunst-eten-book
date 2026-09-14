import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-stone-200/70 bg-[#f7f3ec]/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
                <Link
                    href="/"
                    className="group flex items-center gap-3"
                >
                    <div className="h-3 w-3 rounded-full bg-[#8a6a48] transition-transform duration-300 group-hover:scale-125" />

                    <span className="text-lg font-semibold tracking-[0.22em] text-stone-900 uppercase">
                        Kunst Eten
                    </span>
                </Link>

                <nav className="hidden items-center gap-9 md:flex">
                    <a
                        href="#over"
                        className="relative text-sm font-medium text-stone-600 transition duration-300 hover:text-stone-950 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Over het boek
                    </a>

                    <a
                        href="#kunstwerken"
                        className="relative text-sm font-medium text-stone-600 transition duration-300 hover:text-stone-950 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Kunstwerken
                    </a>

                    <a
                        href="#boek"
                        className="relative text-sm font-medium text-stone-600 transition duration-300 hover:text-stone-950 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Het boek
                    </a>

                    <a
                        href="#contact"
                        className="relative text-sm font-medium text-stone-600 transition duration-300 hover:text-stone-950 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact
                    </a>

                    <a
                        href="#bestellen"
                        className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48] hover:shadow-lg"
                    >
                        Bestel het boek
                    </a>
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-900 transition hover:bg-stone-900 hover:text-white md:hidden"
                    aria-label="Menu openen"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-stone-200 bg-[#f7f3ec] md:hidden">
                    <nav className="flex flex-col px-6 py-6">
                        <a
                            href="#over"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-stone-200 py-4 text-base text-stone-700"
                        >
                            Over het boek
                        </a>

                        <a
                            href="#kunstwerken"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-stone-200 py-4 text-base text-stone-700"
                        >
                            Kunstwerken
                        </a>

                        <a
                            href="#boek"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-stone-200 py-4 text-base text-stone-700"
                        >
                            Het boek
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-stone-200 py-4 text-base text-stone-700"
                        >
                            Contact
                        </a>

                        <a
                            href="#bestellen"
                            onClick={() => setMenuOpen(false)}
                            className="mt-6 rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white"
                        >
                            Bestel het boek
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
