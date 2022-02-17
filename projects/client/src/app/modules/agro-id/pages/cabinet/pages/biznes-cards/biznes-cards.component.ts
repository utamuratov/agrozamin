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
  
  userName = 'Махмудов Кайрат';
  validateForm!: FormGroup;

  card!: BusinessCardConfig;


  userCard = [
    {
      firstName: 'User 1',
      lastName: ' lastName',
      phone: ['+98989298559', '+98989298559'],
      avatar: 'avatar src',
      tg: true,
      mail: 'info@gmail.com',
    },
    {
      firstName: 'User 2',
      lastName: 'lastName',
      phone: ['+98989298559'],
      avatar: 'avatar src',
      tg: true,
      mail: 'info@gmail.com',
    },
    {
      firstName: 'User 3',
      lastName: 'lastName',
      phone: ['+98989298559'],
      avatar: 'avatar src',
      tg: true,
      mail: 'info@gmail.com',
    },
    {
      firstName: 'User 4',
      lastName: 'lastName',
      phone: ['+98989298559'],
      avatar: 'avatar src',
      tg: true,
      mail: 'info@gmail.com',
    },
    {
      firstName: 'User 5',
      lastName: 'lastName',
      phone: ['+98989298559'],
      avatar: 'avatar src',
      tg: true,
      mail: 'info@gmail.com',
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

  showModal(data: BusinessCardConfig): void {
    this.isVisible = true;
    this.card = data;
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
