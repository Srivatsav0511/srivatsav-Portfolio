import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function MoneyFormulaPrivacyPage() {
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
            MoneyFormula Privacy Policy
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-black">Privacy Policy</h1>
          <p className="mt-4 text-zinc-600 text-lg">Effective date: April 18, 2026</p>
        </header>

        <main className="space-y-8 leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-2">1. What MoneyFormula is and how it works</h2>
            <p>
              MoneyFormula is a mobile finance calculator app that helps users compute investment, taxation, and planning formulas quickly.
              Users enter values, get calculated outputs, and can revisit past calculations through local history features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">2. Do we use your personal data?</h2>
            <p>
              MoneyFormula does not sell your personal data. The app does not require personal profile information such as your name,
              address, or payment details for normal calculator usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">3. Data MoneyFormula may process</h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Calculation inputs and outputs you save in app history/favorites.</li>
              <li>App preference settings (filters, search behavior, display options).</li>
              <li>Basic diagnostics/crash logs used for stability and bug fixes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">4. Why this data is used</h2>
            <p>
              Data is used only to run core product features such as formula execution, history access, and app reliability improvements.
              It is not used for personal identity resale.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">5. Data sharing</h2>
            <p>
              MoneyFormula may use trusted infrastructure or diagnostics providers only for app operations. We do not sell or trade
              user data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">6. Permissions</h2>
            <p>
              The app requests only permissions needed for feature functionality. Any new permission requirement in future versions
              will be requested explicitly through platform prompts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">7. Data retention</h2>
            <p>
              Saved calculations remain available based on your in-app usage until removed by user action. Diagnostic data is retained
              only as needed for maintenance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">8. Your controls</h2>
            <p>
              You can clear app data by uninstalling the app, control device permissions in system settings, and contact us for privacy support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">9. Policy updates</h2>
            <p>
              This policy may be updated when app features or legal requirements change. The latest version will be posted on this page
              with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-2">10. Contact</h2>
            <p>
              For privacy inquiries related to MoneyFormula, contact: <a className="underline text-black" href="mailto:karamalasrivatsav@gmail.com">karamalasrivatsav@gmail.com</a>
            </p>
          </section>
        </main>
      </div>
    </article>
  );
}
