import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  isVisible = true;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.renderCursor();
  }

  renderCursor() {
    const countdown = setInterval(() => {
      this.isVisible = !this.isVisible;
    }, 900);

    setTimeout(() => {
      clearInterval(countdown);
      this.animationCursorToRedirect();
    }, 4000);
  }

  animationCursorToRedirect() {
    const cursore = document.querySelector('.ritorno');
    cursore?.classList.add('animazioneCursoreRedirect');
    setTimeout(() => {
      this.redirectToHome();
    }, 1000);
  }

  redirectToHome() {
      this.router.navigate(['/']);
  }
}

