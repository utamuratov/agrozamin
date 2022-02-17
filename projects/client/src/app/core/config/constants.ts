import { Language } from '../../shared/models/language.interface';

export class Constants {
  /**
   * SECURE DATA FOR LOGIN & REFRESH TOKEN
   */
  public static readonly CLIENT_ID = '958cbf03-98f6-4506-ade9-b50ebbbdd0b8';
  public static readonly CLIENT_SECRET =
    'ElXRveZcAlVS2GuDvykIlSORdeOKrmOfog5pBZPl';

  /**
   * DEFAULT DATA FOR USER INTERFACE LANGUAGE
   */
  public static readonly DEFAULT_LANGUAGE_CODE = 'ru';
  public static readonly LANGUAGES: Language[] = [
    {
      code: 'ru',
      name: 'Russian',
      shortName: 'Рус',
    },
    {
      code: 'uz-Cyrl',
      name: 'Ўзбекча',
      shortName: 'Узб',
    },
    {
      code: 'uz-Latn',
      name: "O'zbekcha",
      shortName: 'Uzb',
    },
  ];

  /**
   * FORM CONTROL NAMES
   */
  public static readonly EMAIL = 'email';
  public static readonly PHONE = 'phone';
  public static readonly PASSWORD = 'password';
  public static readonly LOGIN = 'login';

  /**
   * LOCAL STORAGE KEYS
   */
  public static readonly LANGUAGE = 'language';
  public static readonly LOGIN_TYPE = 'loginType';
  public static readonly ACCESS_TOKEN = 'access_tokent';
  public static readonly REFRESH_TOKEN = 'refresh_tokent';

  /**
   * OTHER CONSTANTS
   */
  public static readonly EMAIL_TYPES = ['gmail.com', 'mail.ru', 'outlook.com'];
  public static readonly PREFIX_PHONENUMBER = '998';
  public static readonly ERROR_MESSAGE_FROM_SERVER = 'errorMessageFromServer';
}
