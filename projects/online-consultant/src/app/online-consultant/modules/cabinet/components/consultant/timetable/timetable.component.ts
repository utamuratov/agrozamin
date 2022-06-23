import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.less']
})
export class TimetableComponent implements OnInit {
  likes = 0;
  hoursTable: any = []
  time = new Date();
  switchValue = false;

  weekDay: any = [
    {
      id: 1,
      day: 'Пн',
      date: 11,
      value: 'Mon',
      disabled: false,
      hours: [
        { id: 1, time: '11:00 - 11:40', value: 1, reserved: true, active: true, description: {
          name: 'Devon Lane',
          avatar: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        } },
        { id: 2, time: '12:00 - 12:40', value: 2, reserved: false, active: true, },
        { id: 3, time: '14:00 - 14:40', value: 3, reserved: false, active: false, },
        { id: 4, time: '15:00 - 15:40', value: 4, reserved: true, active: true, description: {
          name: 'Mark Twen',
          avatar: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        } },
        { id: 5, time: '16:00 - 16:40', value: 5, reserved: false, active: true,},
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
        { id: 1, time: '08:00 - 08:40', value: 1, reserved: false, active: true },
        { id: 2, time: '09:00 - 09:40', value: 2, reserved: false, active: true },
        { id: 3, time: '10:00 - 10:40', value: 3, reserved: false, active: true },
        { id: 4, time: '11:00 - 11:40', value: 4, reserved: true, active: true, description: {
          name: 'Devon Lane',
          avatar: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        } },
        { id: 5, time: '12:00 - 12:40', value: 5, reserved: false, active: false },
        { id: 6, time: '14:00 - 14:40', value: 6, reserved: true, active: true,description: {
          name: 'Devon Lane',
          avatar: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        } },
        { id: 7, time: '15:00 - 15:40', value: 7, reserved: false, active: true },
        { id: 8, time: '16:00 - 16:40', value: 8, reserved: false, active: true },
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
        { id: 1, time: '15:00 - 15:40', value: 1, reserved: false, active: true },
        { id: 2, time: '16:00 - 16:40', value: 2, reserved: false, active: true },
      ],
    },
    {
      id: 5,
      day: 'Пт',
      date: 15,
      value: 'Fri',
      disabled: false,
      hours: [
        { id: 1, time: '11:00 - 11:40', value: 1, reserved: false, active: true },
        { id: 2, time: '12:00 - 12:40', value: 2, reserved: false, active: true },
        { id: 3, time: '14:00 - 14:40', value: 3, reserved: false, active: false },
        { id: 4, time: '15:00 - 15:40', value: 4, reserved: false, active: true},
        { id: 5, time: '16:00 - 16:40', value: 5, reserved: false, active: true },
      ],
    },
    {
      id: 6,
      day: 'Сб',
      date: 16,
      value: 'Sat',
      disabled: false,
      hours: [
        { id: 1, time: '08:00 - 08:40', value: 1, reserved: false, active: false },
        { id: 2, time: '09:00 - 09:40', value: 2, reserved: false, active: false },
        { id: 3, time: '10:00 - 10:40', value: 3, reserved: false, active: false },
        { id: 4, time: '11:00 - 11:40', value: 4, reserved: false, active: false },
        { id: 5, time: '12:00 - 12:40', value: 5, reserved: false, active: false },
        { id: 6, time: '14:00 - 14:40', value: 6, reserved: false, active: false },
        { id: 7, time: '15:00 - 15:40', value: 7, reserved: false, active: false },
        { id: 8, time: '16:00 - 16:40', value: 8, reserved: false, active: false },
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

  getHours(id:number) {
    this.hoursTable = this.weekDay.filter((e:any) => e.id === id)[0].hours
  }
}
