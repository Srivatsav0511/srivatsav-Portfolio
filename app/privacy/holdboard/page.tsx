import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HoldboardPrivacyPage() {
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
            Holdboard Privacy Policy
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-black">Privacy Policy</h1>
          <p className="mt-4 text-zinc-600 text-lg">Effective date: April 17, 2026</p>
        </header>

        <main className="space-y-8 leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-2">1. What Holdboard is and how it works</h2>
            <p>
              Holdboard is an iOS clipboard manager that helps users save, organize, and protect copied content. It supports folders,
              bookmarks, and optional Face ID protection for sensitive clips. Holdboard can also use optional Apple Sign In and optional
              iCloud sync so users can keep data in sync across Apple devices.
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
            <h2 className="text-xl font-bold text-black mb-2">3. Data Holdboard may process</h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Clipboard entries you choose to keep (such as text, links, and supported metadata).</li>
              <li>Folders, bookmarks, lock preferences, and app-level settings.</li>
              <li>Optional Apple account/iCloud sync metadata when you choose Apple Sign In and iCloud sync.</li>
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
              Holdboard uses iOS LocalAuthentication for Face ID-protected content. Biometric data is managed by Apple on-device and is
              not stored by Holdboard.
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
              Holdboard asks only for permissions required by app features. Stored clips remain available based on your usage choices,
              and diagnostic logs are retained only for maintenance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">8. Your controls</h2>
            <p>
              You can manage app permissions in iOS Settings, remove app data by uninstalling the app, and contact us for privacy support.
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
              For privacy inquiries related to Holdboard, contact: <a className="underline text-black" href="mailto:karamalasrivatsav@gmail.com">karamalasrivatsav@gmail.com</a>
            </p>
          </section>
        </main>
      </div>
    </article>
  );
}
