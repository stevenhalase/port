import { ISkillOptions } from './iskill';
import { Project } from './project';

export class Skill {
  public name: string;
  public image: string;
  public childSkills: Array<Skill>;
  public projects: Array<Project>;

  constructor(skillOptions: ISkillOptions) {
    Object.assign(this, skillOptions);
  }
}
