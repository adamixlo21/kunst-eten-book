export default function BookSection() {
    return (
        <section
            id="boek"
            className="bg-white px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
                <div className="relative">
                    <div className="overflow-hidden rounded-[2rem] bg-stone-100">
                        <img
                            src="/images/book cover.png"
                            alt="Kunst Eten boek"
                            className="aspect-[4/5] h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute -bottom-6 right-6 rounded-2xl bg-[#f7f3ec] px-6 py-4 shadow-lg">
                        <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                            Kunst Eten
                        </p>

                        <p className="mt-1 text-lg font-medium">
                            Vijf verhalen in één boek
                        </p>
                    </div>
                </div>

                <div>
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#8a6a48]">
                        Het boek
                    </p>

                    <h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Kunst om te zien.
                        <br />
                        Gerechten om te beleven.
                    </h2>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
                        Ontdek het volledige verhaal achter vijf schilderijen en
                        vijf gerechten. Een boek waarin kunst, inspiratie en
                        gastronomie samenkomen.
                    </p>

                    <div className="mt-10 border-y border-stone-200 py-7">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-stone-500">
                                Kunst Eten
                            </span>

                            <span className="text-2xl font-medium">
                                € 39,95
                            </span>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#bestellen"
                            className="rounded-full bg-stone-900 px-8 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48]"
                        >
                            Bestel het boek
                        </a>

                        <a
                            href="#kunstwerken"
                            className="rounded-full border border-stone-300 px-8 py-4 text-sm font-medium text-stone-700 transition duration-300 hover:border-stone-900"
                        >
                            Bekijk kunstwerken
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
