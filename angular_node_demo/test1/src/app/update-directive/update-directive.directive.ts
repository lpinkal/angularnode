import {Directive, HostListener} from "@angular/core";

@Directive({
  selector:'[appupdate]'
})

export class UpdateDirectiveDirective{

  @HostListener('mouseenter') mouseover(eventData:Event){
   console.log('abc')
  }
}
