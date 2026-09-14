const paintings = [
    {
        title: 'Schilderij één',
        description:
            'Een eerste blik op het samenspel tussen kleur, vorm en smaak.',
        image: '/images/images.jpg',
    },
    {
        title: 'Schilderij twee',
        description:
            'Een kunstwerk dat de basis vormt voor een bijzonder gerecht.',
        image: '/images/images (1).jpg',
    },
    {
        title: 'Schilderij drie',
        description:
            'Een ontmoeting tussen schilderkunst en gastronomie.',
        image: '/images/images (2).jpg',
    },
];

export default function PaintingsSection() {
    return (
        <section
            id="kunstwerken"
            className="relative overflow-hidden bg-[#f7f3ec] px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            {/* Background decoration */}
            <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#8a6a48]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-4">
                            <div className="h-px w-10 bg-[#8a6a48]" />

                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                                De kunstwerken
                            </p>
                        </div>

                        <h2 className="max-w-3xl text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                            Een voorproefje
                            <br />
                            <span className="text-stone-500">
                                uit het boek.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-stone-500 lg:justify-self-end">
                        Ontdek een selectie van de schilderijen die in het boek
                        samenkomen met vijf unieke gerechten. Elk werk vormt het
                        begin van een culinair verhaal.
                    </p>
                </div>

                {/* Paintings */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {paintings.map((painting, index) => (
                        <article
                            key={painting.title}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_20px_50px_rgba(70,55,40,0.08)]">
                                <img
                                    src={painting.image}
                                    alt={painting.title}
                                    className="aspect-[4/5] h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                                />

                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                {/* Number */}
                                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-medium text-white backdrop-blur-md">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Bottom label */}
                                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                                        Kunst × Gastronomie
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-1 pt-6">
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <h3 className="text-xl font-medium tracking-tight text-stone-900">
                                            {painting.title}
                                        </h3>

                                        <p className="mt-3 max-w-sm text-sm leading-7 text-stone-500">
                                            {painting.description}
                                        </p>
                                    </div>

                                    <span className="text-xs font-medium text-[#8a6a48]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <div className="mt-6 h-px w-full bg-stone-300/70 transition duration-500 group-hover:bg-[#8a6a48]" />
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-16 flex flex-col gap-4 border-t border-stone-300/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-stone-500">
                        Dit is slechts een selectie uit de vijf werken in het boek.
                    </p>

                    <a
                        href="#boek"
                        className="group flex items-center gap-2 text-sm font-medium text-stone-900"
                    >
                        Ontdek het boek

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
