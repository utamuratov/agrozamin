import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { TranslateList } from '../../dto/interface/translate-list.interface';
import { Key } from './components/interface-modal/interface-modal.component';
import { InterfaceService } from './services/interface.service';

@Component({
  selector: 'az-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.less'],
})
export class InterfaceComponent implements OnInit {
  data$!: Observable<TranslateList[]>;

  editingData?: TranslateList;

  isVisible = false;

  form!: FormGroup;

  projectId!: Key;

  constructor(
    private $data: InterfaceService,
    private fb: FormBuilder
  ) {}

  private getAll() {
    this.data$ = this.$data.getAll().pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  private initForm() {
    this.form = this.fb.group({
      key: [null, [Validators.required]],
      ru: [null, [Validators.required]],
      uz_cyrl: [null, [Validators.required]],
      uz_latn: [null, [Validators.required]],
      projects: [[], [Validators.required]],
    });
  }

  ngOnInit() {
    this.getAll();
    this.initForm();
  }

  showModal(translateList?: TranslateList) {
    if (translateList) {
      console.log(translateList);
    }
    this.editingData = translateList;
    this.isVisible = true;
  }

  deleteInterface(id: number) {
    console.log(id);
  }

  getProjectList(event: Key) {
    console.log(event);    
  }
}
