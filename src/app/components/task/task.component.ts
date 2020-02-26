import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../common/base/base.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  protected mainNgOnInit() {
    this.screenTitle = "タスク管理";
  }

}
