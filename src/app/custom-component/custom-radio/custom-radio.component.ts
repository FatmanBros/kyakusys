import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ky-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent implements OnInit {

  @Input()
  public buttons: RadioParams[] = [];

  @Input()
  public selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(i: number) {
    this.selectedIndex = i;
  }
}

export class RadioParams {
  public label: string;

  public color: string;
}