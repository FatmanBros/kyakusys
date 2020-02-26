import { ScheduleType } from '../enum/schedule-type.enum';

export class ScheduleTabParams {
  public title: string;

  public icon?: string;

  public themaColor?: string;

  public schedule?: ScheduleParams[];
}

export class ScheduleParams {
  public title: string;

  public type: ScheduleType;

  public child?: ScheduleParams[];
}