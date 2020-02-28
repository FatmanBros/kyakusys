import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { IconConstants } from 'src/app/constants/icon.constants';
import { TaskTabParams } from 'src/app/params/task.params';
import { TaskConstants } from 'src/app/constants/task.constants';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-task-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  public icons: typeof IconConstants = IconConstants;

  @ViewChild('matTab')
  public matTab: MatTabGroup;

  @Input()
  public tabs: TaskTabParams[];

  constructor(private detecotr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public addTab() {
    // タブ追加
    let newTab: TaskTabParams = new TaskTabParams();
    newTab.title = "New Tab";
    newTab.contents = [TaskConstants.defaultTask];

    this.tabs.push(newTab);
    this.detecotr.detectChanges();
  }
}
