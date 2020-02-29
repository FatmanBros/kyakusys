import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef, Injector } from '@angular/core';
import { TaskContent } from 'src/app/params/task.params';
import { IconConstants } from 'src/app/constants/icon.constants';
import { TaskConstants } from 'src/app/constants/task.constants';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskBoardComponent } from '../board/board.component';
import { ContentService } from 'src/app/service/app/content.service';

@Component({
  selector: 'app-task-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class TaskRowComponent implements OnInit, AfterViewInit {

  public edithing: boolean = false;

  public icons: typeof IconConstants = IconConstants;

  @ViewChild('taskInput')
  public taskInput;

  @Input()
  public nestedCount: number = 0;

  @Input()
  public task: TaskContent;

  public radioButtons = [
    { label: "未着手", color: "#81ecec" },
    { label: "作業中", color: "#55efc4" },
    { label: "待ち", color: "#fab1a0" },
    { label: "完了", color: "#636e72" },
  ];

  constructor(
    private element: ElementRef,
    private detector: ChangeDetectorRef,
    private contentService: ContentService,
    private board: TaskBoardComponent,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.task.title) {
      return;
    }
    if (!this.contentService.isEqualsBoard(this.board.vi, this.board.hi)) {
      return;
    }

    this.edithing = true;
    this.detector.detectChanges();
    this.taskInput.nativeElement.focus();
  }

  @Output()
  public endEditRow: EventEmitter<null> = new EventEmitter<null>();

  public onKey(event) {
    if (event.key === 'Enter' && event.code === 'Enter') {
      if (!event.currentTarget.value) {
        return;
      }
      this.edithing = false;
      this.endEditRow.emit();
    }
  }

  public onEditClick() {
    this.edithing = true;
    this.detector.detectChanges();

    let input = this.element.nativeElement.querySelector('input');
    input.focus();
  }

  public onFocus() {
    this.contentService.setSelected(this.board.vi, this.board.hi);
  }

  public onBlur() {
    if (this.task.title) {
      this.edithing = false;
    }
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
  }

  @Output()
  public deleteOnClick: EventEmitter<null> = new EventEmitter<null>();
  public onDeleteClick() {
    this.deleteOnClick.emit();
  }

  public onChildDelete(i) {
    this.task.child = this.task.child.filter((_, index) => index !== i);
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.task.child, event.previousIndex, event.currentIndex);
  }
}
