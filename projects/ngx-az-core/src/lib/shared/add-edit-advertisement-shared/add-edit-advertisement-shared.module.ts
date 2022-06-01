import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AdvertisementTypeComponent } from './components/advertisement-type/advertisement-type.component';
import { MediaComponent } from './components/media/media.component';
import { PriceComponent } from './components/price/price.component';
import { DescriptionComponent } from './components/description/description.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { LocationComponent } from './components/location/location.component';
import { ContactDataComponent } from './components/contact-data/contact-data.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { NgxMaskModule } from 'ngx-mask';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AddEditAdvertisementControlsComponent } from './components/add-edit-advertisement-controls/add-edit-advertisement-controls.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsSharedModule } from '../forms-shared/reactive-forms-shared.module';
import { NzFormsSharedModule } from '../forms-shared/nz-forms-shared.module';

@NgModule({
  imports: [
    /**
     * NPM MODULES
     */
    FormsModule,
    AngularYandexMapsModule,
    NgxMaskModule,
    YouTubePlayerModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzGridModule,
    NzRadioModule,
    NzIconModule,
    NzUploadModule,
    NzCheckboxModule,
    NzSelectModule,
    NzDatePickerModule,
  ],
  declarations: [
    AddEditAdvertisementControlsComponent,
    InfoComponent,
    AdvertisementTypeComponent,
    MediaComponent,
    PriceComponent,
    DescriptionComponent,
    CharacteristicsComponent,
    LocationComponent,
    ContactDataComponent,
  ],
  exports: [
    AddEditAdvertisementControlsComponent,
    NzFormModule,
    ReactiveFormsModule,
  ],
})
export class AddEditAdvertisementSharedModule {}
