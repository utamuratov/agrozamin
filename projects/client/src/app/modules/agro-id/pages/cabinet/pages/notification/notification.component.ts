import { Component, OnInit } from '@angular/core';

interface Notification {
  id: number;
  date: number | string | Date;
  title: string;
  description: string;
  type: "success" | "info" | "warning" | "error";
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less'],
})
export class NotificationComponent implements OnInit {
  listOfData: Notification[] = [
    {
      id: 1,
      title: 'Пароль успешно изменен',
      date: '22.01.2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! ',
      type: 'success',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      date: '21.01.2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum!',
      type: 'warning',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      date: '20.01.2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum!',
      type: 'info',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet',
      date: '19.01.2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum!',
      type: 'error',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet',
      date: '18.01.2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aperiam illo ipsam enim rem illum!',
      type: 'info',
    },
  ];

  type = 'success';

  constructor() {}

  ngOnInit() {}
}
