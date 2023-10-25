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

      const testDiv = document.createElement('div');

      testDiv.style.position = 'absolute';
      testDiv.style.height = '4px';
      testDiv.style.width = '4px';
      testDiv.style.backgroundColor = 'red';
      testDiv.style.zIndex = '1000';

      testDiv.style.top = mousePos.y + 'px';
      testDiv.style.left = mousePos.x + 'px';
      document.getElementsByClassName('container')[0].appendChild(testDiv);

      mousePosText!.textContent = `(${mousePos.x}, ${mousePos.y})`;
    });
  }
}
