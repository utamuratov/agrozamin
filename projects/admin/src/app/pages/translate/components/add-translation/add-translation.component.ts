import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { Constants, markAllAsDirty } from 'ngx-az-core';
import { map, Observable, startWith } from 'rxjs';
import { AddTranslationRequest } from '../../models/add-translation.request';
import { ProjectService } from '../../services/project.service';
import { TranslateApiService } from '../../services/translate-api.service';

enum TranslationType {
  Interface = 1,
}
@Component({
  selector: 'az-add-translation',
  templateUrl: './add-translation.component.html',
  styleUrls: ['./add-translation.component.less'],
})
export class AddTranslationComponent implements OnInit {
  /**
   *
   */
  isVisible: boolean;

  /**
   *
   */
  @Output()
  added = new EventEmitter<boolean>();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  isWaitingResponse$!: Observable<boolean>;

  /**
   * !USE STORE
   */
  languages = Constants.LANGUAGES;

  /**
   *
   */
  transferingProjects: TransferItem[] = [];

  /**
   *
   * @param fb
   * @param $project
   * @param $translate
   */
  constructor(
    private fb: FormBuilder,
    private $project: ProjectService,
    private $translate: TranslateApiService
  ) {
    this.isVisible = false;
  }

  /**
   *
   */
  ngOnInit(): void {
    this.initForm();
    this.getProjects();
  }

  /**
   *
   */
  getProjects() {
    this.$project.getProjects().subscribe((result) => {
      if (result.success) {
        result.data.forEach((project) => {
          this.transferingProjects.push({
            key: project.id,
            title: project.name,
          });
        });
      }
    });
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      key: [null, Validators.required],
    });
    this.addLanguageControls();
  }

  /**
   *
   */
  private addLanguageControls() {
    this.languages.forEach((language) => {
      this.form.addControl(
        language.code,
        new FormControl(null, Validators.required)
      );
    });
  }

  /**
   *
   */
  submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }
    const request = this.getTranslationRequest();
    this.addTranslation(request);
  }

  /**
   *
   * @param request
   */
  private addTranslation(request: AddTranslationRequest) {
    this.isWaitingResponse$ = this.$translate.addTranslation(request).pipe(
      map((result) => {
        if (result.success) {
          this.added.emit(true);
          this.close();
        }

        return false;
      }),
      startWith(true)
    );
  }

  /**
   *
   */
  private getTranslationRequest(): AddTranslationRequest {
    const request: AddTranslationRequest = {
      project: this.transferingProjects
        .filter((w) => w.direction === 'right')
        .map((w) => w['key']),
      key: this.form.value['key'],
      type: TranslationType.Interface,
      text: {},
    };

    this.languages.forEach((w) => {
      request.text[w.code] = this.form.value[w.code];
    });

    return request;
  }

  /**
   *
   */
  close(): void {
    this.isVisible = false;
  }
}
