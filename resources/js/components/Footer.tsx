
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-[#25221f] text-[#f7f3ec]">
            <div className="mx-auto max-w-[1300px] px-5 py-10 sm:px-8 sm:py-12 lg:px-16">

                {/* MAIN FOOTER */}
                <div className="grid gap-10 pb-10 md:grid-cols-[1.4fr_1fr] lg:gap-20">

                    {/* BRAND */}
                    <div>
                        <h2 className="font-serif text-2xl font-light tracking-tight sm:text-3xl">
                            The Taste
                            <span className="block italic text-[#b69773]">
                                of Inspiration.
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-stone-400">
                            Where flavour becomes colour,
                            and food becomes art.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div className="grid grid-cols-2 gap-8">

                        {/* EXPLORE */}
                        <div>
                            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b69773]">
                                Explore
                            </h3>

                            <nav className="flex flex-col items-start gap-3 text-sm text-stone-400">
                                <a
                                    href="/#story"
                                    className="transition-colors hover:text-white"
                                >
                                    Our Story
                                </a>

                                <a
                                    href="/#journey"
                                    className="transition-colors hover:text-white"
                                >
                                    The Journey
                                </a>

                                <Link
                                    href="/paintings"
                                    className="transition-colors hover:text-white"
                                >
                                    Paintings
                                </Link>

                                <a
                                    href="/#book"
                                    className="transition-colors hover:text-white"
                                >
                                    The Book
                                </a>
                            </nav>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b69773]">
                                Contact
                            </h3>

                            <div className="flex flex-col items-start gap-3 text-sm text-stone-400">
                                <a
                                    href="mailto:info@kunsteten.nl"
                                    className="transition-colors hover:text-white"
                                >
                                    Email us
                                </a>

                                <a
                                    href="/#contact"
                                    className="transition-colors hover:text-white"
                                >
                                    Get in touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM FOOTER */}
                <div className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-stone-500">
                        © {new Date().getFullYear()} The Taste of Inspiration.
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone-500">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms-and-conditions"
                            className="transition-colors hover:text-white"
                        >
                            Terms
                        </Link>

                        <Link
                            href="/shipping-and-returns"
                            className="transition-colors hover:text-white"
                        >
                            Shipping & Returns
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
