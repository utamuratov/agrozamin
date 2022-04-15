import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { NgDestroy } from 'ngx-az-core';
import { TranslationType } from 'projects/admin/src/app/core/enums/translation-type.enum';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { AddTranslationRequest } from '../../models/add-translation.request';
import { Project } from '../../models/project.interface';
import { Translation } from '../../models/translation.interface';
import { TranslateApiService } from '../../services/translate-api.service';

@Component({
  selector: 'az-add-edit-translation',
  templateUrl: './add-edit-translation.component.html',
  styleUrls: ['./add-edit-translation.component.less'],
})
export class AddEditTranslationComponent extends BaseAddEditComponent<
  Translation,
  AddTranslationRequest
> {
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
    protected override fb: FormBuilder,
    protected override $data: TranslateApiService,
    protected override $destroy: NgDestroy
  ) {
    super(fb, $data, $destroy);
    this.isVisible = false;
    this.translationType =
      TranslationType[
        route.snapshot.url[0].path as keyof typeof TranslationType
      ];
  }

  /**
   *
   */
  override init() {
    super.init();
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
  override initForm(model?: Translation) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
      text: this.fb.group({}),
    });
  }

  /**
   *
   */
  override getRequest(): AddTranslationRequest {
    const request: AddTranslationRequest = {
      project: this.transferingProjects
        .filter((w) => w.direction === 'right')
        .map((w) => w['key']),
      key: this.form.value['key'],
      type: this.translationType,
      text: this.form.value['text'],
    };
    return request;
  }

  protected override doAfterSuccess(): void {
    super.doAfterSuccess();
    this.transferingProjects = this.makeTransferingProjects(this.projects);
  }
}
