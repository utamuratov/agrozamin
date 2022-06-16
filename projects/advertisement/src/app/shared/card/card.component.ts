import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Advertisement } from '../../ozimizniki/modules/category/dto/advertisement.interface';

@Component({
  selector: 'az-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  /**
   *
   */
  @Input()
  data!: Advertisement;

  @Input() cardStyleTemplate!: boolean;

  activeCard = false;

  defaultImage = './assets/images/def.jpg';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: REMOVE OR USE
  }

  routeClick(id: any) {
    if (this.data.category_id) {
      this.router.navigate([this.data.category_id, id], {
        relativeTo: this.route,
      });
    } else {
      this.router.navigate([id], { relativeTo: this.route });
    }
  }

  addToFavoriteCard() {
    this.activeCard = !this.activeCard;
  }
}
