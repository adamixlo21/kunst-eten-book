
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { BookCartProvider } from '@/components/BookCartContext';

const sections = [
    {
        id: 'about-these-terms',
        number: '01',
        title: 'About These Terms',
        paragraphs: [
            'These Terms & Conditions apply to the use of The Taste of Inspiration website and to purchases made through the website.',
            'By placing an order, you confirm that the information you provide is accurate and that you agree to the terms that apply to your purchase.',
        ],
    },
    {
        id: 'the-taste-of-inspiration',
        number: '02',
        title: 'The Taste of Inspiration',
        paragraphs: [
            'The Taste of Inspiration brings together culinary creation, painting and storytelling. Through this website, visitors can discover the project, purchase the book and submit private offers for selected original artworks.',
        ],
    },
    {
        id: 'products-and-availability',
        number: '03',
        title: 'Products and Availability',
        paragraphs: [
            'We aim to describe and display our products as accurately as possible. Colours, appearance and other visual details may vary slightly depending on the screen or device used to view the website.',
            'Products are subject to availability. If a product becomes unavailable after an order has been placed, we will contact the customer as soon as reasonably possible.',
        ],
    },
    {
        id: 'prices',
        number: '04',
        title: 'Prices',
        paragraphs: [
            'Prices displayed on the website are shown in euros (€), unless stated otherwise.',
            'Any additional delivery costs that apply to an order should be displayed before the customer completes payment.',
        ],
    },
    {
        id: 'orders',
        number: '05',
        title: 'Orders',
        paragraphs: [
            'When you place an order through the website, you are responsible for providing complete and correct contact, billing and delivery information.',
            'After a successful order, you may receive an order or payment confirmation by email.',
        ],
    },
    {
        id: 'payments',
        number: '06',
        title: 'Payments',
        paragraphs: [
            'Payments made through the website may be processed by an external payment provider. An order is not considered successfully paid until the payment has been confirmed by the payment provider.',
            'The Taste of Inspiration does not require visitors to provide payment card details directly through the contact or artwork bidding forms.',
        ],
    },
    {
        id: 'original-artworks',
        number: '07',
        title: 'Original Artworks and Private Offers',
        paragraphs: [
            'Certain original artworks may be available through private bidding. Offers submitted through the website are confidential and are not displayed publicly to other visitors.',
            'Submitting a private offer does not automatically complete a purchase and does not automatically result in a payment.',
            'If an offer is accepted, the bidder will be contacted separately with information about the next steps, including payment, collection or delivery where applicable.',
            'We reserve the right to accept or decline an artwork offer unless a separate binding agreement has already been concluded.',
        ],
    },
    {
        id: 'shipping',
        number: '08',
        title: 'Shipping',
        paragraphs: [
            'Delivery times and shipping conditions may depend on the destination and the product purchased.',
            'More information about delivery, returns and cancellations can be found on our Shipping & Returns page.',
        ],
    },
    {
        id: 'returns-and-cancellations',
        number: '09',
        title: 'Returns and Cancellations',
        paragraphs: [
            'Consumers may have statutory cancellation or withdrawal rights depending on the product, circumstances of the purchase and applicable law.',
            'Our Shipping & Returns page provides further information about the return process. Nothing in these terms is intended to limit consumer rights that cannot legally be excluded.',
        ],
    },
    {
        id: 'intellectual-property',
        number: '10',
        title: 'Intellectual Property',
        paragraphs: [
            'The paintings, photographs, written stories, book content, branding, design elements and other original material presented through The Taste of Inspiration may be protected by intellectual property rights.',
            'Purchasing the book or an original artwork does not automatically transfer copyright or other intellectual property rights in that work.',
            'Content from the website may not be copied, reproduced, distributed or used commercially without permission where such permission is legally required.',
        ],
    },
    {
        id: 'website-availability',
        number: '11',
        title: 'Website Availability',
        paragraphs: [
            'We aim to keep the website available and accurate, but we cannot guarantee that the website will always operate without interruptions, errors or temporary maintenance.',
        ],
    },
    {
        id: 'liability',
        number: '12',
        title: 'Liability',
        paragraphs: [
            'Nothing in these Terms & Conditions is intended to exclude or limit liability where doing so would not be permitted by applicable law.',
        ],
    },
    {
        id: 'changes-to-terms',
        number: '13',
        title: 'Changes to These Terms',
        paragraphs: [
            'These Terms & Conditions may be updated when our services, products or legal requirements change. The version available on this website will be the current version.',
        ],
    },
    {
        id: 'contact',
        number: '14',
        title: 'Contact',
        paragraphs: [
            'If you have a question about an order, artwork, these Terms & Conditions or The Taste of Inspiration, please contact us through the contact form on the website.',
        ],
    },
];

