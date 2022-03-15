import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface CompanyInfo {
  id: number;
  name: string;
  stir: number;
  city: string;
  avatar: string | null;
  visibleDesktop: boolean;
  visibleMobile?: boolean;
  serviceBanking: string;
  mfo: number;
  contributinCount: number;
}

@Component({
  selector: 'app-legal-person',
  templateUrl: './legal-person.component.html',
  styleUrls: ['./legal-person.component.less'],
})
export class LegalPersonComponent implements OnInit {
  isVisible = false;
  validateForm!: FormGroup;
  activeCompany!: CompanyInfo | null;

  companies: CompanyInfo[] = [
    {
      id: 1,
      visibleDesktop: false,
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
      avatar: null,
    },
  ];

  constructor(private fb: FormBuilder) {}

  change(value: boolean, item: CompanyInfo): void {
    if (value) {
      this.activeCompany = item;
    } else {
      this.activeCompany = null;
    }
  }

  ngOnInit() {}

  deleteCard(id: number): void {
    const companiesList = this.companies.filter(el => el.id !== id)
    this.companies = companiesList
  }

  showModal(): void {
    this.isVisible = true;
  }

  showEditModal($event: boolean): void {
    this.isVisible = $event;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel($event: boolean): void {
    this.isVisible = $event;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      setTimeout(() => {
        this.isVisible = false;
      }, 1000);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
