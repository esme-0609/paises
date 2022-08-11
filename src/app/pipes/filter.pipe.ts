import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result = [];
    for (const pa of value) {
      if (pa.name.common.toLowerCase().indexOf(arg) > -1) {
        result.push(pa);
      };      
    };
    return result;
  }

}
