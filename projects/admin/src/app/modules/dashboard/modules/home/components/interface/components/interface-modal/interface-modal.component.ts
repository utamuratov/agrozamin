import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateList } from '../../../../dto/interface/translate-list.interface';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { InterfaceService } from '../../services/interface.service';
import { ProjectList } from '../../../../dto/interface/project-list.interface';
import { map, Observable, takeUntil } from 'rxjs';
import { NgDestroy } from 'ngx-az-core';

export interface Key {
  [key: number]: number
}

@Component({
  selector: 'az-interface-modal',
  templateUrl: './interface-modal.component.html',
  styleUrls: ['./interface-modal.component.less'],
})
export class InterfaceModalComponent implements OnInit {
  @Output() projects = new EventEmitter<Key>();

  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  @Input()
  isVisible!: boolean;

  @Input() editingData?: TranslateList;

  @Input() form!: FormGroup;

  projectList!: Observable<ProjectList[]>;

  pr!: Key;

  selectedProjects: any = [];

  list: TransferItem[] = [];

  constructor(private $data: InterfaceService, private $destroy: NgDestroy) {}

  private getProjects() {
    this.projectList = this.$data.getProjects().pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  private buildTransferList() {
    this.projectList.pipe(takeUntil(this.$destroy)).subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        this.list.push({
          key: res[i].id,
          title: res[i].name,
          direction: 'left',
        });
      }   
      // [2, 3].forEach(idx => (this.list[idx].direction = 'right'));   
    });

    
  }

  ngOnInit(): void {
    this.getProjects();
    this.buildTransferList();
    
  }

  handleOk(): void {
    this.pr = { ...this.selectedProjects };
    console.log(this.projects);
    this.isVisibleChange.emit(false);
    this.projects.emit(this.pr);
  }

  handleCancel(): void {
    this.isVisibleChange.emit(false);
  }

  change(ret: any): void {
    console.log('nzChange', ret);
    if (ret.to === 'right') {
      ret.list.forEach((el: any) => {
        this.selectedProjects.push(el.key);
      });
    }

    if (ret.to === 'left') {
      ret.list.forEach((el: any) => {
        this.selectedProjects = this.selectedProjects.filter(
          (id: number) => id !== el.key
        );
      });
    }
  }
}
