import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { LanguageState, markAllAsDirty } from 'ngx-az-core';
import { TranslationType } from 'projects/admin/src/app/core/enums/translation-type.enum';
import { map, Observable } from 'rxjs';
import { AddTranslationRequest } from '../../models/add-translation.request';
import { Project } from '../../models/project.interface';
import { ProjectService } from '../../services/project.service';
import { TranslateApiService } from '../../services/translate-api.service';

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
  languages = this.$store.selectSnapshot(LanguageState.languages);

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
    private $translate: TranslateApiService,
    private $store: Store
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
  ngOnInit(): void {
    this.initForm();
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
      });
    });

    return transferingProjects;
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
