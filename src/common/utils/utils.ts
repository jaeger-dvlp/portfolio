import { GithubProject } from '../types/types';

const getCleanProjectTitle = (title: string): string => {
  return title
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\b\w{1,2}\b/g, (char) => char.toUpperCase());
};

const filterProjects = (projects: GithubProject[]) => {
  const MAX_PROJECTS = 9;

  if (!projects || projects.length === 0) return [];

  const filteredData = projects
    .filter(
      (repo: GithubProject) =>
        repo.topics.includes('show-in-portfolio') && !repo.private,
    )
    .slice(0, MAX_PROJECTS)
    .map((repo: GithubProject) => ({
      ...repo,
      cleanName: getCleanProjectTitle(repo.name),
      description: repo.description || 'See on GitHub.',
    }));

  return filteredData;
};

export { getCleanProjectTitle, filterProjects };
