import { Language } from '../../shared/models/language.interface';

export class Constants {
  public static readonly CLIENT_ID = '958cbf03-98f6-4506-ade9-b50ebbbdd0b8';
  public static readonly CLIENT_SECRET = 'ElXRveZcAlVS2GuDvykIlSORdeOKrmOfog5pBZPl';

  public static readonly DEFAULT_LANGUAGE_CODE = 'ru';

  public static readonly LANGUAGES: Language[] = [
    {
      code: 'ru',
      name: 'Russian',
      shortName: 'Рус'
    },
    {
      code: 'uz-Cyrl',
      name: 'Ўзбекча',
      shortName: 'Узб'
    },
    {
      code: 'uz-Latn',
      name: "O'zbekcha",
      shortName: 'Uzb'
    },
  ];

  
  public static readonly LANGUAGE = 'language';
  public static readonly LOGIN_TYPE = 'loginType';
}
