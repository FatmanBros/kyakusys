import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent implements OnInit {

  @Input()
  public buttons: RadioParams[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

export class RadioParams {
  public label: string;

  public color: string;
}