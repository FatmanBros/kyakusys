import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { ScheduleBoardComponent } from './schedule-board/schedule-board.component';
import { ScheduleContentComponent } from './schedule-content/schedule-content.component';
import { ScheduleRowComponent } from './schedule-row/schedule-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScheduleBoardComponent,
    ScheduleContentComponent,
    ScheduleRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: MainComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
