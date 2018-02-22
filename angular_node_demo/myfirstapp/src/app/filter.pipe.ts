import { Pipe, PipeTransform } from '@angular/core';
import {reject} from "q";

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {


  transform(value: any, filterstr:string): any {
        if(value.length===0||filterstr===''){
          return value;
        }
    const result=[];
          if(value===filterstr){
            result.push(value);
          }
          console.log(value+' '+filterstr)
        console.log(result);
    return result;
  }

}
