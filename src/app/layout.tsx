import { Suspense } from 'react';
import type { Metadata } from 'next';
import ReactLenis from 'lenis/react';
import { Inter } from 'next/font/google';

import '@/app/globals.css';
import AOS from '@/app/components/main/AOS';
import Navbar from '@/app/components/main/Navbar';
import Footer from '@/app/components/main/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Ömer Kayalar | Software Developer',
  description: 'Gerçek dünya problemlerine yazılımla çözüm üretiyorum.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AOS />
      <ReactLenis options={{ duration: 1.5 }} root />
      <html lang="en" className={`${inter.className} antialiased`}>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body>
          <Suspense>
            <Navbar />
          </Suspense>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
