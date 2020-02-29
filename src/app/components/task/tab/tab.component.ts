import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { TaskTabParams } from 'src/app/params/task.params';
import { IconConstants } from 'src/app/constants/icon.constants';
import { ContentService } from 'src/app/service/app/content.service';
import { TaskBoardComponent } from '../board/board.component';

@Component({
  selector: 'task-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TaskTabComponent implements OnInit, AfterViewInit {

  public icons: typeof IconConstants = IconConstants;

  @Input()
  public tab: TaskTabParams;

  constructor(
    private contentService: ContentService,
    private board: TaskBoardComponent,
    private detector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('titleInput')
  public titleInput: ElementRef;

  ngAfterViewInit(): void {
    // タイトルが入力済みの場合は終了
    if (this.tab.title) {
      return;
    }
    if (!this.contentService.isEqualsBoard(this.board.vi, this.board.hi)) {
      return;
    }
    this.resetTitle();
  }

  public titleEditing;

  public confirmTitle(event) {
    if (event.key === 'Enter' && event.code === 'Enter') {
      this.endEdit();
    }
  }

  public endEdit() {
    if (!this.tab.title) {
      return;
    }
    this.titleEditing = false;
  }


  public resetTitle() {
    this.titleEditing = true;
    this.detector.detectChanges();
    this.titleInput.nativeElement.focus();
  }

  @Output()
  public delete: EventEmitter<null> = new EventEmitter<null>();
  public deleteTab() {
    this.delete.emit();
  }
}
