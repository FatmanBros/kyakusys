import { Component, OnInit } from '@angular/core';
import { IconConstants } from 'src/app/constants/icon.constants';
import { ScheduleTabParams } from 'src/app/params/schedule.params';

@Component({
  selector: 'app-schedule-board',
  templateUrl: './schedule-board.component.html',
  styleUrls: ['./schedule-board.component.scss']
})
export class ScheduleBoardComponent implements OnInit {

  public icons: typeof IconConstants = IconConstants;

  public tabs: ScheduleTabParams[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  public addTab() {
    // タブ追加
    let newTab: ScheduleTabParams = new ScheduleTabParams();
    newTab.title = "new tab";
    
    this.tabs.push(newTab);
  }
}
