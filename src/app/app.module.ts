import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TaskComponent } from './components/task/task.component';
import { TaskBoardComponent } from './components/task/board/board.component';
import { TaskContentComponent } from './components/task/content/content.component';
import { TaskRowComponent } from './components/task/row/row.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconComponent } from './custom-component/icon/icon.component';
import { CustomRadioComponent } from './custom-component/custom-radio/custom-radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RangePipe } from './pipe/range.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TaskComponent,
    TaskBoardComponent,
    TaskContentComponent,
    TaskRowComponent,
    IconComponent,
    CustomRadioComponent,
    RangePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
