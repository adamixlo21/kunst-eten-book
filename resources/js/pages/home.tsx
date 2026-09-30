import { Head } from '@inertiajs/react';

import AboutBook from '@/components/AboutBook';
import BackgroundMusic from '@/components/BackgroundMusic';
import BookCart from '@/components/BookCart';
import { BookCartProvider } from '@/components/BookCartContext';
import BookSection from '@/components/BookSection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PaintingsSection from '@/components/PaintingsSection';
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <BookCartProvider>
            <Head title="Kunst Eten" />

            <Navbar />

            <Hero />

            <AboutBook />

            <PaintingsSection />

            <BookSection />

            <ContactSection />

            <BackgroundMusic />

            <BookCart />

            <Footer/>
        </BookCartProvider>

    );
}
