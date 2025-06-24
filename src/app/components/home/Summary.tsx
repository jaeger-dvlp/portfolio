import React from 'react';
import SectionTitle from '../main/SectionTitle';

function Summary() {
  return (
    <section
      id="summary"
      className="grid w-full grid-cols-1 place-content-start place-items-center py-14"
    >
      <section
        data-aos="fade-in"
        data-aos-delay="200"
        className="max-w-app flex h-full w-full flex-col items-start justify-start gap-10 p-3 pb-14"
      >
        <section className="flex flex-col items-start justify-center gap-2 text-start">
          <SectionTitle>Summary</SectionTitle>
          <p className="text-md text-zinc-500">
            A <span className="text-zinc-400">Full Stack Developer</span> with
            experience in areas ranging from production-focused workflows to
            user interfaces. I combine coding discipline with hands-on field
            experience to deliver functional, sustainable, and needs-driven
            solutions. I&rsquo;ve contributed to projects that directly support
            production processes such as industrial automation, inventory
            tracking, and interface development. My core priorities are{' '}
            <span className="text-zinc-400">
              clean architecture, long-term thinking, and a systematic approach
            </span>
            .
          </p>
        </section>
      </section>
    </section>
  );
}

export default Summary;
