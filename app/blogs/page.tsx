import Navbar from '@/components/layout/Navbar';
import Blogs from '@/components/sections/Blogs';

export default function BlogsPage() {
  return (
    <main className="blogs-page relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)] selection:bg-zinc-200">
      <Navbar />
      <div className="relative z-10 pt-4">
        <Blogs />
      </div>
    </main>
  );
}
