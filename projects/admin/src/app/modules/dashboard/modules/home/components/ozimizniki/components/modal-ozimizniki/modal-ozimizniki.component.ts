import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { map, Observable } from 'rxjs';
import { Category } from '../../../../dto/category/ozimizniki/interface';

@Component({
  selector: 'az-modal-ozimizniki',
  templateUrl: './modal-ozimizniki.component.html',
  styleUrls: ['./modal-ozimizniki.component.less'],
})
export class ModalOzimiznikiComponent implements OnInit {
  @Input()
  isVisible!: boolean;

  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  @Input()
  editingData?: Category;

  @Input()
  form!: FormGroup;

  listOfOption: string[] = ['Sotibolaman', 'Sotaman'];
  listOfSelectedValue = ['a10', 'c12'];

  value: string[] = [];
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true },
          ],
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }],
        },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onChange($event: string[]): void {
    console.log($event);
  }

  handleCancel() {
    this.isVisibleChange.emit(false);
  }

  handleOk() {}

  previewFile = (file: NzUploadFile): Observable<string> => {
    console.log('Your upload file:', file);
    return this.http
      .post<{ thumbnail: string }>(
        `https://next.json-generator.com/api/json/get/4ytyBoLK8`,
        {
          method: 'POST',
          body: file,
        }
      )
      .pipe(map((res) => res.thumbnail));
  };
}
