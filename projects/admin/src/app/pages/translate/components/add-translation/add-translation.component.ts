import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { ProjectService } from '../../services/project.service';
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
  editingData: Translation | null = null;

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
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  transferingProjects: TransferItem[] = [];

  /**
   *
   */
  projects!: Project[];

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
    private $project: ProjectService,
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
    this.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.transferingProjects = this.makeTransferingProjects(this.projects);
    });
  }

  /**
   *
   */
  getProjects(): Observable<Project[]> {
    return this.$project.getProjects().pipe(
      map((result) => {
        if (result.success) {
          return result.data;
        }

        return [];
      })
    );
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
    this.addLanguageControls(this.editingData);
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
            this.added.emit(true);
            this.close();

            this.resetForm();
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
            this.added.emit(true);
            this.close();

            this.resetForm();
          }

          return false;
        })
      )
      .subscribe();
  }

  /**
   *
   */
  private resetForm() {
    this.form.reset();
    this.transferingProjects = this.makeTransferingProjects(this.projects);
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
  }
}
