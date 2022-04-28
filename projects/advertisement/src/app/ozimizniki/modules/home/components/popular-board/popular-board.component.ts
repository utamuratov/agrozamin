import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-popular-board',
  templateUrl: './popular-board.component.html',
  styleUrls: ['./popular-board.component.less']
})
export class PopularBoardComponent implements OnInit {
  defaultCardImg = './assets/images/default-card-img.jpg'
  constructor() { }

  ngOnInit() {
  }

}
