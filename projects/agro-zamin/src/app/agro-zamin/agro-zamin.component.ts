import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'az-agro-zamin',
  templateUrl: './agro-zamin.component.html',
  styleUrls: ['./agro-zamin.component.less'],
})
export class AgroZaminComponent implements OnInit {
  isVisible = false;
  callbackForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.callbackForm = this.fb.group({
      userName: [null],
      phone: [null],
    });
  }

  notify(): void {
    console.log('notify');
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {}

  submit() {
    console.log(this.callbackForm.value);
    this.callbackForm.controls['userName'].setValue('')
    this.callbackForm.controls['phone'].setValue('')
  }
}
