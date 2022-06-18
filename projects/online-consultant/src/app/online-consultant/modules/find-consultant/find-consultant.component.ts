import {
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'az-find-consultant',
  templateUrl: './find-consultant.component.html',
  styleUrls: ['./find-consultant.component.less'],
})
export class FindConsultantComponent implements OnInit {

  filterConsultant!: FormGroup;
  selectedValue = null;
  date = null;
  demoValue = null;
  switchValue = true;
  checked = true;
  visibleCategory = false;


  categories = [
    {
      id: 1,
      img: '../../../../assets/images/icon1.svg',
      text: 'Агроном',
      active: true,
    },
    {
      id: 2,
      img: '../../../../assets/images/icon2.svg',
      text: 'Агрохимик',
      active: false,
    },
    {
      id: 3,
      img: '../../../../assets/images/icon3.svg',
      text: 'Почвовед',
      active: false,
    },
    {
      id: 4,
      img: '../../../../assets/images/icon4.svg',
      text: 'Биолог',
      active: false,
    },
    {
      id: 5,
      img: '../../../../assets/images/icon5.svg',
      text: 'Ветеринар',
      active: false,
    },
    {
      id: 6,
      img: '../../../../assets/images/icon6.svg',
      text: 'Зоотехнолог',
      active: false,
    },
    {
      id: 7,
      img: '../../../../assets/images/icon7.svg',
      text: 'Садовод',
      active: false,
    },
    {
      id: 8,
      img: '../../../../assets/images/icon8.svg',
      text: 'Лесное дело',
      active: false,
    },
    {
      id: 9,
      img: '../../../../assets/images/icon9.svg',
      text: 'Аквакультура',
      active: false,
    },
    {
      id: 10,
      img: '../../../../assets/images/icon10.svg',
      text: 'Землеустройство',
      active: false,
    },
    {
      id: 11,
      img: '../../../../assets/images/icon11.svg',
      text: 'Unknown',
      active: false,
    },
    {
      id: 12,
      img: '../../../../assets/images/icon11.svg',
      text: 'Unknown',
      active: false,
    },
    {
      id: 13,
      img: '../../../../assets/images/icon11.svg',
      text: 'Unknown',
      active: false,
    },
    {
      id: 14,
      img: '../../../../assets/images/icon11.svg',
      text: 'Unknown',
      active: false,
    },
    {
      id: 15,
      img: '../../../../assets/images/icon11.svg',
      text: 'Unknown',
      active: false,
    },
  ]

  consultants = [
    {
      id: 1,
      img: './assets/images/card1.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.9
    },
    {
      id: 2,
      img: './assets/images/card2.jpg',
      name: 'Михайлов Сергей Александрович',
      specialization: 'Окулист',
      price: '85 000',
      rating: 4.8
    },
    {
      id: 3,
      img: './assets/images/card3.jpg',
      name: 'Алишерова Елизавета Шамсидинновна',
      specialization: 'Зоолог',
      price: '105 000',
      rating: 4.9
    },
    {
      id: 4,
      img: './assets/images/card4.jpg',
      name: 'Кудратов Шахзод Аслидинович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.7
    },
    {
      id: 5,
      img: './assets/images/card5.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.4
    },
    {
      id: 6,
      img: './assets/images/card6.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.3
    },
    {
      id: 7,
      img: './assets/images/card7.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.6
    },
    {
      id: 8,
      img: './assets/images/card8.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.9
    },
    {
      id: 9,
      img: './assets/images/card9.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.8
    },
    {
      id: 10,
      img: './assets/images/card10.jpg',
      name: 'Александров Михаил Степанович',
      specialization: 'Терапевт',
      price: '75 000',
      rating: 4.1
    },
  ]
    

  constructor(private fb: FormBuilder) {
    this.filterConsultant = this.fb.group({
      category: [null],
      date: [null],
      minPrice: [null],
      maxPrice: [null]
    })
  }

  ngOnInit() {
    
  }

  submitForm() {
    console.log(this.filterConsultant.value);
  }

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
    console.log(this.selectedValue);
    
    this.selectedValue !== null ? this.visibleCategory = true : this.visibleCategory = false;
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
}
