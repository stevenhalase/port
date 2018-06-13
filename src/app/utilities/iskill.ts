import { Skill } from './skill';
import { Project } from './project';

export interface ISkillOptions {
  name: string;
  image: string;
  childSkills: Array<Skill>;
  projects: Array<Project>;
}
