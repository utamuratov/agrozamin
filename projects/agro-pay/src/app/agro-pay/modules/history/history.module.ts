import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutes } from './history.routing';

@NgModule({
  imports: [CommonModule, HistoryRoutes],
  declarations: [HistoryComponent],
})
export class HistoryModule {}
