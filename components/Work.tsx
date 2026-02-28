import { ArrowUpRight, Smartphone, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Work() {
  const projects = [
    {
      title: "Pureclick Walls",
      category: "Android Application",
      description: "A high-fidelity wallpaper platform focused on minimal aesthetics, featuring curated collections and native 'Live Preview' functionality.",
      screenshots: ["/pureclick1.png", "/pureclick2.png", "/pureclick3.png", "/pureclick4.png"],
      link: "https://play.google.com/store/apps/details?id=com.pureclickwalls.app&hl=en",
      type: "mobile",
      tech: ["React Native", "Kotlin", "Firebase"]
    },
    {
      title: "CodeClarity",
      category: "Web Application",
      description: "An AI-powered developer tool designed to decode complex snippets into human-readable logic. Built for speed and absolute clarity.",
      screenshots: ["/codeclarity.png"], 
      link: "https://codeclarity-ai.vercel.app/", 
      type: "web",
      tech: ["React", "Node.js", "TypeScript", "Tailwind"]
    },
    {
        title: "Quick CV",
        category: "Web Application",
        description: "A professional resume building platform featuring live previews and ATS-optimized templates. Designed for modern job seekers.",
        screenshots: ["/quickcv.png"],
        link: "https://quickcv1.netlify.app/",
        type: "web",
        tech: ["React", "JavaScript"]
    }
  ];

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      
      {/* Aligned Title */}
      <div className="mb-9">
        <h2 className="text-[18px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-4">
           Work
        </h2>
        <div className="h-[1px] w-full bg-zinc-100" />
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div key={index} className="space-y-10">
            {/* Project Title Header */}
            <h3 className="text-6xl md:text-6xl font-bold tracking-tighter text-black leading-none">
              {project.title}
            </h3>

            {/* Project Card - Standardized size across all 3 */}
            <div className={`group relative overflow-hidden rounded-[48px] p-8 md:p-14 transition-all duration-700 min-h-[400px] flex flex-col justify-between ${
              project.type === 'mobile' ? 'bg-zinc-950 text-white' : 'bg-white border border-zinc-200 text-black'
            }`}>
              
              <div className="relative z-10">
                {/* Top Row UI */}
                <div className="flex justify-between items-center mb-12">
                  <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
                    project.type === 'mobile' ? 'opacity-40' : 'text-zinc-400'
                  }`}>
                    {project.type === 'mobile' ? <Smartphone size={14} /> : <Globe size={14} />}
                    {project.category}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className={`flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm transition-all ${
                      project.type === 'mobile' 
                      ? 'bg-white text-black hover:bg-zinc-200' 
                      : 'bg-black text-white hover:bg-zinc-800'
                    }`}
                  >
                    View Product
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                {/* Text Content */}
                <div className="max-w-2xl">
                  <p className={`text-2xl md:text-3xl font-medium leading-[1.2] tracking-tight mb-6 ${
                    project.type === 'mobile' ? 'text-zinc-300' : 'text-zinc-700'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Tech String */}
                  <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                    {project.tech?.map((t, i) => (
                      <span key={i} className="flex gap-4 items-center">
                        {t} {i !== (project.tech?.length ?? 0) - 1 && <span className="opacity-30">•</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visuals - Maintained size and previous animations */}
              <div className="mt-auto pt-10">
                {project.type === 'mobile' ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                     {project.screenshots.map((src, idx) => (
                       <div 
                          key={idx} 
                          className="relative aspect-[9/19] rounded-[24px] overflow-hidden border border-white/5 shadow-2xl transition-all duration-1000 group-hover:even:-translate-y-12 group-hover:odd:translate-y-8"
                        >
                          <Image src={src} alt="screen" fill className="object-cover" />
                       </div>
                     ))}
                  </div>
                ) : (
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-zinc-100 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                     {/* Safe check for screenshots array */}
                     {project.screenshots && project.screenshots[0] && (
                       <Image src={project.screenshots[0]} alt="web-preview" fill className="object-cover" />
                     )}
                  </div>
                )}
              </div>

              {/* Background Glow */}
              {project.type === 'mobile' && (
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}