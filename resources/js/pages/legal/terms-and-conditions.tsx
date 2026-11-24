import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Mail } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookCartProvider } from '@/components/BookCartContext';

const sections = [
    {
        id: 'about-these-terms',
        title: 'About These Terms',
        content:
            'These Terms & Conditions apply to the use of The Taste of Inspiration website and purchases made through it. By placing an order, you confirm that the information you provide is accurate and that you agree to the terms applicable to your purchase.',
    },
    {
        id: 'about-us',
        title: 'The Taste of Inspiration',
        content:
            'The Taste of Inspiration is a creative project bringing together culinary creation, painting and storytelling. ' +
            'Through this website, visitors can discover the project, purchase the book and submit private offers for selected' +
            ' original artworks. This website is operated by Taste of Inspiration.',
    },
    {
        id: 'products',
        title: 'Products and Availability',
        content:
            'We aim to describe and display our products as accurately as possible. Colours, appearance and other visual details may vary slightly depending on your screen or device. All products are subject to availability. If a purchased product becomes unavailable, we will contact you and arrange an appropriate solution, including a refund where applicable.',
    },
    {
        id: 'prices',
        title: 'Prices',
        content:
            'All prices are displayed in euros (€), unless stated otherwise, and include applicable taxes for consumer purchases. Delivery costs and any other applicable charges will be clearly displayed before you complete your purchase.',
    },
    {
        id: 'orders',
        title: 'Placing an Order',
        content:
            'You can purchase books without creating an account. During checkout, you must provide complete and accurate contact, billing and delivery information. You will have the opportunity to review your order before completing your purchase. Once your order has been placed, you will receive a confirmation by email.',
    },
    {
        id: 'my-orders',
        title: 'Accessing Your Orders',
        content:
            'Customers can access their orders without creating an account or remembering a password. Through the My Orders page, you can request a secure, temporary access link using the email address provided during checkout. This allows you to view your orders, payment status and available delivery information. Access links are personal and should not be shared with others. If a link expires, you can request a new one.',
    },
    {
        id: 'payments',
        title: 'Payments',
        content:
            'Payments are processed through an external payment service provider. An order is considered successfully paid once payment has been confirmed by the payment provider. We do not request payment card details through our contact forms, artwork bidding forms or order access emails.',
    },
    {
        id: 'original-artworks',
        title: 'Original Artworks and Private Offers',
        content:
            'Selected original artworks may be available through private bidding. Offers are confidential and are not publicly displayed to other visitors. Submitting an offer does not automatically complete a purchase or create a payment obligation. If an offer is accepted, we will contact you separately regarding the purchase, payment and delivery or collection arrangements. We reserve the right to accept or decline offers unless a binding agreement has already been concluded.',
    },
    {
        id: 'shipping',
        title: 'Shipping and Delivery',
        content:
            'Delivery costs, methods and estimated delivery times depend on the destination and product purchased. Once your order has been shipped, you will receive a shipping confirmation by email. Where available, tracking information will also be accessible through the My Orders page. Further information can be found in our Shipping & Returns policy.',
    },
    {
        id: 'returns',
        title: 'Returns and Cancellations',
        content:
            'Consumers may have statutory withdrawal and cancellation rights depending on the product and circumstances of the purchase. Information about withdrawal periods, returns, refunds and damaged products is available in our Shipping & Returns policy. Nothing in these terms limits consumer rights that cannot legally be excluded.',
    },
    {
        id: 'intellectual-property',
        title: 'Intellectual Property',
        content:
            'The paintings, photographs, written stories, book content, branding, designs and other original material presented through The Taste of Inspiration may be protected by intellectual property rights. Purchasing a book or an original artwork does not transfer copyright or other intellectual property rights. Website content may not be copied, reproduced, distributed or used commercially without permission where such permission is legally required.',
    },
    {
        id: 'website-use',
        title: 'Use of the Website',
        content:
            'Visitors must use the website lawfully and responsibly. You must not attempt to access another customer’s order information, misuse secure access links, submit fraudulent orders or offers, or interfere with the security and operation of the website.',
    },
    {
        id: 'website-availability',
        title: 'Website Availability',
        content:
            'We aim to keep the website available, secure and accurate. However, temporary interruptions, technical errors or maintenance may occur. Temporary website unavailability does not affect your statutory rights or our obligations regarding existing purchases.',
    },
    {
        id: 'privacy',
        title: 'Privacy and Personal Information',
        content:
            'We process personal information where necessary to manage purchases, deliver products, provide secure order access and respond to enquiries. Information about how we collect, use, store and protect personal information is available in our Privacy Policy.',
    },
    {
        id: 'liability',
        title: 'Liability',
        content:
            'Nothing in these Terms & Conditions excludes or limits liability where doing so would not be permitted by applicable law. Your statutory consumer rights, including rights relating to defective products and delivery, remain unaffected.',
    },
    {
        id: 'changes',
        title: 'Changes to These Terms',
        content:
            'These Terms & Conditions may be updated when our products, services or legal requirements change. Updates apply to future purchases unless otherwise required by law or agreed with the customer. Existing purchases remain subject to the terms applicable when the agreement was concluded.',
    },
];

