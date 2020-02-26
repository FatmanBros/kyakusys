import { TaskType } from '../enum/task-type.enum';
import _ from 'lodash';

export class TaskConstants {
  private static _defaultTask = { title: "", type: TaskType.documentation };

  public static get defaultTask() {
    return _.cloneDeep(this._defaultTask);
  }
}