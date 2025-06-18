import React from 'react';
import dayjs from 'dayjs';

import { Experience } from '@/common/types/types';
import { experience as userExperiences } from '@/common/data/user-data.json';

function ExperienceCard({
  experience,
  isLast,
}: {
  experience: Experience;
  isLast?: boolean;
}) {
  return (
    <React.Fragment>
      <li className="relative inset-0 m-0 p-0">
        <section className="z-[1] grid grid-cols-1 place-content-start place-items-start border-2 border-zinc-800 p-5 transition-all duration-150 hover:bg-zinc-800">
          {experience.company && (
            <p className="text-sm font-light text-zinc-400">
              {experience.company}
            </p>
          )}
          <h3 className="text-xl font-light text-zinc-300">
            {experience.position}
          </h3>
          <p className="text-sm font-light text-zinc-400">
            <span>{dayjs(experience.startDate).format('YYYY/MM')}</span>
            <span className="mx-2">→</span>
            {experience.endDate ? (
              <span>{dayjs(experience.endDate).format('YYYY/MM')}</span>
            ) : (
              <span>∞</span>
            )}
          </p>
          {experience.description && (
            <p className="!mt-4 text-xs font-light whitespace-pre-wrap text-zinc-400/90">
              {experience.description}
            </p>
          )}
        </section>
        {!isLast && (
          <span className="bg-black-default absolute bottom-0 left-0 z-[2] h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-none border-2 border-zinc-800" />
        )}
      </li>
    </React.Fragment>
  );
}

function Experiences() {
  return (
    <section
      id="experience"
      className="grid w-full grid-cols-1 place-content-start place-items-center py-14"
    >
      <section className="max-w-app flex h-full w-full flex-col items-center justify-start gap-10 p-3">
        <section className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-2xl font-light text-zinc-200 lg:text-3xl">
            Deneyim
          </h2>
          <p className="text-sm text-zinc-400">
            Gerçek üretim ortamlarında edinilmiş teknik ve operasyonel
            tecrübeler.
          </p>
        </section>
        <ul className="grid w-full max-w-3xl grid-cols-1 place-content-start place-items-stretch border border-zinc-800">
          {userExperiences
            .sort((a: Experience, b: Experience) => b.id - a.id)
            .map((experience: Experience, index: number) => (
              <ExperienceCard
                experience={experience}
                key={`user-experience-${index}`}
                isLast={index === userExperiences.length - 1}
              />
            ))}
        </ul>
      </section>
    </section>
  );
}

export default Experiences;
