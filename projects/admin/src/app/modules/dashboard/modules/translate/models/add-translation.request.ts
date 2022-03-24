import { NzSafeAny } from "ng-zorro-antd/core/types";

export interface AddTranslationRequest {
  key: string;
  text: NzSafeAny; // "{'ru': 'Вход','uz_cyrl': 'Кириш','uz_latn': 'Kirish'}";
  project: number[];
  type: number;
}
