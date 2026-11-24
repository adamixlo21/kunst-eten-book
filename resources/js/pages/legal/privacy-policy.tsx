
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Mail } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookCartProvider } from '@/components/BookCartContext';

const sections = [
    {
        title: 'Who We Are',
        content:
            'The Taste of Inspiration is a creative project bringing together art, food and storytelling. This website is operated by  Taste of Inspiration. For privacy-related questions, you can contact us using the email address below.',
    },
    {
        title: 'Information We Collect',
        content:
            'We collect the information you choose to share with us. This may include your name, email address, phone number, contact messages, book waitlist registration and private artwork offers. We may also process limited technical information needed to keep the website secure.',
    },
    {
        title: 'How We Use Your Information',
        content:
            'We use your information to respond to enquiries, manage private artwork offers and send book-launch updates when you have given consent. We may also process information to protect our website against spam and misuse. When book sales become available, we will use the necessary order details to process and deliver purchases.',
    },
    {
        title: 'Legal Basis',
        content:
            'We use your consent for book-launch emails. We process contact and artwork-offer information to respond to your requests or take steps before a possible purchase. We may rely on legitimate interests to maintain website security and on legal obligations when keeping required business records.',
    },
    {
        title: 'Sharing Your Information',
        content:
            'We do not sell your personal information. We use service providers, including website hosting and email-delivery services, to operate the website. These providers receive information needed to perform their services. Any transfers outside the European Economic Area must comply with applicable data-protection rules.',
    },
    {
        title: 'How Long We Keep Your Information',
        content:
            'We keep information only as long as needed for its purpose or to meet legal requirements. Waitlist information is retained as needed to manage launch notifications and unsubscribe preferences. Contact messages and artwork offers are retained as needed to handle requests and relevant follow-up.',
    },
    {
        title: 'Cookies',
        content:
            'Our website may use cookies and similar technologies needed for its operation and security. If we use optional analytics or marketing cookies, we will provide information and request consent where required.',
    },
    {
        title: 'Your Privacy Rights',
        content:
            'Under the GDPR, you may have the right to access, correct or delete your personal data, object to certain processing or request other applicable privacy rights. You can withdraw your consent to book-launch emails at any time. You may also lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).',
    },
];

export default function PrivacyPolicy() {
    return (
        <BookCartProvider>
            <Head title="Privacy Policy | The Taste of Inspiration">
                <meta
                    head-key="description"
                    name="description"
                    content="Read The Taste of Inspiration privacy policy and learn how we collect, use and protect your personal information."
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
                            className="transition-transform group-hover:-translate-x-1"
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
                            Privacy{' '}
                            <span className="italic text-[#70512f]">
                                Policy.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-8 text-[#564b40]">
                            We respect your privacy. Here is how we
                            collect and use your information.
                        </p>
                    </header>

                    {/* Privacy sections */}
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
                            </section>
                        ))}
                    </div>

                    {/* Contact */}
                    <section className="mt-12 bg-[#eee7dc] p-6 sm:p-8">
                        <h2 className="font-serif text-2xl text-[#25221f] sm:text-3xl">
                            Questions about your privacy?
                        </h2>

                        <p className="mt-4 text-base leading-8 text-[#564b40]">
                            You can contact us if you have a question
                            or would like to make a privacy request.
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
