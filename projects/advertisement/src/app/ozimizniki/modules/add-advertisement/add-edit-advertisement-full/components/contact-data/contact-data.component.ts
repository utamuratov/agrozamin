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
   */
  @Input()
  contact?: { phone: number; full_name: string };

  /**
   *
   * @param fb
   */
  constructor(private fb: FormBuilder) {}

  /**
   *
   */
  ngOnInit(): void {
    this.addOrRemoveContact(this.form.controls['use_agroid_contact'].value);
    this.onValueChangeUseAgroIdContact();
  }

  /**
   *
   */
  private onValueChangeUseAgroIdContact() {
    this.form.controls['use_agroid_contact'].valueChanges.subscribe((v) => {
      this.addOrRemoveContact(v);
    });
  }

  /**
   *
   * @param v
   */
  private addOrRemoveContact(v: boolean) {
    if (!v) {
      this.form.addControl(
        'contact',
        this.fb.group({
          phone: [
            this.contact?.phone ? this.contact.phone % 1000000000 : null,
            Validators.required,
          ],
          full_name: [this.contact?.full_name, Validators.required],
        })
      );
    } else {
      this.form.removeControl('contact');
    }
  }
}
