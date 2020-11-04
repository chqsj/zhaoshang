import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      let dateStr = value.slice(0, 8) + 'T' + value.slice(8);
      return moment(dateStr).format('YYYY-MM-DD hh:mm');
    } else {
      return '-'
    }
  }
}
