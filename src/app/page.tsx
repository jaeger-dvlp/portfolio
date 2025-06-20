import React, { JSX } from 'react';

import EntryBanner from './components/home/EntryBanner';
import Projects from './components/home/projects';
import Experiences from './components/home/Experiences';
import Summary from './components/home/Summary';
import ApiHelper from '@/common/helpers/api.helper';

export default async function Home(): Promise<JSX.Element> {
  const userName: string = 'jaeger-dvlp';
  const apiHelper = new ApiHelper(userName);
  const { data: projects } = await apiHelper.getRepos();

  return (
    <>
      <main className="grid h-full grid-cols-1 place-content-start place-items-center">
        <EntryBanner />
        <Summary />
        <Experiences />
        <Projects projects={projects} userName={userName} />
      </main>
    </>
  );
}
