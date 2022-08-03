import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { Project } from 'projects/admin/src/app/core/enums/project.enum';
import { takeUntil } from 'rxjs';
import { Category } from '../../dto/category/ozimizniki/interface';
import { OzimiznikiCategoryService } from './services/ozimizniki-category.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'az-ozimizniki',
  templateUrl: './ozimizniki.component.html',
  styleUrls: ['./ozimizniki.component.less'],
})
export class OzimiznikiComponent implements OnInit {
  data$!: Category[];
  editingData?: Category;
  isVisible = false;
  form!: FormGroup
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  constructor(
    private $data: OzimiznikiCategoryService,
    private $destroy: NgDestroy,
    private fb: FormBuilder
  ) {}

  private getCategory() {
    this.$data
      .get(Project.uzimizniki)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        this.data$ = res.data;
      });
  }

  ngOnInit() {
    this.getCategory();
    this.form = this.fb.group({
      parent: [null, [Validators.required]],
      ru: [null, [Validators.required]],
      uz_cyrl: [null, [Validators.required]],
      uz_latn: [null, [Validators.required]],
      filters: [null, [Validators.required]],
      type: [null, [Validators.required]]
    })
  }

  showModal(category?: Category) {
    if (category) {
      console.log(1);      
    }

    this.editingData = category;
    this.isVisible = true;
  }
}
