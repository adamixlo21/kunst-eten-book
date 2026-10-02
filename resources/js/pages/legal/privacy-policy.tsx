import { Head } from '@inertiajs/react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {BookCartProvider} from "@/components/BookCartContext";

export default function PrivacyPolicy() {
    return (
        <BookCartProvider>
            <Head title="Privacy Policy | The Taste of Inspiration" />

            <Navbar />

            <main className="min-h-screen bg-[#f7f3ec] pt-28 text-stone-900">
                <section className="px-6 py-20 lg:px-10">
                    <div className="mx-auto max-w-4xl">
                        <LegalHeader
                            label="Legal"
                            title="Privacy Policy"
                            description="How we handle and protect the personal information you share with The Taste of Inspiration."
                        />

                        <div className="mt-16 space-y-12">
                            <LegalSection title="1. Introduction">
                                <p>
                                    The Taste of Inspiration respects your
                                    privacy. This Privacy Policy explains what
                                    personal information we collect, why we
                                    collect it and how we use it when you visit
                                    our website, place an order, submit a
                                    private offer on an artwork or contact us.
                                </p>
                            </LegalSection>

                            <LegalSection title="2. Information We Collect">
                                <p>
                                    Depending on how you use the website, we
                                    may receive information such as your name,
                                    email address, telephone number, delivery
                                    details, order information, contact
                                    messages and information submitted with a
                                    private artwork offer.
                                </p>
                            </LegalSection>

                            <LegalSection title="3. How We Use Your Information">
                                <p>
                                    We use personal information to process and
                                    fulfil orders, communicate about purchases,
                                    respond to messages, handle private artwork
                                    offers and provide customer service.
                                </p>
                            </LegalSection>

                            <LegalSection title="4. Payments">
                                <p>
                                    Online payments may be processed through
                                    external payment providers. Payment
                                    information handled directly by a payment
                                    provider is subject to that provider&apos;s
                                    own privacy and security practices.
                                </p>
                            </LegalSection>

                            <LegalSection title="5. Sharing of Information">
                                <p>
                                    We do not sell your personal information.
                                    Information may be shared with service
                                    providers when this is necessary to operate
                                    the website, process payments, deliver an
                                    order or provide another service you have
                                    requested.
                                </p>
                            </LegalSection>

                            <LegalSection title="6. Retention">
                                <p>
                                    Personal information is kept only for as
                                    long as reasonably necessary for the
                                    purpose for which it was collected and to
                                    meet applicable administrative, accounting
                                    or legal obligations.
                                </p>
                            </LegalSection>

                            <LegalSection title="7. Your Rights">
                                <p>
                                    Depending on applicable law, you may have
                                    rights relating to your personal
                                    information, including requesting access,
                                    correction or deletion of certain personal
                                    data.
                                </p>
                            </LegalSection>

                            <LegalSection title="8. Contact">
                                <p>
                                    If you have questions about this Privacy
                                    Policy or the way your information is
                                    handled, please contact us through the
                                    contact form on this website.
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

function LegalHeader({
                         label,
                         title,
                         description,
                     }: {
    label: string;
    title: string;
    description: string;
}) {
    return (
        <div>
            <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-[#8a6a48]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a48]">
                    {label}
                </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl font-light tracking-tight sm:text-6xl">
                {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                {description}
            </p>
        </div>
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
