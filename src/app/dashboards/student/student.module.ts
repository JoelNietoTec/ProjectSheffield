import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { HomeworkComponent } from './homework/homework.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule, // angular 4.0+ only
    CalendarModule.forRoot()
  ],
  exports: [
    StudentComponent
  ],
  declarations: [StudentComponent, HomeworkComponent, HomeworkListComponent]
})
export class StudentDashboardModule { }
