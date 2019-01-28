import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'splitText'
})
export class SplitTextPipe implements PipeTransform {

  transform(value: any) {
    return value.split("<br>")[0];;
  }

}
