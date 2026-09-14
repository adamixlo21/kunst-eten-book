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
            className="bg-[#f7f3ec] px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#8a6a48]">
                            De kunstwerken
                        </p>

                        <h2 className="max-w-2xl text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Een voorproefje uit het boek.
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-stone-500">
                        Ontdek een selectie van de schilderijen die in het boek
                        samenkomen met vijf unieke gerechten.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {paintings.map((painting, index) => (
                        <article
                            key={painting.title}
                            className="group"
                        >
                            <div className="overflow-hidden rounded-[1.75rem] bg-stone-200">
                                <img
                                    src={painting.image}
                                    alt={painting.title}
                                    className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-5 flex gap-4">
                                <span className="pt-1 text-xs text-stone-400">
                                    0{index + 1}
                                </span>

                                <div>
                                    <h3 className="text-xl font-medium">
                                        {painting.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-stone-500">
                                        {painting.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
