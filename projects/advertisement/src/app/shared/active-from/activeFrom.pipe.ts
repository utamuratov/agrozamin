import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Pipe({
  name: 'activeFrom',
  pure: false,
})
export class ActiveFromPipe extends TranslatePipe implements PipeTransform {
  override transform(value: string | Date): string {
    const { days, months, years } = this.getDaysMonthsYears(value);
    const result = this.makeString(days, months, years);
    return super.transform('activeFrom', { value: result });
  }

  /**
   *
   * @param days
   * @param months
   * @param years
   * @returns
   */
  private makeString(days: number, months: number, years: number) {
    let result = '';
    if (days < 30) {
      result = super.transform('days', { value: days });
    } else if (months < 12) {
      result = super.transform('months', { value: months });
    } else {
      if (months % 12 === 0) {
        result = super.transform('years', { value: years });
      } else {
        result =
          super.transform('years', { value: years }) +
          ' ' +
          super.transform('months', { value: months % 12 });
      }
    }
    return result;
  }

  /**
   *
   * @param value
   * @returns
   */
  private getDaysMonthsYears(value: string | Date) {
    const mls = new Date().getTime() - new Date(value).getTime();
    const secunds = mls / 1000;
    const minutes = secunds / 60;
    const hours = minutes / 60;
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    return { days, months, years };
  }
}
