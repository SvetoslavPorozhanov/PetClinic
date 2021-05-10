import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  transform(value: string): unknown {
    // const locale = 'en';
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerMonth * 365;

    const valueDate = new Date(value);
    const current = new Date();
    const left = +valueDate - +current;

    const rtf = new Intl.RelativeTimeFormat(this.locale, { numeric: 'auto' });

    if (left < msPerMinute && left > -msPerMinute) {
      return rtf.format(Math.floor(left / 1000), 'seconds');
    }
    if (left < msPerHour && left > -msPerHour) {
      return rtf.format(Math.floor(left / msPerMinute), 'minutes');
    }
    if (left < msPerDay && left > -msPerDay) {
      return rtf.format(Math.floor(left / msPerHour), 'hours');
    }
    if (left < msPerMonth && left > -msPerMonth) {
      return rtf.format(Math.floor(left / msPerDay), 'days');
    }
    if (left < msPerYear && left > -msPerYear) {
      return rtf.format(Math.floor(left / msPerMonth), 'months');
    }
    return rtf.format(Math.floor(left / msPerYear), 'years');
  }

}
