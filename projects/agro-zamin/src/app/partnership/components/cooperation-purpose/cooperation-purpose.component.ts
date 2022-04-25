import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-cooperation-purpose',
  templateUrl: './cooperation-purpose.component.html',
  styleUrls: ['./cooperation-purpose.component.less'],
})
export class CooperationPurposeComponent implements OnInit {
  cardDescription = [
    {
      text: 'Обеспечение высокого качества профессиональной подготовки специалистов на основе объединения интеллектуального потенциала, материальных, финансовых и корпоративных ресурсов партнеров.',
    },
    {
      text: 'Проведение совместных научно-исследовательских и опытно-конструкторских работ, внедрение в промышленность их результатов.',
    },
    {
      text: 'Повышение качества предоставляемых услуг, предложений и сервисов..',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
