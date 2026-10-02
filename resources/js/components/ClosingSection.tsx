import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function ClosingSection() {
    return (
        <section className="relative overflow-hidden bg-[#eee6da] px-6 py-24 text-[#25231f] md:py-32 lg:px-10 lg:py-40">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-white/30 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#8a6a48]/10 blur-3xl" />

            <div className="relative mx-auto max-w-5xl text-center">
                {/* Label */}
                <div className="flex items-center justify-center gap-4">
                    <span className="h-px w-10 bg-[#8a6a48]" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8a6a48]">
                        The Taste of Inspiration
                    </p>

                    <span className="h-px w-10 bg-[#8a6a48]" />
                </div>

                {/* Heading */}
                <h2 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl">
                    The story continues
                    <span className="block italic text-[#8a6a48]">
                        with you.
                    </span>
                </h2>

                {/* Story */}
                <div className="mx-auto mt-10 max-w-2xl">
                    <p className="text-base leading-8 text-[#625e57] md:text-lg md:leading-9">
                        Food can create a memory. Art can create a feeling.
                        Here, the two meet in one shared journey — from
                        Patrick&apos;s plate to Nour&apos;s canvas, and
                        finally to you.
                    </p>

                    <p className="mt-5 text-sm leading-7 text-[#77716a]">
                        Take your time. Look. Feel. Listen. Smell. Taste.
                        Create. Share. And perhaps, somewhere along the way,
                        discover something new within yourself.
                    </p>
                </div>

                {/* Divider */}
                <div className="mx-auto my-12 h-px w-20 bg-[#b9a58d]" />

                {/* Quote */}
                <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-relaxed text-[#4f4942] md:text-3xl">
                    “Where flavour becomes colour,
                    <span className="block">
                        and food becomes art.”
                    </span>
                </p>

                {/* Actions */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/paintings"
                        className="group flex min-w-[210px] items-center justify-center gap-3 rounded-full bg-[#25231f] px-8 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a6a48]"
                    >
                        Explore the Paintings

                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                    <a
                        href="#book"
                        className="min-w-[210px] rounded-full border border-[#b9aa98] bg-white/40 px-8 py-4 text-sm font-medium text-[#49453f] transition duration-300 hover:-translate-y-0.5 hover:border-[#8a6a48] hover:bg-white hover:text-[#8a6a48]"
                    >
                        Discover the Book
                    </a>
                </div>
            </div>
        </section>
    );
}
