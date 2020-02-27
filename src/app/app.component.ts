import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './service/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'k.yakusys';

  public screenTitle = "";

  protected subscription: Subscription[] = [];

  constructor(
    service: AppService,
    changeDetector: ChangeDetectorRef,
  ) {
    this.subscription.push(
      service.setScreenParam$.subscribe(val => {
        // タイトル設定
        this.screenTitle = val.title;
        changeDetector.detectChanges();
      })
    );
  }
}
