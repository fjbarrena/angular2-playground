import { Pipe, PipeTransform } from '@angular/core';

// https://angular.io/docs/ts/latest/api/ Aquí están las Pipes built-in
@Pipe({name: 'timestampToDate'})
export class TimestampToDatePipe implements PipeTransform {
  transform(value: number) : string{
    var date = new Date(value);
    return date.toLocaleDateString();
  }
}
