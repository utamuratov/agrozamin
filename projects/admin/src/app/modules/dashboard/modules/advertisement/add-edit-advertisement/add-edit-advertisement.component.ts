import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementEditResponse } from '../dto/advertisement-edit.response';
import { AdvertisementService } from '../services/advertisement.service';

@Component({
  selector: 'az-add-edit-advertisement',
  templateUrl: './add-edit-advertisement.component.html',
  styleUrls: ['./add-edit-advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAdvertisementComponent implements OnInit {
  /**
   *
   */
  id?: number;

  /**
   *
   */
  data!: AdvertisementEditResponse;

  constructor(
    private $advertisement: AdvertisementService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id) this.getById(this.id);
  }

  /**
   *
   * @param id
   */
  getById(id: number) {
    this.$advertisement.getAdvertisementForEditById(id).subscribe((result) => {
      if (result.success) {
        this.data = result.data;

        this.cd.markForCheck();
      }
    });
  }

  /**
   *
   * @param id
   */
  approve(id: number) {
    this.$advertisement.approve(id).subscribe((result) => {
      if (result) {
        this.navigateToList();
      }
    });
  }

  /**
   *
   * @param id
   */
  reject(id: number) {
    this.$advertisement.reject(id).subscribe((result) => {
      if (result) {
        this.navigateToList();
      }
    });
  }

  /**
   *
   */
  private navigateToList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
