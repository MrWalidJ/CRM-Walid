

import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../Interfaces/Customer';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    customers : Customer[] ,
    propName: keyof Customer,
    value: string): Customer[] {
    let custArr: Customer[] =[] ;
    for (let cust of customers) {
if((cust[propName] as string)
.toLowerCase()
.includes(value.toLowerCase())
){
  custArr.push(cust);
}
  }
return custArr ;
}
}



