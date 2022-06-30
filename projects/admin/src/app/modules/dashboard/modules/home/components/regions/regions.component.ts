import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { RegionResponse } from '../../dto/region.response';
import { RegionService } from './services/region.service';

@Component({
  selector: 'az-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.less'],
})
export class RegionsComponent implements OnInit {
  /**
   *
   */
  data$!: Observable<RegionResponse[]>;

  /**
   *
   */
  isVisible = false;

  /**
   *
   */
  editingData?: RegionResponse;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   * @param $data
   * @param fb
   */
  constructor(private $data: RegionService, private fb: FormBuilder) {}

  /**
   *
   */
  private getAll() {
    this.data$ = this.$data.getAll().pipe(
      map((resp) => {
        return resp.data;
      })
    );
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      ru: [null, [Validators.required]],
      uz_cyrl: [null, [Validators.required]],
      uz_latn: [null, [Validators.required]],
    });
  }

  /**
   *
   * @param region
   */
  private setFormControlsValues(region?: RegionResponse) {
    this.form.controls['ru'].setValue(region?.name.ru);
    this.form.controls['uz_cyrl'].setValue(region?.name.uz_cyrl);
    this.form.controls['uz_latn'].setValue(region?.name.uz_latn);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.getAll();
    this.initForm();
  }

  /**
   * @param region
   */
  showModal(region?: RegionResponse): void {
    if (region) {
      this.setFormControlsValues(region);
    }
    this.editingData = region;
    this.isVisible = true;
  }

  /**
   *
   * @param id
   */
  deleteRegion(id: number) {
    this.$data.delete(id).subscribe(() => {
      this.getAll();
    });
  }

  /** */
  afterSuccess(successfully: boolean) {
    if (successfully) {
      this.getAll();
    }
  }
}
