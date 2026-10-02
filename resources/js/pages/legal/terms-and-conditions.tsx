import { Head } from '@inertiajs/react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {BookCartProvider} from "@/components/BookCartContext";

export default function TermsAndConditions() {
    return (
        <BookCartProvider>
            <Head title="Terms & Conditions | The Taste of Inspiration" />

            <Navbar />

            <main className="min-h-screen bg-[#f7f3ec] pt-28 text-stone-900">
                <section className="px-6 py-20 lg:px-10">
                    <div className="mx-auto max-w-4xl">

                        {/* HEADER */}
                        <div>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-10 bg-[#8a6a48]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                                    Legal
                                </p>
                            </div>

                            <h1 className="mt-6 font-serif text-5xl font-light tracking-tight sm:text-6xl">
                                Terms & Conditions
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                                These terms explain the conditions that apply
                                when using The Taste of Inspiration website,
                                purchasing the book or submitting a private
                                offer for an original artwork.
                            </p>
                        </div>

                        {/* CONTENT */}
                        <div className="mt-16 space-y-12">

                            <LegalSection title="1. About These Terms">
                                <p>
                                    These Terms & Conditions apply to the use
                                    of The Taste of Inspiration website and to
                                    purchases made through the website.
                                </p>

                                <p>
                                    By placing an order, you confirm that the
                                    information you provide is accurate and
                                    that you agree to the terms that apply to
                                    your purchase.
                                </p>
                            </LegalSection>

                            <LegalSection title="2. The Taste of Inspiration">
                                <p>
                                    The Taste of Inspiration brings together
                                    culinary creation, painting and
                                    storytelling. Through this website,
                                    visitors can discover the project,
                                    purchase the book and submit private
                                    offers for selected original artworks.
                                </p>
                            </LegalSection>

                            <LegalSection title="3. Products and Availability">
                                <p>
                                    We aim to describe and display our products
                                    as accurately as possible. Colours,
                                    appearance and other visual details may
                                    vary slightly depending on the screen or
                                    device used to view the website.
                                </p>

                                <p>
                                    Products are subject to availability. If a
                                    product becomes unavailable after an order
                                    has been placed, we will contact the
                                    customer as soon as reasonably possible.
                                </p>
                            </LegalSection>

                            <LegalSection title="4. Prices">
                                <p>
                                    Prices displayed on the website are shown
                                    in euros (€), unless stated otherwise.
                                </p>

                                <p>
                                    Any additional delivery costs that apply
                                    to an order should be displayed before the
                                    customer completes payment.
                                </p>
                            </LegalSection>

                            <LegalSection title="5. Orders">
                                <p>
                                    When you place an order through the
                                    website, you are responsible for providing
                                    complete and correct contact, billing and
                                    delivery information.
                                </p>

                                <p>
                                    After a successful order, you may receive
                                    an order or payment confirmation by email.
                                </p>
                            </LegalSection>

                            <LegalSection title="6. Payments">
                                <p>
                                    Payments made through the website may be
                                    processed by an external payment provider.
                                    An order is not considered successfully
                                    paid until the payment has been confirmed
                                    by the payment provider.
                                </p>

                                <p>
                                    The Taste of Inspiration does not require
                                    visitors to provide payment card details
                                    directly through the contact or artwork
                                    bidding forms.
                                </p>
                            </LegalSection>

                            <LegalSection title="7. Original Artworks and Private Offers">
                                <p>
                                    Certain original artworks may be available
                                    through private bidding. Offers submitted
                                    through the website are confidential and
                                    are not displayed publicly to other
                                    visitors.
                                </p>

                                <p>
                                    Submitting a private offer does not
                                    automatically complete a purchase and does
                                    not automatically result in a payment.
                                </p>

                                <p>
                                    If an offer is accepted, the bidder will
                                    be contacted separately with information
                                    about the next steps, including payment,
                                    collection or delivery where applicable.
                                </p>

                                <p>
                                    We reserve the right to accept or decline
                                    an artwork offer unless a separate binding
                                    agreement has already been concluded.
                                </p>
                            </LegalSection>

                            <LegalSection title="8. Shipping">
                                <p>
                                    Delivery times and shipping conditions may
                                    depend on the destination and the product
                                    purchased.
                                </p>

                                <p>
                                    More information about delivery, returns
                                    and cancellations can be found on our
                                    Shipping & Returns page.
                                </p>
                            </LegalSection>

                            <LegalSection title="9. Returns and Cancellations">
                                <p>
                                    Consumers may have statutory cancellation
                                    or withdrawal rights depending on the
                                    product, circumstances of the purchase and
                                    applicable law.
                                </p>

                                <p>
                                    Our Shipping & Returns page provides
                                    further information about the return
                                    process. Nothing in these terms is intended
                                    to limit consumer rights that cannot
                                    legally be excluded.
                                </p>
                            </LegalSection>

                            <LegalSection title="10. Intellectual Property">
                                <p>
                                    The paintings, photographs, written
                                    stories, book content, branding, design
                                    elements and other original material
                                    presented through The Taste of Inspiration
                                    may be protected by intellectual property
                                    rights.
                                </p>

                                <p>
                                    Purchasing the book or an original artwork
                                    does not automatically transfer copyright
                                    or other intellectual property rights in
                                    that work.
                                </p>

                                <p>
                                    Content from the website may not be copied,
                                    reproduced, distributed or used
                                    commercially without permission where such
                                    permission is legally required.
                                </p>
                            </LegalSection>

                            <LegalSection title="11. Website Availability">
                                <p>
                                    We aim to keep the website available and
                                    accurate, but we cannot guarantee that the
                                    website will always operate without
                                    interruptions, errors or temporary
                                    maintenance.
                                </p>
                            </LegalSection>

                            <LegalSection title="12. Liability">
                                <p>
                                    Nothing in these Terms & Conditions is
                                    intended to exclude or limit liability
                                    where doing so would not be permitted by
                                    applicable law.
                                </p>
                            </LegalSection>

                            <LegalSection title="13. Changes to These Terms">
                                <p>
                                    These Terms & Conditions may be updated
                                    when our services, products or legal
                                    requirements change. The version available
                                    on this website will be the current
                                    version.
                                </p>
                            </LegalSection>

                            <LegalSection title="14. Contact">
                                <p>
                                    If you have a question about an order,
                                    artwork, these Terms & Conditions or The
                                    Taste of Inspiration, please contact us
                                    through the contact form on the website.
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
