import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{


  @Input() DefaultColor:string='transparent';
  @Input('appBetterHighlight') HighLightColor:string='green';
  @HostBinding('style.backgroundColor') backgroundColor:string=this.DefaultColor;

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.backgroundColor=this.DefaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor=this.HighLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor=this.DefaultColor;
  }
}
