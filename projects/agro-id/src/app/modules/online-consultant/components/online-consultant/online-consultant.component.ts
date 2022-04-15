import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-online-consultant',
  templateUrl: './online-consultant.component.html',
  styleUrls: ['./online-consultant.component.less']
})
export class OnlineConsultantComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    console.log(this.translate.instant('home.breadcrumb'));
  }

}
