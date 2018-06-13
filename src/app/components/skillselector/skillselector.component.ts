import { Component, OnInit } from '@angular/core';
import { Skills } from '../../utilities/skills';
import { SkillsService } from './../../services/skills/skills.service';

@Component({
  selector: 'app-skillselector',
  templateUrl: './skillselector.component.html',
  styleUrls: ['./skillselector.component.css']
})
export class SkillSelectorComponent implements OnInit {

  public skills: Skills;

  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.getSkills();
  }

  ngOnInit() {
  }

}
