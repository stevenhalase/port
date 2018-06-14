import { ISkillOptions } from './iskill';
import { Project } from './project';
import { eKnowledge } from './eknowledge';

export class Skill {
  public name: string;
  public image: string;
  public childSkills: Array<Skill>;
  public projects: Array<Project>;
  public knowledge: eKnowledge;

  constructor(skillOptions: ISkillOptions) {
    Object.assign(this, skillOptions);
  }
}
