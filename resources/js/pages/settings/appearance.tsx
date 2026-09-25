import { Head } from '@inertiajs/react';
import AppearanceTabs from '@/components/appearance-tabs';

export default function Appearance() {
    return (
        <>
            <Head title="Weergave" />

            <div className="min-h-full bg-[#f7f3ec] p-6 text-stone-900 lg:p-10">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                            Kunst Eten
                        </p>

                        <h1 className="mt-3 text-4xl font-light tracking-tight">
                            Weergave
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500">
                            Kies hoe het beheerpaneel wordt weergegeven.
                        </p>
                    </div>

                    <div className="border border-stone-300 bg-white p-6 sm:p-8">
                        <AppearanceTabs />
                    </div>
                </div>
            </div>
        </>
    );
}
