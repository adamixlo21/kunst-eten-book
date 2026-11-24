import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Mail } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookCartProvider } from '@/components/BookCartContext';

const sections = [
    {
        title: 'Placing an Order',
        content:
            'You can purchase books directly through The Taste of Inspiration website without creating an account. During checkout, you will be asked to provide the contact and delivery information necessary to process your order. The total price, including applicable taxes and shipping costs, will be displayed before you complete your purchase.',
    },
    {
        title: 'Order Confirmation',
        content:
            'After placing an order, you will receive an order confirmation by email containing your order number, purchased items, payment information and delivery details. Please keep this email for future reference and check that your information is correct.',
    },
    {
        title: 'Accessing Your Orders',
        content:
            'You do not need an account or password to access your orders. Through the My Orders page, you can request a secure, temporary access link using the email address provided during checkout. This allows you to view your order history, order details, payment status and available delivery information. If your access link expires, you can request a new one.',
    },
    {
        title: 'Shipping',
        content:
            'Orders are prepared for shipment according to the agreed payment and delivery arrangements. Available shipping methods, delivery costs and applicable charges are displayed during checkout. We use delivery service providers to deliver your order to the address you have provided.',
    },
    {
        title: 'Delivery Times',
        content:
            'Delivery times may vary depending on product availability, destination and the delivery service provider. Unless a different delivery period has been agreed, orders will be delivered within 30 days. If we become aware of a delay, we will inform you as soon as reasonably possible. Your statutory rights regarding late delivery remain unaffected.',
    },
    {
        title: 'Tracking Your Delivery',
        content:
            'Once your order has been shipped, you will receive a shipping confirmation by email. Where tracking is available, this email will include the delivery service provider, tracking number and a link to track your parcel. You can also access this information through the My Orders page.',
    },
    {
        title: 'Delivery Address',
        content:
            'Please ensure that your delivery address is complete and correct before placing your order. If you discover an error, contact us as soon as possible. Once your order has been shipped, changing the delivery address may no longer be possible.',
    },
    {
        title: 'Right of Withdrawal',
        content:
            'Consumers purchasing books online generally have the right to withdraw from their purchase without providing a reason within 14 calendar days after receiving their order. You can exercise this right through the online withdrawal function, the withdrawal form or by sending us a clear statement of your decision by email. You do not need our approval to exercise your statutory right of withdrawal.',
    },
    {
        title: 'Returning an Item',
        content:
            'After notifying us of your decision to withdraw, you have a further 14 calendar days to return the product. Please handle the product with reasonable care and use suitable packaging when returning it. You are responsible for the direct return shipping costs for voluntary withdrawals, provided you were informed of these costs before purchasing. This does not apply where we are legally responsible for return costs.',
    },
    {
        title: 'Refunds',
        content:
            'For a valid withdrawal, we will refund the applicable amount within 14 calendar days of receiving your withdrawal notification. For a full withdrawal, this includes the original standard delivery costs. Additional costs for premium delivery methods are not refundable. We may withhold the refund until we receive the returned product or evidence that it has been returned, whichever occurs first. Refunds will normally be made using the original payment method without additional fees.',
    },
    {
        title: 'Damaged or Incorrect Orders',
        content:
            'If your order arrives damaged, defective or incorrect, please contact us so we can resolve the issue. Include your order number and, where helpful, photographs of the product. We will provide an appropriate solution in accordance with your statutory consumer rights, including replacement or a refund where applicable. This does not limit your legal guarantee rights.',
    },
    {
        title: 'Lost or Undelivered Orders',
        content:
            'If your order has not arrived within the agreed delivery period, please contact us with your order number. We will investigate the delivery with the shipping provider and provide an appropriate solution. We remain responsible for the delivery of your order in accordance with applicable consumer law.',
    },
    {
        title: 'Original Artworks',
        content:
            'Original artworks offered through our private bidding system are handled separately from standard book orders. Submitting a private offer does not automatically create a purchase or payment obligation. If an offer is accepted, the applicable payment, delivery or collection arrangements will be communicated before the purchase is concluded. Any applicable statutory consumer rights remain unaffected.',
    },
    {
        title: 'Your Personal Information',
        content:
            'Your contact, order and delivery information is used to process purchases, provide secure access to your orders and communicate relevant updates. Necessary delivery information may be shared with our shipping providers. For more information about how we handle your personal data, please refer to our Privacy Policy.',
    },
];

export default function ShippingAndReturns() {
    return (
        <BookCartProvider>
            <Head title="Shipping & Returns | The Taste of Inspiration">
                <meta
                    head-key="description"
                    name="description"
                    content="Learn about ordering, shipping, delivery tracking, returns and refunds at The Taste of Inspiration."
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
                            Shipping{' '}
                            <span className="italic text-[#70512f]">
                                &amp; Returns.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-8 text-[#564b40]">
                            Everything you need to know about your order,
                            delivery, tracking and returns.
                        </p>
                    </header>

                    {/* Policy sections */}
                    <div>
                        {sections.map((section) => (
                            <section
                                key={section.title}
                                className="border-b border-[#70512f]/15 py-8 sm:py-10"
                            >
                                <h2 className="font-serif text-2xl font-normal leading-tight text-[#25221f] sm:text-3xl">
                                    {section.title}
                                </h2>

                                <p className="mt-4 text-base leading-8 text-[#564b40]">
                                    {section.content}
                                </p>

                                {section.title === 'Accessing Your Orders' && (
                                    <Link
                                        href="/orders"
                                        className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#70512f] underline underline-offset-4 transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                    >
                                        My Orders
                                    </Link>
                                )}

                                {section.title === 'Right of Withdrawal' && (
                                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                                        <Link
                                            href="/withdrawal"
                                            className="inline-flex min-h-11 items-center text-sm font-semibold text-[#70512f] underline underline-offset-4 transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                        >
                                            Withdraw from your order
                                        </Link>

                                        <Link
                                            href="/withdrawal-form"
                                            className="inline-flex min-h-11 items-center text-sm font-semibold text-[#70512f] underline underline-offset-4 transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
                                        >
                                            Withdrawal form
                                        </Link>
                                    </div>
                                )}

                                {section.title === 'Your Personal Information' && (
                                    <Link
                                        href="/privacy-policy"
                                        className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#70512f] underline underline-offset-4 transition-colors hover:text-[#25221f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70512f]"
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
                            Questions about your order?
                        </h2>

                        <p className="mt-4 text-base leading-8 text-[#564b40]">
                            If you need help with your order, delivery
                            or a return, please contact us. Include your
                            order number so we can assist you.
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
