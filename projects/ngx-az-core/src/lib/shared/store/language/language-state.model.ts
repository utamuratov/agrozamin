import { Language } from '../../../models/language.interface';

export interface LanguageStateModel {
  languages: Language[];
  defautLanguage: string | null;
  currentLanguage: string;
}
