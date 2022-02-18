import { NgModule } from '@angular/core';
import { InputPhoneEmailComponent } from './input-phone-email.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/reactive-forms-shared.module';

@NgModule({
  imports: [
    NgxMaskModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzFormModule,
    NzInputModule,
    NzAutocompleteModule,
  ],
  declarations: [InputPhoneEmailComponent],
  exports: [InputPhoneEmailComponent],
})
export class InputPhoneEmailModule {}
