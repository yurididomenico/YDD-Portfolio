import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'ydd-portfolio-angular';

  ngOnInit(): void {
    // this.getMouseCoords();
  }


  // getMouseCoords() {
  //   const selectContainer = document.getElementsByClassName('container')[0];

  //   window.addEventListener('mousemove', (event) => {
  //     const mousePos = {
  //       x: event.clientX,
  //       y: event.clientY,
  //     };

  //     const dot = document.createElement('div');
  //     dot.style.cssText = `
  //       position: absolute;
  //       height: 5px;
  //       width: 5px;
  //       background-color: #1daa1b;
  //       border-radius: 5px;
  //       top: ${mousePos.y + 10}px;
  //       left: ${mousePos.x}px;
  //       opacity: 0.5;
  //       z-index: 1000;
  //     `;

  //     selectContainer.appendChild(dot);

  //     setTimeout(() => {
  //       dot.remove();
  //     }, 300);
  //   });
  // }
}
