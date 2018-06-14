import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Skill } from '../../utilities/skill';

@Component({
  selector: 'app-selectedskill',
  templateUrl: './selectedskill.component.html',
  styleUrls: ['./selectedskill.component.css']
})
export class SelectedSkillComponent implements OnChanges, OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    const container = document.getElementById('app-selectedskill');
    container.scrollTop = 0;
  }

}
