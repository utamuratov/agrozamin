import { Component } from '@angular/core';

export interface SignUpConfirmationConfig {
  nextStep: number;
  login: string;
  byPhoneNumber: boolean;
}

@Component({
  selector: 'recover-types',
  templateUrl: './recover-types.component.html',
  styleUrls: ['./recover-types.component.less'],
})
export class RecoverTypesComponent {
}
