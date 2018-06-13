import { ISkillOptions } from './iskill';

export class Skill {
  public name: string;
  public image: string;
  public childSkills: Array<Skill>;

  constructor(skillOptions: ISkillOptions) {
    Object.assign(this, skillOptions);
  }
}
