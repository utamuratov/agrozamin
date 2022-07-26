import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { NgDestroy } from 'ngx-az-core';
import { map, Observable, takeUntil } from 'rxjs';
import { ProjectList } from '../../dto/interface/project-list.interface';
import { TranslateList } from '../../dto/interface/translate-list.interface';
import { Key } from './components/interface-modal/interface-modal.component';
import { InterfaceService } from './services/interface.service';

@Component({
  selector: 'az-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.less'],
})
export class InterfaceComponent implements OnInit {
  /**
   * 
   */
  data$!: Observable<TranslateList[]>;

  /**
   * 
   */
  editingData?: TranslateList;

  /**
   * 
   */
  isVisible = false;

  /**
   * 
   */
  form!: FormGroup;


  /**
   * 
   */
  list: TransferItem[] = [];

  /**
   * 
   */
  projectList!: Observable<ProjectList[]>;

  /**
   * 
   * @param $data 
   * @param fb 
   * @param $destroy 
   */
  constructor(
    private $data: InterfaceService,
    private fb: FormBuilder,
    private $destroy: NgDestroy
  ) {}

  /**
   * 
   */
  private getAll() {
    this.data$ = this.$data.getAll().pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  /**
   * 
   */
  private getProjects() {
    this.projectList = this.$data.getProjects().pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  /**
   * 
   */
  private buildTransferList() {
    this.projectList.pipe(takeUntil(this.$destroy)).subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        const project: TransferItem = {
          key: res[i].id,
          title: res[i].name,
          direction: 'left',
        };

        this.list.push(project);
      }
    });
  }

  /**
   * 
   */
  private initForm() {
    this.form = this.fb.group({
      key: [null, [Validators.required]],
      ru: [null, [Validators.required]],
      uz_cyrl: [null, [Validators.required]],
      uz_latn: [null, [Validators.required]],
    });
  }

  /**
   * 
   * @param translateList 
   */
  private setFormsValues(translateList: TranslateList) {
    this.form.controls['key'].setValue(translateList.key);
    this.form.controls['ru'].setValue(translateList.text.ru);
    this.form.controls['uz_cyrl'].setValue(translateList.text.uz_cyrl);
    this.form.controls['uz_latn'].setValue(translateList.text.uz_latn);
  }

  /**
   * 
   */
  ngOnInit() {
    this.getAll();
    this.initForm();
    this.getProjects();
    this.buildTransferList();
  }

  /**
   * 
   * @param translateList 
   */
  showModal(translateList?: TranslateList) {
    if (translateList) {
      this.setFormsValues(translateList);

      translateList.projects.forEach((value) => {
        const project = this.list.find((w) => w['key'] === value.id);
        if (project) {
          project.direction = 'right';
        }
      });
    }

    this.editingData = translateList;
    this.isVisible = true;
  }

  /**
   * 
   * @param id 
   */
  deleteInterface(id: number) {
    this.$data.delete(id).subscribe(() => {
      this.getAll();
    });
  }

  /**
   * 
   * @param successfully 
   */
  afterSuccess(successfully: boolean) {
    if (successfully) {
      this.getAll();
    }
  }
}
