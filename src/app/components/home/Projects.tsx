'use client';

import React from 'react';
import NextImageWithFallback from '@/app/components/main/NextImageWithFallback';

import { GithubProject } from '@/common/types/types';

function ProjectCard({ project }: { project: GithubProject }) {
  return (
    <a
      target="_blank"
      href={project.html_url}
      className="bg-black-default relative flex flex-col items-start justify-start gap-5 border border-zinc-800 p-5 transition-all duration-200 hover:bg-zinc-900"
    >
      <div className="relative flex aspect-[16/6] w-full items-center justify-center overflow-hidden md:aspect-[16/9] lg:aspect-[16/9]">
        <NextImageWithFallback
          alt={project.name}
          className="object-cover object-center grayscale-50 transition-all duration-500 group-hover:scale-125"
          src={`https://raw.githubusercontent.com/${project.owner.login}/${project.name}/refs/heads/${project.default_branch}/portfolio/banner.jpg`}
        />
        <div className="bg-black-default/35 group-hover:bg-black-default/25 absolute bottom-0 left-0 h-full w-full transition-all duration-500" />
      </div>
      <section className="flex flex-col items-start justify-start gap-1">
        <h3 className="text-sm font-light text-zinc-300">{project.name}</h3>
        <p className="text-xs font-light text-zinc-400">
          {project.description}
        </p>
      </section>
    </a>
  );
}

function Projects({
  userName,
  projects: projectsData,
}: {
  userName: string;
  projects?: Array<GithubProject>;
}) {
  const [projects, setProjects] = React.useState<
    Array<GithubProject> | 'loading'
  >('loading');

  React.useEffect(() => {
    if (!projectsData) return setProjects([]);

    const filteredData = projectsData
      .filter(
        (repo: GithubProject) =>
          repo.topics.includes('show-in-portfolio') && !repo.private,
      )
      .slice(0, 9);

    setProjects(filteredData || []);
  }, [projectsData]);

  return (
    <section
      id="projects"
      className="grid h-full w-full grid-cols-1 place-content-start place-items-center py-14"
    >
      <section
        data-aos="fade-in"
        data-aos-delay="200"
        className="max-w-app flex h-full w-full flex-col items-start justify-start gap-10 p-3"
      >
        <section className="flex flex-col items-start justify-center gap-2 text-start">
          <h2 className="text-2xl font-extralight text-zinc-200 lg:text-3xl">
            Projeler
          </h2>
          <p className="text-sm text-zinc-400">
            Fonksiyonel, ölçeklenebilir ve sürdürülebilir yazılım uygulamaları.
          </p>
        </section>
        {projects.length > 0 && projects !== 'loading' && (
          <section className="grid h-full w-full auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(projects) &&
              projects.map((project) => (
                <ProjectCard
                  key={`project-card-${project.id}`}
                  project={project}
                />
              ))}
          </section>
        )}
        {projects.length === 0 && (
          <p className="col-span-full text-center text-sm font-light text-zinc-600">
            Listelenebilir proje bulunamadı.
          </p>
        )}
        {projects === 'loading' && (
          <p className="col-span-full text-center text-sm font-light text-zinc-600">
            Listelenebilir projeler yükleniyor...
          </p>
        )}
        <section className="-mt-5 flex w-full items-start justify-start">
          {projects.length > 0 && projects !== 'loading' && (
            <a
              target="_blank"
              href={`https://github.com/${userName}?tab=repositories`}
              className="bg-black-default cursor-pointer border border-zinc-800 px-6 py-2 text-sm font-light text-zinc-300 transition-all duration-150 hover:bg-zinc-900"
            >
              Tümünü Gör
            </a>
          )}
        </section>
      </section>
    </section>
  );
}

export default Projects;
