import { Link } from '@inertiajs/react';

const paintings = [
    {
        title: 'Beyond the Surface',
        slug: 'beyond-the-surface',
        course: 'The Starters',
        description:
            'An invitation to look beyond what is immediately visible — to pause, observe and discover what lies beneath the surface.',
        image: '/images/paintings/beyond-the-surface.jpg',
    },
    {
        title: 'Essence',
        slug: 'essence',
        course: 'The Starters',
        description:
            'A celebration of the human form, presence and feeling. Some things do not need to be explained — only experienced.',
        image: '/images/paintings/essence.jpg',
    },
    {
        title: 'The Silent Melody',
        slug: 'the-silent-melody',
        course: 'The Main Courses',
        description:
            'A melody suspended between silence and memory — a quiet moment where emotion speaks without words.',
        image: '/images/paintings/the-silent-melody.jpg',
    },
    {
        title: 'A Moment to Savour',
        slug: 'a-moment-to-savour',
        course: 'The Main Courses',
        description:
            'A moment to slow down, taste, feel and simply be present — because some experiences are meant to be savoured.',
        image: '/images/paintings/a-moment-to-savour.jpg',
    },
    {
        title: 'In Bloom',
        slug: 'in-bloom',
        course: 'The Dessert',
        description:
            'A quiet expression of beauty, growth and renewal — a reminder to pause and notice what is unfolding around us.',
        image: '/images/paintings/in-bloom.jpg',
    },
];

export default function PaintingsSection() {
    return (
        <section
            id="paintings"
            className="relative overflow-hidden bg-[#f7f3ec] px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            {/* Background decoration */}
            <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-[#8a6a48]/5 blur-3xl" />

            <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-white/60 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-4">
                            <div className="h-px w-10 bg-[#8a6a48]" />

                            <p className="text-xs font-semibold tracking-[0.35em] text-[#8a6a48] uppercase">
                                The Paintings
                            </p>
                        </div>

                        <h2 className="max-w-3xl text-4xl leading-[1.08] font-light tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                            Five dishes.
                            <br />

                            <span className="text-stone-500">
                                Five artistic responses.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-stone-500 lg:justify-self-end">
                        Each painting began with an experience at the table.
                        Nour translated flavour, colour, atmosphere and
                        emotion into a new creation on canvas.
                    </p>
                </div>

                {/* Paintings */}
                <div className="grid gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
                    {paintings.map((painting, index) => (
                        <article
                            key={painting.slug}
                            className={`group ${
                                index === 1 || index === 4
                                    ? 'lg:mt-20'
                                    : ''
                            }`}
                        >
                            <Link
                                href={`/paintings/${painting.slug}`}
                                className="block"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_20px_50px_rgba(70,55,40,0.08)]">
                                    <img
                                        src={painting.image}
                                        alt={painting.title}
                                        className="aspect-[4/5] h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                    {/* Number */}
                                    <div className="absolute top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-medium text-white backdrop-blur-md">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Course */}
                                    <div className="absolute top-5 right-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
                                        <p className="text-[9px] font-semibold tracking-[0.2em] text-white uppercase">
                                            {painting.course}
                                        </p>
                                    </div>

                                    {/* Hover text */}
                                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
                                            Discover the Story
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-1 pt-6">
                                    <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-[#8a6a48] uppercase">
                                        {painting.course}
                                    </p>

                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <h3 className="text-2xl font-light tracking-[-0.02em] text-stone-900">
                                                {painting.title}
                                            </h3>

                                            <p className="mt-4 max-w-sm text-sm leading-7 text-stone-500">
                                                {painting.description}
                                            </p>
                                        </div>

                                        <span className="text-xs font-medium text-[#8a6a48]">
                                            {String(index + 1).padStart(
                                                2,
                                                '0',
                                            )}
                                        </span>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-sm font-medium text-stone-800">
                                            Discover the Story
                                        </span>

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>

                                    <div className="mt-5 h-px w-full bg-stone-300/70 transition duration-500 group-hover:bg-[#8a6a48]" />
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-24 flex flex-col gap-6 border-t border-stone-300/70 pt-9 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#8a6a48] uppercase">
                            The Collection
                        </p>

                        <p className="mt-2 text-sm text-stone-500">
                            Discover the stories behind all five original
                            paintings.
                        </p>
                    </div>

                    <Link
                        href="/paintings"
                        className="group inline-flex items-center gap-3 text-sm font-medium text-stone-900"
                    >
                        Explore All Paintings

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
