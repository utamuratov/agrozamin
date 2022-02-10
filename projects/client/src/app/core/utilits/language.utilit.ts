import { Constants } from '../config/constants';
import { LocalStorageUtilit } from './local-storage.utilit';

export class LanguageUtilit {
  /**
   *
   */
  static get currentLanguage() {
    let code = LocalStorageUtilit.get(LocalStorageUtilit.LANGUAGE);
    if (!code) {
      code = Constants.DEFAULT_LANGUAGE_CODE;
      this.currentLanguage = code;
    }
    return code;
  }

  /**
   *
   */
  static set currentLanguage(code: string) {
    LocalStorageUtilit.set(LocalStorageUtilit.LANGUAGE, code);
  }
}
