import { Component, OnInit } from '@angular/core';
import { IconConstants } from 'src/app/constants/icon.constants';
import { TaskTabParams } from 'src/app/params/task.params';
import { TaskType } from 'src/app/enum/task-type.enum';
import { TaskConstants } from 'src/app/constants/task.constants';

@Component({
  selector: 'app-task-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  public icons: typeof IconConstants = IconConstants;

  public tabs: TaskTabParams[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addTab() {
    // タブ追加
    let newTab: TaskTabParams = new TaskTabParams();
    newTab.title = "new tab";
    newTab.tasks = [TaskConstants.defaultTask];

    this.tabs.push(newTab);
  }
}