export default function TermsAndConditions() {
    return (
        <BookCartProvider>
            <Head title="Terms & Conditions | The Taste of Inspiration" />

            <Navbar />

            <main className="min-h-screen bg-[#f7f3ec] text-[#25221f]">

                {/* HERO */}
                <header className="relative overflow-hidden bg-[#eee7dc] px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-16 lg:pb-24">

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full border border-[#8a6a48]/10 sm:h-[450px] sm:w-[450px]"
                    />

                    <div className="relative mx-auto max-w-[1300px]">

                        {/* TOP LABEL */}
                        <div className="flex items-center justify-between gap-4 border-b border-[#8a6a48]/25 pb-4">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                Legal / Terms
                            </span>

                            <span className="text-right text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]/70">
                                The Taste of Inspiration
                            </span>
                        </div>

                        {/* TITLE */}
                        <div className="max-w-5xl pt-12 sm:pt-16">

                            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#8a6a48]">
                                <span className="h-px w-8 bg-[#8a6a48]" />
                                Important Information
                            </p>

                            <h1 className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-light leading-[0.98] tracking-[-0.055em]">
                                Terms
                                <span className="block italic text-[#8a6a48]">
                                    & Conditions.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-[#62584c] sm:text-base sm:leading-8">
                                These terms explain the conditions that apply
                                when using The Taste of Inspiration website,
                                purchasing the book or submitting a private
                                offer for an original artwork.
                            </p>
                        </div>

                        {/* HERO BOTTOM */}
                        <div className="mt-12 flex items-center justify-between gap-4 border-t border-[#8a6a48]/20 pt-4 sm:mt-16">
                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8a6a48]">
                                Our Terms & Policies
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8a6a48]/70">
                                14 Sections
                            </span>
                        </div>
                    </div>
                </header>

                {/* CONTENT */}
                <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
                    <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20">

                        {/* DESKTOP SIDEBAR */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-32">

                                <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6a48]">
                                    On This Page
                                </p>

                                <nav
                                    aria-label="Terms and conditions sections"
                                    className="flex flex-col border-l border-[#8a6a48]/25"
                                >
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="group flex items-center gap-4 border-l border-transparent py-2.5 pl-5 text-[13px] text-[#746b61] transition-all duration-300 hover:border-[#8a6a48] hover:text-[#25221f]"
                                        >
                                            <span className="text-[10px] text-[#8a6a48]/60 group-hover:text-[#8a6a48]">
                                                {section.number}
                                            </span>

                                            <span>{section.title}</span>
                                        </a>
                                    ))}
                                </nav>

                                <Link
                                    href="/"
                                    className="group mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:text-[#25221f]"
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

                        {/* MAIN TEXT */}
                        <div className="min-w-0">

                            {/* INTRODUCTION */}
                            <div className="mb-12 border-b border-[#8a6a48]/25 pb-10 sm:mb-16">
                                <p className="font-serif text-2xl font-light leading-[1.4] tracking-[-0.025em] text-[#62584c] sm:text-3xl">
                                    A clear understanding of our services,
                                    <span className="italic text-[#8a6a48]">
                                        {' '}from our creations to your experience.
                                    </span>
                                </p>
                            </div>

                            {/* TERMS SECTIONS */}
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

                                        {/* SECTION TEXT */}
                                        <div>
                                            <h2 className="font-serif text-[clamp(1.65rem,3vw,2.25rem)] font-light leading-tight tracking-[-0.03em]">
                                                {section.title}
                                            </h2>

                                            <div className="mt-5 max-w-2xl space-y-4">
                                                {section.paragraphs.map(
                                                    (paragraph, index) => (
                                                        <p
                                                            key={index}
                                                            className="text-sm leading-8 text-[#62584c] sm:text-[15px]"
                                                        >
                                                            {paragraph}
                                                        </p>
                                                    )
                                                )}
                                            </div>

                                            {/* SHIPPING PAGE LINK */}
                                            {(section.id === 'shipping' ||
                                                section.id === 'returns-and-cancellations') && (
                                                <Link
                                                    href="/legal/shipping-and-returns"
                                                    className="group mt-6 inline-flex items-center gap-3 border-b border-[#8a6a48] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a48] transition-colors hover:border-[#25221f] hover:text-[#25221f]"
                                                >
                                                    Shipping & Returns

                                                    <ArrowUpRight
                                                        size={15}
                                                        strokeWidth={1.5}
                                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                    />
                                                </Link>
                                            )}

                                            {/* CONTACT LINK */}
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

                            {/* MOBILE BACK LINK */}
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
