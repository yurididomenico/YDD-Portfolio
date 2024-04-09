import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnDestroy {

  private mouseMoveListener: (event: MouseEvent) => void;

  constructor() {
    this.mouseMoveListener = this.getMouseCoords.bind(this);
    window.addEventListener('mousemove', this.mouseMoveListener);
  }

  ngOnDestroy() {
    window.removeEventListener('mousemove', this.mouseMoveListener);
  }

  private getMouseCoords(event: MouseEvent) {
    const selectContainer = document.getElementsByClassName('container')[0];
    const mousePos = {
      x: event.clientX,
      y: event.clientY,
    };

    const dot = document.createElement('div');
    dot.style.cssText = `
      position: absolute;
      height: 5px;
      width: 5px;
      background-color: #1daa1b;
      border-radius: 5px;
      top: ${mousePos.y + 10}px;
      left: ${mousePos.x}px;
      opacity: 0.5;
      z-index: 1000;
    `;

    selectContainer.appendChild(dot);

    setTimeout(() => {
      dot.remove();
    }, 300);
  }
}
