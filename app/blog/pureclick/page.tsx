import { ArrowLeft, Zap, Smartphone, Image as ImageIcon, Code2, Database, Camera, SmartphoneIcon, Layout, MonitorCheck, Download, Terminal, Layers, Eye, Smartphone as Phone, Icon } from 'lucide-react';
import Link from 'next/link';

export default function PureClickBlog() {
  return (
    <article className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-100">
      
      {/* 1. Navigation - Consistent with QuickCV */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="group flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 px-4 py-2 rounded-full text-zinc-600 hover:text-black transition-all shadow-sm">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold uppercase tracking-tighter">Back</span>
        </Link>
      </div>

      {/* 2. Editorial Header */}
      <header className="max-w-4xl mx-auto px-6 pt-32 pb-16 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 text-orange-600 font-bold text-xs uppercase tracking-widest mb-6">
          <span className="bg-orange-50 px-2 py-1 rounded">Mobile Development</span>
          <span>•</span>
          <span className="text-zinc-400">Feb 2026</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-black">
          PureClick <br /> 
          <span className="text-zinc-400">Walls.</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
          An ad-free, high-performance wallpaper gallery built to showcase the synergy between professional photography and native mobile engineering.
        </p>
      </header>

      {/* 3. Tech Stack Grid - Scannable and Neat */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-zinc-100 bg-zinc-50/50 p-6 rounded-2xl">
            <SmartphoneIcon className="text-orange-500 mb-3" size={24} />
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Core</p>
            <p className="font-bold text-sm">React Native</p>
          </div>
          <div className="border border-zinc-100 bg-zinc-50/50 p-6 rounded-2xl">
            <Code2 className="text-blue-500 mb-3" size={24} />
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Native Bridge</p>
            <p className="font-bold text-sm">Kotlin</p>
          </div>
          <div className="border border-zinc-100 bg-zinc-50/50 p-6 rounded-2xl">
            <Database className="text-emerald-500 mb-3" size={24} />
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Backend</p>
            <p className="font-bold text-sm">Firebase</p>
          </div>
          <div className="border border-zinc-100 bg-zinc-50/50 p-6 rounded-2xl">
            <Zap className="text-purple-500 mb-3" size={24} />
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">UX</p>
            <p className="font-bold text-sm">Expo Haptics</p>
          </div>
        </div>
      </section>

      {/* 4. Deep Dive Content */}
      <main className="max-w-2xl mx-auto px-6 space-y-24">
        
        {/* Project Aim */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Camera size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Objective</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            The app was created to solve a common problem in the wallpaper niche: <strong>intrusive ads and poor UX.</strong> 
          </p>
          <p className="text-lg leading-relaxed text-zinc-700">
            By keeping the project 100% free and open-access, I focused on building a "Digital Museum" experience. Every image is a high-resolution photograph served directly via Firebase, ensuring that the quality of the art is never compromised by compression.
          </p>
        </section>

        {/* Technical Challenge: Kotlin Bridge */}
        <section className="space-y-8 border-t border-zinc-50 pt-20">
          <div className="flex items-center gap-2 text-zinc-400">
            <Terminal size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Native Bridge</h2>
          </div>
          
          <div className="space-y-6 pl-8 border-l border-zinc-100 ml-2">
            <h4 className="font-bold text-black text-xl font-sans tracking-tight text-balance">
              Bypassing the JavaScript layer for System-Level access.
            </h4>
            <p className="text-zinc-500 leading-relaxed">
              Applying a wallpaper directly to the Home or Lock screen isn't possible through standard React Native APIs. I implemented a <strong>Kotlin Native Module</strong> to bridge this gap.
            </p>

            <div className="bg-zinc-900 rounded-2xl p-6 font-mono text-[13px] leading-relaxed overflow-x-auto shadow-xl">
              <div className="flex justify-between mb-4">
                <span className="text-zinc-500">WallpaperModule.kt</span>
                <span className="text-orange-400">Native</span>
              </div>
              <code className="text-zinc-300">
                <span className="text-orange-500">val</span> wm = WallpaperManager.getInstance(context)<br/>
                wm.setBitmap(decodedByte, <span className="text-orange-500">null</span>, <span className="text-orange-500">true</span>, FLAG_LOCK or FLAG_SYSTEM)
              </code>
            </div>
            
            <p className="text-sm text-zinc-400 italic">
              This native implementation allows for a seamless, 1-tap application that feels integrated into the Android OS.
            </p>
          </div>
        </section>

        {/* The Preview Engine */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Layout size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Contextual Preview</h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-700">
            To reduce the "Apply and Check" friction, I built a <strong>WYSIWYG Preview Engine</strong>. 
          </p>
          <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
             <h4 className="font-bold text-black mb-4 flex items-center gap-2 tracking-tight italic">
               <Eye size={18} className="text-orange-500" />
               OS Simulation
             </h4>
             <p className="text-zinc-600 text-sm leading-relaxed mb-4">
               The preview layer dynamically renders a simulated Android Home Screen (with app icons) and Lock Screen (with clock and date) using <strong>Expo Blur</strong> to give the user a real-world perspective of the asset before downloading.
             </p>
          </div>
        </section>

        {/* Asset Handling */}
        <section className="space-y-8 border-t border-zinc-50 pt-20">
          <div className="flex items-center gap-2 text-zinc-400">
            <Layers size={18} />
            <h2 className="text-xs font-black uppercase tracking-[0.3em]">Data & Storage</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm">
              <Download className="text-orange-500 mb-4" size={24} />
              <h5 className="font-bold mb-2">React Download Logic</h5>
              <p className="text-zinc-500 text-xs leading-relaxed">Uses <code>FileSystem.downloadAsync</code> to handle blobs directly, ensuring high-res files are saved to the Media Library without loss.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm">
              <Database className="text-blue-500 mb-4" size={24} />
              <h5 className="font-bold mb-2">Firebase Sync</h5>
              <p className="text-zinc-500 text-xs leading-relaxed">Centralized Firestore database manages image metadata and download counts for real-time gallery updates.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-8 pb-16 space-y-20">
          <div className="flex flex-col items-center justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.pureclickwalls.app&pcampaignid=web_share" 
               target="_blank"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-black text-white rounded-full font-bold transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-xl"
            >
              Insall App 
                <Phone size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <span className="mt-4 text-zinc-400 text-[10px] uppercase tracking-widest font-black">
              Photography × Software
            </span>
          </div>

          <footer className="flex flex-col items-center text-center">
            <div className="h-[1px] w-24 bg-zinc-100 mb-12" />
            <div className="space-y-3">
              <p className="text-zinc-400 text-sm italic">
                Designed and Developed by Srivatsav Karamala.
              </p>
              <p className="text-zinc-300 text-[10px] uppercase tracking-widest font-bold">
                © 2026 PureClick Walls.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </article>
  );
}