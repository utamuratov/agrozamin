import { Characteristics } from './characteristics.interface';
import { Location } from './location.interface';

export interface Advertisement<TFile = File> {
  name: string;
  files: TFile[];
  price: number;
  deal: boolean;
  category_id: number;
  type_id: number;
  description: string;
  characteristics: Characteristics[];
  district_id: number;
  region_id: number;
  contact: {
    phone: number;
    full_name: string;
  };
  address: string;
  use_agroid_contact: boolean;
  location: Location;
  video_url: string;
  deleted_files: number[];
  created_for_user: number;
}
