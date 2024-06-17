import { Component, ElementRef, ViewChild,  Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('linksDropdown') linksDropdown!: ElementRef;
  divHeight = 50;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  showHideDropdown() {
    const linksDropdown = this.elementRef.nativeElement.querySelector('.linksDropdown');
    this.renderer.setStyle(linksDropdown, 'top', this.divHeight + 'px');
    this.renderer.setStyle(linksDropdown, 'right', 5 + 'vw');

    this.linksDropdown.nativeElement.classList.toggle('hidden');
    const test = this.elementRef.nativeElement.querySelector('.overlay');
    test?.classList.remove('hidden');

  }

  hideDrop() {

    this.linksDropdown.nativeElement.classList.add('hidden');
    const test = this.elementRef.nativeElement.querySelector('.overlay');
    test?.classList.add('hidden');
  }
}
