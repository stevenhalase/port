import { Component } from '@angular/core';

import { SkillsService } from './services/skills/skills.service';
import { Skills } from './utilities/skills';
import { Skill } from './utilities/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public skills: Skills;
  public selectedSkill: Skill;

  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.getSkills();
    this.selectedSkill = null;
  }

  onSkillSelected(skill: Skill) {
    this.selectedSkill = skill;
  }
}
