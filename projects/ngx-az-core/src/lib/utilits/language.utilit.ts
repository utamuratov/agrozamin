import { Constants } from '../config/constants';
import { LocalStorageUtilit } from './local-storage.utilit';

export class LanguageUtilit {
  /**
   *
   */
  static get currentLanguage() {
    return LocalStorageUtilit.get(Constants.LANGUAGE) ?? '';
  }

  /**
   *
   */
  static set currentLanguage(code: string) {
    LocalStorageUtilit.set(Constants.LANGUAGE, code);
  }

  /**
   *
   */
   static get defaultLanguage() {
    return LocalStorageUtilit.get(Constants.DEFAULT_LANGUAGE) ?? '';
  }

  /**
   *
   */
  static set defaultLanguage(code: string) {
    LocalStorageUtilit.set(Constants.DEFAULT_LANGUAGE, code);
  }
}
