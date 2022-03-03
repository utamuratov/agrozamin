export class LocalStorageUtilit {
  /**
   * 
   * @param key 
   * @returns 
   */
  public static get(key: string) {
    return localStorage.getItem(key);
  }

  /**
   * 
   * @param key 
   * @param value 
   */
  public static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
