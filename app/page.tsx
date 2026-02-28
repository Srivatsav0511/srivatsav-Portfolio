import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#fafafa] selection:bg-indigo-100">
      <Navbar />
      <Hero />
      <Work />
      <Blogs />
      <Contact />
    </main>
  );
}