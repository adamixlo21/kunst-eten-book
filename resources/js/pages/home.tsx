
import { Head } from '@inertiajs/react';

import { BookCartProvider } from '@/components/BookCartContext';
import BookWaitlistSection from '@/components/BookWaitlistSection';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PaintingsSection from '@/components/PaintingsSection';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import Story from '@/components/Story';
import Journey from '@/components/Journey';
import BookCart from "@/components/BookCart";
import BookSection from "@/components/BookSection";


export default function Home() {
    return (
        <BookCartProvider>
            <Head>
                <title>The Taste of Inspiration | Art &amp; Culinary Book</title>

                <meta
                    head-key="description"
                    name="description"
                    content="Discover The Taste of Inspiration, an upcoming book bringing together five original paintings and five culinary creations. Join the waitlist."
                />
            </Head>

            <Navbar />
            <main id="main-content">
                <Hero />

                <Story />

                <PaintingsSection />

                <BookSection/>

                <ContactSection />

            </main>

            <Footer/>
            <BookCart/>
        </BookCartProvider>
    );
}
