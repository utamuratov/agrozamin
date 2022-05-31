import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryType } from '../../dto/category-type.interface';

@Component({
  selector: 'az-advertisement-type',
  templateUrl: './advertisement-type.component.html',
  styleUrls: ['./advertisement-type.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementTypeComponent {
  /**
   *
   */
  @Input()
  categoryType$!: Observable<CategoryType[]>;

  /**
   *
   */
  @Input()
  form!: FormGroup;
}
