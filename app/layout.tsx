import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Srivatsav',
  description:
    'Professional portfolio of Srivatsav featuring mobile and web products, including FactRead, Holdboard, Pureclick, CodeClarity, and QuickCV.',
  icons: {
    icon: [{ url: '/icon.png?v=5', type: 'image/png' }],
    shortcut: '/icon.png?v=5',
    apple: '/apple-icon.png?v=5',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
