import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PureClickBlog() {
  const screenshots = [
    '/pureclick/pureclick-1.png',
    '/pureclick/pureclick-2.png',
    '/pureclick/pureclick-3.png',
    '/pureclick/pureclick-4.png',
  ];

  return (
    <article className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200">
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
        <Link href="/#blogs" className="group flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-600 hover:text-black transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs md:text-sm font-bold">Back</span>
        </Link>
      </div>

      <header className="max-w-4xl mx-auto px-5 md:px-6 pt-24 md:pt-28 pb-8 md:pb-10 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">By Srivatsav</p>
        <h1 className="mt-4 text-4xl md:text-7xl font-bold tracking-tight text-black">Pureclick Walls</h1>
        <p className="mt-3 md:mt-4 text-base md:text-xl text-zinc-600">Built for fun, made to help people discover clean wallpapers without annoying ads.</p>
      </header>

      <div className="max-w-6xl mx-auto px-5 md:px-6 mb-12 md:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {screenshots.map((src, index) => (
            <div key={src} className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
              <Image src={src} alt={`Pureclick screenshot ${index + 1}`} fill className="object-cover" priority={index < 2} />
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 md:px-6 pb-16 md:pb-20 space-y-10 md:space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Detailed overview</h2>
          <p className="text-zinc-700 leading-relaxed">
            Pureclick Walls is an Android wallpaper app built around high-quality visual content and a clean browsing experience. The app focuses on making wallpapers easy to explore,
            preview, and apply without the clutter and interruption that usually appears in this category.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            The core product philosophy is simple: the wallpaper is the product, so the interface should not fight for attention. This led to a lightweight UI, fast loading,
            and a preview flow that gives users confidence before they download or apply an image.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Why I built this app</h2>
          <p className="text-zinc-700 leading-relaxed">
            I built Pureclick because I wanted a wallpaper app that respected users and photography quality. Many alternatives were overloaded with ads and distracting elements,
            which made even simple actions feel slow and frustrating.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            This app was my way of shipping a cleaner option: fast, focused, and visually premium. I wanted users to feel that choosing a wallpaper could be a smooth,
            enjoyable action instead of a noisy funnel.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Problems I faced while building</h2>
          <p className="text-zinc-700 leading-relaxed">
            The main technical challenge was integrating native Android wallpaper behavior in a React Native architecture. I needed platform-level control while preserving the speed
            and maintainability of a cross-platform codebase.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Another challenge was performance under high-resolution assets. Wallpapers must look crisp, but that can increase memory and load pressure. I optimized image handling and
            state updates so browsing stayed responsive without sacrificing quality.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Finally, the preview feature required precise UI composition to feel realistic. Users should be able to trust what they see before applying a wallpaper, so visual alignment,
            scaling, and interaction timing all had to be tuned carefully.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">AI tools used to enhance work</h2>
          <p className="text-zinc-700 leading-relaxed">
            I did <strong>not</strong> use AI tools while building Pureclick Walls. Product planning, architecture decisions, implementation, and optimization were done manually.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            This project was intentionally built with a hands-on approach from start to finish, including native bridge design, asset pipeline choices, and UX tuning based on direct testing.
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.pureclickwalls.app&hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-colors"
          >
            Download now
          </a>
          <Link href="/privacy/pureclick-walls" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 text-zinc-800 font-bold hover:bg-zinc-100 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </main>
    </article>
  );
}
