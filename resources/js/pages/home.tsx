import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutBook from "@/components/AboutBook";
import PaintingsSection from "@/components/PaintingsSection";
import BookSection from "@/components/BookSection";
import OrderSection from "@/components/OrderSection";

export default function Home() {
    return (
        <>
            <Head title="Kunst Eten" />

            <Navbar />
            <Hero />
            <AboutBook/>
            <PaintingsSection/>
            <BookSection/>
            <OrderSection/>
        </>
    );
}
