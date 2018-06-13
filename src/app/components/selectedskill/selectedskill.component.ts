import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../utilities/skill';

@Component({
  selector: 'app-selectedskill',
  templateUrl: './selectedskill.component.html',
  styleUrls: ['./selectedskill.component.css']
})
export class SelectedSkillComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit() { }

}
