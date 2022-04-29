import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'az-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallbackComponent implements OnInit {
  /**
   *
   */
  isVisible = false;

  /**
   *
   */
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [null],
      phone: [null],
    });
  }

  // TODO
  submit() {
    this.form.controls['userName'].setValue('');
    this.form.controls['phone'].setValue('');
  }

  /**
   *
   */
  close() {
    this.isVisible = false;
  }
}
