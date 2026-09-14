export default function AboutBook() {
    return (
        <section
            id="over"
            className="relative overflow-hidden bg-white px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            {/* subtle background decoration */}
            <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#8a6a48]/5 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                {/* Left side */}
                <div>
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                        Over het boek
                    </p>

                    <h2 className="max-w-xl text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                        Waar kunst en smaak elkaar ontmoeten.
                    </h2>

                    <div className="mt-8 h-px w-20 bg-[#8a6a48]" />
                </div>

                {/* Right side */}
                <div className="max-w-2xl">
                    <p className="text-lg leading-9 text-stone-700 sm:text-xl">
                        Kunst Eten brengt twee werelden samen:
                        schilderkunst en gastronomie. Het boek bestaat uit vijf
                        schilderijen, waarbij ieder kunstwerk verbonden is aan
                        een bijzonder gerecht.
                    </p>

                    <p className="mt-6 text-base leading-8 text-stone-500">
                        Elk hoofdstuk laat zien hoe kleur, vorm, sfeer en emotie
                        uit een schilderij kunnen worden vertaald naar smaak,
                        compositie en presentatie op het bord.
                    </p>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <p className="text-4xl font-light text-stone-900">
                                5
                            </p>

                            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                                Schilderijen
                            </p>
                        </div>

                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <p className="text-4xl font-light text-stone-900">
                                5
                            </p>

                            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                                Gerechten
                            </p>
                        </div>

                        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <p className="text-4xl font-light text-stone-900">
                                1
                            </p>

                            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                                Verhaal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
