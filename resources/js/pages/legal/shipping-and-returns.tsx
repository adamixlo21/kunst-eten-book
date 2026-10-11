
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { BookCartProvider } from '@/components/BookCartContext';

const sections = [
    {
        id: 'shipping',
        number: '01',
        title: 'Shipping',
        paragraphs: [
            'Orders are prepared for shipment after successful payment has been confirmed.',
            'Available shipping methods, delivery costs and any applicable charges will be shown during the ordering process where applicable.',
        ],
    },
    {
        id: 'delivery-times',
        number: '02',
        title: 'Delivery Times',
        paragraphs: [
            'Delivery times may vary depending on the destination, carrier and availability of the product.',
            'Any estimated delivery time communicated during the ordering process is an estimate unless explicitly stated otherwise.',
        ],
    },
    {
        id: 'delivery-address',
        number: '03',
        title: 'Delivery Address',
        paragraphs: [
            'Customers are responsible for providing a complete and correct delivery address when placing an order.',
            'If you discover an error in your delivery information, please contact us as soon as possible. Once an order has been shipped, it may no longer be possible to change the delivery address.',
        ],
    },
    {
        id: 'right-of-withdrawal',
        number: '04',
        title: 'Right of Withdrawal',
        paragraphs: [
            'Where the statutory right of withdrawal applies, consumers may notify us that they wish to withdraw from an online purchase within the applicable legal withdrawal period.',
            'To request a return, contact us through the contact form on this website and include enough information for us to identify your order.',
        ],
    },
    {
        id: 'returning-an-item',
        number: '05',
        title: 'Returning an Item',
        paragraphs: [
            'Returned products should be handled with reasonable care and, where possible, returned securely in suitable packaging.',
            'Before returning an item, please contact us so we can provide the appropriate return instructions and return address.',
            "Unless otherwise agreed or required by applicable law, the direct cost of returning a product may be the customer's responsibility.",
        ],
    },
    {
        id: 'refunds',
        number: '06',
        title: 'Refunds',
        paragraphs: [
            'When a valid return or cancellation is accepted, any refund due will be processed in accordance with the applicable consumer rules and using an appropriate payment method.',
            'Where permitted by law, reimbursement may be withheld until the returned product has been received or sufficient evidence of return has been provided.',
        ],
    },
    {
        id: 'damaged-orders',
        number: '07',
        title: 'Damaged or Incorrect Orders',
        paragraphs: [
            'If your order arrives damaged or you receive an incorrect product, please contact us as soon as possible.',
            'Please include your order details and, if relevant, photographs showing the damage or incorrect item so that we can review the situation.',
        ],
    },
    {
        id: 'original-artworks',
        number: '08',
        title: 'Original Artworks',
        paragraphs: [
            'Original artworks offered through the private bidding system are handled separately from standard book orders.',
            'Submitting a private offer does not automatically create a payment or complete an artwork purchase.',
            'If an artwork offer is accepted, payment, delivery or collection arrangements and any applicable conditions will be communicated directly before the transaction is completed.',
        ],
    },
    {
        id: 'contact',
        number: '09',
        title: 'Contact',
        paragraphs: [
            'If you have a question about shipping, delivery, a return or an existing order, please contact us through the contact form on The Taste of Inspiration website.',
        ],
    },
];

export default function ShippingAndReturns() {
    return (
        <BookCartProvider>
            <Head title="Shipping & Returns | The Taste of Inspiration" />

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
                                Legal / Orders
                            </span>

                            <span className="text-right text-[9px] uppercase tracking-[0.2em] text-[#8a6a48]/70">
                                The Taste of Inspiration
                            </span>
                        </div>

                        {/* TITLE */}
                        <div className="max-w-5xl pt-12 sm:pt-16">
                            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#8a6a48]">
                                <span className="h-px w-8 bg-[#8a6a48]" />
                                Orders & Delivery
                            </p>

                            <h1 className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-light leading-[0.98] tracking-[-0.055em]">
                                Shipping
                                <span className="block italic text-[#8a6a48]">
                                    & Returns.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-[#62584c] sm:text-base sm:leading-8">
                                Information about the delivery, cancellation
                                and return of orders placed through
                                The Taste of Inspiration.
                            </p>
                        </div>

                        {/* HERO BOTTOM */}
                        <div className="mt-12 flex items-center justify-between gap-4 border-t border-[#8a6a48]/20 pt-4 sm:mt-16">
                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8a6a48]">
                                Orders & Customer Care
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8a6a48]/70">
                                09 Sections
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
                                    aria-label="Shipping and returns sections"
                                    className="flex flex-col border-l border-[#8a6a48]/25"
                                >
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="group flex items-center gap-4 border-l border-transparent py-3 pl-5 text-sm text-[#746b61] transition-all duration-300 hover:border-[#8a6a48] hover:text-[#25221f]"
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

                        {/* MAIN TEXT */}
                        <div className="min-w-0">

                            {/* INTRODUCTION */}
                            <div className="mb-12 border-b border-[#8a6a48]/25 pb-10 sm:mb-16">
                                <p className="font-serif text-2xl font-light leading-[1.4] tracking-[-0.025em] text-[#62584c] sm:text-3xl">
                                    From placing your order to receiving it,
                                    <span className="italic text-[#8a6a48]">
                                        {' '}here is what you need to know.
                                    </span>
                                </p>
                            </div>

                            {/* POLICY SECTIONS */}
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
