import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService, NgDestroy } from 'ngx-az-core';
import { map, Observable, takeUntil } from 'rxjs';
import { DistrictResponse } from '../../dto/district.response';
import { DistrictResponseRegion } from '../../dto/district.response-region';
import { DistrictService } from '../district/services/district.service';

@Component({
  selector: 'az-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.less'],
})
export class RolesComponent implements OnInit {
  baseUrl = 'admin/role'
  /**
   *
   */
   data$!: Observable<DistrictResponse[]>;

   /**
    *
    */
   isVisible = false;
 
   /**
    *
    */
   editingData?: DistrictResponse;
   form!: FormGroup;
 
   /**
    *
    */
   regions!: DistrictResponseRegion[];
 
   /**
    *
    * @param fb
    * @param $data
    * @param $destroy
    */
   constructor(
     private fb: FormBuilder,
     private $data: DistrictService,
     private $destroy: NgDestroy,
     private http: HttpClient,
     private $baseService: BaseService
   ) {}


   getRoles() {
    this.$baseService.get(this.baseUrl).subscribe(res => {
      console.log(res)      
    })
   }
 
   /**
    *
    * @param district
    */
   private setFormControlsValues(district?: DistrictResponse) {
     this.form.controls['ru'].setValue(district?.name.ru);
     this.form.controls['uz_cyrl'].setValue(district?.name.uz_cyrl);
     this.form.controls['uz_latn'].setValue(district?.name.uz_latn);
     this.form.controls['region_id'].setValue(district?.region_id);
   }
 
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
   private getList() {
     this.$data
       .getRegionList()
       .pipe(takeUntil(this.$destroy))
       .subscribe((res) => (this.regions = res.data));
   }
 
   /**
    *
    */
   private initForm() {
     this.form = this.fb.group({
       ru: [null, [Validators.required]],
       uz_cyrl: [null, [Validators.required]],
       uz_latn: [null, [Validators.required]],
       region_id: [null, [Validators.required]],
     });
   }
 
   /**
    *
    */
   ngOnInit(): void {
     this.getAll();
     this.initForm();
     this.getList();
     this.getRoles()
   }
 
   /**
    *
    * @param district
    */
  //  showModal(district?: DistrictResponse): void {
  //    if (district) {
  //      this.setFormControlsValues(district);
  //    }
  //    this.editingData = district;
  //    this.isVisible = true;
  //  }
   showModal(): void {
     this.isVisible = true;
   }
 
   /**
    *
    * @param id
    */
   deleteDistrict(id: number) {
     this.$data.delete(id).subscribe(() => {
       this.getAll();
     });
   }
 
   /**
    *
    * @param successfully
    */
   afterSuccess(successfully: boolean) {
     if (successfully) {
       this.getAll();
     }
   }
}
