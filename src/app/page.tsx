import React, { JSX } from 'react';

import EntryBanner from './components/home/EntryBanner';
import Projects from './components/home/projects';
import Experiences from './components/home/experiences';
import Summary from './components/home/Summary';
import ApiHelper from '@/common/helpers/api.helper';
import TechStack from './components/home/TechStack';

export default async function Home(): Promise<JSX.Element> {
  const userName: string = 'jaeger-dvlp';
  const apiHelper = new ApiHelper(userName);
  const { data: projects } = await apiHelper.getRepos();

  return (
    <>
      <main className="grid h-full grid-cols-1 place-content-start place-items-center">
        <EntryBanner />
        <Summary />
        <TechStack />
        <Projects projects={projects} userName={userName} />
        <Experiences />
      </main>
    </>
  );
}
