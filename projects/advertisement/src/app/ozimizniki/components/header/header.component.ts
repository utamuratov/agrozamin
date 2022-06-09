import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  isDevMode,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { Constants, Data, LanguageState } from 'ngx-az-core';

@Component({
  selector: 'az-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  /**
   *
   */
  AGRO_ID_ROUTE = Constants.AGROID_ROUTE_PATH;

  lang = '1';

  validateForm!: FormGroup;

  isOpened = false;
  activeLink!: number;
  visible = false;
  isWidth = '280px';
  placement: NzDrawerPlacement = 'left';
  categoryChilds: any = [];
  touched = false;
  serachInputDrawer = false;
  inputValue = 2;
  searchForm!: FormGroup;
  searchDropDown = false;
  searchCityDropDown = false;
  search = '';
  /* AZ-DRAWER */
  azVisible = false;
  azDrawerWidthValue!: string;
  azDrawerWidthValueCatalog!: string;
  /* ************************** */
  profileImage = true;

  visibleServicesPopover = false;

  cityFilter!: FormGroup;
  isUserAuthenticated = true;
  regionsChild: any = [];

  regionsValue: any = [];

  categories = [
    {
      icon: './assets/images/tractor.svg',
      name: 'Сельхозтехника',
      id: 1,
      categories: [
        {
          name: 'Техника',
          categories: [
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Техника для растениеводства',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Техника для животноводства',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Семена',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Семена',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Удобрения',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Удобрения',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Агрохимия',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Агрохимия',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Сельхоз животные',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Сельхоз животные',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Зерно',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Зерно',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Сад и огород',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Сад и огород',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Спецтехника',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Спецтехника',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Средства защиты растений',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Техника для животноводства',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
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
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Фермерское оборудование',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Фермерское оборудование',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
          ],
        },
      ],
    },
    {
      icon: './assets/images/rubber.svg',
      name: 'Резинотехнические изделия',
      id: 13,
      categories: [
        {
          name: 'Резинотехнические изделия',
          categories: [
            { name: 'Тракторы' },
            { name: 'Минитехника' },
            { name: 'Транспортные средства для с/х' },
            { name: 'Погрузчики' },
            { name: 'Полуприцепы и прицепы' },
            { name: 'Сельхозтехника для хранения зерна' },
            { name: 'Электронные системы' },
          ],
        },
        {
          name: 'Резинотехнические изделия',
          categories: [
            { name: 'Виноградоуборочные комбайны' },
            { name: 'Почвообрабатывающая техника' },
            { name: 'Посевные машины' },
            { name: 'Картофельная техника' },
            { name: 'Техника для внесения удобрений' },
            { name: 'Зерноочистительные машины' },
            { name: 'Зерносушилки' },
            { name: 'Опрыскиватели' },
            { name: 'Жатки' },
          ],
        },
        {
          name: 'Резинотехнические изделия',
          categories: [
            { name: 'Кормоуборочные комбайны' },
            { name: 'Кормозаготовительная техника' },
            { name: 'Оборудование для производства комбикормов' },
            { name: 'Кормораздатчики и смесители' },
          ],
        },
      ],
    },
  ];

  searchParamas = [
    {
      type: 'История поиска:',
      id: 1,
      values: [
        { name: 'ворес', id: 1 },
        { name: 'овощная сеялка', id: 2 },
      ],
    },
    {
      type: 'Часто ищут:',
      id: 1,
      values: [
        { name: 'виноград', id: 1 },
        { name: 'время кофе', id: 2 },
      ],
    },
    { type: 'Категории:', id: 1, values: [{ name: 'В мешках', id: 1 }] },
    { type: 'Продавец:', id: 1, values: [{ name: 'ООО “Вымпел”', id: 1 }] },
    {
      type: 'Товары:',
      id: 1,
      values: [{ name: 'Круглошлифовальный станок', id: 1 }],
    },
    { type: 'Производитель:', id: 1, values: [{ name: 'ООО Company', id: 1 }] },
  ];

  regions = [
    { id: 1, name: 'Весь Узбекистан', cities: [] },
    {
      id: 2,
      name: 'Андижанская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 3,
      name: 'Бухарская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 4,
      name: 'Джизакская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 5,
      name: 'Каракалпакстан',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 6,
      name: 'Навоийская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 7,
      name: 'Наманганская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 8,
      name: 'Самаркандская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 9,
      name: 'Сурхандарьинская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 10,
      name: 'Сырдарьинская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 11,
      name: 'Ташкентская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
    {
      id: 12,
      name: 'Ферганская область',
      cities: [
        { id: 1, city: 'Акалтын' },
        { id: 2, city: 'Алтынкуль' },
        { id: 3, city: 'Андижан' },
        { id: 4, city: 'Асака' },
        { id: 5, city: 'Ахунбабаев' },
        { id: 6, city: 'Балыкчи' },
        { id: 7, city: 'Боз' },
        { id: 8, city: 'Булакбаши' },
        { id: 10, city: 'Карасу' },
        { id: 11, city: 'Куйганъяр' },
        { id: 12, city: 'Кургантепа' },
        { id: 13, city: 'Мархамат' },
        { id: 14, city: 'Пайтуг' },
        { id: 15, city: 'Пахтаабад' },
        { id: 16, city: 'Шахрихан' },
        { id: 17, city: 'Ханабад' },
      ],
    },
    {
      id: 13,
      name: 'Хорезмская область',
      cities: [
        { id: 1, name: 'Акалтын' },
        { id: 2, name: 'Алтынкуль' },
        { id: 3, name: 'Андижан' },
        { id: 4, name: 'Асака' },
        { id: 5, name: 'Ахунбабаев' },
        { id: 6, name: 'Балыкчи' },
        { id: 7, name: 'Боз' },
        { id: 8, name: 'Булакбаши' },
        { id: 10, name: 'Карасу' },
        { id: 11, name: 'Куйганъяр' },
        { id: 12, name: 'Кургантепа' },
        { id: 13, name: 'Мархамат' },
        { id: 14, name: 'Пайтуг' },
        { id: 15, name: 'Пахтаабад' },
        { id: 16, name: 'Шахрихан' },
        { id: 17, name: 'Ханабад' },
      ],
    },
  ];

  /**
   *
   */
  isVisibleProfilePopupLg = false;
  isVisibleProfilePopupMd = false;
  isVisibleProfilePopupSm = false;
  isVisibleProfilePopupDrawer = false;
 

  /**
   *
   */
  readonly SERVICES = Data.SERVICES;

  visibleLocationDrawer = false;
  visibleLangDrawer = false;
  visibleSearchDrawer = false;
  visibleCatalogDrawer = false;
  visibleCatalogDrawerSecondLvl = false;
  visibleCatalogDrawerThirdLvl = false
  drawerOffsetValue = 280

  categorySecondLvl: any = []
  categoryThirdLvl: any = []

  panels = [
    {
      name: 'Андижанская область',
    },
    {
      name: 'Бухарская область',
    },
    {
      name: 'Джизакская область',
    },
    {
      name: 'Каракалпакстан',
    },
    {
      name: 'Кашкадарьинская область',
    },
    {
      name: 'Навоийская область',
    },
    {
      name: 'Наманганская область',
    },
    {
      name: 'Самаркандская область',
    },
    {
      name: 'Сурхандарьинская область',
    },
    {
      name: 'Сырдарьинская область',
    },
    {
      name: 'Ташкентская область',
    },
    {
      name: 'Ферганская область',
    },
    {
      name: 'Хорезмская область',
    },
  ];

  
  constructor(
    private fb: FormBuilder,
    private $jwtHelper: JwtHelperService,
    private $store: Store,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // this.isUserAuthenticated = !this.$jwtHelper.isTokenExpired();

    this.searchForm = this.fb.group({
      searchInput: [null],
      cityInput: [null],
    });

    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      city: [null, [Validators.required]]
    });

    this.azDrawerWidthValue = this.azDrawerWidth();
    this.azDrawerWidthValueCatalog = this.azDrawerWidthCatalog();
    this.drawerOffsetValue = this.azDrawerOffsetCatalog();
  }

  submit() {
    console.log(this.searchForm);
  }

  clickMe(): void {
    this.visibleServicesPopover = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.isOpened = false;
  }

  openAz(): void {
    this.azVisible = true;
  }

  closeAz(): void {
    this.azVisible = false;
  }

  openSubmenu(id: any) {
    this.isOpened = true;
    this.activeLink = id;
  }

  closed() {
    this.isOpened = false;
  }

  getChild(id: any) {
    this.isOpened = true;
    this.categoryChilds = this.categories.filter(
      (e) => e.id === id
    )[0].categories;
  }

  getCities(id: any) {
    this.regionsChild = this.regions.filter((e) => e.id === id)[0].cities;
  }

  openSearchDrop() {
    if (this.searchCityDropDown) {
      this.searchCityDropDown = false;
    }
    this.searchDropDown = true;
  }

  openFilterDrop() {
    if (this.searchDropDown) {
      this.searchDropDown = false;
    }
    this.searchCityDropDown = true;
  }

  calcDrawerWidth(): string {
    if (!this.isOpened) {
      return '280px';
    } else {
      let clientWidth = window.innerWidth;
      clientWidth = clientWidth * 0.65;

      if (clientWidth > 1355) {
        clientWidth = 1355;
      } else if (clientWidth < 1200) {
        return '280px';
      }
      return `${clientWidth}px`;
    }
  }

  azDrawerWidth(): string {
    if (window.innerWidth > 992) {
      return '470px';
    } else if (window.innerWidth > 575 && window.innerWidth < 992) {
      return '374px';
    } else {
      return '100%';
    }
  }

  @HostListener('window:resize') onResize() {
    this.azDrawerWidthValue = this.azDrawerWidth();
    this.azDrawerWidthValueCatalog = this.azDrawerWidthCatalog();
    this.drawerOffsetValue = this.azDrawerOffsetCatalog();
  }

  setLang(num: string) {
    this.lang = num;
  }

  /**
   *
   * NAVIGATE TO SIGN-IN SCREEN
   */
  navigateToSignIn() {
    this.document.location.pathname = `/${Constants.AGROID_ROUTE_PATH}`;
  }

  /**
   *
   * @param urls
   */
  navigateTo(urls: string[]) {
    this.isVisibleProfilePopupLg = false;
    this.isVisibleProfilePopupMd = false;
    this.isVisibleProfilePopupSm = false;
    this.isVisibleProfilePopupDrawer = false;
    this.router.navigate(urls, { relativeTo: this.route });
  }

  /**
   *
   */
  logout() {
    // TODO: DO LOGOUT
    this.navigateToSignIn();
  }

  openLocationDrawer(): void {
    this.visibleLocationDrawer = true;
  }

  closeLocationDrawer(): void {
    this.visibleLocationDrawer = false;
  }

  openLangDrawer(): void {
    this.visibleLangDrawer = true;
  }

  closeLangDrawer(): void {
    this.visibleLangDrawer = false;
  }

  openSearchDrawer(): void {
    this.visibleSearchDrawer = true;
  }

  closeSearchDrawer(): void {
    this.visibleSearchDrawer = false;
  }

  openCatalogDrawer(): void {
    this.visibleCatalogDrawer = true;
  }

  closeCatalogDrawer(): void {
    this.visibleCatalogDrawer = false;
    this.closeDrawerCatalogSubmenu();
    this.closeDrawerCatalogThirdLvl();
  }

  

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  genderChange(value: string): void {
    this.validateForm.get('note')!.setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }

  openDrawerCatalogSubmenu(id: number) {
    console.log(id);
    this.visibleCatalogDrawerSecondLvl = true;
    this.categorySecondLvl = this.categories.filter(e => e.id === id)[0]
    console.log(this.categorySecondLvl);
  }

  closeDrawerCatalogSubmenu() {
    this.visibleCatalogDrawerSecondLvl = false
  }

  openDrawerCatalogThirdLvl(subcategory: []) {
    this.categoryThirdLvl = subcategory
    this.visibleCatalogDrawerThirdLvl = true
    console.log(this.categoryThirdLvl);    
  }

  closeDrawerCatalogThirdLvl() {
    this.visibleCatalogDrawerThirdLvl = false
  }

  openTabDrawer() {
    console.log('hello');    
  }

  // setOffsetDrawer() {

  // }

  azDrawerWidthCatalog(): string {
     if (window.innerWidth > 575 ) {
      return '280px';
    } else {
      return '100%';
    }
  }

  azDrawerOffsetCatalog(): number {
     if (window.innerWidth > 575 ) {
      return 280;
    } else {
      return 0;
    }
  }
}
