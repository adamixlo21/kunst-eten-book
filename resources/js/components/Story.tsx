export default function OurStory() {
    return (
        <section
            id="story"
            className="relative overflow-hidden bg-[#eee7dc] px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            {/* Background decoration */}
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/40 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#8a6a48]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <div className="mb-6 flex items-center justify-center gap-4">
                        <div className="h-px w-10 bg-[#8a6a48]" />

                        <p className="text-xs font-semibold tracking-[0.35em] text-[#8a6a48] uppercase">
                            Our Story
                        </p>

                        <div className="h-px w-10 bg-[#8a6a48]" />
                    </div>

                    <h2 className="text-4xl leading-tight font-light tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                        Two passions.
                        <br />
                        <span className="text-stone-500">
                            One shared journey.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                        A story of colour, flavour, craftsmanship and the
                        unexpected connection between two forms of creativity.
                    </p>
                </div>

                {/* Nour */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Nour image */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 h-full w-full rounded-[2rem] border border-[#8a6a48]/20" />

                        <div className="relative overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_25px_70px_rgba(70,55,40,0.14)]">
                            <img
                                src="/images/nour.jpg"
                                alt="Nour, the artist behind The Taste of Inspiration"
                                className="aspect-[4/5] h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute -right-3 -bottom-5 rounded-2xl border border-stone-200 bg-[#f7f3ec]/95 px-6 py-4 shadow-lg backdrop-blur sm:right-6">
                            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#8a6a48] uppercase">
                                The Artist
                            </p>

                            <p className="mt-1 text-lg font-medium">
                                Nour
                            </p>
                        </div>
                    </div>

                    {/* Nour story */}
                    <div className="lg:pl-4">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#8a6a48] uppercase">
                            Nour
                        </p>

                        <h3 className="mt-5 text-4xl leading-tight font-light tracking-[-0.03em] sm:text-5xl">
                            A lifelong love
                            <br />
                            <span className="text-stone-500">
                                for colour.
                            </span>
                        </h3>

                        <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-stone-600">
                            <p>
                                Nour's love for colour began in childhood.
                                Painting became a place where imagination,
                                curiosity and emotion could come together.
                            </p>

                            <p>
                                Over the years, that connection never
                                disappeared. Painting became more than colour
                                on a canvas — it became a source of peace, joy
                                and energy.
                            </p>

                            <p>
                                Through her work, Nour hopes to create a quiet
                                pause: a moment to slow down, feel, and perhaps
                                see something in a new way.
                            </p>
                        </div>

                        <div className="mt-9 border-l-2 border-[#8a6a48] pl-6">
                            <p className="max-w-lg text-xl leading-8 font-light italic text-stone-700">
                                “Painting gives me peace, joy and energy.”
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-28 flex items-center gap-5">
                    <div className="h-px flex-1 bg-stone-300/80" />

                    <div className="h-2 w-2 rounded-full bg-[#8a6a48]" />

                    <div className="h-px flex-1 bg-stone-300/80" />
                </div>

                {/* Patrick */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Patrick story */}
                    <div className="order-2 lg:order-1 lg:pr-4">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#8a6a48] uppercase">
                            Patrick
                        </p>

                        <h3 className="mt-5 text-4xl leading-tight font-light tracking-[-0.03em] sm:text-5xl">
                            Another kind
                            <br />
                            <span className="text-stone-500">
                                of canvas.
                            </span>
                        </h3>

                        <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-stone-600">
                            <p>
                                Patrick grew up surrounded by food, fishing
                                and craftsmanship. Long before cooking became
                                his profession, creating with his hands was
                                already part of his life.
                            </p>

                            <p>
                                As a teenager he discovered creativity through
                                graffiti. Eventually he chose cooking, but the
                                artist in him never disappeared. He simply
                                found another canvas.
                            </p>

                            <p>
                                Today, Patrick creates with flavour, colour,
                                texture and seasonality. Every plate is shaped
                                by curiosity, craftsmanship and a desire to
                                make people happy.
                            </p>
                        </div>

                        <div className="mt-9 border-l-2 border-[#8a6a48] pl-6">
                            <p className="max-w-lg text-xl leading-8 font-light italic text-stone-700">
                                “Cook from the heart, and follow the seasons.”
                            </p>
                        </div>
                    </div>

                    {/* Patrick image */}
                    <div className="relative order-1 lg:order-2">
                        <div className="absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] border border-[#8a6a48]/20" />

                        <div className="relative overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_25px_70px_rgba(70,55,40,0.14)]">
                            <img
                                src="/images/patrick.jpg"
                                alt="Patrick, the chef behind The Taste of Inspiration"
                                className="aspect-[4/5] h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 left-3 rounded-2xl border border-stone-200 bg-[#f7f3ec]/95 px-6 py-4 shadow-lg backdrop-blur sm:left-6">
                            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#8a6a48] uppercase">
                                The Chef
                            </p>

                            <p className="mt-1 text-lg font-medium">
                                Patrick
                            </p>
                        </div>
                    </div>
                </div>

                {/* Connection */}
                <div className="mx-auto mt-32 max-w-4xl text-center">
                    <p className="text-xs font-semibold tracking-[0.3em] text-[#8a6a48] uppercase">
                        When two worlds meet
                    </p>

                    <h3 className="mt-6 text-3xl leading-tight font-light tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                        He creates on a plate.
                        <br />
                        <span className="text-stone-500">
                            She responds on a canvas.
                        </span>
                    </h3>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-stone-600">
                        When Nour began painting Patrick's dishes, two forms
                        of creativity came together. What began in the kitchen
                        found a new expression on canvas.
                    </p>

                    <a
                        href="/#journey"
                        className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-stone-900"
                    >
                        Discover their journey

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
