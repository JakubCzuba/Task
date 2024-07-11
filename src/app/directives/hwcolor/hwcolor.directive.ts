import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHwcolor]',
  standalone: true
})
export class HwcolorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(){
    this.hwcolor('green');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.hwcolor("blue");
  }

  @HostListener('dblclick') onDblClick(){
    this.hwcolor('yellow');
  }

  private hwcolor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color)
  }

}
