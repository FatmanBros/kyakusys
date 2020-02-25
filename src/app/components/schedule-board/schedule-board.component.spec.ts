import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBoardComponent } from './schedule-board.component';

describe('ScheduleBoardComponent', () => {
  let component: ScheduleBoardComponent;
  let fixture: ComponentFixture<ScheduleBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
