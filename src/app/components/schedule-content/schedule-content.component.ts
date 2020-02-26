import { Component, OnInit, Input } from '@angular/core';
import { ScheduleTabParams, ScheduleParams } from 'src/app/params/schedule.params';

@Component({
  selector: 'app-schedule-content',
  templateUrl: './schedule-content.component.html',
  styleUrls: ['./schedule-content.component.scss']
})
export class ScheduleContentComponent implements OnInit {

  @Input()
  public content: ScheduleTabParams;

  constructor() { }

  ngOnInit(): void {
  }

  public getRows(): ScheduleParams[] {
    if (!this.content) {
      return [];
    }

    return this.content.schedule;
  }

}
