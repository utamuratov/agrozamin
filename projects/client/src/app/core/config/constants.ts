import { Language } from "../../shared/models/language.interface";

export class Constants {
  public static DEFAULT_LANGUAGE_CODE = 'ru';

  public static LANGUAGES: Language[] = [
    {
      code: 'ru',
      name: 'Russian',
    },
    {
      code: 'uz-Cyrl',
      name: 'Ўзбекча',
    },
    {
      code: 'uz-Latn',
      name: 'O\'zbekcha'
    }
  ];
}
