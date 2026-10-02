import { Head } from '@inertiajs/react';


import BookCart from '@/components/BookCart';
import { BookCartProvider } from '@/components/BookCartContext';
import BookSection from '@/components/BookSection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PaintingsSection from '@/components/PaintingsSection';
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Story from "@/components/Story";
import Journey from "@/components/Journey";
import ClosingSection from "@/components/ClosingSection";


export default function Home() {
    return (
        <BookCartProvider>
            <Head title="Kunst Eten" />

            <Navbar />

            <Hero />

            <Story/>

            <Journey/>

            <PaintingsSection />

            <BookSection />

            <ClosingSection />

            <ContactSection />

            <BookCart />

            <Footer/>
        </BookCartProvider>

    );
}
