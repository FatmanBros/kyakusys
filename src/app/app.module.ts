import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleBoardComponent } from './components/schedule-board/schedule-board.component';
import { ScheduleContentComponent } from './components/schedule-content/schedule-content.component';
import { ScheduleRowComponent } from './components/schedule-row/schedule-row.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconComponent } from './custom-component/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScheduleComponent,
    ScheduleBoardComponent,
    ScheduleContentComponent,
    ScheduleRowComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "", component: ScheduleComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
