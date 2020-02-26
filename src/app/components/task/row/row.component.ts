import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { TaskParams } from 'src/app/params/task.params';
import { IconConstants } from 'src/app/constants/icon.constants';

@Component({
  selector: 'app-task-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class TaskRowComponent implements OnInit, AfterViewInit {

  public icons: typeof IconConstants = IconConstants;

  @Input()
  public edithing: boolean = true;

  @Input()
  public task: TaskParams;

  public radioButtons = [
    { label: "未着手", color: "#81ecec" },
    { label: "作業中", color: "#55efc4" },
    { label: "待ち", color: "#fab1a0" },
    { label: "完了", color: "#636e72" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.task) {
      return;
    }

    if (!this.task.title) {
      return;
    }

    this.edithing = true;
  }

  public edit() {

  }

  @Output()
  public endEditRow: EventEmitter<null> = new EventEmitter<null>();

  public onKey(event) {
    if (event) {
      this.endEditRow.emit();
    }
  }
}
