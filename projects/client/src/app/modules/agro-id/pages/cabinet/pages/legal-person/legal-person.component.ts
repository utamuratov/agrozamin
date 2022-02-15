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

  companyName = 'AgroInvest';
  bank = 'Agro Bank';
  stir = '658424';
  mfo = '85213845';
  paymentAccount = '98465489465188'

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      companyName: [this.companyName, [Validators.required]],
      bank: [this.bank, [Validators.required]],
      stir: [this.stir, [Validators.required]],
      mfo: [this.mfo, [Validators.required]],
      paymentAccount: [this.paymentAccount, [Validators.required]]
    })
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  submitForm():void {
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
