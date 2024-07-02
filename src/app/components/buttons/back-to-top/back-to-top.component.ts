import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {
  isVisibile = true;

  scrollToTop() {
    console.log("x");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
