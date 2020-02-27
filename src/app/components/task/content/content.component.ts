import { Component, OnInit, Input } from '@angular/core';
import { TaskTabParams, TaskContent } from 'src/app/params/task.params';
import { TaskConstants } from 'src/app/constants/task.constants';

@Component({
  selector: 'app-task-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class TaskContentComponent implements OnInit {

  @Input()
  public tab: TaskTabParams;

  constructor() { }

  ngOnInit(): void {
  }

  public getRows(): TaskContent[] {
    if (!this.tab) {
      return [];
    }

    return this.tab.contents;
  }

  public addRow() {
    this.tab.contents.push(TaskConstants.defaultTask);
  }
}
