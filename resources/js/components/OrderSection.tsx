import { useState } from 'react';

export default function OrderSection() {
    const [quantity, setQuantity] = useState(1);

    const price = 39.95;
    const total = price * quantity;

    return (
        <section
            id="bestellen"
            className="bg-[#f7f3ec] px-6 py-24 text-stone-900 lg:px-10 lg:py-32"
        >
            <div className="mx-auto max-w-5xl">
                <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12 lg:p-16">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#8a6a48]">
                                Bestellen
                            </p>

                            <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                                Haal Kunst Eten in huis.
                            </h2>

                            <p className="mt-6 max-w-lg leading-8 text-stone-600">
                                Ontdek vijf schilderijen, vijf gerechten en het
                                verhaal dat deze twee werelden met elkaar verbindt.
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-stone-200 bg-[#faf8f4] p-7">
                            <div className="flex items-center justify-between border-b border-stone-200 pb-5">
                                <div>
                                    <p className="font-medium">Kunst Eten</p>

                                    <p className="mt-1 text-sm text-stone-500">
                                        Hardcover boek
                                    </p>
                                </div>

                                <p className="text-xl font-medium">
                                    € {price.toFixed(2).replace('.', ',')}
                                </p>
                            </div>

                            <div className="mt-6">
                                <p className="mb-3 text-sm text-stone-500">
                                    Aantal
                                </p>

                                <div className="flex w-fit items-center rounded-full border border-stone-300 bg-white">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((current) =>
                                                Math.max(1, current - 1),
                                            )
                                        }
                                        className="px-5 py-3 text-lg"
                                    >
                                        −
                                    </button>

                                    <span className="min-w-10 text-center">
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((current) => current + 1)
                                        }
                                        className="px-5 py-3 text-lg"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="mt-7 flex items-center justify-between border-t border-stone-200 pt-6">
                                <span className="text-sm text-stone-500">
                                    Totaal
                                </span>

                                <span className="text-2xl font-medium">
                                    € {total.toFixed(2).replace('.', ',')}
                                </span>
                            </div>

                            <button
                                type="button"
                                className="mt-7 w-full rounded-full bg-stone-900 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#8a6a48]"
                            >
                                Verder naar bestellen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
