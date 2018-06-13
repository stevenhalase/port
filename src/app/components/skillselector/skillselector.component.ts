import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SkillsService } from './../../services/skills/skills.service';
import { Skills } from '../../utilities/skills';
import { Skill } from '../../utilities/skill';

@Component({
  selector: 'app-skillselector',
  templateUrl: './skillselector.component.html',
  styleUrls: ['./skillselector.component.css']
})
export class SkillSelectorComponent implements OnInit {

  @Input() skills: Skills;
  @Output() skillSelected: EventEmitter<Skill> = new EventEmitter<Skill>();

  constructor() { }

  ngOnInit() {
  }

  selectSkill(skill: Skill) {
    this.skillSelected.emit(skill);
  }

}
