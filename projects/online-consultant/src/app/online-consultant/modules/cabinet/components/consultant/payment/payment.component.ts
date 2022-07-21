import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDistance } from 'date-fns';
import { ChartConfiguration, ChartEvent, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'az-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less'],
})
export class PaymentComponent implements OnInit {
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
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
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      clientAvatar: './assets/images/avatar.jpg',
    },
  ];

  waitingRequests: any = [];

  completedRequests: any = [];

  constructor() {}

  ngOnInit() {
    this.waitingRequests = this.listOfData.filter((e: any) => e.status < 2);
    this.completedRequests = this.listOfData.filter((e: any) => e.status > 1);
    console.log(this.completedRequests);
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [1, 2, 3, 4, 5, 4, 3],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#5B93FF',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true },
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         position: 'center',
      //         enabled: true,
      //         color: 'orange',
      //         content: 'LineAnno',
      //         font: {
      //           weight: 'bold',
      //         },
      //       },
      //     },
      //   ],
      // },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] =
        PaymentComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = PaymentComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(
      `Label ${this.lineChartData.labels.length}`
    );

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    if (this.lineChartData.labels) {
      this.lineChartData.labels[2] = ['1st Line', '2nd Line'];
    }

    this.chart?.update();
  }




  /* =========================== */
  public doughnutChartLabels: string[] = [ 'Отменено', 'Выполнено', 'В ожидании' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        borderWidth: 0,
        weight: 100,
        // offset: 100
       },
       { data: [ 50, 150, 120 ] },
       { data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
}
