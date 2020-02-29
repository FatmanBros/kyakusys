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
    this.contentService.setSelected(this.vi, this.hi);

    // タブ追加
    let newTab: TaskTabParams = new TaskTabParams();
    newTab.contents = [TaskConstants.defaultTask];

    this.tabs.push(newTab);
    this.detecotr.detectChanges();
  }

  @Output()
  public dropTab: EventEmitter<CdkDragDrop<string[]>> = new EventEmitter<CdkDragDrop<string[]>>();
    
  public drop(event: CdkDragDrop<string[]>) {
    this.dropTab.emit(event);
  }

  public selectedTabChange(event) {
    this.detecotr.detectChanges();
  }
}
