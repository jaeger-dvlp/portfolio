import { ImageProps } from 'next/image';

interface GithubProject {
  id: number;
  name: string;
  description: string;
  private: boolean;
  html_url: string;
  topics: string[];
  default_branch: string;
  homepage: string | null;
  owner: { login: string };
}

interface Experience {
  id: number;
  startDate: string;
  endDate?: string;
  company?: string;
  position: string;
  descriptions?: string[];
}

interface TypeNextImageWithFallback extends ImageProps {
  fallback?: string;
  alt: string;
  src: string;
}

export type { GithubProject, Experience, TypeNextImageWithFallback };
