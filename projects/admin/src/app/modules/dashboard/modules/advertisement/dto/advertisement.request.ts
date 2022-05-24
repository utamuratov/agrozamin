import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface AdvertisementRequest {
  name: string;
  files: File[];
  price: number;
  deal: boolean;
  category_id: number;
  type_id: number;
  description: string;
  characteristics: Characteristics[];
  district_id: number;
  contact: {
    phone: number;
    full_name: string;
  };
  address: string;
  use_agroid_contact: boolean;
  location: {
    ln: string;
    lt: string;
  };
  video_url: string;
}

export interface Characteristics {
  filter_id: number;
  filter_parameter_id?: number | null;
  value?: NzSafeAny;
}
