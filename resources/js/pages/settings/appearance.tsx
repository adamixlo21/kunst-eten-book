
import { Head } from '@inertiajs/react';
import { Palette } from 'lucide-react';

import AppearanceTabs from '@/components/appearance-tabs';

export default function Appearance() {
    return (
        <>
            <Head title="Appearance | The Taste of Inspiration" />

            <main className="min-h-full bg-[#f7f3ec] px-5 py-10 text-[#25221f] sm:px-8 lg:px-12 lg:py-14">
                <div className="mx-auto max-w-3xl">

                    {/* Page heading */}
                    <div className="mb-10">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-px w-9 bg-[#8a6a48]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a6a48]">
                                The Taste of Inspiration
                            </span>
                        </div>

                        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a6a48]">
                            Account Settings
                        </p>

                        <h1 className="font-serif text-4xl font-light tracking-[-0.04em] sm:text-5xl">
                            Your
                            <span className="italic text-[#8a6a48]">
                                {' '}Appearance
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#746b61]">
                            Personalize the appearance of your administration
                            dashboard to suit your preferences.
                        </p>
                    </div>

                    {/* Appearance settings */}
                    <div className="border border-[#d9cec0] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(70,55,40,0.04)] sm:p-9">
                        <div className="mb-7 flex items-center gap-3 border-b border-[#d9cec0] pb-6">
                            <div className="flex h-11 w-11 items-center justify-center bg-[#eee7dc] text-[#8a6a48]">
                                <Palette size={21} strokeWidth={1.5} />
                            </div>

                            <div>
                                <h2 className="font-serif text-xl font-light text-[#25221f]">
                                    Display Preferences
                                </h2>

                                <p className="mt-1 text-xs text-[#746b61]">
                                    Choose your preferred appearance.
                                </p>
                            </div>
                        </div>

                        <AppearanceTabs />
                    </div>

                    {/* Footer note */}
                    <div className="mt-10 border-t border-[#d9cec0] pt-6">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]">
                            The Taste of Inspiration · Administration
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
