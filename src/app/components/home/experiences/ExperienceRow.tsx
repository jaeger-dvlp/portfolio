import React from 'react';
import dayjs from 'dayjs';
import { Experience } from '@/common/types/types';

export default function ExperienceRow({
  experience,
  isLast = false,
}: {
  experience: Experience;
  isLast?: boolean;
}) {
  return (
    <React.Fragment>
      <li className="relative inset-0 m-0 p-0">
        <section
          className={`bg-black-default relative z-[1] grid grid-cols-1 place-content-start place-items-start px-5 pb-10 transition-all duration-150`}
        >
          <span className="bg-black-default absolute top-0 left-0 z-[3] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-zinc-700" />

          <span
            className={`${isLast ? 'bg-gradient-to-b from-zinc-700 to-transparent' : 'bg-zinc-700'} absolute top-0 left-0 z-[2] h-full w-px`}
          />

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
