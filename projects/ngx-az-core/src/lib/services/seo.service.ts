import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(
    private $title: Title,
    private $meta: Meta,
    private $translate: TranslateService
  ) {}

  /**
   *
   */
  updateTitle(title: string): Observable<string> {
    return this.$translate.get(title).pipe(
      tap((translated) => {
        this.$title.setTitle(translated);
      })
    );
  }

  /**
   *
   */
  updateDescription(content: string): Observable<string> {
    return this.$translate.get(content).pipe(
      tap((translated) => {
        this.$meta.updateTag({ name: 'description', translated });
      })
    );
  }

  /**
   *
   */
  createCanonicalLink(url: string) {
    const link: HTMLLinkElement = document.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}
