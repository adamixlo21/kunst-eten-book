
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const people = [
    {
        number: '01',
        name: 'Nour',
        role: 'The Artist',
        image: '/images/nour.jpg',
        alt: 'Nour, the artist behind The Taste of Inspiration',
        quote: 'Painting gives me peace, joy and energy.',
        words: 'Colour / Emotion / Imagination',
    },
    {
        number: '02',
        name: 'Patrick',
        role: 'The Chef',
        image: '/images/patrick.jpg',
        alt: 'Patrick, the chef behind The Taste of Inspiration',
        quote: 'Cook from the heart, and follow the seasons.',
        words: 'Flavour / Craft / Seasonality',
    },
];

export default function OurStory() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="story"
            className="relative overflow-hidden bg-[#eee7dc] text-[#25221f]"
        >
            <div className="mx-auto max-w-[1300px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">

                {/* CHAPTER HEADER */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 15 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease }}
                    className="flex items-start justify-between gap-4 border-b border-[#8a6a48]/25 pb-4"
                >
                    <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:tracking-[0.35em]">
                            01 / Two Stories
                        </p>

                        <p className="mt-1.5 text-[9px] uppercase tracking-[0.2em] text-stone-500">
                            Nour & Patrick
                        </p>
                    </div>

                    <span className="text-right text-[9px] uppercase tracking-[0.2em] text-stone-500">
                        Art × Food
                    </span>
                </motion.div>

                {/* MAIN HEADING */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 25 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease }}
                    className="py-9 text-center sm:py-12 lg:py-14"
                >
                    <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.05] tracking-[-0.05em]">
                        Two passions.
                        <span className="block italic text-[#8a6a48]">
                            One vision.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-[12px] leading-6 text-[#746b61] sm:text-sm sm:leading-7">
                        Two creative worlds, brought together
                        through food, art and inspiration.
                    </p>
                </motion.div>

                {/* EDITORIAL PORTRAITS */}
                <div className="mx-auto grid max-w-[1050px] grid-cols-2 gap-3 sm:gap-6 lg:gap-10">
                    {people.map((person, index) => (
                        <motion.article
                            key={person.name}
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 30 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.9,
                                delay: index * 0.15,
                                ease,
                            }}
                            className="min-w-0"
                        >
                            {/* PHOTO */}
                            <div className="group relative overflow-hidden bg-[#ded5c8]">
                                <motion.img
                                    src={person.image}
                                    alt={person.alt}
                                    initial={
                                        reduceMotion
                                            ? false
                                            : { scale: 1.07 }
                                    }
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.4,
                                        delay: index * 0.15,
                                        ease,
                                    }}
                                    className="h-[230px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] sm:h-[350px] lg:h-[430px]"
                                />

                                {/* IMAGE NUMBER */}
                                <span className="absolute left-3 top-3 text-[9px] font-medium tracking-[0.2em] text-white drop-shadow-md sm:left-5 sm:top-5">
                                    {person.number} / 02
                                </span>
                            </div>

                            {/* CAPTION */}
                            <div className="mt-4 flex items-start justify-between gap-2 border-b border-[#8a6a48]/20 pb-4 sm:mt-5 sm:pb-5">
                                <div className="min-w-0">
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.28em]">
                                        {person.role}
                                    </p>

                                    <h3 className="mt-1.5 font-serif text-[1.8rem] font-light leading-none tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                                        {person.name}
                                    </h3>
                                </div>

                                <span className="hidden max-w-[140px] text-right text-[8px] uppercase leading-5 tracking-[0.12em] text-stone-500 sm:block">
                                    {person.words}
                                </span>
                            </div>

                            {/* SMALL QUOTE */}
                            <p className="mt-4 max-w-sm font-serif text-[15px] italic leading-[1.4] text-[#62584c] sm:mt-5 sm:text-xl lg:text-2xl">
                                “{person.quote}”
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* SHARED STATEMENT */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease }}
                    className="mx-auto mt-12 max-w-3xl border-t border-[#8a6a48]/25 pt-8 text-center sm:mt-16 sm:pt-10"
                >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48]">
                        The Connection
                    </p>

                    <p className="mt-4 font-serif text-[1.7rem] font-light leading-[1.2] tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                        One creates with colour.
                        <span className="block italic text-[#8a6a48]">
                            The other with flavour.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
