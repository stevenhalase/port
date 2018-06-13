import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillselectorComponent } from './skillselector.component';

describe('SkillselectorComponent', () => {
  let component: SkillselectorComponent;
  let fixture: ComponentFixture<SkillselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
