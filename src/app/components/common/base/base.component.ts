import { OnInit, AfterViewInit, Injector } from '@angular/core';
import { AppService } from 'src/app/service/app/app.service';

export abstract class BaseComponent implements OnInit, AfterViewInit {

  public screenTitle = "";

  public appService: AppService;

  constructor(
    public injector: Injector
  ) {
    this.appService = injector.get(AppService);
  }

  protected mainNgOnInit() {}

  protected mainNgAfterOnInit() {}


  ngOnInit(): void {
    this.mainNgOnInit();
    this.mainNgAfterOnInit();
  }

  protected mainNgAfterViewInit() {
    // タイトル設定
    this.appService.setScreenParam({title: this.screenTitle});
  }

  ngAfterViewInit(): void {
    this.mainNgAfterViewInit();
  }
}
