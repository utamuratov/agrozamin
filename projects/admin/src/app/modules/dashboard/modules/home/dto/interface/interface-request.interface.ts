import { Translate } from '../translate.interface';

export interface InterfaceRequest {
  key: string;
  text: Translate;
  project: any; // посмотреть как прописать
  type: 1;
}
