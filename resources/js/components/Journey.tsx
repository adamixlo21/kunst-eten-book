
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
    {
        number: '01',
        title: 'The Paintings',
        subtitle: 'Art that expresses',
        description:
            'Nour brings emotion and imagination to life through five original paintings. Each work has its own character and story.',
    },
    {
        number: '02',
        title: 'The Cuisine',
        subtitle: 'Flavour that connects',
        description:
            'Patrick brings his creativity to the table through five culinary creations, exploring flavour, ingredients and presentation.',
    },
    {
        number: '03',
        title: 'The Book',
        subtitle: 'Two worlds, one story',
        description:
            'The Taste of Inspiration brings these paintings and dishes together, inviting readers to experience art and food in a new way.',
    },
];

export default function Journey() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="journey"
            aria-labelledby="journey-heading"
            className="relative overflow-hidden bg-[#faf8f4] text-[#25221f]"
        >
            <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
                {/* Section heading */}
                <div className="flex items-center justify-between gap-4 border-b border-[#70512f]/25 pb-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                        02 / The Journey
                    </p>

                    <span className="text-xs font-medium text-[#564b40]">
                        Art &amp; Gastronomy
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
                    transition={{ duration: 0.8, ease }}
                    className="mx-auto max-w-3xl py-12 text-center sm:py-16 lg:py-20"
                >
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                        Inside The Taste of Inspiration
                    </p>

                    <h2
                        id="journey-heading"
                        className="font-serif text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[1.1] tracking-[-0.045em]"
                    >
                        Two creative worlds.
                        <span className="block italic text-[#70512f]">
                            One experience.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#564b40] sm:text-lg">
                        The Taste of Inspiration is a celebration of
                        creativity in two forms: painting and cooking.
                        Discover how five artworks and five culinary
                        creations come together in one book.
                    </p>
                </motion.div>

                {/* Three-part journey */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                    {steps.map((step, index) => (
                        <motion.article
                            key={step.number}
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 20 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                                ease,
                            }}
                            className="flex h-full flex-col border border-[#d8cbb9] bg-[#eee7dc] p-6 sm:p-8 lg:p-9"
                        >
                            {/* Step number */}
                            <div className="flex items-center justify-between border-b border-[#70512f]/20 pb-5">
                                <span className="font-serif text-3xl text-[#70512f]">
                                    {step.number}
                                </span>

                                <span className="text-xs font-medium text-[#564b40]">
                                    / 03
                                </span>
                            </div>

                            {/* Title and description */}
                            <div className="flex-1 pt-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#70512f]">
                                    {step.subtitle}
                                </p>

                                <h3 className="mt-3 font-serif text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl">
                                    {step.title}
                                </h3>

                                <p className="mt-5 text-base leading-8 text-[#564b40]">
                                    {step.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Closing statement */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease }}
                    className="mx-auto mt-14 max-w-2xl text-center sm:mt-20"
                >
                    <p className="font-serif text-2xl font-light leading-relaxed text-[#25221f] sm:text-3xl">
                        A book to explore with your eyes,
                        <span className="italic text-[#70512f]">
                            {' '}and imagine through your senses.
                        </span>
                    </p>
                </motion.div>

                {/* Bottom navigation */}
                <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-[#70512f]/25 pt-6 sm:mt-20">
                    <p className="text-sm text-[#564b40]">
                        Five paintings. Five dishes. One book.
                    </p>

                    <a
                        href="#paintings"
                        className="group inline-flex min-h-11 items-center gap-3 border-b border-[#70512f] text-sm font-semibold text-[#70512f] transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                    >
                        Explore the Paintings
                        <ArrowUpRight
                            size={18}
                            aria-hidden="true"
                            className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
