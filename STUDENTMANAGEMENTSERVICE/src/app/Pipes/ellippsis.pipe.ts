import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellippsis'
})
export class EllippsisPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if(value.length>20){
      return value.substring(0,20) + "......";
    }
    return value;
  }

}
