import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'az-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.less']
})
export class MyRequestComponent implements OnInit {
  expandSet = new Set<number>();
  time = formatDistance(new Date(), new Date());

  
  listOfData = [
    {
      id: 1,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 0,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 2,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 0,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 3,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 1,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 4,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 0,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 5,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 1,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 6,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 2,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 7,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 3,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 8,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 3,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 6,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 3,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 9,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 0,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 10,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 0,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
    {
      id: 11,
      date: '15.04.2022',
      time: '18:00-18:30',
      direction: 'Ветеренария',
      status: 1,
      price: '70.000 сум',
      name: 'Нарбеков Артур',
      avatar: './assets/images/avatar.jpg',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg'
    },
  ];

  waitingRequests: any = []

  completedRequests: any = []

  constructor() { }

  ngOnInit() {
    this.waitingRequests = this.listOfData.filter((e:any) => e.status < 2)
    this.completedRequests = this.listOfData.filter((e:any) => e.status > 1)
    console.log(this.completedRequests);    
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

}
