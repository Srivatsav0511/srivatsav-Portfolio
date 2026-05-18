import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HoldboardMacPrivacyPage() {
  return (
    <article className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="sticky top-4 md:top-8 z-50 w-fit ml-4 md:ml-8">
        <Link
          href="/blog/holdboard-mac"
          replace
          className="group flex items-center gap-2 bg-white/90 backdrop-blur-md border border-zinc-200 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-600 hover:text-black hover:bg-white transition-all shadow-sm"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs md:text-sm font-bold">Back</span>
        </Link>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <header className="mt-10 mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-700 font-black bg-zinc-100 px-3 py-1 rounded-full">
            <ShieldCheck size={14} />
            Holdboard for macOS Privacy Policy
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-black">Privacy Policy</h1>
          <p className="mt-4 text-zinc-600 text-lg">Effective date: May 18, 2026</p>
        </header>

        <main className="space-y-8 leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-2">1. What Holdboard for macOS is and how it works</h2>
            <p>
              Holdboard for macOS is a menu bar-first clipboard manager that helps users save, organize, and quickly reuse copied content.
              It supports text, links, images, and files with type-aware rendering and optional sensitive protection behavior.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">2. Do we use your personal data?</h2>
            <p>
              Holdboard does not sell your personal data. We do not collect personal profile details like your name, address, or payment
              information for normal app usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">3. Data Holdboard for macOS may process</h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Clipboard entries you choose to keep (such as text, links, and supported metadata).</li>
              <li>Category, retention, and app-level preference settings.</li>
              <li>Sensitive flag state and related masking preferences.</li>
              <li>Basic crash/diagnostic logs for app stability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">4. How this data is used</h2>
            <p>
              Data is used only to power Holdboard features: storing clips, organizing content, enabling security locks, and improving
              reliability. We do not sell your data or use it for identity resale.
            </p>
            <p className="mt-3">
              We cannot access your private clipboard content for reading or resale. Your saved data remains under your control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">5. Face ID and security</h2>
            <p>
              Holdboard for macOS does not store biometric data. Any system authentication behavior is handled by Apple platform APIs and
              is not directly stored by Holdboard.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">6. Data sharing</h2>
            <p>
              We may use trusted service providers for diagnostics or infrastructure operations. Such providers process only what is
              necessary for service delivery under their own privacy terms. We do not sell user data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">7. Permissions and retention</h2>
            <p>
              Holdboard asks only for permissions needed by app features. Retention/auto-delete policies control how long clips are kept,
              including separate handling windows for sensitive categories where configured.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">8. Your controls</h2>
            <p>
              You can manage app permissions through macOS settings, clear local app data by removing the app and its data, and contact us
              for privacy support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">9. Policy updates</h2>
            <p>
              This policy may be updated when product features or legal requirements change. Updates will be posted on this page with
              the latest effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">10. Contact</h2>
            <p>
              For privacy inquiries related to Holdboard for macOS, contact: <a className="underline text-black" href="mailto:karamalasrivatsav@gmail.com">karamalasrivatsav@gmail.com</a>
            </p>
          </section>
        </main>
      </div>
    </article>
  );
}
