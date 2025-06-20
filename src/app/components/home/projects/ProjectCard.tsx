import { GithubProject } from '@/common/types/types';
import NextImageWithFallback from '../../main/NextImageWithFallback';

export default function ProjectCard({ project }: { project: GithubProject }) {
  return (
    <a
      target="_blank"
      href={project.html_url}
      className="bg-black-default relative flex flex-col items-start justify-start gap-5 border border-zinc-800 p-5 transition-all duration-200 hover:bg-zinc-900"
    >
      <div className="relative flex aspect-[16/6] w-full items-center justify-center overflow-hidden md:aspect-[16/9] lg:aspect-[16/9]">
        <NextImageWithFallback
          alt={project.name}
          className="object-cover object-center grayscale-50 transition-all duration-500"
          src={`https://raw.githubusercontent.com/${project.owner.login}/${project.name}/refs/heads/${project.default_branch}/portfolio/banner.jpg`}
        />
        <div className="bg-black-default/35 absolute bottom-0 left-0 h-full w-full transition-all duration-500" />
      </div>
      <section className="flex flex-col items-start justify-start gap-1">
        <h3 className="text-sm font-light text-zinc-300">
          {project.cleanName || project.name}
        </h3>
        <p className="text-xs font-light text-zinc-400">
          {project.description}
        </p>
      </section>
    </a>
  );
}
