
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const people = [
    {
        number: '01',
        name: 'Nour',
        role: 'The Artist',
        image: '/images/nour.webp',
        alt: 'Portrait of Nour',
        quote: 'Painting gives me peace, joy and energy.',
        description:
            'Through colour and expression, Nour creates paintings that invite us to feel, imagine and discover.',
    },
    {
        number: '02',
        name: 'Patrick',
        role: 'The Chef',
        image: '/images/patrick.webp',
        alt: 'Portrait of Patrick',
        quote: 'Cook from the heart, and follow the seasons.',
        description:
            'Through ingredients, flavour and creativity, Patrick brings his passion for cooking to every dish.',
    },
];

export default function OurStory() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="story"
            aria-labelledby="story-heading"
            className="relative overflow-hidden bg-[#eee7dc] text-[#25221f]"
        >
            <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
                {/* Section label */}
                <div className="flex items-center justify-between gap-4 border-b border-[#70512f]/25 pb-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                        01 / Our Story
                    </p>

                    <span className="text-xs font-medium text-[#564b40]">
                        Nour &amp; Patrick
                    </span>
                </div>

                {/* Introduction */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease }}
                    className="mx-auto max-w-3xl py-12 text-center sm:py-16 lg:py-20"
                >
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                        Meet the Creators
                    </p>

                    <h2
                        id="story-heading"
                        className="font-serif text-[clamp(2.75rem,6vw,5.75rem)] font-light leading-[1.08] tracking-[-0.045em]"
                    >
                        Two passions.
                        <span className="block italic text-[#70512f]">
                            One vision.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#564b40] sm:text-lg">
                        An artist and a chef, each with their own way of
                        creating. Together, they bring art and gastronomy
                        into one shared story.
                    </p>
                </motion.div>

                {/* Creators */}
                <div className="mx-auto grid max-w-[1050px] grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 lg:gap-12">
                    {people.map((person, index) => (
                        <motion.article
                            key={person.name}
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 24 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                                ease,
                            }}
                            className="min-w-0"
                        >
                            {/* Portrait */}
                            <div className="group relative aspect-[4/4.5] overflow-hidden bg-[#ded5c8] sm:aspect-[4/5]">
                                <img
                                    src={person.image}
                                    alt={person.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                                />

                                <span className="absolute left-4 top-4 bg-[#faf8f4]/95 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-[#25221f] sm:left-5 sm:top-5">
                                    {person.number} / 02
                                </span>
                            </div>

                            {/* Identity */}
                            <div className="mt-6 border-b border-[#70512f]/25 pb-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                                    {person.role}
                                </p>

                                <h3 className="mt-2 font-serif text-4xl font-light tracking-[-0.04em] sm:text-5xl">
                                    {person.name}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="mt-5 max-w-md text-base leading-8 text-[#564b40]">
                                {person.description}
                            </p>

                            {/* Personal quote */}
                            <blockquote className="mt-6 border-l-2 border-[#70512f] pl-5">
                                <p className="font-serif text-xl italic leading-relaxed text-[#453b32] sm:text-2xl">
                                    “{person.quote}”
                                </p>
                            </blockquote>
                        </motion.article>
                    ))}
                </div>

                {/* Connection */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease }}
                    className="mx-auto mt-16 max-w-3xl border-t border-[#70512f]/25 pt-10 text-center sm:mt-20 sm:pt-14"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                        The Connection
                    </p>

                    <p className="mt-5 font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.25] tracking-[-0.03em]">
                        One creates with colour.
                        <span className="block italic text-[#70512f]">
                            The other with flavour.
                        </span>
                    </p>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#564b40]">
                        Different forms of creativity, brought together
                        through a shared appreciation for beauty,
                        imagination and experience.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
