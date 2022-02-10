import { Language } from '../../shared/models/language.interface';

export class Constants {
  public static CLIENT_ID = '958cbf03-98f6-4506-ade9-b50ebbbdd0b8';
  public static CLIENT_SECRET = 'ElXRveZcAlVS2GuDvykIlSORdeOKrmOfog5pBZPl';

  public static DEFAULT_LANGUAGE_CODE = 'ru';

  public static LANGUAGES: Language[] = [
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
}
