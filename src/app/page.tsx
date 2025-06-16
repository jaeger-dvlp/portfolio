import React from 'react';

import EntryBanner from './components/home/EntryBanner';
import Projects from './components/home/Projects';

export default function Home() {
  return (
    <main className="grid h-full grid-cols-1 place-content-start place-items-center">
      <EntryBanner />
      <Projects />
    </main>
  );
}
