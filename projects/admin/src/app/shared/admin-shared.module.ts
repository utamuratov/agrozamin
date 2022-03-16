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
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';

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
    /**
     * CUSTOM MODULES
     */
    NzFormsSharedModule,
    ReactiveFormsSharedModule,

    /**
     * NON_CUSTOM MODULES
     **/
    FormsModule,

    /**
     * NG ZORRO MODULES
     */
    NzTableModule,
    NzModalModule,
    // WE NEED THESE MODULES FOR CUSTOM PIPES/COMPONENTS IN THIS SHARED MODULE
    NzDividerModule,
    NzIconModule,
  ],
  exports: [
    /**
     * CUSTOM MODULES
     */
    NzFormsSharedModule,
    ReactiveFormsSharedModule,

    /**
     * NON_CUSTOM MODULES
     **/
    FormsModule,

    /**
     * NG ZORRO MODULES
     */
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzModalModule,

    /**
     * CUSTOM PIPES/COMPONENTS
     */
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
