import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-AllCategories',
  templateUrl: './AllCategories.component.html',
  styleUrls: ['./AllCategories.component.less'],
})
export class AllCategoriesComponent implements OnInit {
  categories = [
    {
      icon: '../../../assets/images/agrozamin/tractor.svg',
      name: 'Сельхозтехника',
      id: 1,
      categories: [
        {
          name: 'Техника',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Техника для растениеводства',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Техника для животноводства',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/seeds.svg',
      name: 'Семена',
      id: 2,
      categories: [
        {
          name: 'Семена',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Семена',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Семена',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/fert.svg',
      name: 'Удобрения',
      id: 3,
      categories: [
        {
          name: 'Удобрения',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Удобрения',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Удобрения',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/chemy.svg',
      name: 'Агрохимия',
      id: 4,
      categories: [
        {
          name: 'Агрохимия',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Агрохимия',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Агрохимия',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/cow.svg',
      name: 'Сельскохозяйственные животные',
      id: 5,
      categories: [
        {
          name: 'Сельскохозяйственные животные',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Сельскохозяйственные животные',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Сельскохозяйственные животные',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/corn.svg',
      name: 'Зерно',
      id: 6,
      categories: [
        {
          name: 'Зерно',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Зерно',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Зерно',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/garden.svg',
      name: 'Сад и огород',
      id: 7,
      categories: [
        {
          name: 'Сад и огород',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Сад и огород',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Сад и огород',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/transport.svg',
      name: 'Спецтехника',
      id: 8,
      categories: [
        {
          name: 'Спецтехника',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Спецтехника',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Спецтехника',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/shield.svg',
      name: 'Средства защиты растений',
      id: 9,
      categories: [
        {
          name: 'Средства защиты растений',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Средства защиты растений',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Техника для животноводства',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/tech.svg',
      name: 'Фермерское оборудование',
      id: 12,
      categories: [
        {
          name: 'Фермерское оборудование',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Фермерское оборудование',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Фермерское оборудование',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/rubber.svg',
      name: 'Резинотехнические изделия',
      id: 13,
      categories: [
        {
          name: 'Резинотехнические изделия',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/agrozamin/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
        {
          name: 'Резинотехнические изделия',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/agrozamin/tractor.svg' },
          ],
        },
        {
          name: 'Резинотехнические изделия',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/agrozamin/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: '../../../assets/images/agrozamin/other.svg',
      name: 'Все товары',
      id: 14,
      categories: [],
    },
  ];

  catId = 1
  constructor() {}

  ngOnInit() {}

  getCategoryId(id: number) {
    this.catId = id
  }
}
