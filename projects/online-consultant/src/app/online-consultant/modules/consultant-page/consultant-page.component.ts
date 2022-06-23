import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'az-consultant-page',
  templateUrl: './consultant-page.component.html',
  styleUrls: ['./consultant-page.component.less'],
})
export class ConsultantPageComponent implements OnInit {
  likes = 0;
  time = formatDistance(new Date(), new Date());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataList: any[] = [];
  submitting = false;
  paymentCard!: FormGroup;

  inputValue = '';
  visibleRequest = false;
  isVisibleModal = false;
  visibleDrawer = false;
  current = 1;
  radioValue = 'A';
  index = 'First-content';
  hoursTable: any = []

  data = {
    author: 'Мингазова Нина',
    avatar: './assets/images/comment2.jpg',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    children: [
      {
        author: 'Артур Уралович ',
        avatar: './assets/images/comment3.jpg',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        children: [
          {
            author: 'Тимур Мун',
            avatar: './assets/images/comment4.jpg',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          },
        ],
      },
    ],
  };

  consultants = [
    {
      id: 1,
      img: './assets/images/card1.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.9,
    },
    {
      id: 2,
      img: './assets/images/card2.jpg',
      name: 'Михайлов Сергей Александрович',
      specialization: 'Окулист',
      price: '85 000',
      rating: 4.8,
    },
    {
      id: 3,
      img: './assets/images/card3.jpg',
      name: 'Алишерова Елизавета Шамсидинновна',
      specialization: 'Зоолог',
      price: '105 000',
      rating: 4.9,
    },
    {
      id: 4,
      img: './assets/images/card4.jpg',
      name: 'Кудратов Шахзод Аслидинович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.7,
    },
    {
      id: 5,
      img: './assets/images/card5.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.4,
    },
  ];

  user = {
    author: 'Новый пользователь',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  };

  weekDay: any = [
    {
      id: 1,
      day: 'Пн',
      date: 11,
      value: 'Mon',
      disabled: false,
      hours: [
        { id: 1, time: '11:00 - 11:40', value: 1 },
        { id: 2, time: '12:00 - 12:40', value: 2 },
        { id: 3, time: '14:00 - 14:40', value: 3 },
        { id: 4, time: '15:00 - 15:40', value: 4 },
        { id: 5, time: '16:00 - 16:40', value: 5 },
      ],
    },
    {
      id: 2,
      day: 'Вт',
      date: 12,
      value: 'Tue',
      disabled: false,
      active: true,
      hours: [
        { id: 1, time: '08:00 - 08:40', value: 1 },
        { id: 2, time: '09:00 - 09:40', value: 2 },
        { id: 3, time: '10:00 - 10:40', value: 3 },
        { id: 4, time: '11:00 - 11:40', value: 4 },
        { id: 5, time: '12:00 - 12:40', value: 5 },
        { id: 6, time: '14:00 - 14:40', value: 6 },
        { id: 7, time: '15:00 - 15:40', value: 7 },
        { id: 8, time: '16:00 - 16:40', value: 8 },
      ],
    },
    {
      id: 3,
      day: 'Ср',
      date: 13,
      value: 'Wed',
      disabled: true,
      hours: [],
    },
    {
      id: 4,
      day: 'Чт',
      date: 14,
      value: 'Thr',
      disabled: false,
      hours: [
        { id: 1, time: '15:00 - 15:40', value: 1 },
        { id: 2, time: '16:00 - 16:40', value: 2 },
      ],
    },
    {
      id: 5,
      day: 'Пт',
      date: 15,
      value: 'Fri',
      disabled: false,
      hours: [
        { id: 1, time: '11:00 - 11:40', value: 1 },
        { id: 2, time: '12:00 - 12:40', value: 2 },
        { id: 3, time: '14:00 - 14:40', value: 3 },
        { id: 4, time: '15:00 - 15:40', value: 4 },
        { id: 5, time: '16:00 - 16:40', value: 5 },
      ],
    },
    {
      id: 6,
      day: 'Сб',
      date: 16,
      value: 'Sat',
      disabled: false,
      hours: [
        { id: 1, time: '08:00 - 08:40', value: 1 },
        { id: 2, time: '09:00 - 09:40', value: 2 },
        { id: 3, time: '10:00 - 10:40', value: 3 },
        { id: 4, time: '11:00 - 11:40', value: 4 },
        { id: 5, time: '12:00 - 12:40', value: 5 },
        { id: 6, time: '14:00 - 14:40', value: 6 },
        { id: 7, time: '15:00 - 15:40', value: 7 },
        { id: 8, time: '16:00 - 16:40', value: 8 },
      ],
    },
    {
      id: 7,
      day: 'Вск',
      date: 17,
      value: 'Sun',
      disabled: false,
      hours: [{ id: 1, time: '16:00 - 16:40', value: 1 }],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.hoursTable = this.weekDay.filter((e:any) => e.active === true)[0].hours    
  }

  like(): void {
    this.likes = 1;
  }

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.dataList = [
        ...this.dataList,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date()),
        },
      ]
        .map((e) => ({
          ...e,
          displayTime: formatDistance(new Date(), e.datetime),
        }))
        .reverse();
    }, 800);
  }

  showModal(): void {
    this.isVisibleModal = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleModal = false;
    this.current = 1
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  getHours(id:number) {
    this.hoursTable = this.weekDay.filter((e:any) => e.id === id)[0].hours
  }

  submitForm() {
    console.log('data');    
  }

  showDrawer() {
    this.visibleDrawer = true;
  }

  closeDrawer(): void {
    this.visibleDrawer = false;
    this.current = 1
  }
}
