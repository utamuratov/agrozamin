import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { BusinessCardConfig, UserCard } from '../../components/business-card-modal/business-card-modal.component';

@Component({
  selector: 'app-biznes-cards',
  templateUrl: './biznes-cards.component.html',
  styleUrls: ['./biznes-cards.component.less'],
  providers: [NzMessageService],
})
export class BiznesCardsComponent implements OnInit {
  isVisible = false;
  openModal = false
  
  userName = 'Махмудов Кайрат';
  validateForm!: FormGroup;

  card!: BusinessCardConfig;

  userCard = [
    {
      firstName: 'Нарбеков',
      lastName: ' Артур',
      phone: '+998 90 326 20 13',
      avatar: '../../../../../../../assets/images/agro-id-images/avatar.jpg',
      mail: 'narbekov@gmail.com',
    },
    {
      firstName: 'Нарбекова',
      lastName: ' Кристина',
      phone: '+998 90 326 20 14',
      avatar: '../../../../../../../assets/images/agro-id-images/avatar2.jpg',
      mail: 'narbekovaKR@gmail.com',
    },
    {
      firstName: 'Нарбеков',
      lastName: ' Джони',
      phone: '+998 90 326 20 15',
      avatar: '../../../../../../../assets/images/agro-id-images/avatar3.jpg',
      mail: 'Ijhony@gmail.com',
    },
  ];

  constructor(private msg: NzMessageService, private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      additionalPhone: [null],
      mail: [null],
    });
  }

  showModal(): void {
    this.openModal = true
  }

  closeModal($event: boolean): void {
    this.openModal = $event
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
