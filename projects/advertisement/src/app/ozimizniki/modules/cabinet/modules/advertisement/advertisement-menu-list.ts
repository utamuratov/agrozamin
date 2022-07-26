import { AdvertisementStatus } from 'ngx-az-core';

export const AdvertisementStatusList = [
  {
    name:
      'advertisement.' +
      AdvertisementStatus[AdvertisementStatus.STATUS_CONFIRMED],
    value: AdvertisementStatus.STATUS_CONFIRMED.toString(),
  },
  {
    name:
      'advertisement.' + AdvertisementStatus[AdvertisementStatus.STATUS_NEW],
    value: AdvertisementStatus.STATUS_NEW.toString(),
  },
  {
    name:
      'advertisement.' +
      AdvertisementStatus[AdvertisementStatus.STATUS_ARCHIVED],
    value: AdvertisementStatus.STATUS_ARCHIVED.toString(),
  },
  {
    name:
      'advertisement.' +
      AdvertisementStatus[AdvertisementStatus.STATUS_REJECTED],
    value: AdvertisementStatus.STATUS_REJECTED.toString(),
  },
];
