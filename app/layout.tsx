import type { Metadata, Viewport } from 'next';
import { Poppins, Nunito } from 'next/font/google';
import { APP_CONFIG } from '@/lib/config';
import { Providers } from '@/app/providers';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(APP_CONFIG.url),
  title: {
    default: `${APP_CONFIG.name} — Find LPG Cylinders Near You`,
    template: `%s | ${APP_CONFIG.name}`,
  },
  description: APP_CONFIG.description,
  keywords: ['LPG', 'gas cylinder', 'Pakistan', 'local vendors', 'gas suppliers', 'Lahore', 'Karachi'],
  authors: [{ name: 'Cylinderly' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${APP_CONFIG.name} — Find LPG Cylinders Near You`,
    description: APP_CONFIG.description,
    type: 'website',
    url: '/',
    siteName: APP_CONFIG.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cylinderly — Find LPG Cylinders Near You',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_CONFIG.name} — Find LPG Cylinders Near You`,
    description: APP_CONFIG.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${nunito.variable} antialiased overflow-x-hidden bg-[#020617] text-slate-200 min-h-screen flex flex-col`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
