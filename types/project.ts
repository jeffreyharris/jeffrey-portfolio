export type Project = {
  slug: string;
  title: string;
  platform: string;
  category: string;
  summary: string;
  tech: string[];
  role: string;
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};