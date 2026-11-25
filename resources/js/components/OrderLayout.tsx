import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookCartProvider } from '@/components/BookCartContext';

type Props = {
    title: string;
    heading: string;
    accent: string;
    description?: string;
    backHref?: string;
    backLabel?: string;
    children: ReactNode;
};

export default function OrderLayout({
                                        title,
                                        heading,
                                        accent,
                                        description,
                                        backHref = '/',
                                        backLabel = 'Back to Home',
                                        children,
                                    }: Props) {
    return (
        <BookCartProvider>
            <Head title={`${title} | The Taste of Inspiration`}>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="referrer" content="no-referrer" />
            </Head>

            <Navbar />

            <main className="min-h-screen bg-[#faf8f4] text-[#25221f]">
                <div className="mx-auto max-w-[850px] px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">

                    <Link
                        href={backHref}
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#70512f] hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                        <ArrowLeft size={17} aria-hidden="true" />
                        {backLabel}
                    </Link>

                    <header className="mt-10 border-b border-[#70512f]/20 pb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                            Orders & Customer Care
                        </p>

                        <h1 className="mt-4 font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-[1.1] tracking-[-0.045em]">
                            {heading}{' '}
                            <span className="italic text-[#70512f]">
                                {accent}
                            </span>
                        </h1>

                        {description && (
                            <p className="mt-5 max-w-xl text-base leading-8 text-[#564b40]">
                                {description}
                            </p>
                        )}
                    </header>

                    <div className="mt-10">
                        {children}
                    </div>
                </div>
            </main>

            <Footer />
        </BookCartProvider>
    );
}
