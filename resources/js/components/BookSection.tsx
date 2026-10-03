import { Link } from '@inertiajs/react';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { useBookCart } from '@/components/BookCartContext';

const ease = [0.16, 1, 0.3, 1] as const;

export default function BookSection() {
    const { quantity, setQuantity, openCart } = useBookCart();
    const reduceMotion = useReducedMotion();

    const handleOrder = () => {
        if (quantity === 0) {
            setQuantity(1);
        }

        openCart();
    };

    return (
        <section
            id="book"
            className="relative overflow-hidden bg-[#f7f3ec] text-[#25221f]"
        >
            <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">

                {/* =====================================================
                    CHAPTER HEADER
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 15,
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
                        duration: 0.8,
                        ease,
                    }}
                    className="flex items-start justify-between gap-5 border-b border-[#8a6a48]/25 pb-4"
                >
                    <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[9px] sm:tracking-[0.35em]">
                            04 / The Book
                        </p>

                        <p className="mt-1.5 text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                            The Taste of Inspiration
                        </p>
                    </div>

                    <span className="shrink-0 text-[7px] uppercase tracking-[0.2em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                        Food × Art
                    </span>
                </motion.div>

                {/* =====================================================
                    TITLE
                ===================================================== */}
                <div className="py-12 sm:py-16 lg:py-20">
                    <motion.p
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 12,
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
                            duration: 0.8,
                            ease,
                        }}
                        className="mb-4 text-[7px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48] sm:mb-6 sm:text-[8px] sm:tracking-[0.35em]"
                    >
                        The Story Continues
                    </motion.p>

                    <div className="overflow-hidden">
                        <motion.h2
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                        y: '110%',
                                    }
                            }
                            whileInView={{
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1.1,
                                ease,
                            }}
                            className="font-serif text-[14vw] font-light uppercase leading-[0.8] tracking-[-0.065em] sm:text-[11vw] lg:text-[7.5rem] xl:text-[9rem]"
                        >
                            The Book
                        </motion.h2>
                    </div>
                </div>

                {/* =====================================================
                    BOOK COMPOSITION

                    Phone = stacked
                    Desktop = two columns
                    Same content everywhere
                ===================================================== */}
                <div className="grid gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">

                    {/* =================================================
                        BOOK IMAGE
                    ================================================= */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 30,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 1,
                            ease,
                        }}
                        className="relative"
                    >
                        {/* LARGE DECORATIVE NUMBER */}
                        <span className="pointer-events-none absolute -left-1 -top-7 z-0 font-serif text-[6rem] font-light leading-none text-[#8a6a48]/10 sm:-left-3 sm:-top-10 sm:text-[10rem] lg:-left-8 lg:-top-14 lg:text-[13rem]">
                            04
                        </span>

                        {/* IMAGE AREA */}
                        <div className="relative z-10 flex min-h-[390px] items-center justify-center border-y border-[#8a6a48]/20 px-4 pb-10 pt-14 sm:min-h-[520px] sm:px-8 sm:py-10 lg:min-h-[570px]">

                            {/* SAME TEXT ON ALL DEVICES */}
                            <p className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap text-[6px] uppercase tracking-[0.25em] text-stone-400 sm:left-0 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:-rotate-90 sm:text-[7px] sm:tracking-[0.35em]">
                                Flavour · Colour · Memory · Imagination
                            </p>

                            {/* BOOK */}
                            <motion.img
                                src="/images/book cover.png"
                                alt="The Taste of Inspiration book"
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            y: 35,
                                            scale: 0.97,
                                        }
                                }
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                }}
                                transition={{
                                    duration: 1.1,
                                    delay: 0.1,
                                    ease,
                                }}
                                whileHover={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            y: -6,
                                            rotate: -1,
                                        }
                                }
                                className="relative z-10 max-h-[330px] w-auto max-w-[78%] object-contain drop-shadow-[0_25px_25px_rgba(37,34,31,0.16)] sm:max-h-[460px] sm:max-w-[75%] lg:max-h-[520px]"
                            />

                            {/* CAPTION */}
                            <div className="absolute bottom-3 left-0">
                                <p className="text-[6px] font-semibold uppercase tracking-[0.22em] text-[#8a6a48] sm:text-[7px] sm:tracking-[0.3em]">
                                    04.1 / The Object
                                </p>
                            </div>

                            <div className="absolute bottom-3 right-0 text-right">
                                <p className="text-[6px] uppercase tracking-[0.2em] text-stone-400 sm:text-[7px] sm:tracking-[0.25em]">
                                    Hardcover
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* =================================================
                        BOOK INFORMATION
                    ================================================= */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 30,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.05,
                            ease,
                        }}
                    >
                        <p className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48] sm:text-[8px] sm:tracking-[0.35em]">
                            The Taste of Inspiration
                        </p>

                        <h3 className="mt-4 max-w-lg font-serif text-[2.7rem] font-light leading-[0.95] tracking-[-0.045em] sm:mt-6 sm:text-6xl lg:text-7xl">
                            Where flavour

                            <span className="block italic text-[#8a6a48]">
                                becomes colour.
                            </span>
                        </h3>

                        {/* TEASER */}
                        <p className="mt-5 max-w-md text-[13px] leading-6 text-stone-500 sm:mt-8 sm:text-sm sm:leading-7">
                            A sensory journey through food, art and the moments
                            that connect them.
                        </p>

                        {/* QUOTE */}
                        <div className="mt-7 border-l border-[#8a6a48] pl-4 sm:mt-10 sm:pl-6">
                            <p className="max-w-md font-serif text-xl font-light italic leading-[1.3] text-stone-700 sm:text-2xl sm:leading-[1.35]">
                                “A taste became an image.

                                <span className="block">
                                    An image became a feeling.”
                                </span>
                            </p>
                        </div>

                        {/* =================================================
                            NUMBERS
                        ================================================= */}
                        <div className="mt-8 grid grid-cols-3 border-y border-[#8a6a48]/20 sm:mt-12">
                            <div className="py-4 sm:py-5">
                                <p className="font-serif text-2xl font-light sm:text-3xl">
                                    5
                                </p>

                                <p className="mt-1 text-[6px] uppercase tracking-[0.16em] text-stone-400 sm:text-[7px] sm:tracking-[0.22em]">
                                    Paintings
                                </p>
                            </div>

                            <div className="border-x border-[#8a6a48]/20 px-3 py-4 sm:px-5 sm:py-5">
                                <p className="font-serif text-2xl font-light sm:text-3xl">
                                    5
                                </p>

                                <p className="mt-1 text-[6px] uppercase tracking-[0.16em] text-stone-400 sm:text-[7px] sm:tracking-[0.22em]">
                                    Creations
                                </p>
                            </div>

                            <div className="py-4 pl-3 sm:py-5 sm:pl-5">
                                <p className="font-serif text-2xl font-light sm:text-3xl">
                                    1
                                </p>

                                <p className="mt-1 text-[6px] uppercase tracking-[0.16em] text-stone-400 sm:text-[7px] sm:tracking-[0.22em]">
                                    Journey
                                </p>
                            </div>
                        </div>

                        {/* =================================================
                            PRODUCT
                        ================================================= */}
                        <div className="mt-8 flex items-end justify-between gap-5 sm:mt-10 sm:gap-6">
                            <div>
                                <p className="text-[7px] uppercase tracking-[0.22em] text-stone-400 sm:text-[8px] sm:tracking-[0.28em]">
                                    Hardcover Book
                                </p>

                                <p className="mt-1.5 max-w-[180px] font-serif text-lg font-light sm:mt-2 sm:max-w-none sm:text-xl">
                                    The Taste of Inspiration
                                </p>
                            </div>

                            <div className="shrink-0 text-right">
                                <p className="text-[6px] uppercase tracking-[0.22em] text-stone-400 sm:text-[7px] sm:tracking-[0.28em]">
                                    Price
                                </p>

                                <p className="mt-1 font-serif text-2xl font-light sm:text-3xl">
                                    €249.99
                                </p>
                            </div>
                        </div>

                        {/* =================================================
                            ACTIONS
                        ================================================= */}
                        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                            <button
                                type="button"
                                onClick={handleOrder}
                                className="group inline-flex w-full items-center justify-center gap-3 bg-[#25221f] px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#f7f3ec] transition-colors duration-300 hover:bg-[#8a6a48] sm:w-auto sm:gap-4 sm:px-7 sm:text-[9px] sm:tracking-[0.24em]"
                            >
                                <ShoppingBag
                                    size={15}
                                    strokeWidth={1.5}
                                />

                                Order the Book

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </button>

                            <Link
                                href="/paintings"
                                className="group inline-flex w-full items-center justify-center gap-3 border border-[#8a6a48]/30 px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48] sm:w-auto sm:gap-4 sm:px-7 sm:text-[9px] sm:tracking-[0.24em]"
                            >
                                Explore Paintings

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>

                        {/* END NOTE */}
                        <div className="mt-7 flex items-center gap-3 sm:mt-9 sm:gap-4">
                            <span className="h-px w-7 bg-[#8a6a48]/50 sm:w-10" />

                            <p className="text-[6px] uppercase tracking-[0.22em] text-stone-400 sm:text-[7px] sm:tracking-[0.28em]">
                                Look · Feel · Taste · Create
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
                    CHAPTER END
                ===================================================== */}
                <div className="mt-14 flex items-center justify-between gap-5 border-t border-[#8a6a48]/20 pt-5 sm:mt-20 lg:mt-24">
                    <span className="text-[6px] uppercase tracking-[0.22em] text-stone-400 sm:text-[7px] sm:tracking-[0.3em]">
                        04 / The Book
                    </span>

                    <span className="text-right text-[6px] uppercase tracking-[0.22em] text-[#8a6a48] sm:text-[7px] sm:tracking-[0.3em]">
                        The story continues →
                    </span>
                </div>
            </div>
        </section>
    );
}
