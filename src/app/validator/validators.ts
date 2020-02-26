export class Validators {
  
  /**
   * 引数のnullチェックを行う
   * 
   * @param obj 
   */
  public static isNullOrLengthZero(obj): boolean {
    if (!obj) {
      return true;
    }

    if (obj.length === 0) {
      return true;
    }

    return false;
  }
}