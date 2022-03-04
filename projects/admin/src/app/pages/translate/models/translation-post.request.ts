export interface TranslationPostRequest {
  key: string;
  text: any; // "{'ru': 'Вход','uz_cyrl': 'Кириш','uz_latn': 'Kirish'}";
  project: number[];
  type: number;
}
