import { Language } from '../models/language.interface';

export class Constants {
  /**
   * SECURE DATA FOR LOGIN & REFRESH TOKEN
   */
  static readonly CLIENT_ID = '96880ad0-7b49-4d00-bbe0-da023ef89cf8'; //"95aafe79-4e63-4d6d-98cc-fde7b302fc3f";
  static readonly CLIENT_SECRET = '9tyUetFhRxu4PjIy07BJ7HzxNC75lGUSmsVMY0GI'; // "K44OWIgGSqkpH55vY6QQwZldir6iN17IyepOXD4K";

  /**
   * DEFAULT DATA FOR USER INTERFACE LANGUAGE
   */
  public static readonly DEFAULT_LANGUAGE_CODE = 'ru';
  public static readonly LANGUAGES: Language[] = [
    {
      code: 'ru',
      name: 'Russian',
      short_name: 'Рус',
    },
    {
      code: 'uz_cyrl',
      name: 'Ўзбекча',
      short_name: 'Ўзб',
    },
    {
      code: 'uz_latn',
      name: "O'zbekcha",
      short_name: 'Uzb',
    },
  ];

  /**
   * FORM CONTROL NAMES
   */
  public static readonly EMAIL = 'email';
  public static readonly PHONE = 'phone';
  public static readonly PASSWORD = 'password';
  public static readonly LOGIN = 'login';
  public static readonly CONFIRMATION_PASSWORD = 'confirmationPassword';

  /**
   * VALIDATIONS
   */
  public static readonly LOGIN_MIN_LENGTH = 5;
  public static readonly PASSWORD_MIN_LENGTH = 8;

  /**
   * LOCAL STORAGE KEYS
   */
  public static readonly CURRENT_LANGUAGE = 'currentLanguage';
  public static readonly DEFAULT_LANGUAGE = 'defaultLanguage';
  public static readonly LOGIN_TYPE = 'loginType';
  public static readonly ACCESS_TOKEN = 'access_token';
  public static readonly REFRESH_TOKEN = 'refresh_token';
  public static readonly AUTHORIZED_USER = 'authorizedUser';

  /**
   * HEADER
   */
  public static readonly HEADER_LANGUAGE = 'Language';

  /**
   * OTHER CONSTANTS
   */
  public static readonly EMAIL_TYPES = ['gmail.com', 'mail.ru', 'outlook.com'];
  public static readonly PREFIX_PHONENUMBER = '998';
  public static readonly ERROR_MESSAGE_FROM_SERVER = 'errorMessageFromServer';
  public static readonly SERVER_ERROR = 'serverError';
  public static readonly OFFLINE = 'offline';

  /**
   * ROUTE PATHS
   */
  public static readonly AGROZAMIN_PREFIX_ROUTE_PATH = 'az';
  // * These variables are name of services(projects).
  // * And they depend on applications name on the iis,
  // * bundle names of option styles of project 'wrapper'(angular.json)
  public static readonly AGROID_ROUTE_PATH = 'agro-id';
  public static readonly AGRO_ZAMIN_ROUTE_PATH = 'main';
  static readonly ADVERTISEMENT_ROUTE_PATH = 'advertisement';
  static readonly ONLINE_CONSULTANT_ROUTE_PATH = 'online-consultant';
  static readonly AGRO_PAY_ROUTE_PATH = 'agro-pay';
}
