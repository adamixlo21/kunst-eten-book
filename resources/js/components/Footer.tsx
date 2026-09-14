import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-stone-300 bg-[#f7f3ec] px-6 py-12 text-stone-900 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 border-b border-stone-300 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr]">
                    {/* Brand */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h2 className="mt-5 max-w-md text-3xl font-light leading-[1.15] tracking-tight sm:text-4xl">
                            Kunst.
                            <br />
                            Gastronomie.
                            <br />
                            Eén verhaal.
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-stone-500">
                            Een boek waarin vijf schilderijen en vijf gerechten
                            samenkomen.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                            Navigatie
                        </p>

                        <nav className="mt-5 flex flex-col gap-3">
                            <a
                                href="#over"
                                className="w-fit text-sm text-stone-700 transition hover:text-[#8a6a48]"
                            >
                                Over het boek
                            </a>

                            <a
                                href="#kunstwerken"
                                className="w-fit text-sm text-stone-700 transition hover:text-[#8a6a48]"
                            >
                                Kunstwerken
                            </a>

                            <a
                                href="#boek"
                                className="w-fit text-sm text-stone-700 transition hover:text-[#8a6a48]"
                            >
                                Het boek
                            </a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                            Contact
                        </p>

                        <div className="mt-5 flex flex-col gap-4">
                            <a
                                href="mailto:info@kunsteten.nl"
                                className="flex w-fit items-center gap-3 text-sm text-stone-700 transition hover:text-[#8a6a48]"
                            >
                                <Mail size={16} />
                                info@kunsteten.nl
                            </a>

                            <a
                                href="#"
                                className="flex w-fit items-center gap-3 text-sm text-stone-700 transition hover:text-[#8a6a48]"
                            >
                                <Instagram size={16} />
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                            Adres
                        </p>

                        <div className="mt-5 flex items-start gap-3 text-sm leading-7 text-stone-700">
                            <MapPin
                                size={16}
                                className="mt-1 shrink-0 text-[#8a6a48]"
                            />

                            <div>
                                <p>Kunst Eten</p>
                                <p>Straatnaam 12</p>
                                <p>1234 AB Plaats</p>
                                <p>Nederland</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 pt-6 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Kunst Eten
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <a
                            href="#"
                            className="transition hover:text-stone-700"
                        >
                            Privacybeleid
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-stone-700"
                        >
                            Algemene voorwaarden
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-stone-700"
                        >
                            Verzending & retour
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
