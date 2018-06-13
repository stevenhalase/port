import { IProjectOptions } from './iproject';

export class Project {
  public name: string;
  public description: string;
  public link: string;
  public tags: Array<string>;

  constructor(projectOptions: IProjectOptions) {
    Object.assign(this, projectOptions);
  }
}
