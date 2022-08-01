import { Pipe, PipeTransform } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { RegionWithDistrict } from '../dto/region-with-district.interface';

@Pipe({
  name: 'regionDistrictAsNode',
})
export class RegionDistrictAsNodePipe implements PipeTransform {
  transform(value: RegionWithDistrict[] | null): NzTreeNodeOptions[] {
    return (
      value?.map((region) => {
        return {
          title: region.name,
          key: region.id.toString(),
          isLeaf: !(region.districts.length > 0),
          children: region.districts.map((district) => {
            return {
              title: district.name,
              key: `${region.id}${AdvertisementConstants.SPLITTER}${district.id}`,
              isLeaf: true,
            } as NzTreeNodeOptions;
          }),
        } as NzTreeNodeOptions;
      }) ?? []
    );
  }
}
