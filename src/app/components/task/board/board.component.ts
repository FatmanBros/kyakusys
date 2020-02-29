import { Component, OnInit, ViewChild, ChangeDetectorRef, Input, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { IconConstants } from 'src/app/constants/icon.constants';
import { TaskTabParams } from 'src/app/params/task.params';
import { TaskConstants } from 'src/app/constants/task.constants';
import { MatTabGroup } from '@angular/material/tabs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ContentService } from 'src/app/service/app/content.service';

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

  @Input()
  public vi: number;

  @Input()
  public hi: number;

  constructor(
    private detecotr: ChangeDetectorRef,
    private contentService: ContentService,
  ) { }

  ngOnInit(): void {
  }

  public getAllListConnections(id) {
    let connection = this.tabs.map(tab => {
      if (tab.id !== id) {
        return "tab-" + tab.id
      }
    });
    return connection;
  }

  public id = 0;
  public addTab() {
    this.contentService.setSelected(this.vi, this.hi);

    // タブ追加
    let newTab: TaskTabParams = new TaskTabParams();
    newTab.contents = [];
    newTab.id = this.id++;

    this.tabs.push(newTab);
    this.detecotr.detectChanges();
  }

  @Output()
  public dropTab: EventEmitter<CdkDragDrop<string[]>> = new EventEmitter<CdkDragDrop<string[]>>();

  public drop(event: CdkDragDrop<string[]>) {
    this.dropTab.emit(event);
  }

  public deleteTab(id) {
    let index = -1;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id === id) {
        index = i;
        break;
      }
    }

    if (index < 0) {
      return;
    }

    this.tabs.splice(index, 1);
  }
}
