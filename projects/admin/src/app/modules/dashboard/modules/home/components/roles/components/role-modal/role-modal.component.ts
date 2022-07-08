import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { finalize, takeUntil } from 'rxjs';
import { DistrictResponse } from '../../../../dto/district.response';
import { DistrictResponseRegion } from '../../../../dto/district.response-region';
import { DistrictService } from '../../../district/services/district.service';

@Component({
  selector: 'az-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.less']
})
export class RoleModalComponent {
/**
   *
   */
 @Input()
 isVisible!: boolean;

 /**
  *
  */
 @Input()
 editingData?: DistrictResponse;

 /**
  *
  */
 @Input()
 districtForm!: FormGroup;

 /**
  *
  */
 @Input()
 list!: DistrictResponseRegion[];

 /**
  *
  */
 @Output()
 isVisibleChange = new EventEmitter<boolean>();

 /**
  *
  */
 @Output()
 isLoading = new EventEmitter<boolean>();

 /**
  *
  */
 isOkLoading = false;

 /**
  *
  * @param $data
  * @param $destroy
  */
 constructor(private $data: DistrictService, private $destroy: NgDestroy) {}

 /**
  *
  */
 private doAfterSuccess() {
   this.isOkLoading = false;
   this.isLoading.emit(true);
   this.close();
 }

 /**
  *
  * @returns
  */
 private buildRequest() {
   return {
     name: {
       ru: this.districtForm.value.ru,
       uz_cyrl: this.districtForm.value.uz_cyrl,
       uz_latn: this.districtForm.value.uz_latn,
     },
     region_id: this.districtForm.value.region_id,
   };
 }

 /**
  *
  */
 close() {
   this.isVisibleChange.emit(false);
   this.districtForm.reset();
   console.log(this.list);
 }

 /**
  *
  */
 addDistrict(): void {
   this.isOkLoading = true;
   const requestBody = this.buildRequest();
   this.$data
     .add(requestBody)
     .pipe(
       takeUntil(this.$destroy),
       finalize(() => {
         this.isOkLoading = false;
       })
     )
     .subscribe(() => {
       this.districtForm.reset();
       this.doAfterSuccess();
     });
 }

 /**
  *
  * @param id
  */
 editDistrict(id: number) {
   this.isOkLoading = true;
   const requestBody = this.buildRequest();
   this.$data
     .update(id, requestBody)
     .pipe(takeUntil(this.$destroy))
     .subscribe(() => {
       this.doAfterSuccess();
     });
 }

 /**
  *
  * @returns
  */
 save() {
   if (this.editingData) {
     this.editDistrict(this.editingData.id);
     return;
   }
   this.addDistrict();
 }
}
