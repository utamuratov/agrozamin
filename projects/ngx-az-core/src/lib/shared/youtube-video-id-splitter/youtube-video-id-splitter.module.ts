import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoIdSplitterPipe } from './youtubeVideoIdSplitter.pipe';

@NgModule({
  declarations: [YoutubeVideoIdSplitterPipe],
  imports: [CommonModule],
  exports: [YoutubeVideoIdSplitterPipe],
})
export class YoutubeVideoIdSplitterModule {}
