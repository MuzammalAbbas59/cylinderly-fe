import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { APP_CONFIG } from '@/lib/config';
import { Providers } from '@/app/providers';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
    default: `Cylinderly | ${APP_CONFIG.tagline}`,
    template: `%s | ${APP_CONFIG.name}`,
  },
  description: APP_CONFIG.description,
  keywords: ['LPG', 'gas cylinder', 'Pakistan', 'local vendors', 'gas suppliers', 'Lahore', 'Karachi'],
  authors: [{ name: 'Cylinderly' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `Cylinderly | ${APP_CONFIG.tagline}`,
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
    title: `Cylinderly | ${APP_CONFIG.tagline}`,
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
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased overflow-x-hidden bg-surface text-on-surface selection:bg-primary/30 min-h-screen flex flex-col`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
