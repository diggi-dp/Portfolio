import { siteConfig, ProjectConfigData } from '@/lib/config/site.config';

export type ProjectWorldData = ProjectConfigData;

export const projectsData: ProjectWorldData[] =
  siteConfig.projects as ProjectWorldData[];
