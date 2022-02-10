export class LocalStorageUtilit {
  public static readonly LANGUAGE = 'language';

  public static get(key: string) {
    return localStorage.getItem(key);
  }

  public static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
