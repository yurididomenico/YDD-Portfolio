import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  description =
    'Dopo anni dedicati alla grafica 3d mi sono approcciato al mondo dello sviluppo web, acquisendo successivamente competenze tecniche sia su lato Front-end che Back-end.';
  listLibraries =
    'Ho iniziato il mio percorso imparando i seguenti linguaggi, framework e librerie:';

  ngOnInit() {
    this.printDescription(this.description);
  }

  ngOnDestroy() {}

  printDescription(txt: string) {
    let currentText = '';
    let currentIndex = 0;
    let intervalId: any;
    const printString = document.querySelector('.description');
    intervalId = setInterval(() => {
      if (currentIndex < this.description.length) {
        currentText += this.description.charAt(currentIndex);
        currentIndex++;
        printString!.textContent = currentText;
      } else {
        clearInterval(intervalId);
      }
    }, 40);
  }
}
