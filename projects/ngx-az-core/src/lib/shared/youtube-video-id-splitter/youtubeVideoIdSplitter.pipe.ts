import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtubeVideoIdSplitter',
})
export class YoutubeVideoIdSplitterPipe implements PipeTransform {
  transform(url?: string | null) {
    if (url) {
      // SPLITTING VIDEOID FROM YOUTUBE VIDEO URL
      return url.split('?v=')?.[1];
    }

    return '';
  }
}
