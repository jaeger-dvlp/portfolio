import React from 'react';
import dayjs from 'dayjs';

import { Experience } from '@/common/types/types';
import SectionTitle from '@/app/components/main/SectionTitle';
import { experience as userExperiences } from '@/common/data/user-data.json';

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <React.Fragment>
      <li className="relative inset-0 m-0 p-0">
        <section
          className={`bg-black-default relative z-[1] grid grid-cols-1 place-content-start place-items-start border-b border-zinc-800 border-b-zinc-800 p-8 transition-all duration-150`}
        >
          {experience.company && (
            <p className="text-md text-zinc-500">{experience.company}</p>
          )}
          <h3 className="text-xl font-light text-zinc-300">
            {experience.position}
          </h3>
          <p className="mb-4 flex items-center text-sm text-zinc-500">
            <span>{dayjs(experience.startDate).format('YYYY/MM')}</span>
            <span className="mx-2 h-px w-3 bg-zinc-700" />
            {experience.endDate ? (
              <span>{dayjs(experience.endDate).format('YYYY/MM')}</span>
            ) : (
              <span className="text-xl">∞</span>
            )}
          </p>
          {experience.descriptions &&
            experience.descriptions.length > 0 &&
            experience.descriptions.map((description, index) => (
              <p
                key={`${experience.id}-description-${index}`}
                className="relative pl-4 text-sm font-light text-zinc-400/90"
              >
                <span className="absolute top-2 left-0 h-px w-2 bg-zinc-700" />
                {description}
              </p>
            ))}
        </section>
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
      <section
        data-aos="fade-in"
        data-aos-delay="200"
        className="max-w-app flex h-full w-full flex-col items-start justify-start gap-10 p-3"
      >
        <section className="flex flex-col items-start justify-center gap-2 text-start">
          <SectionTitle>Experience</SectionTitle>
          <p className="text-md text-zinc-500">
            Technical and operational experience gained in real-world production
            environments.
          </p>
        </section>
        <ul className="grid w-full grid-cols-1 place-content-start place-items-stretch">
          {userExperiences
            .sort((a: Experience, b: Experience) => b.id - a.id)
            .map((experience: Experience, index: number) => (
              <ExperienceCard
                experience={experience}
                key={`user-experience-${index}`}
              />
            ))}
        </ul>
      </section>
    </section>
  );
}

export default Experiences;
