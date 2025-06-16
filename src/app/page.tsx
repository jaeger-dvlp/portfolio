import React from 'react';

import EntryBanner from './components/home/EntryBanner';
import Projects from './components/home/Projects';

export default function Home() {
  return (
    <main className="flex min-h-[200vh] flex-col items-center justify-start">
      <EntryBanner />
      <Projects />
    </main>
  );
}
