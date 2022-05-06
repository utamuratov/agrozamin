import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { YaGeocoderService } from 'angular8-yandex-maps';

@Component({
  selector: 'az-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit {
  /**
   *
   */
  coordinates!: GeolocationCoordinates;

  selectedValue = null;

  constructor(
    private cd: ChangeDetectorRef,
    private yaGeocoderService: YaGeocoderService
  ) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.coordinates = location.coords;
      this.yaGeocoderService
        .geocode([location.coords.latitude, location.coords.longitude])
        .subscribe((res: any) => {
          const nearest = res.geoObjects.get(0);
          console.log('getLocalities', nearest.getLocalities());
          console.log(
            'getAdministrativeAreas',
            nearest.getAdministrativeAreas()
          );
          console.log('getCountry', nearest.getCountry());
          console.log('getCountryCode', nearest.getCountryCode());
          console.log('getThoroughfare', nearest.getThoroughfare());
          console.log('getPremise', nearest.getPremise());
          console.log('getPremiseNumber', nearest.getPremiseNumber());

          console.log('getAddressLine', nearest.getAddressLine());
        });
      this.cd.markForCheck();
    });
  }
}
