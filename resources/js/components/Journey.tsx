
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const steps = ['Food', 'Emotion', 'Art'];

export default function Journey() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="journey"
            className="relative overflow-hidden bg-[#f7f3ec] text-[#25221f]"
        >
            <div className="mx-auto max-w-[1300px] px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">

                {/* TOP DIVIDER */}
                <div className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/25 pb-4">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.3em]">
                        02 / The Journey
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#8a6a48]/70 sm:text-[9px]">
                        Art × Food
                    </span>
                </div>

                {/* MAIN CONTENT */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 24,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.9,
                        ease,
                    }}
                    className="flex flex-col items-center py-10 text-center sm:py-12 lg:py-14"
                >
                    {/* SMALL LABEL */}
                    <p className="mb-5 text-[8px] font-medium uppercase tracking-[0.3em] text-[#8a6a48] sm:text-[9px]">
                        From One Expression to Another
                    </p>

                    {/* MAIN HEADING */}
                    <h2 className="max-w-[850px] font-serif text-[clamp(2.3rem,6vw,5.5rem)] font-light leading-[1.08] tracking-[-0.045em]">
                        Where flavour becomes
                        <span className="block italic text-[#8a6a48]">
                            inspiration.
                        </span>
                    </h2>

                    {/* DECORATIVE LINE */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : { scaleX: 0 }
                        }
                        whileInView={{
                            scaleX: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease,
                        }}
                        style={{
                            transformOrigin: 'center',
                        }}
                        className="mt-7 h-px w-12 bg-[#8a6a48]/60 sm:mt-8"
                    />

                    {/* JOURNEY STEPS */}
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:mt-8 sm:gap-x-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step}
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            y: 10,
                                        }
                                }
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease,
                                }}
                                className="flex items-center gap-3 sm:gap-6"
                            >
                                <span
                                    className={`font-serif text-lg font-light italic sm:text-xl ${
                                        index === steps.length - 1
                                            ? 'text-[#8a6a48]'
                                            : 'text-[#62584c]'
                                    }`}
                                >
                                    {step}
                                </span>

                                {index < steps.length - 1 && (
                                    <ArrowRight
                                        size={15}
                                        strokeWidth={1.2}
                                        className="text-[#8a6a48]/60"
                                        aria-hidden="true"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* BOTTOM DIVIDER */}
                <div className="flex items-center justify-between gap-4 border-t border-[#8a6a48]/25 pt-4">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#8a6a48]/70 sm:text-[9px]">
                        The Story
                    </span>

                    <a
                        href="#paintings"
                        className="group inline-flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] transition-colors duration-300 hover:text-[#25221f] sm:text-[9px]"
                    >
                        The Paintings

                        <ArrowRight
                            size={14}
                            strokeWidth={1.4}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
