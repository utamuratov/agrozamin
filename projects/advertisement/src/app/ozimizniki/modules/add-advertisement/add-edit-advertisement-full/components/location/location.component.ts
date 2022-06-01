import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { YaGeocoderService } from 'angular8-yandex-maps';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { District } from '../../dto/district.interface';
import { Location } from '../../dto/location.interface';
import { Region } from '../../dto/region.interface';
import { DistrictService } from '../../services/district.service';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'az-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RegionService, DistrictService],
})
export class LocationComponent implements OnInit {
  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  coordinates!: NzSafeAny;

  /**
   *
   */
  @Input()
  region$!: Observable<Region[]>;

  /**
   *
   */
  @Input()
  district$!: Observable<District[]>;

  /**
   *
   * @param cd
   * @param yaGeocoderService
   */
  constructor(
    private cd: ChangeDetectorRef,
    private yaGeocoderService: YaGeocoderService
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.getLocation();
  }

  /**
   *
   */
  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        this.coordinates = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        const locationForEditing: Location | null | undefined =
          this.form.value['location'];
        if (locationForEditing) {
          this.coordinates.longitude = locationForEditing.ln;
          this.coordinates.latitude = locationForEditing.lt;
        } else {
          this.form.controls['location'].setValue({
            ln: this.coordinates.longitude,
            lt: this.coordinates.latitude,
          });
        }

        this.getFullAddressFromCoordinates(location);
        this.cd.markForCheck();
      },
      (e) => {
        alert(JSON.stringify(e));
      }
    );
  }

  /**
   *
   * @param location
   */
  private getFullAddressFromCoordinates(location: GeolocationPosition) {
    this.yaGeocoderService
      .geocode([location.coords.latitude, location.coords.longitude])
      .subscribe((res: any) => {
        const nearest = res.geoObjects.get(0);
        console.log('getLocalities', nearest.getLocalities());
        console.log('getAdministrativeAreas', nearest.getAdministrativeAreas());
        console.log('getCountry', nearest.getCountry());
        console.log('getCountryCode', nearest.getCountryCode());
        console.log('getThoroughfare', nearest.getThoroughfare());
        console.log('getPremise', nearest.getPremise());
        console.log('getPremiseNumber', nearest.getPremiseNumber());
        console.log('getAddressLine', nearest.getAddressLine());
      });
  }

  /**
   *
   * @param e
   */
  yadragend(e: NzSafeAny) {
    const coordinates = e.target.geometry.getBounds()[0];

    this.form.controls['location'].setValue({
      lt: coordinates[0],
      ln: coordinates[1],
    });
  }
}
