import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderParams } from 'src/app/params/header.params';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public setScreenParam$ = new Subject<HeaderParams>();
  public setScreenParam(val: HeaderParams): void {
    this.setScreenParam$.next(val);
  }
  
}
