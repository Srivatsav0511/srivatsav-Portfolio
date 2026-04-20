import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Srivatsav',
  description:
    'Professional portfolio of Srivatsav featuring mobile and web products, including FactRead, Holdboard, Pureclick, CodeClarity, and QuickCV.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=3' },
      { url: '/brand-favicon.svg?v=3', type: 'image/svg+xml' },
      { url: '/icon.png?v=3', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: '/apple-icon.png?v=3',
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
