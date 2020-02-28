import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { IconConstants } from 'src/app/constants/icon.constants';
import { TaskTabParams } from 'src/app/params/task.params';
import { TaskConstants } from 'src/app/constants/task.constants';
import { MatTabGroup } from '@angular/material/tabs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  public getAllListConnections(index) {
    const connections: string[] = [];
    for (let i = 0; i < this.tabs.length; i++) {
      if (i !== index) {
        connections.push('tab-' + i);
      }
    }

    return connections;
  }

  public addTab() {
    // タブ追加
    let newTab: TaskTabParams = new TaskTabParams();
    newTab.title = "New Tab";
    newTab.contents = [TaskConstants.defaultTask];

    this.tabs.push(newTab);
    this.detecotr.detectChanges();
  }

  public drop(event: CdkDragDrop<string[]>) {
    const previousIndex = parseInt(event.previousContainer.id.replace('tab-', ''), 10);
    const currentIndex = parseInt(event.container.id.replace('tab-', ''), 10);
    moveItemInArray(this.tabs, previousIndex, currentIndex);
  }
}
