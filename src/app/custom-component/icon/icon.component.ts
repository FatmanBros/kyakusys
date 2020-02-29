import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { IconConstants } from 'src/app/constants/icon.constants';
import { IconColor } from 'src/app/enum/icon-color.enum';
import { Validators } from 'src/app/validator/validators';

@Component({
  selector: 'ky-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, AfterViewInit {

  @Input()
  public icon: typeof IconConstants | string[];

  @Input()
  public size: 'small' | 'middle' | 'large' = 'small';

  @Input()
  public color: IconColor = IconColor.gray;

  @Input()
  public rotate: 'none' | '90' | '180' | '270' = 'none';

  public getClasses() {
    let classes = [];
    classes = classes.concat(this.icon);

    classes = classes.concat(this.size);

    classes = classes.concat(this.color);

    if (!Validators.isNullOrLengthZero(this.onClick.observers)) {
      classes.push("pointer-icon");
    }

    // 回転を取得
    if (this.rotate !== 'none') {
      classes.push("rotate_" + this.rotate);
    }

    return classes;
  }


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  @Output()
  public onClick: EventEmitter<null> = new EventEmitter<null>();

  public click() {
    this.onClick.emit();
  }
}
