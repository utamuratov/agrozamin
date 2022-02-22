import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ForgotPasswordStep } from 'projects/client/src/app/core/enums/forgot-password-step.enum';

export interface SignUpConfirmationConfig {
  nextStep: number;
  login: string;
  byPhoneNumber: boolean;
}

@Component({
  selector: 'forgot-buttons',
  templateUrl: './forgot-buttons.component.html',
  styleUrls: ['./forgot-buttons.component.less'],
})
export class ForgotButtonsComponent {
  @Output() changeStep = new EventEmitter<ForgotPasswordStep>();

  @Input()
  data!: SignUpConfirmationConfig;

  forgotPasswordStep = ForgotPasswordStep;

  goToNextStep(): void {
    this.changeStep.emit(ForgotPasswordStep.Login);
  }

  changeWithLogin(): void {
    this.goToNextStep();
  }
}
