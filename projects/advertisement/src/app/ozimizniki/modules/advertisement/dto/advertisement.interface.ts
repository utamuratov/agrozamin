import { FileResponse, Id, IdName } from 'ngx-az-core';

export interface Advertisement extends Id {
  address: string;
  category: IdName;
  category_id: number;
  favorite: boolean;
  file: FileResponse;
  name: string;
  price: number;
  status: number;

  description: string; //!
}
