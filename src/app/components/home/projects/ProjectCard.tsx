import { GithubProject } from '@/common/types/types';

export default function ProjectCard({ project }: { project: GithubProject }) {
  return (
    <a
      target="_blank"
      href={project.html_url}
      className="bg-black-default relative flex flex-col items-start justify-start gap-5 border border-zinc-800 p-5 transition-all duration-200 hover:bg-zinc-900"
    >
      <section className="flex flex-col items-start justify-start gap-2">
        <h3 className="text-sm font-normal text-zinc-300">
          {project.cleanName || project.name}
        </h3>
        <p className="text-xs font-light text-zinc-400">
          {project.description}
        </p>
      </section>
    </a>
  );
}
