import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './favourite-filters.component.html',
  styleUrls: ['./favourite-filters.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteFiltersComponent implements OnInit {
  
  filter: any = [
    {
      id: 1,
      title: 'Сельхозтехника / Техника / Тракторы',
      date: '10.02.2022, 15:43',
      filterParams: [
        'Куплю',
        'Андижанская область',
        'от 500 000 сум',
        'Страна производства: Россия',
      ],
      newPosts: 15,
      notification: false,
    },
    {
      id: 2,
      title:
        'Сельхозтехника / Техника для животноводства / Кормоуборочные комбайны',
      date: '8.01.2022, 10:22',
      filterParams: ['Сдаю в аренду', 'Ташкент', 'от 25 000 000 сум'],
      newPosts: 0,
      notification: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  viewFilter(id: number) {
    alert(id);
  }

  deleteFilter(id: number) {
    this.filter = this.filter.filter((el: any) => el.id !== id);
  }
}
