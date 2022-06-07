import { Id, IdName } from 'ngx-az-core';

export interface Advertisement extends Id {
  name: string;
  description: string;
  price: number;
  status: number;
  category_id: number;
  category: IdName;
  file: {
    id: number;
    file: string;
  };
}
