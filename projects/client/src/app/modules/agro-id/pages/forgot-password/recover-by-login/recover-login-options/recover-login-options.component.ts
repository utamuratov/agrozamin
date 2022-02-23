import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { RecoverByLoginStep } from 'projects/client/src/app/core/enums/recover-by-login-step.enum';

@Component({
  selector: 'recover-login-options',
  templateUrl: './recover-login-options.component.html',
  styleUrls: ['./recover-login-options.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoverLoginOptionsComponent {
  /**
   * 
   */
  @Output()
  changeStep = new EventEmitter<RecoverByLoginStep>();

  /**
   * 
   */
  goToNextStep() {
    this.changeStep.emit(RecoverByLoginStep.Confirmation);
  }
}
