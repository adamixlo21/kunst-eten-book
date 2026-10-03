import { Link } from '@inertiajs/react';
import { ArrowUpRight, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#25221f] text-[#f7f3ec]">
            <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">

                {/* =====================================================
                    TOP
                ===================================================== */}
                <div className="border-b border-white/15 pb-10 lg:pb-14">
                    <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

                        {/* BRAND */}
                        <div>
                            <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#b69773]">
                                Food × Art × Inspiration
                            </p>

                            <h2 className="mt-5 max-w-3xl font-serif text-[11vw] font-light leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">
                                The Taste
                                <span className="block italic text-[#b69773]">
                                    of Inspiration.
                                </span>
                            </h2>
                        </div>

                        {/* TAGLINE */}
                        <div className="lg:justify-self-end">
                            <p className="max-w-xs font-serif text-xl font-light leading-[1.3] text-stone-300 lg:text-2xl">
                                Where flavour becomes colour,
                                <span className="block italic text-[#b69773]">
                                    and food becomes art.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    LINKS
                ===================================================== */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 sm:grid-cols-3 lg:py-14">

                    {/* EXPLORE */}
                    <div>
                        <FooterTitle>Explore</FooterTitle>

                        <nav className="mt-5 flex flex-col items-start gap-3">
                            <FooterAnchor href="/#story">
                                Our Story
                            </FooterAnchor>

                            <FooterAnchor href="/#journey">
                                The Journey
                            </FooterAnchor>

                            <Link
                                href="/paintings"
                                className="text-sm text-stone-400 transition-colors duration-300 hover:text-[#b69773]"
                            >
                                Paintings
                            </Link>

                            <FooterAnchor href="/#book">
                                The Book
                            </FooterAnchor>
                        </nav>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <FooterTitle>Contact</FooterTitle>

                        <div className="mt-5 flex flex-col items-start gap-4">
                            <a
                                href="mailto:info@kunsteten.nl"
                                className="group flex items-center gap-2.5 text-sm text-stone-400 transition-colors duration-300 hover:text-[#b69773]"
                            >
                                <Mail
                                    size={14}
                                    strokeWidth={1.4}
                                />

                                Email
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="group flex items-center gap-2.5 text-sm text-stone-400 transition-colors duration-300 hover:text-[#b69773]"
                            >
                                <Instagram
                                    size={14}
                                    strokeWidth={1.4}
                                />

                                Instagram
                            </a>

                            <a
                                href="/#contact"
                                className="group mt-2 inline-flex items-center gap-2 border-b border-white/30 pb-1.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-stone-300 transition-colors duration-300 hover:border-[#b69773] hover:text-[#b69773]"
                            >
                                Get in touch

                                <ArrowUpRight
                                    size={12}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="col-span-2 sm:col-span-1">
                        <FooterTitle>The Experience</FooterTitle>

                        <p className="mt-5 max-w-[220px] font-serif text-xl font-light italic leading-[1.4] text-stone-400">
                            Look.
                            <br />
                            Feel.
                            <br />
                            Taste.
                            <br />
                            <span className="text-[#b69773]">
                                Be inspired.
                            </span>
                        </p>
                    </div>
                </div>

                {/* =====================================================
                    BOTTOM
                ===================================================== */}
                <div className="border-t border-white/15 pt-6">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                        <p className="text-[9px] leading-5 text-stone-500">
                            © {new Date().getFullYear()} The Taste of Inspiration.
                        </p>

                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-[8px] uppercase tracking-[0.18em] text-stone-500">
                            <Link
                                href="/legal/privacy-policy"
                                className="transition-colors duration-300 hover:text-[#b69773]"
                            >
                                Privacy
                            </Link>

                            <Link
                                href="/legal/terms-and-conditions"
                                className="transition-colors duration-300 hover:text-[#b69773]"
                            >
                                Terms
                            </Link>

                            <Link
                                href="/legal/shipping-and-returns"
                                className="transition-colors duration-300 hover:text-[#b69773]"
                            >
                                Shipping & Returns
                            </Link>
                        </div>

                        <p className="hidden text-[8px] uppercase tracking-[0.25em] text-[#b69773] lg:block">
                            Food · Art · Inspiration
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* =====================================================
    SMALL COMPONENTS
===================================================== */

function FooterTitle({
                         children,
                     }: {
    children: React.ReactNode;
}) {
    return (
        <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#b69773]">
            {children}
        </p>
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
            className="text-sm text-stone-400 transition-colors duration-300 hover:text-[#b69773]"
        >
            {children}
        </a>
    );
}
