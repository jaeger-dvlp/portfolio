'use client';

import React from 'react';
import ProjectCard from './ProjectCard';

import { GithubProject } from '@/common/types/types';
import { filterProjects } from '@/common/utils/utils';

function Projects({
  userName,
  projects: projectsData,
}: {
  userName: string;
  projects?: Array<GithubProject>;
}) {
  const [projects, setProjects] = React.useState<{
    loading: boolean;
    objects: Array<GithubProject>;
  }>({
    loading: true,
    objects: [],
  });

  React.useEffect(() => {
    if (!projectsData) return setProjects({ loading: false, objects: [] });

    const filteredData = filterProjects(projectsData);

    if (filteredData.length === 0) {
      return setProjects({ loading: false, objects: [] });
    }

    return setProjects({
      loading: false,
      objects: filteredData,
    });
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
        {projects.loading ? (
          <p className="col-span-full text-center text-sm font-light text-zinc-600">
            Listelenebilir projeler yükleniyor...
          </p>
        ) : projects.objects.length === 0 ? (
          <p className="col-span-full text-center text-sm font-light text-zinc-600">
            Listelenebilir proje bulunamadı.
          </p>
        ) : (
          <section className="grid h-full w-full auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {projects.objects.map((project) => (
              <ProjectCard
                key={`project-card-${project.id}`}
                project={project}
              />
            ))}
          </section>
        )}
        <section className="-mt-5 flex w-full items-start justify-start">
          {projects.objects.length > 0 && !projects.loading && (
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
