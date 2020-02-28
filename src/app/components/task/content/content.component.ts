import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { TaskTabParams, TaskContent } from 'src/app/params/task.params';
import { TaskConstants } from 'src/app/constants/task.constants';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ContentService } from 'src/app/service/app/content.service';
import { TaskBoardComponent } from '../board/board.component';

@Component({
  selector: 'app-task-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class TaskContentComponent implements OnInit {

  @ViewChild('content')
  public content: ElementRef;

  @Input()
  public tab: TaskTabParams;

  constructor(
    private detector: ChangeDetectorRef,
    private contentService: ContentService,
    private board: TaskBoardComponent,
  ) { }

  ngOnInit(): void {
  }

  public getRows(): TaskContent[] {
    if (!this.tab) {
      return [];
    }

    return this.tab.contents;
  }

  public addRow(i) {
    // 最後の行のときだけ追加
    if (i < this.tab.contents.length - 1) {
      return;
    }
    this.tab.contents.push(TaskConstants.defaultTask);
  }

  public onChildDelete(i) {
    this.tab.contents = this.tab.contents.filter((_, index) => index !== i);
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tab.contents, event.previousIndex, event.currentIndex);
  }
}
