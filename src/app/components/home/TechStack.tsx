import React from 'react';
import SectionTitle from '../main/SectionTitle';

const techStack = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'React/Next.js',
  'Vue.js',
  'Dart',
  'Flutter',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'DigitalOcean',
  'RESTful APIs',
  'MVC',
  'SOLID',
  'TDD',
  'CI/CD',
  'DevOps',
  'Nginx',
  'Git',
];

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="grid w-full grid-cols-1 place-content-start place-items-center py-14"
    >
      <section
        data-aos="fade-in"
        data-aos-delay="200"
        className="max-w-app flex h-full w-full flex-col items-start justify-start gap-5 p-3 pb-14"
      >
        <section className="flex flex-col items-start justify-center gap-2 text-start">
          <SectionTitle>Tech Stack</SectionTitle>
          <p className="text-md text-zinc-500">
            I work with technologies that help me build fast, reliable, and
            scalable applications. Below is a list of the main technologies &
            tools I use.
          </p>
        </section>
        <section className="flex w-full items-start justify-start">
          <p className="sr-only">{techStack.map((tech) => tech).join(', ')}</p>
          <ul
            aria-label="List of main technologies and tools"
            className="flex w-full list-none flex-wrap items-start justify-start gap-3"
          >
            {techStack.map((tech, index) => (
              <li
                className="inset-0 m-0 flex h-auto rounded-none bg-zinc-900 p-0 px-4 py-2 text-center text-sm font-light text-zinc-400"
                key={`tech-${index}`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
}

export default TechStack;
