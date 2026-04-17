import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PureclickPrivacyPage() {
  return (
    <article className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full text-zinc-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-bold">Back to Portfolio</span>
        </Link>

        <header className="mt-10 mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-700 font-black bg-zinc-100 px-3 py-1 rounded-full">
            <ShieldCheck size={14} />
            Pureclick Walls Privacy Policy
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-black">Privacy Policy</h1>
          <p className="mt-4 text-zinc-600 text-lg">Effective date: April 17, 2026</p>
        </header>

        <main className="space-y-8 leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-2">1. What Pureclick Walls is and how it works</h2>
            <p>
              Pureclick Walls is an Android wallpaper app that allows users to browse collections, preview wallpapers, download them,
              and apply them to device screens.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">2. Do we use your personal data?</h2>
            <p>
              Pureclick Walls does not sell personal data. We do not require personal profile details like your name, address, or payment
              information for normal app usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">3. Data Pureclick Walls may process</h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Technical usage events such as wallpaper preview, download, and apply actions.</li>
              <li>Basic diagnostics/crash logs for reliability and bug fixing.</li>
              <li>Device-level permission status needed for download/apply operations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">4. How this data is used</h2>
            <p>
              Data is used only to run app functionality, maintain performance, and improve stability. It is not sold or traded as
              personal identity data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">5. Permissions</h2>
            <p>
              Pureclick Walls may request storage/media permissions where required by Android for saving wallpapers. Permissions are
              requested only when needed and can be changed in device settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">6. Data sharing</h2>
            <p>
              We may use trusted providers for backend operations or diagnostics. These providers process limited technical data only
              for service delivery. We do not sell user data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">7. Data retention</h2>
            <p>
              Diagnostic data is retained only as needed for maintenance. Downloaded wallpapers remain on your device until you remove
              them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">8. Your controls</h2>
            <p>
              You can revoke app permissions in Android settings, clear app data, or uninstall the app at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">9. Policy updates</h2>
            <p>
              This policy may be updated based on feature changes or legal updates. The latest version will always be posted here with
              an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">10. Contact</h2>
            <p>
              For privacy inquiries related to Pureclick Walls, contact: <a className="underline text-black" href="mailto:karamalasrivatsav@gmail.com">karamalasrivatsav@gmail.com</a>
            </p>
          </section>
        </main>
      </div>
    </article>
  );
}
