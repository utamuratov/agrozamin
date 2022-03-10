import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-legal-person',
  templateUrl: './legal-person.component.html',
  styleUrls: ['./legal-person.component.less'],
})
export class LegalPersonComponent implements OnInit {
  isVisible = false;
  validateForm!: FormGroup;

  companies = [
    {name: 'Рога и копыта, ООО', stir: 369852741, city: 'г.Ташкент'},
    {name: 'Рога и копыта, ООО', stir: 369852741, city: 'г.Ташкент'},
    {name: 'Рога и копыта, ООО', stir: 369852741, city: 'г.Ташкент'},
    {name: 'Рога и копыта, ООО', stir: 369852741, city: 'г.Ташкент'},
  ]

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel($event: boolean): void {
    this.isVisible = $event;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      setTimeout(() => {
        this.isVisible = false;
      }, 1000);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
