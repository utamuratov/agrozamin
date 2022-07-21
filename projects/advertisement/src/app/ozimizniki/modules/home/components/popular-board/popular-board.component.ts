import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Advertisement } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { map, Observable } from 'rxjs';
import { AdvertisementPopularService } from '../../../advertisement/services/advertisement-popular.service';

@Component({
  selector: 'az-popular-board',
  templateUrl: './popular-board.component.html',
  styleUrls: ['./popular-board.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularBoardComponent implements OnInit {
  /**
   *
   */
  advertisement$!: Observable<Advertisement[]>;

  /**
   *
   * @param $advertisement
   */
  constructor(private $advertisement: AdvertisementPopularService) {}

  /**
   *
   */
  private getPopularAdvertisements() {
    const query = AdvertisementConstants.DEFAULT_GRID_QUERY;
    query.pageSize = 10;
    this.advertisement$ = this.$advertisement
      .getGridData(query)
      .pipe(map((result) => result.data.data));
  }

  /**
   *
   */
  ngOnInit() {
    this.getPopularAdvertisements();
  }
}
