
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { BookCartProvider } from '@/components/BookCartContext';

const sections = [
    {
        id: 'introduction',
        number: '01',
        title: 'Introduction',
        content:
            'The Taste of Inspiration respects your privacy. This Privacy Policy explains what personal information we collect, why we collect it and how we use it when you visit our website, place an order, submit a private offer on an artwork or contact us.',
    },
    {
        id: 'information-we-collect',
        number: '02',
        title: 'Information We Collect',
        content:
            'Depending on how you use the website, we may receive information such as your name, email address, telephone number, delivery details, order information, contact messages and information submitted with a private artwork offer.',
    },
    {
        id: 'how-we-use-your-information',
        number: '03',
        title: 'How We Use Your Information',
        content:
            'We use personal information to process and fulfil orders, communicate about purchases, respond to messages, handle private artwork offers and provide customer service.',
    },
    {
        id: 'payments',
        number: '04',
        title: 'Payments',
        content:
            'Online payments may be processed through external payment providers. Payment information handled directly by a payment provider is subject to that provider’s own privacy and security practices.',
    },
    {
        id: 'sharing-of-information',
        number: '05',
        title: 'Sharing of Information',
        content:
            'We do not sell your personal information. Information may be shared with service providers when this is necessary to operate the website, process payments, deliver an order or provide another service you have requested.',
    },
    {
        id: 'retention',
        number: '06',
        title: 'Retention',
        content:
            'Personal information is kept only for as long as reasonably necessary for the purpose for which it was collected and to meet applicable administrative, accounting or legal obligations.',
    },
    {
        id: 'your-rights',
        number: '07',
        title: 'Your Rights',
        content:
            'Depending on applicable law, you may have rights relating to your personal information, including requesting access, correction or deletion of certain personal data.',
    },
    {
        id: 'contact',
        number: '08',
        title: 'Contact',
        content:
            'If you have questions about this Privacy Policy or the way your information is handled, please contact us through the contact form on this website.',
    },
];

export default function PrivacyPolicy() {
    return (
        <BookCartProvider>
            <Head title="Privacy Policy | The Taste of Inspiration" />

            <Navbar />

            <main className="min-h-screen bg-[#f7f3ec] text-[#25221f]">

                {/* HERO */}
                <header className="relative overflow-hidden bg-[#eee7dc] px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-16 lg:pb-24">

                    {/* SUBTLE DECORATION */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full border border-[#8a6a48]/10 sm:h-[450px] sm:w-[450px]"
                    />

                    <div className="relative mx-auto max-w-[1300px]">

                        {/* TOP LABEL */}
                        <div className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/25 pb-4">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Legal / Privacy
                            </span>

                            <span className="text-right text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]/70">
                                The Taste of Inspiration
                            </span>
                        </div>

                        {/* TITLE */}
                        <div className="max-w-4xl pt-12 sm:pt-16">
                            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#8a6a48]">
                                <span className="h-px w-8 bg-[#8a6a48]" />
                                Your Privacy Matters
                            </p>

                            <h1 className="font-serif text-[clamp(3.8rem,9vw,8rem)] font-light leading-[0.95] tracking-[-0.055em]">
                                Privacy
                                <span className="block italic text-[#8a6a48]">
                                    Policy.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-[#62584c] sm:text-base sm:leading-8">
                                How we handle and protect the personal
                                information you share with The Taste of
                                Inspiration.
                            </p>
                        </div>

                        {/* HERO BOTTOM */}
                        <div className="mt-12 flex items-center justify-between gap-4 border-t border-[#8a6a48]/20 pt-4 sm:mt-16">
                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8a6a48]">
                                Transparency & Trust
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8a6a48]/70">
                                08 Sections
                            </span>
                        </div>
                    </div>
                </header>

                {/* LEGAL CONTENT */}
                <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
                    <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20">

                        {/* SIDEBAR */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-32">
                                <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48]">
                                    On This Page
                                </p>

                                <nav
                                    aria-label="Privacy policy sections"
                                    className="flex flex-col border-l border-[#8a6a48]/25"
                                >
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="group flex items-center gap-4 border-l border-transparent py-3 pl-5 text-sm text-[#746b61] transition-all duration-300 hover:border-[#8a6a48] hover:text-[#25221f]"
                                        >
                                            <span className="text-[10px] text-[#8a6a48]/60 transition-colors group-hover:text-[#8a6a48]">
                                                {section.number}
                                            </span>

                                            <span>
                                                {section.title}
                                            </span>
                                        </a>
                                    ))}
                                </nav>

                                <Link
                                    href="/"
                                    className="group mt-10 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:text-[#25221f]"
                                >
                                    <ArrowLeft
                                        size={15}
                                        strokeWidth={1.5}
                                        className="transition-transform group-hover:-translate-x-1"
                                    />
                                    Back to Home
                                </Link>
                            </div>
                        </aside>

                        {/* POLICY SECTIONS */}
                        <div className="min-w-0">

                            {/* INTRO TEXT */}
                            <div className="mb-12 border-b border-[#8a6a48]/25 pb-10 sm:mb-16">
                                <p className="font-serif text-2xl font-light leading-[1.4] tracking-[-0.025em] text-[#62584c] sm:text-3xl">
                                    Your trust is important to us.
                                    <span className="italic text-[#8a6a48]">
                                        {' '}Here is how we handle your information.
                                    </span>
                                </p>
                            </div>

                            {/* CONTENT */}
                            <div>
                                {sections.map((section) => (
                                    <section
                                        key={section.id}
                                        id={section.id}
                                        className="scroll-mt-32 border-b border-[#8a6a48]/20 py-9 first:pt-0 sm:py-12"
                                    >
                                        <div className="grid gap-4 sm:grid-cols-[50px_minmax(0,1fr)] sm:gap-6">

                                            {/* NUMBER */}
                                            <span className="pt-1 text-[11px] font-medium tracking-[0.18em] text-[#8a6a48]">
                                                {section.number}
                                            </span>

                                            {/* TEXT */}
                                            <div>
                                                <h2 className="font-serif text-[clamp(1.65rem,3vw,2.25rem)] font-light leading-tight tracking-[-0.03em]">
                                                    {section.title}
                                                </h2>

                                                <p className="mt-5 max-w-2xl text-sm leading-8 text-[#62584c] sm:text-[15px]">
                                                    {section.content}
                                                </p>

                                                {section.id === 'contact' && (
                                                    <a
                                                        href="/#contact"
                                                        className="group mt-7 inline-flex items-center gap-3 border-b border-[#8a6a48] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:border-[#25221f] hover:text-[#25221f]"
                                                    >
                                                        Contact Us

                                                        <ArrowUpRight
                                                            size={15}
                                                            strokeWidth={1.5}
                                                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                        />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* BACK LINK ON MOBILE */}
                            <Link
                                href="/"
                                className="mt-10 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:text-[#25221f] lg:hidden"
                            >
                                <ArrowLeft size={15} strokeWidth={1.5} />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </BookCartProvider>
    );
}
