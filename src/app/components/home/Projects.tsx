'use client';

import React from 'react';
import ApiHelper from '@/common/helpers/api.helper';
import NextImageWithFallback from '@/app/components/main/NextImageWithFallback';

import { GithubProject } from '@/common/types/types';

function ProjectCard({ project }: { project: GithubProject }) {
  return (
    <li className="group m-0 flex min-h-[300px] w-full flex-col items-center justify-center overflow-hidden">
      <a
        href={project.html_url}
        target="_blank"
        className="flex h-full w-full flex-col items-start justify-start gap-5 border border-zinc-800 bg-black/20 p-5 transition-all duration-200 hover:bg-black/10"
      >
        <div className="relative flex h-[75%] w-full items-center justify-center overflow-hidden">
          <NextImageWithFallback
            alt={project.name}
            className="object-cover object-center grayscale-50 transition-all duration-500 group-hover:scale-125"
            src={`https://raw.githubusercontent.com/${project.owner.login}/${project.name}/refs/heads/${project.default_branch}/portfolio/banner.jpg`}
          />
          <div className="bg-black-default/35 group-hover:bg-black-default/25 absolute bottom-0 left-0 h-full w-full transition-all duration-500" />
        </div>
        <section className="flex flex-col items-start justify-start gap-1">
          <h3 className="text-sm font-light text-zinc-200">{project.name}</h3>
          <p className="text-xs font-light text-zinc-300">
            {project.description}
          </p>
        </section>
      </a>
    </li>
  );
}

function Projects() {
  const userName = 'jaeger-dvlp';
  const [projects, setProjects] = React.useState<Array<GithubProject>>([]);

  React.useEffect(() => {
    const apiHelper = new ApiHelper(userName);

    const getProjects = async () => {
      const { data }: { data: Array<GithubProject> | null } =
        await apiHelper.getRepos();

      if (!data) return setProjects([]);

      const filteredData =
        data.length > 0
          ? data
              .filter(
                (repo: GithubProject) =>
                  repo.topics.includes('show-in-portfolio') && !repo.private,
              )
              .slice(0, 8)
          : [];
      setProjects(filteredData || []);
    };

    getProjects();
  }, []);

  return (
    <section id="projects" className="flex w-full items-center justify-center">
      <section className="max-w-app item-center flex w-full flex-col justify-start gap-10 p-3">
        <section className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-light text-zinc-200 lg:text-3xl">
            Projeler
          </h2>
          <p className="text-sm text-zinc-400">
            Fonksiyonel, ölçeklenebilir ve sürdürülebilir yazılım uygulamaları.
          </p>
        </section>
        <ul className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={`project-card-${project.id}`}
                project={project}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-sm font-light text-zinc-600">
              Listelenebilir proje bulunamadı.
            </p>
          )}
        </ul>
        <section className="flex w-full items-center justify-center">
          {projects.length > 0 && (
            <a
              target="_blank"
              href={`https://github.com/${userName}?tab=repositories`}
              className="cursor-pointer rounded-full border border-zinc-700 bg-black/30 px-6 py-2 text-sm font-light text-zinc-300 transition-all duration-150 hover:bg-black/5"
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
