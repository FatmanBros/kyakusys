import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderParams } from 'src/app/params/header.params';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  public selected: { v: number, h: number };

  public setSelected(v: number, h: number) {
    this.selected = { v: v, h: h };
  }

  public getSelected() {
    return this.selected;
  }

  public isEqualsBoard(v: number, h: number) {
    if (!this.selected) {
      return false;
    }
    if (this.selected.v !== v) {
      return false;
    }
    if (this.selected.h !== h) {
      return false;
    }
    return true;
  }

}
