import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'az-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDataComponent implements OnInit {
  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   * @param fb
   */
  constructor(private fb: FormBuilder) {}

  /**
   *
   */
  ngOnInit(): void {
    this.addRemoveContactControl();
  }

  /**
   *
   */
  private addRemoveContactControl() {
    this.form.controls['use_agroid_contact'].valueChanges.subscribe((v) => {
      if (!v) {
        this.form.addControl(
          'contact',
          this.fb.group({
            phone: [null, Validators.required],
            full_name: [null, Validators.required],
          })
        );
      } else {
        this.form.removeControl('contact');
      }
    });
  }
}
