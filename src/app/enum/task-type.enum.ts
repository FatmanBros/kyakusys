export class TaskType {
  public static documentation: TaskTypeParams = { code: "document", icon: "" };

  public static development: TaskTypeParams = { code: "develop", icon: "" };

  public static coding: TaskTypeParams = { code: "code", icon: "" };

}

export class TaskTypeParams {
  public code: string;
  public icon: string;
}