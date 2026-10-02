import {
    ChefHat,
    Eye,
    Palette,
    Sparkles,
} from 'lucide-react';

const steps = [
    {
        icon: ChefHat,
        number: '01',
        title: 'Create',
        text: 'Patrick creates an experience through food.',
    },
    {
        icon: Eye,
        number: '02',
        title: 'Experience',
        text: 'Nour tastes, observes and feels.',
    },
    {
        icon: Sparkles,
        number: '03',
        title: 'Inspire',
        text: 'Taste becomes colour, memory and emotion.',
    },
    {
        icon: Palette,
        number: '04',
        title: 'Transform',
        text: 'The experience finds a new life on canvas.',
    },
];

export default function Journey() {
    return (
        <section
            id="journey"
            className="bg-[#f7f3ec] px-6 py-24 text-stone-900 lg:px-10 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-8 bg-[#8a6a48]" />

                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            The Journey
                        </p>

                        <div className="h-px w-8 bg-[#8a6a48]" />
                    </div>

                    <h2 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl">
                        From plate
                        <span className="italic text-[#8a6a48]">
                            {' '}to canvas.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-500">
                        One creative expression becomes the inspiration
                        for another.
                    </p>
                </div>

                {/* STEPS */}
                <div className="relative mt-16">

                    {/* CONNECTING LINE */}
                    <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-stone-300 lg:block" />

                    <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="text-center"
                                >
                                    {/* ICON */}
                                    <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#8a6a48]/25 bg-[#f7f3ec]">
                                        <Icon
                                            size={22}
                                            strokeWidth={1.3}
                                            className="text-[#8a6a48]"
                                        />
                                    </div>

                                    <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                        {step.number}
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl">
                                        {step.title}
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-stone-500">
                                        {step.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* QUOTE */}
                <div className="mx-auto mt-16 max-w-3xl border-t border-stone-300 pt-12 text-center">
                    <p className="font-serif text-2xl font-light italic leading-relaxed text-stone-700 sm:text-3xl">
                        “A taste became an image.
                        <span className="text-[#8a6a48]">
                            {' '}An image became a feeling.”
                        </span>
                    </p>

                    <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                        Plate → Experience → Canvas
                    </p>
                </div>

            </div>
        </section>
    );
}
