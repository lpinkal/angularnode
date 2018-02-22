import {Directive, ElementRef, HostBinding, HostListener, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appFindlanet]'
})
export class FindlanetDirective {
  ans='12';
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
  constructor(private elRef:ElementRef) { }
@HostListener('mouseenter') mouseover(eventdata:Event){
    this.ans=this.elRef.nativeElement.innerHTML;
    let x=this.ans.includes('lanetteam');
    console.log(this.ans+' '+x);
    if(x){
      this.backgroundColor='green';
    }else {
      this.backgroundColor='red';
    }
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor='transparent';
  }
}
