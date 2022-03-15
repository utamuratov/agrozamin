import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { Language, LanguageState, markAllAsDirty } from 'ngx-az-core';
import { TranslationType } from 'projects/admin/src/app/core/enums/translation-type.enum';
import { map, Observable } from 'rxjs';
import { AddTranslationRequest } from '../../models/add-translation.request';
import { Project } from '../../models/project.interface';
import { Translation } from '../../models/translation.interface';
import { TranslateApiService } from '../../services/translate-api.service';

@Component({
  selector: 'az-add-translation',
  templateUrl: './add-translation.component.html',
  styleUrls: ['./add-translation.component.less'],
})
export class AddTranslationComponent {
  /**
   *
   */
  public editingData: Translation | null = null;

  /**
   *
   */
  public isVisible: boolean;

  /**
   *
   */
  @Output()
  modified = new EventEmitter();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  transferingProjects: TransferItem[] = [];

  /**
   *
   */
  public projects!: Project[];

  /**
   *
   */
  translationType!: TranslationType;

  /**
   *
   * @param fb
   * @param $project
   * @param $translate
   */
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private $translate: TranslateApiService
  ) {
    this.isVisible = false;
    this.translationType =
      TranslationType[
        route.snapshot.url[0].path as keyof typeof TranslationType
      ];
  }

  /**
   *
   */
  onInit(): void {
    this.initForm(this.editingData);
    this.transferingProjects = this.makeTransferingProjects(this.projects);
  }

  /**
   *
   */
  makeTransferingProjects(projects: Project[]): TransferItem[] {
    const transferingProjects: TransferItem[] = [];
    projects.forEach((project) => {
      transferingProjects.push({
        key: project.id,
        title: project.name,
        direction: this.editingData?.projects.find((w) => w.id === project.id)
          ? 'right'
          : 'left',
      });
    });

    return transferingProjects;
  }

  /**
   *
   */
  private initForm(model: Translation | null) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
    });
    this.addLanguageControls(model);
  }

  /**
   *
   */
  private addLanguageControls(model: Translation | null) {
    this.language$.subscribe((languages) => {
      languages.forEach((language) => {
        this.form.addControl(
          language.code,
          new FormControl(model?.text[language.code], Validators.required)
        );
      });
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
    if (this.editingData?.id) {
      this.editTranslation(this.editingData.id, request);
      return;
    }
    this.addTranslation(request);
  }

  /**
   *
   * @param request
   */
  private addTranslation(request: AddTranslationRequest) {
    this.$translate
      .addTranslation(request)
      .pipe(
        map((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
          }

          return false;
        })
      )
      .subscribe();
  }

  /**
   *
   * @param id
   * @param request
   */
  private editTranslation(id: number, request: AddTranslationRequest) {
    return this.$translate
      .editTranslation(id, request)
      .pipe(
        map((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
          }

          return false;
        })
      )
      .subscribe();
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
      type: this.translationType,
      text: {},
    };

    this.language$.subscribe((languages) =>
      languages.forEach((w) => {
        request.text[w.code] = this.form.value[w.code];
      })
    );

    return request;
  }

  /**
   *
   */
  close(): void {
    this.isVisible = false;
    this.transferingProjects = [];
  }
}
