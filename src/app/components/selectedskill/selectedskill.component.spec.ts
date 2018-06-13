import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedskillComponent } from './selectedskill.component';

describe('SelectedskillComponent', () => {
  let component: SelectedskillComponent;
  let fixture: ComponentFixture<SelectedskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
