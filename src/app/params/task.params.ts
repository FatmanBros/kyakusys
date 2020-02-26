import { TaskTypeParams } from '../enum/task-type.enum';

export class TaskTabParams {
  public title: string;

  public icon?: string;

  public themaColor?: string;

  public tasks?: TaskParams[];
}

export class TaskParams {
  public title: string;

  public type: TaskTypeParams;

  public child?: TaskParams[];
}