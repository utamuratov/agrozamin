import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './advertisement-list.page.html',
  styleUrls: ['./advertisement-list.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListPage implements OnInit {
  categories = [
    {
      icon: './assets/images/tractor.svg',
      name: 'Сельхозтехника',
      id: 1,
      categories: [
        {
          name: 'Техника',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Техника для растениеводства',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Техника для животноводства',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/seeds.svg',
      name: 'Семена',
      id: 2,
      categories: [
        {
          name: 'Семена',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Семена',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Семена',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/fert.svg',
      name: 'Удобрения',
      id: 3,
      categories: [
        {
          name: 'Удобрения',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Удобрения',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Удобрения',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/chemy.svg',
      name: 'Агрохимия',
      id: 4,
      categories: [
        {
          name: 'Агрохимия',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Агрохимия',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Агрохимия',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/cow.svg',
      name: 'Сельхоз животные',
      id: 5,
      categories: [
        {
          name: 'Сельхоз животные',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Сельхоз животные',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Сельхоз животные',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/corn.svg',
      name: 'Зерно',
      id: 6,
      categories: [
        {
          name: 'Зерно',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Зерно',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Зерно',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/garden.svg',
      name: 'Сад и огород',
      id: 7,
      categories: [
        {
          name: 'Сад и огород',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Сад и огород',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Сад и огород',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/transport.svg',
      name: 'Спецтехника',
      id: 8,
      categories: [
        {
          name: 'Спецтехника',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Спецтехника',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Спецтехника',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/shield.svg',
      name: 'Средства защиты растений',
      id: 9,
      categories: [
        {
          name: 'Средства защиты растений',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Средства защиты растений',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Техника для животноводства',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/tech.svg',
      name: 'Фермерское оборудование',
      id: 12,
      categories: [
        {
          name: 'Фермерское оборудование',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Фермерское оборудование',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Фермерское оборудование',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/rubber.svg',
      name: 'Резино-технические изделия',
      id: 13,
      categories: [
        {
          name: 'Резино-технические изделия',
          categories: [
            { name: 'Тракторы', icon: 'assets/images/tractor.svg' },
            {
              name: 'Минитехника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Транспортные средства для с/х',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Погрузчики', icon: 'assets/images/tractor.svg' },
            {
              name: 'Полуприцепы и прицепы',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Сельхозтехника для хранения зерна',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Электронные системы',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
        {
          name: 'Резинотехнические изделия',
          categories: [
            {
              name: 'Виноградоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Почвообрабатывающая техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Посевные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Картофельная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Техника для внесения удобрений',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерноочистительные машины',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Зерносушилки',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Опрыскиватели',
              icon: 'assets/images/tractor.svg',
            },
            { name: 'Жатки', icon: 'assets/images/tractor.svg' },
          ],
        },
        {
          name: 'Резинотехнические изделия',
          categories: [
            {
              name: 'Кормоуборочные комбайны',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормозаготовительная техника',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Оборудование для производства комбикормов',
              icon: 'assets/images/tractor.svg',
            },
            {
              name: 'Кормораздатчики и смесители',
              icon: 'assets/images/tractor.svg',
            },
          ],
        },
      ],
    },
    {
      icon: './assets/images/other.svg',
      name: 'Все товары',
      id: 14,
      categories: [],
    },
  ];

  catId = 1;
  constructor() {}

  ngOnInit() {}

  getCategoryId(id: number) {
    this.catId = id;
  }
}
