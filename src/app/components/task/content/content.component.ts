import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { TaskTabParams, TaskContent } from 'src/app/params/task.params';
import { TaskConstants } from 'src/app/constants/task.constants';

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
    private detector: ChangeDetectorRef
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

    this.detector.detectChanges();

    // 最後の行を選択
    this.selectLastRow();
  }

  public selectLastRow() {
    let tasks = this.content.nativeElement.querySelectorAll('app-task-row');
    let lastItem = tasks[tasks.length - 1];

    let task = lastItem.querySelector('input');
    task.focus();
  }

  public onChildDelete(i) {
    this.tab.contents = this.tab.contents.filter((_, index) => index !== i);
  }
}
