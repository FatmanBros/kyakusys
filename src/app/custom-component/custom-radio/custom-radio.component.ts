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
  public value: {status: string};

  constructor() { }

  ngOnInit(): void {
  }

  public activeClass(button: RadioParams) {
    if (button.value === this.value.status) {
      return "active";
    }
  }

  public onClick(value) {
    this.value.status = value;
  }
}

export class RadioParams {
  public label: string;

  public value: string;

  public color: string;
}