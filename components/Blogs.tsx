import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Blogs() {
  const posts = [
    {
      title: "Design of Pureclick Walls",
      excerpt: "A deep dive into the engineering behind a high-performance wallpaper engine using React Native and Kotlin. Exploring the challenges of native live previews.",
      date: "Jan 2026",
      project: "Mobile Application",
      image: "/pureclickicon.png",
      href: "/blog/pureclick" // Direct link to your new folder
    },
    {
      title: "The Logic of Clarity",
      excerpt: "How we leveraged AI to transform messy code snippets into human-readable documentation. A study on prompt engineering and developer experience.",
      date: "Nov 2025",
      project: "AI / Web",
      image: "/codeclarity.png",
      href: "/blog/codeclarity" // Direct link to your new folder
    },
    {
      title: "Building Quick CV",
      excerpt: "Creating a real-time PDF generation engine that doesn't sacrifice design for ATS compatibility. Fast, reliable, and built with React and TypeScript.",
      date: "Sept 2025",
      project: "Productivity",
      image: "/quickcv.png",
      href: "/blog/quickcv" 
    }
  ];

  return (
    <section id="blogs" className="py-32 px-6 max-w-7xl mx-auto">
      
      {/* Aligned Header */}
      <div className="mb-16">
        <h2 className="text-[18px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-4">
           Blogs
        </h2>
        <div className="h-[1px] w-full bg-zinc-100" />
      </div>

      {/* Vertical One-by-One Layout */}
      <div className="space-y-12">
        {posts.map((post, index) => (
          <div 
            key={index} 
            className="group flex flex-col md:flex-row items-center gap-8 md:gap-16 p-6 md:p-10 rounded-[40px] border border-zinc-100 hover:border-zinc-200 transition-all duration-500 hover:shadow-xl bg-white"
          >
            {/* Image Section */}
            <div className="relative w-full md:w-1/3 aspect-[4/3] rounded-3xl overflow-hidden shadow-sm bg-zinc-50">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                <span>{post.project}</span>
              </div>
              
              <h4 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
                {post.title}
              </h4>
              
              <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                {post.excerpt}
              </p>

              {/* Fixed CTA with direct href */}
              <Link href={post.href}>
                <div className="flex items-center gap-3 pt-4 text-[12px] font-black uppercase tracking-widest text-black group/btn cursor-pointer">
                  Read Blog
                  <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all group-hover/btn:bg-black group-hover/btn:text-white group-hover/btn:border-black">
                     <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}