export default function Hero() {
    return (
        <section className="min-h-screen bg-[#f7f3ec] px-6 pt-36 pb-20 text-stone-900 lg:px-10">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                <div>
                    <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#8a6a48]">
                        Kunst × Gastronomie
                    </p>

                    <h1 className="max-w-2xl text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                        Vijf schilderijen.
                        <br />
                        Vijf gerechten.
                        <br />
                        Eén verhaal.
                    </h1>

                    <p className="mt-8 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                        Kunst Eten is een boek waarin schilderkunst en gastronomie
                        samenkomen. Vijf kunstwerken vormen de inspiratie voor vijf
                        bijzondere gerechten.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#boek"
                            className="rounded-full bg-stone-900 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48]"
                        >
                            Ontdek het boek
                        </a>

                        <a
                            href="#kunstwerken"
                            className="rounded-full border border-stone-300 px-7 py-3.5 text-sm font-medium text-stone-800 transition duration-300 hover:border-stone-900 hover:bg-white"
                        >
                            Bekijk kunstwerken
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden rounded-[2rem] bg-stone-200 shadow-xl">
                        <img
                            src="/images/hero-painting.jpeg"
                            alt="Schilderij uit het boek Kunst Eten"
                            className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                        />
                    </div>

                    <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-lg">
                        <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                            Uit het boek
                        </p>

                        <p className="mt-1 text-lg font-medium text-stone-900">
                            Kunst Eten
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
