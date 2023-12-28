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
      testDiv.style.height = '4px';
      testDiv.style.width = '4px';
      testDiv.style.backgroundColor = '#1daa1b';
      testDiv.style.borderRadius = '50%';
      testDiv.style.zIndex = '1000';

      testDiv.style.top = mousePos.y + 10 + 'px';
      testDiv.style.left = mousePos.x + 10 + 'px';
      // selectContainer.appendChild(testDiv);

      let idTest = setInterval(() => {
        console.log('running');
        selectContainer.appendChild(testDiv);
      }, 20);

      setTimeout(() => {
        console.log('finish');

        clearInterval(idTest);
        testDiv.remove();
      }, 200);
    });
  }
}
