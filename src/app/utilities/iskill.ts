import { Skill } from './skill';

export interface ISkillOptions {
  name: string;
  image: string;
  childSkills: Array<Skill>;
}
