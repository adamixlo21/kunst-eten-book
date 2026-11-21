
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
import ClosingSection from '@/components/ClosingSection';

export default function Home() {
    return (
        <BookCartProvider>
            <Head title="The Taste of Inspiration | An Art & Culinary Book" />

            <Navbar />

            <Hero />

            <Story />

            <Journey />

            <PaintingsSection />

            <BookWaitlistSection />

            {/*<ClosingSection />*/}

            <ContactSection />

            <Footer />
        </BookCartProvider>
    );
}
