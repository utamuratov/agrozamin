import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'az-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
  providers: [NzMessageService],
})
export class InfoComponent implements OnInit {
  advSettings!: FormGroup;
  radioValue = '1';
  loading = false;
  avatarUrl!: string;
  priceCheckbox = false;
  radioValueTrade = 'no';
  selectedValue = null;
  radioValue1 = 'A';
  radioValue2 = 'A';


  checkOptionsOne = [
    { label: 'Люк', value: 'Люк', checked: true },
    { label: 'Обвес', value: 'Обвес' },
    { label: 'Лебёдка', value: 'Лебёдка' },
    { label: 'Ветровики', value: 'Ветровики' },
    { label: 'Фаркоп', value: 'Фаркоп' },
  ];



  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  submitForm() {}

  beforeUpload = (
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

  clickBtn(str: string) {
    console.log(str);
  }

  log(value: object[]): void {
    console.log(value);
  }
}
