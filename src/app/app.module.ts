import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { SkillSelectorComponent } from './components/skillselector/skillselector.component';
import { SkillsService } from './services/skills/skills.service';
import { SelectedSkillComponent } from './components/selectedskill/selectedskill.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillSelectorComponent,
    SelectedSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [ SkillsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
