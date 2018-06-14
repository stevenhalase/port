import { Skill } from './skill';
import { Project } from './project';
import { eKnowledge } from './eknowledge';

export interface ISkillOptions {
  name: string;
  image: string;
  childSkills: Array<Skill>;
  projects: Array<Project>;
  knowledge: eKnowledge;
}
