import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'az-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacteristicsComponent implements OnInit {
  selectedValue = null;
  radioValue1 = 'A';
  radioValue2 = 'A';

  checkOptionsOne = [
    { label: 'Люк', value: 'Люк', checked: true },
    { label: 'Обвес', value: 'Обвес' },
    { label: 'Лебёдка', value: 'Лебёдка' },
    { label: 'Ветровики', value: 'Ветровики' },
    { label: 'Фаркоп', value: 'Фаркоп' },
  ];
  constructor() {}

  ngOnInit(): void {}

  log(value: object[]): void {
    console.log(value);
  }
}
