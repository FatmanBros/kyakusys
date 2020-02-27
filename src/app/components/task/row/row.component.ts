import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { TaskContent } from 'src/app/params/task.params';
import { IconConstants } from 'src/app/constants/icon.constants';
import { TaskConstants } from 'src/app/constants/task.constants';

@Component({
  selector: 'app-task-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class TaskRowComponent implements OnInit, AfterViewInit {

  public icons: typeof IconConstants = IconConstants;

  public edithing: boolean = true;

  public nestedCount: number = 0;

  @Input()
  public task: TaskContent;

  private _taskTitle: string;
  public set taskTitle(val) {
    this._taskTitle = val;
    this.task.title = val;
  }
  public get taskTitle() {
    return this._taskTitle;
  }

  public radioButtons = [
    { label: "未着手", color: "#81ecec" },
    { label: "作業中", color: "#55efc4" },
    { label: "待ち", color: "#fab1a0" },
    { label: "完了", color: "#636e72" },
  ];

  constructor(
    private element: ElementRef,
    private detector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.task) {
      return;
    }

    if (!this.task.title) {
      return;
    }

    this.edithing = false;
  }

  @Output()
  public endEditRow: EventEmitter<null> = new EventEmitter<null>();

  public onKey(event) {
    if (event.key === 'Enter' && event.code === 'Enter') {
      if (!event.currentTarget.value) {
        return;
      }

      this.endEditRow.emit();
      
      this.edithing = false;
    }
  }

  public onEditClick() {
    this.edithing = true;

    let input = this.element.nativeElement.querySelector('input');
    input.focus();
  }

  @ViewChild('child')
  public child: ElementRef;

  public onForkClick() {
    this.task.child = [TaskConstants.defaultTask];
 }

  public addChildRow(i) {
    if (i < this.task.child.length - 1) {
      return;
    }

    this.task.child.push(TaskConstants.defaultTask);
    this.detector.detectChanges();
    
    this.selectLastRow();
  }

  public selectLastRow() {
    let tasks = this.child.nativeElement.querySelectorAll('app-task-row');
    let lastItem = tasks[tasks.length - 1];

    let task = lastItem.querySelector('input');
    task.focus();
  }
}
