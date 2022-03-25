import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Select } from '@ngxs/store';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import {
  Language,
  LanguageState,
  markAllAsDirty,
  NgDestroy,
} from 'ngx-az-core';
import { Observable } from 'rxjs';

@Component({
  selector: 'az-base-add-edit',
  templateUrl: './base-add-edit.component.html',
  styleUrls: ['./base-add-edit.component.less'],
})
export class BaseAddEditComponent<TResponse = NzSafeAny, TService = NzSafeAny> {
  /**
   *
   */
  @Input()
  public isVisible!: boolean;

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  private _editingData?: TResponse;
  @Input()
  public set editingData(v: TResponse | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): TResponse | undefined {
    return this._editingData;
  }

  /**
   *
   */
  @Output()
  modified = new EventEmitter();

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   * @param fb
   * @param $accessAction
   */
  constructor(
    private fb: FormBuilder,
    private $destroy: NgDestroy
  ) // private $service: TService
  {}

  /**
   *
   */
  private init() {
    // this.initForm(this.editingData);
  }

  /**
   *
   * @param model
   */
  initForm(model: TResponse) {
    this.form = this.fb.group({});

    Object.keys(model).forEach((key) => {
      this.form.addControl(
        key,
        new FormControl(model[key as keyof typeof model], Validators.required)
      );
    });

    // this.addDescriptionControls(model);
  }

  /**
   *
   * @param model
   */
  // private addDescriptionControls(model?: AccessActionResponse) {
  //   this.language$.pipe(takeUntil(this.$destroy)).subscribe((languages) => {
  //     languages.forEach((language) => {
  //       (this.form.get('description') as FormGroup)?.addControl(
  //         language.code,
  //         new FormControl(
  //           model?.description[language.code],
  //           Validators.required
  //         )
  //       );
  //     });
  //   });
  // }

  /**
   *
   * @returns
   */
  // submit() {
  //   if (this.form.invalid) {
  //     markAllAsDirty(this.form);
  //     return;
  //   }
  //   const request = this.form.getRawValue();
  //   if (this.editingData?.['id' as keyof typeof this.editingData ]) {
  //     this.edit(+this.editingData['id' as keyof typeof this.editingData], request);
  //     return;
  //   }
  //   this.add(request);
  // }

  /**
   *
   */
  // private add(request: AccessAction) {
  //   this.$service
  //     .add(request)
  //     .pipe(
  //       takeUntil(this.$destroy),
  //       tap((result) => {
  //         if (result.success) {
  //           this.modified.emit();
  //           this.close();
  //           this.initForm();
  //         }
  //       })
  //     )
  //     .subscribe();
  // }

  /**
   *
   * @param id
   * @param request
   */
  // private edit(id: number, request: AccessAction) {
  //   this.$accessAction
  //     .edit(id, request)
  //     .pipe(
  //       takeUntil(this.$destroy),
  //       tap((result) => {
  //         if (result.success) {
  //           this.modified.emit();
  //           this.close();
  //           this.initForm();
  //         }
  //       })
  //     )
  //     .subscribe();
  // }

  /**
   *
   */
  close(): void {
    this.isVisibleChange.emit(false);
  }
}
