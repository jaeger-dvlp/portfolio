import React, { JSX } from 'react';

import ApiHelper from '@/common/helpers/api.helper';
import EntryBanner from '@/app/components/home/EntryBanner';
import Summary from '@/app/components/home/Summary';
import Projects from '@/app/components/home/projects';
import Experiences from '@/app/components/home/experiences';
import TechStack from '@/app/components/home/TechStack';
import Contact from '@/app/components/home/Contact';

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
        <Contact />
      </main>
    </>
  );
}
