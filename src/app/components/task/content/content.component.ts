import { Component, OnInit, Input } from '@angular/core';
import { TaskTabParams, TaskParams } from 'src/app/params/task.params';
import { TaskConstants } from 'src/app/constants/task.constants';

@Component({
  selector: 'app-task-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class TaskContentComponent implements OnInit {

  @Input()
  public content: TaskTabParams;

  constructor() { }

  ngOnInit(): void {
  }

  public getRows(): TaskParams[] {
    if (!this.content) {
      return [];
    }

    return this.content.tasks;
  }

  public addRow() {
    this.content.tasks.push(TaskConstants.defaultTask);
  }
}
