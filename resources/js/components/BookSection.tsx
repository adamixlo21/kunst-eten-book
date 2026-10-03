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
            <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-16 lg:py-32">

                {/* =====================================================
                    CHAPTER HEADER
                ===================================================== */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 20,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 0.9,
                        ease,
                    }}
                    className="flex items-center justify-between border-b border-[#8a6a48]/25 pb-4"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            04 / The Book
                        </span>

                        <span className="hidden h-px w-10 bg-[#8a6a48]/40 sm:block" />

                        <span className="hidden text-[9px] uppercase tracking-[0.28em] text-stone-400 sm:block">
                            The Taste of Inspiration
                        </span>
                    </div>

                    <span className="text-[8px] uppercase tracking-[0.28em] text-stone-400">
                        Food × Art
                    </span>
                </motion.div>

                {/* =====================================================
                    LARGE TITLE
                ===================================================== */}
                <div className="pb-14 pt-16 lg:pb-20 lg:pt-20">
                    <motion.p
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
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease,
                        }}
                        className="mb-6 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]"
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
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.1,
                                ease,
                            }}
                            className="font-serif text-[15vw] font-light uppercase leading-[0.75] tracking-[-0.07em] sm:text-[12vw] lg:text-[8.5rem] xl:text-[10rem]"
                        >
                            The Book
                        </motion.h2>
                    </div>
                </div>

                {/* =====================================================
                    BOOK COMPOSITION
                ===================================================== */}
                <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">

                    {/* =================================================
                        BOOK IMAGE
                    ================================================= */}
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    x: -60,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 1.1,
                            ease,
                        }}
                        className="relative"
                    >
                        {/* LARGE NUMBER */}
                        <span className="pointer-events-none absolute -left-3 -top-10 z-0 font-serif text-[8rem] font-light leading-none text-[#8a6a48]/10 sm:text-[11rem] lg:-left-8 lg:-top-16 lg:text-[15rem]">
                            04
                        </span>

                        {/* IMAGE AREA */}
                        <div className="relative z-10 flex min-h-[430px] items-center justify-center border-y border-[#8a6a48]/20 py-10 sm:min-h-[560px] lg:min-h-[620px]">

                            {/* VERTICAL TEXT */}
                            <p className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 text-[7px] uppercase tracking-[0.35em] text-stone-400 sm:block">
                                Flavour · Colour · Memory · Imagination
                            </p>

                            <motion.img
                                src="/images/book cover.png"
                                alt="The Taste of Inspiration book"
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            y: 50,
                                            scale: 0.96,
                                        }
                                }
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.15,
                                    ease,
                                }}
                                whileHover={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            y: -8,
                                            rotate: -1,
                                        }
                                }
                                className="relative z-10 max-h-[420px] w-auto max-w-[80%] object-contain drop-shadow-[0_35px_30px_rgba(37,34,31,0.18)] sm:max-h-[520px] lg:max-h-[570px]"
                            />

                            {/* IMAGE CAPTION */}
                            <div className="absolute bottom-3 left-0">
                                <p className="text-[7px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    04.1 / The Object
                                </p>
                            </div>

                            <div className="absolute bottom-3 right-0 text-right">
                                <p className="text-[7px] uppercase tracking-[0.25em] text-stone-400">
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
                                    x: 50,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                            ease,
                        }}
                    >
                        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                            The Taste of Inspiration
                        </p>

                        <h3 className="mt-6 max-w-lg font-serif text-5xl font-light leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                            Where flavour
                            <span className="block italic text-[#8a6a48]">
                                becomes colour.
                            </span>
                        </h3>

                        {/* SHORT TEASER */}
                        <p className="mt-8 max-w-md text-sm leading-7 text-stone-500">
                            A sensory journey through food, art and the moments
                            that connect them.
                        </p>

                        {/* QUOTE */}
                        <div className="mt-10 border-l border-[#8a6a48] pl-6">
                            <p className="max-w-md font-serif text-2xl font-light italic leading-[1.35] text-stone-700">
                                “A taste became an image.
                                <span className="block">
                                    An image became a feeling.”
                                </span>
                            </p>
                        </div>

                        {/* =================================================
                            NUMBERS
                        ================================================= */}
                        <div className="mt-12 grid grid-cols-3 border-y border-[#8a6a48]/20">
                            <div className="py-5">
                                <p className="font-serif text-3xl font-light">
                                    5
                                </p>

                                <p className="mt-1 text-[7px] uppercase tracking-[0.22em] text-stone-400">
                                    Paintings
                                </p>
                            </div>

                            <div className="border-x border-[#8a6a48]/20 px-5 py-5">
                                <p className="font-serif text-3xl font-light">
                                    5
                                </p>

                                <p className="mt-1 text-[7px] uppercase tracking-[0.22em] text-stone-400">
                                    Creations
                                </p>
                            </div>

                            <div className="pl-5 py-5">
                                <p className="font-serif text-3xl font-light">
                                    1
                                </p>

                                <p className="mt-1 text-[7px] uppercase tracking-[0.22em] text-stone-400">
                                    Journey
                                </p>
                            </div>
                        </div>

                        {/* =================================================
                            PRODUCT
                        ================================================= */}
                        <div className="mt-10 flex items-end justify-between gap-6">
                            <div>
                                <p className="text-[8px] uppercase tracking-[0.28em] text-stone-400">
                                    Hardcover Book
                                </p>

                                <p className="mt-2 font-serif text-xl font-light">
                                    The Taste of Inspiration
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-[7px] uppercase tracking-[0.28em] text-stone-400">
                                    Price
                                </p>

                                <p className="mt-1 font-serif text-3xl font-light">
                                    €249.99
                                </p>
                            </div>
                        </div>

                        {/* =================================================
                            ORDER
                        ================================================= */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <button
                                type="button"
                                onClick={handleOrder}
                                className="group inline-flex items-center justify-center gap-4 bg-[#25221f] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f7f3ec] transition-colors duration-300 hover:bg-[#8a6a48]"
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
                                className="group inline-flex items-center justify-center gap-4 border border-[#8a6a48]/30 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 hover:border-[#8a6a48] hover:text-[#8a6a48]"
                            >
                                Explore Paintings

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>

                        {/* SMALL END NOTE */}
                        <div className="mt-9 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#8a6a48]/50" />

                            <p className="text-[7px] uppercase tracking-[0.28em] text-stone-400">
                                Look · Feel · Taste · Create
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
                    CHAPTER END
                ===================================================== */}
                <div className="mt-20 flex items-center justify-between border-t border-[#8a6a48]/20 pt-5 lg:mt-28">
                    <span className="text-[7px] uppercase tracking-[0.3em] text-stone-400">
                        04 / The Book
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.3em] text-[#8a6a48]">
                        The story continues →
                    </span>
                </div>
            </div>
        </section>
    );
}
