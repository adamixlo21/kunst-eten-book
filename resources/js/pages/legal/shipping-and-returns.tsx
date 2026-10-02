import { Head } from '@inertiajs/react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { BookCartProvider } from '@/components/BookCartContext';

export default function ShippingAndReturns() {
    return (
        <BookCartProvider>
            <Head title="Shipping & Returns | The Taste of Inspiration" />

            <Navbar />

            <main className="min-h-screen bg-[#f7f3ec] pt-28 text-stone-900">
                <section className="px-6 py-20 lg:px-10">
                    <div className="mx-auto max-w-4xl">

                        {/* HEADER */}
                        <div>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-10 bg-[#8a6a48]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    Orders & Delivery
                                </p>
                            </div>

                            <h1 className="mt-6 font-serif text-5xl font-light tracking-tight sm:text-6xl">
                                Shipping & Returns
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                                Information about the delivery, cancellation
                                and return of orders placed through The Taste
                                of Inspiration.
                            </p>
                        </div>

                        {/* CONTENT */}
                        <div className="mt-16 space-y-12">

                            <LegalSection title="1. Shipping">
                                <p>
                                    Orders are prepared for shipment after
                                    successful payment has been confirmed.
                                </p>

                                <p>
                                    Available shipping methods, delivery costs
                                    and any applicable charges will be shown
                                    during the ordering process where
                                    applicable.
                                </p>
                            </LegalSection>

                            <LegalSection title="2. Delivery Times">
                                <p>
                                    Delivery times may vary depending on the
                                    destination, carrier and availability of
                                    the product.
                                </p>

                                <p>
                                    Any estimated delivery time communicated
                                    during the ordering process is an estimate
                                    unless explicitly stated otherwise.
                                </p>
                            </LegalSection>

                            <LegalSection title="3. Delivery Address">
                                <p>
                                    Customers are responsible for providing a
                                    complete and correct delivery address when
                                    placing an order.
                                </p>

                                <p>
                                    If you discover an error in your delivery
                                    information, please contact us as soon as
                                    possible. Once an order has been shipped,
                                    it may no longer be possible to change the
                                    delivery address.
                                </p>
                            </LegalSection>

                            <LegalSection title="4. Right of Withdrawal">
                                <p>
                                    Where the statutory right of withdrawal
                                    applies, consumers may notify us that they
                                    wish to withdraw from an online purchase
                                    within the applicable legal withdrawal
                                    period.
                                </p>

                                <p>
                                    To request a return, contact us through the
                                    contact form on this website and include
                                    enough information for us to identify your
                                    order.
                                </p>
                            </LegalSection>

                            <LegalSection title="5. Returning an Item">
                                <p>
                                    Returned products should be handled with
                                    reasonable care and, where possible,
                                    returned securely in suitable packaging.
                                </p>

                                <p>
                                    Before returning an item, please contact us
                                    so we can provide the appropriate return
                                    instructions and return address.
                                </p>

                                <p>
                                    Unless otherwise agreed or required by
                                    applicable law, the direct cost of
                                    returning a product may be the
                                    customer&apos;s responsibility.
                                </p>
                            </LegalSection>

                            <LegalSection title="6. Refunds">
                                <p>
                                    When a valid return or cancellation is
                                    accepted, any refund due will be processed
                                    in accordance with the applicable consumer
                                    rules and using an appropriate payment
                                    method.
                                </p>

                                <p>
                                    Where permitted by law, reimbursement may
                                    be withheld until the returned product has
                                    been received or sufficient evidence of
                                    return has been provided.
                                </p>
                            </LegalSection>

                            <LegalSection title="7. Damaged or Incorrect Orders">
                                <p>
                                    If your order arrives damaged or you
                                    receive an incorrect product, please
                                    contact us as soon as possible.
                                </p>

                                <p>
                                    Please include your order details and, if
                                    relevant, photographs showing the damage
                                    or incorrect item so that we can review the
                                    situation.
                                </p>
                            </LegalSection>

                            <LegalSection title="8. Original Artworks">
                                <p>
                                    Original artworks offered through the
                                    private bidding system are handled
                                    separately from standard book orders.
                                </p>

                                <p>
                                    Submitting a private offer does not
                                    automatically create a payment or complete
                                    an artwork purchase.
                                </p>

                                <p>
                                    If an artwork offer is accepted, payment,
                                    delivery or collection arrangements and
                                    any applicable conditions will be
                                    communicated directly before the
                                    transaction is completed.
                                </p>
                            </LegalSection>

                            <LegalSection title="9. Contact">
                                <p>
                                    If you have a question about shipping,
                                    delivery, a return or an existing order,
                                    please contact us through the contact form
                                    on The Taste of Inspiration website.
                                </p>
                            </LegalSection>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </BookCartProvider>
    );
}

function LegalSection({
                          title,
                          children,
                      }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="border-t border-stone-300 pt-8">
            <h2 className="font-serif text-2xl text-stone-900">
                {title}
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-stone-600">
                {children}
            </div>
        </section>
    );
}
