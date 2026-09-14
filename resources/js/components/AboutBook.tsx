export default function AboutBook() {
    return (
        <section
            id="over"
            className="bg-white px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#8a6a48]">
                        Over het boek
                    </p>

                    <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Waar kunst en smaak elkaar ontmoeten.
                    </h2>
                </div>

                <div className="max-w-2xl">
                    <p className="text-lg leading-9 text-stone-700">
                        Kunst Eten brengt twee werelden samen: schilderkunst en
                        gastronomie. Het boek bestaat uit vijf schilderijen, waarbij
                        ieder kunstwerk verbonden is aan een bijzonder gerecht.
                    </p>

                    <p className="mt-6 text-base leading-8 text-stone-500">
                        Elk hoofdstuk laat zien hoe kleur, vorm, sfeer en emotie uit
                        een schilderij kunnen worden vertaald naar smaak en
                        presentatie op het bord.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8 sm:grid-cols-3">
                        <div>
                            <p className="text-3xl font-light">5</p>
                            <p className="mt-1 text-sm text-stone-500">
                                Schilderijen
                            </p>
                        </div>

                        <div>
                            <p className="text-3xl font-light">5</p>
                            <p className="mt-1 text-sm text-stone-500">
                                Gerechten
                            </p>
                        </div>

                        <div>
                            <p className="text-3xl font-light">1</p>
                            <p className="mt-1 text-sm text-stone-500">
                                Verhaal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
