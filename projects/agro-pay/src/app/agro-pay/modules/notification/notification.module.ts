import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationRoutes } from './notification.routing';

@NgModule({
  imports: [CommonModule, NotificationRoutes],
  declarations: [NotificationComponent],
})
export class NotificationModule {}
