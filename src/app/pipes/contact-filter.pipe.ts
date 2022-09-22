import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../Interfaces/contact';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(
    contacts : Contact[] ,
    propName: keyof Contact,
    value: string): Contact[] {
    let contArr: Contact[] =[] ;
    for (let cont of contacts) {
if((cont[propName] as string)
.toLowerCase()
.includes(value.toLowerCase())
){
  contArr.push(cont);
}
  }
return contArr ;
}

}
