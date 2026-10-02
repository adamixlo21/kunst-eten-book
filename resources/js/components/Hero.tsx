import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#f7f3ec] px-6 pt-36 pb-28 text-stone-900 lg:px-10 lg:pt-44 lg:pb-36">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#8a6a48]/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/60 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

                {/* Content */}
                <div>
                    <div className="mb-7 flex items-center gap-4">
                        <div className="h-px w-10 bg-[#8a6a48]" />

                        <p className="text-xs font-semibold tracking-[0.35em] text-[#8a6a48] uppercase">
                            Food × Art × Inspiration
                        </p>
                    </div>

                    <h1 className="max-w-3xl text-5xl leading-[0.98] font-light tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
                        The Taste
                        <br />
                        <span className="text-stone-500">
                            of Inspiration
                        </span>
                    </h1>

                    <p className="mt-7 text-lg font-light tracking-wide text-[#8a6a48] sm:text-xl">
                        Where flavour becomes colour,
                        <br className="hidden sm:block" />
                        and food becomes art.
                    </p>

                    <p className="mt-8 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                        A creative journey where two passions meet.
                        Patrick creates through food. Nour experiences
                        his dishes through colour, feeling and atmosphere,
                        transforming each moment into an original painting.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="/#journey"
                            className="group inline-flex items-center gap-3 rounded-full bg-stone-900 px-7 py-4 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48] hover:shadow-lg"
                        >
                            Discover the Journey

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        <Link
                            href="/paintings"
                            className="inline-flex items-center rounded-full border border-stone-300 bg-white/40 px-7 py-4 text-sm font-medium text-stone-800 transition duration-300 hover:-translate-y-0.5 hover:border-stone-900 hover:bg-white"
                        >
                            Explore the Paintings
                        </Link>
                    </div>

                    {/* Details */}
                    <div className="mt-14 flex items-center gap-7 border-t border-stone-300/70 pt-6">
                        <div>
                            <p className="text-2xl font-light text-stone-900">
                                5
                            </p>

                            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400 uppercase">
                                Original Paintings
                            </p>
                        </div>

                        <div className="h-10 w-px bg-stone-300" />

                        <div>
                            <p className="text-2xl font-light text-stone-900">
                                5
                            </p>

                            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400 uppercase">
                                Culinary Creations
                            </p>
                        </div>

                        <div className="hidden h-10 w-px bg-stone-300 sm:block" />

                        <div className="hidden sm:block">
                            <p className="text-2xl font-light text-stone-900">
                                1
                            </p>

                            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400 uppercase">
                                Shared Journey
                            </p>
                        </div>
                    </div>
                </div>

                {/* Artwork */}
                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

                    {/* Decorative frame */}
                    <div className="absolute -top-5 -right-5 h-full w-full rounded-[2rem] border border-[#8a6a48]/20" />

                    <div className="relative overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_30px_80px_rgba(70,55,40,0.18)]">
                        <img
                            src="/images/patrick-nour.jpg"
                            alt="Original artwork from The Taste of Inspiration"
                            className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
                        />

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                    </div>

                    {/* Floating card */}
                    <div className="absolute -bottom-7 left-5 max-w-[280px] rounded-[1.25rem] border border-stone-200 bg-white/95 px-6 py-5 shadow-xl backdrop-blur sm:left-8">
                        <p className="text-[10px] font-semibold tracking-[0.25em] text-[#8a6a48] uppercase">
                            The Taste of Inspiration
                        </p>

                        <p className="mt-2 text-lg font-medium text-stone-900">
                            From plate to canvas
                        </p>

                        <p className="mt-1 text-xs leading-5 text-stone-400">
                            Two passions. One creative journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll detail */}
            <div className="relative mx-auto mt-24 hidden max-w-7xl items-center gap-4 lg:flex">
                <span className="text-[9px] font-semibold tracking-[0.3em] text-stone-400 uppercase">
                    Discover the story
                </span>

                <div className="h-px w-16 bg-stone-300" />
            </div>
        </section>
    );
}
