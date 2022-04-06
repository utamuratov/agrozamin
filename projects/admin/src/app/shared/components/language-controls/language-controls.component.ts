import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'az-language-controls',
  templateUrl: './language-controls.component.html',
  styleUrls: ['./language-controls.component.less'],
})
export class LanguageControlsComponent implements OnInit {
  /**
   *
   */
  @Input()
  form!: FormGroup;

  @Input()
  formGroupName!: string;

  @Input()
  rows = 3;

  @Input()
  translations: NzSafeAny;

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  constructor(private $destroy: NgDestroy) {}

  ngOnInit(): void {
    this.addLanguageControls();
  }

  /**
   *
   * @param model
   */
  private addLanguageControls() {
    this.language$.pipe(takeUntil(this.$destroy)).subscribe((languages) => {
      languages.forEach((language) => {
        (this.form.get(this.formGroupName) as FormGroup)?.addControl(
          language.code,
          new FormControl(
            this.translations?.[language.code],
            Validators.required
          )
        );
      });
    });
  }
}
