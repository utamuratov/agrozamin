import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'ngx-az-core';

@Component({
  selector: 'az-popup-profile',
  templateUrl: './popup-profile.component.html',
  styleUrls: ['./popup-profile.component.less']
})
export class PopupProfileComponent implements OnInit {
  isVisibleProfilePopup = false;

  constructor(private router: Router,private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  navigateToSignIn() {
    this.document.location.pathname = `/${Constants.AGROID_ROUTE_PATH}`;
  }

  navigateTo(urls: string[]) {
    this.isVisibleProfilePopup = false;
    this.router.navigate(urls, { relativeTo: this.route });
  }

  /**
   *
   */
  logout() {
    // TODO: DO LOGOUT
    this.navigateToSignIn();
  }

}
