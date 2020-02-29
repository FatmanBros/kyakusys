import { TaskTypeParams } from '../enum/task-type.enum';

export class TaskTabParams {
  public id: number;

  public title: string;

  public icon?: string;

  public themaColor?: string;

  public contents?: TaskContent[];
}

export class TaskContent {
  public title: string;

  public type: TaskTypeParams;

  public status: string;

  public child?: TaskContent[];
}