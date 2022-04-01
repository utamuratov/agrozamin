import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  selector: 'az-add-edit-translation',
  templateUrl: './add-edit-translation.component.html',
  styleUrls: ['./add-edit-translation.component.less'],
})
export class AddEditTranslationComponent {
  /**
   *
   */
  private _projects: Project[] = [];
  public get projects(): Project[] {
    return this._projects;
  }
  @Input()
  public set projects(v: Project[]) {
    this._projects = v;
    this.transferingProjects = this.makeTransferingProjects(this.projects);
  }

  /**
   *
   */
  private _editingData?: Translation;
  public get editingData(): Translation | undefined {
    return this._editingData;
  }
  @Input()
  public set editingData(v: Translation | undefined) {
    this._editingData = v;
    this.init();
  }

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
  init() {
    this.initForm(this.editingData);
    this.transferingProjects = this.makeTransferingProjects(this.projects);
  }

  /**
   *
   */
  makeTransferingProjects(projects: Project[] | undefined): TransferItem[] {
    const transferingProjects: TransferItem[] = [];
    projects?.forEach((project) => {
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
  private initForm(model?: Translation) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
    });
    this.addLanguageControls(model);
  }

  /**
   *
   */
  private addLanguageControls(model?: Translation) {
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
      .add(request)
      .pipe(
        map((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
            this.init();
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
      .edit(id, request)
      .pipe(
        map((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
            this.init();
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
    this.isVisibleChange.emit(false);
  }
}