const policyLinkClass =
    'mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#70512f] underline underline-offset-4 transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]';

export default function TermsAndConditions() {
    return (
        <BookCartProvider>
            <Head title="Terms & Conditions | The Taste of Inspiration">
                <meta
                    head-key="description"
                    name="description"
                    content="Read the terms and conditions for purchases, payments, orders and private artwork offers at The Taste of Inspiration."
                />
            </Head>

            <Navbar />

            <main className="min-h-screen bg-[#faf8f4] text-[#25221f]">
                <div className="mx-auto max-w-[850px] px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">

                    {/* Back navigation */}
                    <Link
                        href="/"
                        className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#70512f] transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                    >
                        <ArrowLeft
                            size={17}
                            className="transition-transform group-hover:-translate-x-1 motion-reduce:transform-none"
                            aria-hidden="true"
                        />
                        Back to Home
                    </Link>

                    {/* Page heading */}
                    <header className="mt-10 border-b border-[#70512f]/20 pb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#70512f]">
                            Legal Information
                        </p>

                        <h1 className="mt-4 font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-[1.1] tracking-[-0.045em] text-[#25221f]">
                            Terms{' '}
                            <span className="italic text-[#70512f]">
                                &amp; Conditions.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-8 text-[#564b40]">
                            Information about using our website,
                            purchasing the book and submitting
                            private artwork offers.
                        </p>
                    </header>

                    {/* Terms sections */}
                    <div>
                        {sections.map((section) => (
                            <section
                                key={section.id}
                                id={section.id}
                                className="scroll-mt-32 border-b border-[#70512f]/15 py-8 sm:py-10"
                            >
                                <h2 className="font-serif text-2xl font-normal leading-tight text-[#25221f] sm:text-3xl">
                                    {section.title}
                                </h2>

                                <p className="mt-4 text-base leading-8 text-[#564b40]">
                                    {section.content}
                                </p>

                                {/* My Orders */}
                                {section.id === 'my-orders' && (
                                    <Link
                                        href="/orders"
                                        className={policyLinkClass}
                                    >
                                        My Orders
                                    </Link>
                                )}

                                {/* Shipping & Returns */}
                                {(section.id === 'shipping' ||
                                    section.id === 'returns') && (
                                    <Link
                                        href="/legal/shipping-and-returns"
                                        className={policyLinkClass}
                                    >
                                        Shipping &amp; Returns
                                    </Link>
                                )}

                                {/* Privacy Policy */}
                                {section.id === 'privacy' && (
                                    <Link
                                        href="/legal/privacy-policy"
                                        className={policyLinkClass}
                                    >
                                        Privacy Policy
                                    </Link>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Contact */}
                    <section className="mt-12 bg-[#eee7dc] p-6 sm:p-8">
                        <h2 className="font-serif text-2xl text-[#25221f] sm:text-3xl">
                            Questions about our terms?
                        </h2>

                        <p className="mt-4 text-base leading-8 text-[#564b40]">
                            If you have any questions about these
                            terms, your purchase or an original
                            artwork, please contact us.
                        </p>

                        <a
                            href="mailto:thetasteofinspiration@gmail.com"
                            className="mt-5 inline-flex min-h-11 max-w-full items-center gap-3 break-all text-sm font-semibold text-[#70512f] underline underline-offset-4 transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                        >
                            <Mail
                                size={18}
                                className="shrink-0"
                                aria-hidden="true"
                            />
                            thetasteofinspiration@gmail.com
                        </a>
                    </section>
                </div>
            </main>

            <Footer />
        </BookCartProvider>
    );
}
