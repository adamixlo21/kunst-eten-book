export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#f7f3ec] px-6 pt-36 pb-24 text-stone-900 lg:px-10 lg:pt-44 lg:pb-32">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#8a6a48]/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/60 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
                {/* Text */}
                <div>
                    <div className="mb-7 flex items-center gap-4">
                        <div className="h-px w-10 bg-[#8a6a48]" />

                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            Kunst × Gastronomie
                        </p>
                    </div>

                    <h1 className="max-w-3xl text-5xl font-light leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                        Vijf schilderijen.
                        <br />
                        <span className="text-stone-500">
                            Vijf gerechten.
                        </span>
                        <br />
                        Eén verhaal.
                    </h1>

                    <p className="mt-8 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                        Kunst Eten is een bijzonder boek waarin schilderkunst en
                        gastronomie samenkomen. Vijf kunstwerken vormen de
                        inspiratie voor vijf unieke gerechten.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#boek"
                            className="group inline-flex items-center gap-3 rounded-full bg-stone-900 px-7 py-4 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48] hover:shadow-lg"
                        >
                            Ontdek het boek

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        <a
                            href="#kunstwerken"
                            className="rounded-full border border-stone-300 bg-white/40 px-7 py-4 text-sm font-medium text-stone-800 transition duration-300 hover:-translate-y-0.5 hover:border-stone-900 hover:bg-white"
                        >
                            Bekijk kunstwerken
                        </a>
                    </div>

                    {/* Small detail */}
                    <div className="mt-14 flex items-center gap-6 border-t border-stone-300/70 pt-6">
                        <div>
                            <p className="text-2xl font-light">5</p>
                            <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">
                                Kunstwerken
                            </p>
                        </div>

                        <div className="h-10 w-px bg-stone-300" />

                        <div>
                            <p className="text-2xl font-light">5</p>
                            <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">
                                Gerechten
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                    <div className="absolute -top-5 -right-5 h-full w-full rounded-[2rem] border border-[#8a6a48]/20" />

                    <div className="relative overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_30px_80px_rgba(70,55,40,0.18)]">
                        <img
                            src="/images//PHOTO-2026-09-14-20-24-30.jpg"
                            alt="Schilderij uit het boek Kunst Eten"
                            className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
                        />

                        {/* Gradient */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Floating label */}
                    <div className="absolute -bottom-7 left-5 rounded-[1.25rem] border border-stone-200 bg-white/95 px-6 py-5 shadow-xl backdrop-blur sm:left-8">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                            Uit het boek
                        </p>

                        <p className="mt-1 text-lg font-medium text-stone-900">
                            Kunst Eten
                        </p>

                        <p className="mt-1 text-xs text-stone-400">
                            Kunst vertaald naar smaak
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
