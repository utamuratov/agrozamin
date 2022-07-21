import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutes } from './cabinet.routing';
import { MessagesComponent } from './components/messages/messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Messages2Component } from './components/messages/components/messages2/messages2.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CurrencyModule } from '../../../shared/currency/currency.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PaginationModule } from '../../../shared/pagination/pagination.module';
import { NoImageModule } from '../../../shared/no-image/no-image.module';
import { BreadcrumbModule } from '../../../shared/breadcrumb/breadcrumb.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TagModule } from '../../../shared/tag/tag.module';
import { SortModule } from '../../../shared/sort/sort.module';
import { SharedModule } from 'ngx-az-core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { SavedMessagesComponent } from './components/messages/components/saved-messages/saved-messages.component';
import { ArchivedMessagesComponent } from './components/messages/components/archived-messages/archived-messages.component';
import { BlockedMessagesComponent } from './components/messages/components/blocked-messages/blocked-messages.component';
import { ChatModule } from './components/messages/components/chat/chat.module';

@NgModule({
  imports: [
    CabinetRoutes,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    CurrencyModule,
    PaginationModule,
    NoImageModule,
    BreadcrumbModule,
    TagModule,
    SortModule,

    NzGridModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzInputModule,
    NzDropDownModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzDividerModule,
    NzTypographyModule,
    NzSelectModule,
    NzBadgeModule,
    ChatModule
  ],
  declarations: [
    LayoutComponent,
    CabinetComponent,
    MessagesComponent,
    Messages2Component,
    SavedMessagesComponent,
    ArchivedMessagesComponent,
    BlockedMessagesComponent
  ],
})
export class CabinetModule {}
