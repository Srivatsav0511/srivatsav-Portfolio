import { Mail, Github, Linkedin, Twitter, Play, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const socials = [
    { icon: <Github size={18} />, name: "Github", href: "https://github.com/srivatsav0511", handle: "@srivatsav0511" },
    { icon: <Linkedin size={18} />, name: "LinkedIn", href: "https://www.linkedin.com/in/srivatsavk", handle: "srivatsavk" },
    { icon: <Play size={18} fill="currentColor" />, name: "Google Play", href: "https://play.google.com/store/apps/developer?id=Srivatsav+K", handle: "Srivatsav K" }
  ];

  return (
    <section id="contact" className="bg-white py-32 px-6 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto">
         
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-400 mb-4">Contact</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-none">
            Let's build <br /> 
            <span className="text-zinc-300 italic font-serif">something great.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Direct Contact */}
          <div className="space-y-4">
            <a 
              href="mailto:karamalasrivatsav@gmail.com" 
              className="group flex items-center justify-between p-6 bg-zinc-50 border border-zinc-100 rounded-[2rem] hover:bg-black hover:border-black transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-zinc-800 transition-colors">
                  <Mail size={20} className="text-black group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-500 transition-colors">Email Me</p>
                  <p className="font-bold text-zinc-900 group-hover:text-white transition-colors">karamalasrivatsav@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-zinc-300 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="flex gap-4">
               <div className="flex-1 p-6 bg-zinc-50 border border-zinc-100 rounded-[2rem]">
                  <MapPin size={20} className="text-zinc-400 mb-3" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Location</p>
                  <p className="font-bold text-zinc-900 text-sm">Hyderabad, India</p>
               </div>
               <div className="flex-1 p-6 bg-zinc-50 border border-zinc-100 rounded-[2rem]">
                  <MessageSquare size={20} className="text-zinc-400 mb-3" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</p>
                  <p className="font-bold text-emerald-600 flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </p>
               </div>
            </div>
          </div>

          {/* Right Column: Vertical Socials */}
          <div className="md:pl-12 space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8">Social Ecosystem</p>
            <div className="flex flex-col border-l border-zinc-100">
              {socials.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="group flex items-center justify-between py-5 px-6 border-b border-zinc-50 hover:bg-zinc-50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-400 group-hover:text-black transition-colors transform group-hover:scale-110 duration-300">
                      {social.icon}
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-black">{social.name}</p>
                      <p className="text-[11px] text-zinc-400 font-medium">{social.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-200 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Credit */}
        <div className="mt-32 pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">
            © 2026 SRIVATSAV KARAMALA
          </p>
        </div>

      </div>
    </section>
  );
}