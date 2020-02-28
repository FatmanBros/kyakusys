import { Component, OnInit, Injector, HostListener, Renderer2 } from '@angular/core';
import { BaseComponent } from '../common/base/base.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent extends BaseComponent {

  public splitVertical: number = 1;
  public splitHolizontal: number = 1;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!event.shiftKey) {
      return;
    }
    switch (event.key) {
      case 'ArrowLeft':
        this.splitHolizontal = this.splitHolizontal - 1 ? this.splitHolizontal - 1 : 1;
        break;
      case 'ArrowRight':
        this.splitHolizontal++;
        break;
      case 'ArrowUp':
        this.splitVertical = this.splitVertical - 1 ? this.splitVertical - 1 : 1;
        break;
      case 'ArrowDown':
        this.splitVertical++;
        break;
      default:
        break;
    }

    this.detector.detectChanges();
  }

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  protected mainNgOnInit() {
    this.screenTitle = "タスク管理";
  }

}
