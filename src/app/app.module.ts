import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar'

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-router.module';

// Dashboards
import { StudentDashboardModule } from './dashboards/student/student.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    StudentDashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }