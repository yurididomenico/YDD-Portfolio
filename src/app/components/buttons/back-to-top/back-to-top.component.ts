import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
  isVisible = false;

  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 30) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  scrollToTop() {
    console.log("x");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
