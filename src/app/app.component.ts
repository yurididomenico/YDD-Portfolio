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

      const selectContainer = document.getElementsByClassName('container')[0];
      const testDiv = document.createElement('div');

      testDiv.style.position = 'absolute';
      testDiv.style.height = '5px';
      testDiv.style.width = '5px';
      testDiv.style.backgroundColor = '#1daa1b';
      testDiv.style.borderRadius = '5px';
      // testDiv.style.border = '1px dashed #005b00';
      testDiv.style.zIndex = '1000';

      testDiv.style.top = mousePos.y + 10 + 'px';
      testDiv.style.left = mousePos.x + 'px';
      // selectContainer.appendChild(testDiv);

      let idTest = setInterval(() => {
        selectContainer.appendChild(testDiv);
      }, 50);

      setTimeout(() => {
        clearInterval(idTest);
        testDiv.remove();
      }, 300);
    });
  }
}
