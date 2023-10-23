import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ydd-portfolio-angular';

  ngOnInit(): void {
    this.getMouseCoords();
  }

  getMouseCoords() {
    const mousePosText = document.getElementById('mouse-pos');

    let mousePos = {
      x: 0,
      y: 0,
    };

    window.addEventListener('mousemove', (event) => {
      mousePos = {
        x: event.clientX,
        y: event.clientY,
      };
      mousePosText!.textContent = `(${mousePos.x}, ${mousePos.y})`;
    });
  }
}
