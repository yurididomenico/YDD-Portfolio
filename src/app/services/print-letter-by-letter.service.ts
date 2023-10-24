import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrintLetterByLetterService {
  descriptions = {
    description:
      'Dopo anni dedicati alla grafica 3d mi sono approcciato al mondo dello sviluppo web, acquisendo successivamente competenze tecniche sia su lato Front-end che Back-end.',
    listLibraries:
      'Ho iniziato il mio percorso imparando i seguenti linguaggi, framework e librerie:',
  };
  currentText = '';
  currentIndex = 0;

  constructor() {}

  printLetterByLetter(printTo: string, desc: string) {
    if (this.currentIndex < desc.length) {
      this.currentText = desc.charAt(this.currentIndex);

      document.getElementsByClassName(printTo)[0].innerHTML += this.currentText;

      setTimeout(() => {
        this.currentIndex++;
        this.printLetterByLetter(printTo, desc);
      }, 50);
    }
  }
}
