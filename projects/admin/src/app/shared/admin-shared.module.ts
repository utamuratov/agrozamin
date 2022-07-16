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
import { TransferComponent } from './components/transfer-projects/transfer.component';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TitleTotalPipe } from './pipes/title-total.pipe';
import { GridComponent } from './components/grid/grid.component';
import { GetDeepValuePipe } from './pipes/getDeepValue.pipe';
import { LanguageControlsComponent } from './components/language-controls/language-controls.component';
import { BaseComponent } from './components/base/base.component';
import { BaseAddEditComponent } from './components/base-add-edit/base-add-edit.component';
import { NoImagePipe } from './pipes/noImage.pipe';
import { GridWithBackendComponent } from './components/grid/grid-with-backend/grid-with-backend.component';

@NgModule({
  declarations: [
    CalcScrollPipe,
    MakeNzScrollPipe,
    SortPipe,
    TitleTotalPipe,
    GetDeepValuePipe,
    HeaderWithDividerComponent,
    HeaderWithDividerAdvancedComponent,
    HeaderWithDividerBasicComponent,
    SearchInputComponent,
    SearchInputAdvancedComponent,
    TransferComponent,
    GridComponent,
    GridWithBackendComponent,
    LanguageControlsComponent,
    BaseComponent,
    BaseAddEditComponent,
    NoImagePipe,
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
    NzTypographyModule,
    NzTransferModule,
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
    NzTransferModule,
    NzTypographyModule,

    /**
     * CUSTOM PIPES/COMPONENTS
     */
    CalcScrollPipe,
    MakeNzScrollPipe,
    SortPipe,
    TitleTotalPipe,
    GetDeepValuePipe,
    HeaderWithDividerComponent,
    HeaderWithDividerAdvancedComponent,
    HeaderWithDividerBasicComponent,
    SearchInputComponent,
    SearchInputAdvancedComponent,
    TransferComponent,
    GridComponent,
    GridWithBackendComponent,
    LanguageControlsComponent,
    BaseComponent,
    BaseAddEditComponent,
    NoImagePipe,
  ],
})
export class DashboardSharedModule {}
