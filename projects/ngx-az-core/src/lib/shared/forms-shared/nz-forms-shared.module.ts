import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [NzFormModule, NzInputModule, NzButtonModule],
  exports: [NzFormModule, NzInputModule, NzButtonModule],
})
export class NzFormsSharedModule {}
