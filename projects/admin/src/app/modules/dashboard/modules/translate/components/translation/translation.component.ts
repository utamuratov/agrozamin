import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    protected destroy$: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($translate, destroy$, cd);
    const path = route.snapshot.url[0].path;
    this.translationType =
      TranslationType[path as keyof typeof TranslationType];
    this.searchInputConfig.keys = ['key', 'text'];
  }

  /**
   *
   */
  override ngOnInit(): void {
    this.getProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        super.ngOnInit();
      });
  }

  /**
   *
   */
  override loadData() {
    this.$translate
      .getTranslations(this.translationType)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig = {
            ...this.searchInputConfig,
            data: result.data,
          };
          this.makeColumnsForGrid();
          this.cd.markForCheck();
        }
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
   * @param languages
   */
  private makeWidthConfig(languages: Language[]) {
    this.nzWidthConfig = [
      AdminConstants.WIDTH_COLUMN_KEY,
      ...languages.map(() => ''),
      WIDTH_COLUMN_PROJECTS,
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }

  /**
   *
   */
  modifiedTranslation() {
    this.loadData();
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
        }
      })
    );
  }
}
