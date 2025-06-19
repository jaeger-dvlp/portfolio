import { Suspense } from 'react';
import type { Metadata } from 'next';
import ReactLenis from 'lenis/react';
import { Inter } from 'next/font/google';
import Navbar from './components/main/Navbar';

import './globals.css';
import AOS from './components/main/AOS';

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
        </body>
      </html>
    </>
  );
}
