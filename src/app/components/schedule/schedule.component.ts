import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../common/base/base.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  protected mainNgOnInit() {
    this.screenTitle = "スケジュール管理";
  }

}
