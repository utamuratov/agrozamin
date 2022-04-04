import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../../../legal-person/components/legal-person/legal-person.page';

@Component({
  selector: 'az-my-companies-widget',
  templateUrl: './my-companies-widget.component.html',
  styleUrls: ['./my-companies-widget.component.less'],
})
export class MyCompaniesWidgetComponent implements OnInit {
  isVisible = false;
  activeCompany!: CompanyInfo | null;

  companies: CompanyInfo[] = [
    {
      id: 1,
      visibleDesktop: false,
      visibleMobile: false,
      name: 'ООО Global',
      serviceBanking: 'АТБ АГРОБАНК',
      stir: 369852741,
      mfo: 123456789,
      city: 'г.Ташкент',
      contributinCount: 5465451987984351,
      avatar:
        'https://bankxizmatlari.uz/upload/iblock/6bf/0x3md3ifudj8ukvcb19x7w9lpzckhr13/AgroBank_mini.png',
    },
    {
      id: 2,
      visibleDesktop: false,
      visibleMobile: false,
      name: 'АО Elite',
      serviceBanking: 'АТБ АГРОБАНК',
      stir: 369852741,
      mfo: 123456789,
      city: 'г.Ташкент',
      contributinCount: 5465461987984351,
      avatar:
        'https://top.uz/upload/iblock/1f4/1f4a08d13c62010847d5036d9ab3bc60.png',
    },
    {
      id: 3,
      visibleDesktop: false,
      visibleMobile: false,
      name: 'АО Hilton',
      serviceBanking: 'АТБ АГРОБАНК',
      stir: 369852741,
      mfo: 123456789,
      city: 'г.Ташкент',
      contributinCount: 5465451987984351,
      avatar:
        'https://play-lh.googleusercontent.com/PzYbrTWGWkMKNBf2FvZkzi1qU3OAlam3FRikfAXOB3G-dPPaNTVKAvVUHr-x2pN4Qw',
    },
    {
      id: 4,
      visibleDesktop: false,
      name: 'ООО Moremex',
      serviceBanking: 'АТБ АГРОБАНК',
      stir: 369852741,
      mfo: 123456789,
      city: 'г.Ташкент',
      contributinCount: 5465461987984351,
    },
  ];

  constructor() {}

  ngOnInit() {}

  deleteCard(id: number): void {
    const companiesList = this.companies.filter((el) => el.id !== id);
    this.companies = companiesList;
  }

  change(value: boolean, item: CompanyInfo): void {
    if (value) {
      this.activeCompany = item;
    } else {
      this.activeCompany = null;
    }
  }

  handleCancel($event: boolean) {
    this.isVisible = $event;
  }

  showModal() {
    this.isVisible = true;
  }
}
