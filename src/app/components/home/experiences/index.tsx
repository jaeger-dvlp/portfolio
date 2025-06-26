import React from 'react';

import { Experience } from '@/common/types/types';
import SectionTitle from '@/app/components/main/SectionTitle';
import ExperienceRow from '@/app/components/home/experiences/ExperienceRow';
import { experience as userExperiences } from '@/common/data/user-data.json';

function Experiences() {
  return (
    <section
      id="experience"
      className="grid w-full grid-cols-1 place-content-start place-items-center py-14"
    >
      <section
        data-aos="fade-in"
        data-aos-delay="200"
        className="max-w-app flex h-full w-full flex-col items-start justify-start gap-5 p-3"
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
              <ExperienceRow
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
