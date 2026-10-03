import { Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    Instagram,
    Mail,
    MapPin,
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-[#f3eee6] text-stone-900">

            {/* MAIN FOOTER */}
            <div className="px-6 py-16 sm:py-20 lg:px-10">
                <div className="mx-auto max-w-7xl">

                    {/* LINKS AREA */}
                    <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">

                        {/* EXPLORE */}
                        <div>
                            <FooterTitle>Explore</FooterTitle>

                            <nav className="mt-6 flex flex-col items-start gap-4">
                                <FooterAnchor href="/#story">
                                    Our Story
                                </FooterAnchor>

                                <FooterAnchor href="/#journey">
                                    The Journey
                                </FooterAnchor>

                                <Link
                                    href="/paintings"
                                    className="text-sm text-stone-600 transition-colors duration-200 hover:text-[#8a6a48]"
                                >
                                    Paintings
                                </Link>

                                <FooterAnchor href="/#book">
                                    The Book
                                </FooterAnchor>

                                <FooterAnchor href="/#contact">
                                    Contact
                                </FooterAnchor>
                            </nav>
                        </div>

                        {/* THE EXPERIENCE */}
                        <div>
                            <FooterTitle>The Experience</FooterTitle>

                            <div className="mt-6 space-y-3">
                                <p className="font-serif text-xl italic text-stone-700">
                                    Look.
                                </p>

                                <p className="font-serif text-xl italic text-stone-700">
                                    Feel.
                                </p>

                                <p className="font-serif text-xl italic text-stone-700">
                                    Taste.
                                </p>

                                <p className="font-serif text-xl italic text-stone-700">
                                    Create.
                                </p>

                                <p className="font-serif text-xl italic text-[#8a6a48]">
                                    Be inspired.
                                </p>
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <FooterTitle>Contact</FooterTitle>

                            <div className="mt-6 flex flex-col items-start gap-5">
                                <a
                                    href="mailto:info@kunsteten.nl"
                                    className="group flex items-center gap-3 text-sm text-stone-600 transition hover:text-[#8a6a48]"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 bg-white/50 transition group-hover:border-[#8a6a48]/40">
                                        <Mail
                                            size={14}
                                            className="text-[#8a6a48]"
                                        />
                                    </span>

                                    info@kunsteten.nl
                                </a>

                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="group flex items-center gap-3 text-sm text-stone-600 transition hover:text-[#8a6a48]"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 bg-white/50 transition group-hover:border-[#8a6a48]/40">
                                        <Instagram
                                            size={14}
                                            className="text-[#8a6a48]"
                                        />
                                    </span>

                                    Instagram
                                </a>
                            </div>
                        </div>

                        {/* LOCATION */}
                        <div>
                            <FooterTitle>Location</FooterTitle>

                            <div className="mt-6 flex items-start gap-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white/50">
                                    <MapPin
                                        size={14}
                                        className="text-[#8a6a48]"
                                    />
                                </span>

                                <div className="text-sm leading-7 text-stone-600">
                                    <p className="font-medium text-stone-800">
                                        The Taste of Inspiration
                                    </p>

                                    <p>Street Name 12</p>
                                    <p>1234 AB City</p>
                                    <p>The Netherlands</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="flex flex-col gap-6 border-t border-stone-300/70 pt-7 text-xs text-stone-400 md:flex-row md:items-center md:justify-between">

                        <p>
                            © {new Date().getFullYear()} The Taste of Inspiration.
                            All rights reserved.
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-3">

                            <Link
                                href="/privacy-policy"
                                className="transition-colors hover:text-[#8a6a48]"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms-and-conditions"
                                className="transition-colors hover:text-[#8a6a48]"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                href="/shipping-and-returns"
                                className="transition-colors hover:text-[#8a6a48]"
                            >
                                Shipping & Returns
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

/* ---------------------------------------------------------
   SMALL COMPONENTS
--------------------------------------------------------- */

function FooterTitle({
                         children,
                     }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-400">
                {children}
            </p>

            <div className="mt-3 h-px w-8 bg-[#8a6a48]/50" />
        </div>
    );
}

function FooterAnchor({
                          href,
                          children,
                      }: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="text-sm text-stone-600 transition-colors duration-200 hover:text-[#8a6a48]"
        >
            {children}
        </a>
    );
}
