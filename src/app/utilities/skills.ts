import { ISkillsOptions } from './iskills';
import { Skill } from './skill';

export class Skills {
  public skills: Array<Skill>;

  constructor(skillsOptions: ISkillsOptions) {
    Object.assign(this, skillsOptions);
  }
}
