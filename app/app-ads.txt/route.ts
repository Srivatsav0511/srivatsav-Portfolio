export function GET() {
  const appAdsEntry = '# FactRead\ngoogle.com, pub-5519379714521588, DIRECT, f08c47fec0942fa0\n\n# MoneyFormula\ngoogle.com, pub-5519379714521588, DIRECT, f08c47fec0942fa0\n';

  return new Response(appAdsEntry, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
