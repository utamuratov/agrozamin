import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'ngx-az-core';
import { ChatComponent } from './chat.component';   
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    SharedModule,
    NzInputModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzFormModule,
    NzUploadModule,
    NzTypographyModule,
    NzDrawerModule
],
  declarations: [
    ChatComponent
  ],
})
export class ChatModule {}
