import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { TransferDirection, TransferItem } from 'ng-zorro-antd/transfer';
import { Constants } from 'ngx-az-core';
import { map, Observable, startWith } from 'rxjs';
import { TranslationPostRequest } from '../../models/translation-post.request';
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
  translationPostRequest!: TranslationPostRequest;

  /**
   *
   */
  isWaitingResponse$!: Observable<boolean>;

  /**
   * !USE STORE
   */
  languages = Constants.LANGUAGES;

  // DATA FOR TRANSFER
  list: TransferItem[] = [];
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private $project: ProjectService,
    private $translate: TranslateApiService
  ) {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.initForm();
    this.getProjects();
  }

  getProjects() {
    this.$project.getProjects().subscribe((result) => {
      if (result.success) {
        result.data.forEach((project) => {
          this.list.push({
            key: project.id,
            title: project.name,
          });
        });
      }
    });
  }

  initForm() {
    this.form = this.fb.group({
      key: [null, Validators.required],
    });
    this.languages.forEach((language) => {
      this.form.addControl(
        language.code,
        new FormControl(null, Validators.required)
      );
    });
  }

  close(): void {
    this.isVisible = false;
  }

  submit() {
    this.translationPostRequest = {
      project: this.list
        .filter((w) => w.direction === 'right')
        .map((w) => w['key']),
      key: this.form.value['key'],
      type: TranslationType.Interface,
      text: {},
    };

    this.languages.forEach((w) => {
      this.translationPostRequest.text[w.code] = this.form.value[w.code];
    });

    this.isWaitingResponse$ = this.$translate
      .addTranslation(this.translationPostRequest)
      .pipe(
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
}
