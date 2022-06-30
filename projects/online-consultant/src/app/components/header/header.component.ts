import { state, style, trigger } from '@angular/animations';
import { Component, OnInit, TemplateRef,} from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'az-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  animations: [
    trigger('drawer', [
      state('none', style({
       display: 'none'
      })),
      state('display', style({
        display: 'block'
      })),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isUserAuth = false
  burgerState = false
  drawerState = 'none'
  location = false
  play = false

  toggle = true;


  schedule = [
    {
      time: '11:00',
      img: '/assets/images/unsplash_3mynAJgeK6g.png',
      name: 'Александров Михаил',
      timeLength: '11:00 - 11:30'
    },
    {
      time: '12:00',
      img: '/assets/images/unsplash_3mynAJgeK6g.png',
      name: 'Александров Михаил',
      timeLength: '12:00 - 12:30'
    }
  ]

  constructor(private notification: NzNotificationService) {
   }

  ngOnInit() {
  }

  isAuth() {
    this.isUserAuth = !this.isUserAuth    
  }

  changeBtnBackground() {
    this.toggle = !this.toggle;
  }

  changeBurgerState() {
    this.burgerState = !this.burgerState;
    this.drawerState = this.drawerState === 'none' ? 'display' : 'none'    
  }

  closeDrawer() {
    this.drawerState = 'none';
    this.burgerState = false
  }

  createBasicNotification(notice: TemplateRef<{}>): void {
    this.notification.template(notice, {
      nzStyle: {
        background: '#F4F6FF'
      }
    });
  }

  playVideo() {
    this.play = true
  }
}
