import { Component } from '@angular/core';

@Component({
  template: `
    <az-header></az-header>
    <div class="nav-margin">
      <router-outlet></router-outlet>
    </div>
    <az-footer></az-footer>
  `,
})
export class RootLayoutComponent {}
