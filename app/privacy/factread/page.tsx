import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function FactReadPrivacyPage() {
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
            FactRead Privacy Policy
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-black">Privacy Policy</h1>
          <p className="mt-4 text-zinc-600 text-lg">Effective date: April 17, 2026</p>
        </header>

        <main className="space-y-8 leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-2">1. What FactRead is and how it works</h2>
            <p>
              FactRead is an iOS learning app that shows one fact card at a time and supports reading preferences such as theme,
              typography, and narration playback. The app is designed for focused, short-form learning sessions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">2. Do we use your personal data?</h2>
            <p>
              FactRead is built with a privacy-first approach. We do not sell your personal data. We do not collect sensitive personal
              profile data such as your name, address, or payment details for basic app usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">3. Data we may process</h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Reading preferences (font size, theme, brightness behavior, and playback settings).</li>
              <li>Language and locale settings used to show content in your preferred language.</li>
              <li>Basic diagnostics/crash information to improve app reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">4. Why this data is used</h2>
            <p>
              The above data is used only to run core features, improve app stability, and maintain a better reading experience.
              It is not used to sell your identity or personal profile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">5. Data sharing</h2>
            <p>
              We may use trusted service providers (for example, crash diagnostics or infrastructure support) only for app operations.
              We do not sell or trade user data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">6. Permissions</h2>
            <p>
              FactRead requests only permissions required for app features. Any new permission in future versions will be requested
              explicitly through iOS prompts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">7. Data retention</h2>
            <p>
              App preference data is retained only as needed for user experience. Diagnostic logs are retained for limited periods
              for maintenance and bug fixing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">8. Your controls</h2>
            <p>
              You can change app permissions in iOS Settings, clear app data by uninstalling the app, and contact us with any
              privacy questions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">9. Policy updates</h2>
            <p>
              If features or legal requirements change, this policy may be updated. The latest version will always be posted on this page
              with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">10. Contact</h2>
            <p>
              For privacy inquiries related to FactRead, contact: <a className="underline text-black" href="mailto:karamalasrivatsav@gmail.com">karamalasrivatsav@gmail.com</a>
            </p>
          </section>
        </main>
      </div>
    </article>
  );
}
