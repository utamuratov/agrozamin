import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ForgotPasswordStep } from 'projects/client/src/app/core/enums/forgot-password-step.enum';

export interface ChangePassAndLogin {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordPage {
}
