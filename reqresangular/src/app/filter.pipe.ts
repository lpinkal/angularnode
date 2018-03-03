import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, text: any): any {
    if(!text){
      return users;
    }
    else{
      let a=text.toLowerCase();
      console.log(users)
      return users.filter((user)=>{
        return user.first_name.toLowerCase().includes(text) || user.last_name.toLowerCase().includes(text);
      })
    }
  }

}
