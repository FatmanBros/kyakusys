import { Component, OnInit, Input } from '@angular/core';
import { ScheduleParams } from 'src/app/params/schedule.params';

@Component({
  selector: 'app-schedule-row',
  templateUrl: './schedule-row.component.html',
  styleUrls: ['./schedule-row.component.scss']
})
export class ScheduleRowComponent implements OnInit {
  
  @Input()
  public param: ScheduleParams;

  constructor() { }

  ngOnInit(): void {
  }

}
