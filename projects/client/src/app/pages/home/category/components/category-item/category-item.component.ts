import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'az-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.less']
})
export class CategoryItemComponent implements OnInit {
  @Input() img!: string | null;
  @Input() title!: string;
  @Input() price!: number | null;
  @Input() unit!: number;
  @Input() company!: string;
  @Input() address!: string;
  @Input() city!: string;
  @Input() text!: string;
  @Input() category!: string;
  @Input() id!: number;

  @Input() cardStyleTemplate!: boolean;
  @Input() isLoading = false;

  @Input() catId!: number

  defaultImage = './assets/images/agrozamin/default-img-card.jpg'
  constructor(private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
  }

  routeClick(id: any) {
    if (this.catId) {
      this.router.navigate([this.catId,id], {relativeTo: this.route})
    } else {
      this.router.navigate([id], {relativeTo: this.route})
    }
    
  }
}
