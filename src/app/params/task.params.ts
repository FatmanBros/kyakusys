import { TaskTypeParams } from '../enum/task-type.enum';

export class TaskTabParams {
  public title: string;

  public icon?: string;

  public themaColor?: string;

  public contents?: TaskContent[];
}

export class TaskContent {
  public title: string;

  public type: TaskTypeParams;

  public child?: TaskContent[];
}