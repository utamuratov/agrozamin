import { HttpParams } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { BaseResponse, Language, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { TranslationType } from 'projects/admin/src/app/core/enums/translation-type.enum';
import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { Observable, takeUntil, tap } from 'rxjs';
import { AddTranslationRequest } from '../../models/add-translation.request';
import { Project } from '../../models/project.interface';
import { Translation } from '../../models/translation.interface';
import { ProjectService } from '../../services/project.service';
import { TranslateApiService } from '../../services/translate-api.service';

const WIDTH_COLUMN_PROJECTS = '200px';
@Component({
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslationComponent
  extends BaseComponent<Translation, AddTranslationRequest, Translation>
  implements OnInit
{
  /**
   *
   */
  projects: Project[] = [];

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
   */
  TranslationType = TranslationType;

  /**
   *
   */
  model!: Translation;

  /**
   *
   * @param $translate
   * @param notification
   * @param $project
   */
  constructor(
    private route: ActivatedRoute,
    private $translate: TranslateApiService,
    private $project: ProjectService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($translate, $destroy, cd);
    this.searchInputConfig.keys = ['key', 'text'];
    const path = route.snapshot.url[0].path;
    this.translationType =
      TranslationType[path as keyof typeof TranslationType];
    this.params = new HttpParams().append('type', this.translationType);
  }

  /**
   *
   */
  override ngOnInit(): void {
    this.getProjects()
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        super.ngOnInit();
      });
  }

  /**
   *
   */
  override makeColumnsForGrid() {
    this.language$.subscribe((languages) => {
      this.columns = [
        new Column({
          field: 'key',
          sortable: true,
          nzLeft: true,
        }),
        ...languages.map(
          (language) =>
            new Column({
              field: 'text.' + language.code,
              header: language.name,
              nzAlignBody: 'left',
              sortable: true,
            })
        ),
        new Column({
          field: 'projects',
          nzRight: true,
          hasTemplate: true,
        }),
      ];

      this.makeWidthConfig(languages);
    });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  override addEdit(editingData?: Translation) {
    super.addEdit(editingData);
    this.transferingProjects = this.makeTransferingProjects(this.projects);
  }

  /**
   *
   * @param languages
   */
  override makeWidthConfig(languages: Language[]) {
    this.nzWidthConfig = [
      AdminConstants.WIDTH_COLUMN_KEY,
      ...languages.map(() => ''),
      WIDTH_COLUMN_PROJECTS, // * USE AdminConstants.WIDTH_COLUMN_LANGUAGE INSTEAD OF, IF COLUMN IS NOT OK ON THE SMALL SCREENS
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }

  /**
   *
   * @returns
   */
  private getProjects(): Observable<BaseResponse<Project[]>> {
    return this.$project.getProjects().pipe(
      tap((result) => {
        if (result.success) {
          this.projects = result.data;
          this.transferingProjects = this.makeTransferingProjects(
            this.projects
          );
        }
      })
    );
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
}
