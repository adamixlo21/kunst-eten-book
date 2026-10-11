
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ClosingSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="invitation"
            className="relative overflow-hidden bg-[#eee7dc] text-[#25221f]"
        >
            <div className="mx-auto max-w-[1300px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">

                {/* CHAPTER HEADER */}
                <div className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/25 pb-4">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[9px]">
                        05 / An Invitation
                    </span>

                    <span className="text-right text-[8px] uppercase tracking-[0.2em] text-[#746b61] sm:text-[9px]">
                        The Taste of Inspiration
                    </span>
                </div>

                {/* MAIN CONTENT */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 25 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease }}
                    className="grid gap-7 py-12 sm:py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16"
                >
                    {/* HEADING */}
                    <div>
                        <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.28em] text-[#8a6a48]">
                            From Our Story to Yours
                        </p>

                        <h2 className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[1.02] tracking-[-0.05em]">
                            Now it's
                            <span className="block italic text-[#8a6a48]">
                                your turn.
                            </span>
                        </h2>
                    </div>

                    {/* INVITATION */}
                    <div className="lg:border-l lg:border-[#8a6a48]/25 lg:pl-12">
                        <p className="max-w-md font-serif text-xl font-light leading-[1.45] text-[#62584c] sm:text-2xl">
                            Look closer. Feel something.
                            Find your own inspiration
                            in the experience.
                        </p>

                        <Link
                            href="/paintings"
                            className="group mt-8 inline-flex items-center gap-4 border-b border-[#8a6a48] pb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8a6a48] transition-colors duration-300 hover:border-[#25221f] hover:text-[#25221f] sm:mt-10"
                        >
                            Explore the Collection

                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.4}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </motion.div>

                {/* FINAL DIVIDER */}
                <div className="flex items-center justify-between gap-4 border-t border-[#8a6a48]/25 pt-4">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#746b61]">
                        Nour & Patrick
                    </span>

                    <span className="text-right text-[8px] uppercase tracking-[0.2em] text-[#8a6a48]">
                        Food · Art · Inspiration
                    </span>
                </div>
            </div>
        </section>
    );
}
