import { NgModule } from '@angular/core';
import { CalcScrollPipe } from './pipes/calc-scroll.pipe';
import { HeaderWithDividerComponent } from './components/header-with-divider/header-with-divider.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderWithDividerAdvancedComponent } from './components/header-with-divider/header-with-divider-advanced/header-with-divider-advanced.component';
import { HeaderWithDividerBasicComponent } from './components/header-with-divider/header-with-divider-basic/header-with-divider-basic.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchInputAdvancedComponent } from './components/search-input/search-input-advanced/search-input-advanced.component';
import { MakeNzScrollPipe } from './pipes/make-nz-scroll.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    CalcScrollPipe,
    MakeNzScrollPipe,
    SortPipe,
    HeaderWithDividerComponent,
    HeaderWithDividerAdvancedComponent,
    HeaderWithDividerBasicComponent,
    SearchInputComponent,
    SearchInputAdvancedComponent,
  ],
  imports: [
    NzFormsSharedModule,
    ReactiveFormsSharedModule,

    FormsModule,
    NzDividerModule,
    NzIconModule,
  ],
  exports: [
    NzFormsSharedModule,
    ReactiveFormsSharedModule,

    FormsModule,
    NzDividerModule,
    NzIconModule,

    CalcScrollPipe,
    MakeNzScrollPipe,
    SortPipe,
    HeaderWithDividerComponent,
    HeaderWithDividerAdvancedComponent,
    HeaderWithDividerBasicComponent,
    SearchInputComponent,
    SearchInputAdvancedComponent,
  ],
})
export class AdminSharedModule {}
