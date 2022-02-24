import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, interval, map, Observable, startWith, takeWhile } from 'rxjs';

const WAITING_DELAY = 5;

@Component({
  selector: 'sign-up-success',
  templateUrl: './sign-up-success.component.html',
  styleUrls: ['./sign-up-success.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpSuccessComponent implements OnInit {
  /**
   *
   */
  $seconds!: Observable<number>;

  /**
   *
   */
  constructor(private router: Router, private route: ActivatedRoute) {}

  /**
   *
   */
  ngOnInit() {
    this.startTimer();
  }

  /**
   *
   */
  private startTimer() {
    let seconds = WAITING_DELAY;
    this.$seconds = interval(1000).pipe(
      map(() => {
        seconds -= 1;
        return seconds;
      }),
      startWith(WAITING_DELAY),
      takeWhile((value) => value > 0),
      // finalize(() => this.router.navigate(['../'], { relativeTo: this.route }))
    );
  }
}
