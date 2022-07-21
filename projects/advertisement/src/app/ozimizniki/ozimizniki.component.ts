import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'az-ozimizniki',
  templateUrl: './ozimizniki.component.html',
  styleUrls: ['./ozimizniki.component.less']
})
export class OzimiznikiComponent implements OnInit {
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
