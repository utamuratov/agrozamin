import { Component, HostListener, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { BaseResponse } from 'ngx-az-core';
import { Observable, tap } from 'rxjs';
import { GridModel } from '../models/grid-model';
import { Project } from '../models/project.interface';
import { TranslationPostRequest } from '../models/translation-post.request';
import { MyTranslation } from '../models/translation.interface';
import { ProjectService } from '../services/project.service';
import { TranslateApiService } from '../services/translate-api.service';

const PAGE_SIZE = 15;
const FIRST_PAGE = 1;

@Component({
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.less'],
})
export class InterfaceComponent implements OnInit {
  /**
   *
   */
  expandSet = new Set<number>();

  /**
   *
   */
  data!: GridModel<MyTranslation>;

  /**
   *
   */
  loading!: boolean;

  /**
   *
   */
  innerHeight = window.innerHeight;

  /**
   *
   */
  isFirstTime = true;

  /**
   *
   */
  disabled = false;

  /**
   *
   */
  projects!: Project[];

  constructor(
    private $translate: TranslateApiService,
    private notification: NzNotificationService,
    private $project: ProjectService
  ) {}

  ngOnInit(): void {
    this.getProjects().subscribe(() => {
      this.initTranslations();
    });
  }

  private initTranslations() {
    this.isFirstTime = true;
    this.getTranslations(FIRST_PAGE, PAGE_SIZE);
  }

  /**
   *
   */
  getTranslations(pageIndex: number, pageSize: number) {
    this.loading = true;
    this.$translate.getTranslations(pageIndex, pageSize).subscribe((w) => {
      this.loading = false;
      if (w.success) {
        this.data = {
          ...w.data,
          data: w.data.data.map((w) => {
            return {
              ...w,
              transferItems: this.getTransferItems(w.projects),
              text: Object.keys(w.text).map((t) => {
                return { key: t, value: w.text[t] };
              }),
            };
          }),
        };
      } else {
        this.notification
          .error('Error', w.error[0].message[0].text)
          .onClick.subscribe(() => {
            console.log('notification clicked!');
          });
      }
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    if (this.isFirstTime) {
      this.isFirstTime = false;
      return;
    }
    const { pageSize, pageIndex } = params;
    this.getTranslations(pageIndex, pageSize);
  }

  addedTranslation(isAdded: boolean) {
    if (isAdded) {
      this.initTranslations();
    }
  }

  getTransferItems(projects: Project[]): TransferItem[] {
    return this.projects.map((project) => {
      return {
        key: project.id,
        title: project.name,
        direction: projects.find((w) => w.id === project.id) ? 'right' : 'left',
      };
    });
  }

  getProjects(): Observable<BaseResponse<Project[]>> {
    return this.$project.getProjects().pipe(
      tap((result) => {
        if (result.success) {
          this.projects = result.data;
        }
      })
    );
  }

  /**
   *
   * @param id
   * @param checked
   */
  onExpandChange(id: number, checked: boolean): void {
    this.expandSet = new Set<number>();
    if (checked) {
      this.expandSet.add(id);
    }
  }

  changedTranslation(value: string, key: string, data: MyTranslation) {
    const request: TranslationPostRequest = {
      key: data.key,
      project: data.projects.map((v) => v.id),
      type: data.type,
      text: {},
    };

    let hasChanged = false;
    data.text.forEach((language) => {
      if (language.key === key) {
        hasChanged = language.value !== value;
        request.text[language.key] = value;
        return;
      }
      request.text[language.key] = language.value;
    });
    console.log(request);

    if (!hasChanged) {
      return;
    }

    this.editTranslation(data.id, request);
  }

  private editTranslation(id: number, request: TranslationPostRequest) {
    this.$translate.editTranslation(id, request).subscribe((w) => {
      console.log(w);
    });
  }

  changedProjects(data: MyTranslation) {
    const request: TranslationPostRequest = {
      key: data.key,
      project: data.transferItems
        .filter((w) => w.direction === 'right')
        .map((w) => w['key']),
      type: data.type,
      text: {},
    };
    data.text.forEach((language) => {
      request.text[language.key] = language.value;
    });

    this.editTranslation(data.id, request);
  }

  changeKey(value: string, data: MyTranslation) {
    if (data.key === value) {
      return;
    }

    const request: TranslationPostRequest = {
      key: value,
      project: data.projects.map((v) => v.id),
      type: data.type,
      text: {},
    };
    data.text.forEach((language) => {
      request.text[language.key] = language.value;
    });
    this.editTranslation(data.id, request);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerHeight = event.target.innerHeight;
  }
}
