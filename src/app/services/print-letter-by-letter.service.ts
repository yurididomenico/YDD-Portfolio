import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrintLetterByLetterService {
  descriptions = {
    description:
      // 'Dopo anni dedicati alla grafica 3d mi sono approcciato al mondo dello sviluppo web, acquisendo successivamente competenze tecniche sia su lato Front-end che Back-end.',
      'Mi chiamo Yuri e sono un appassionato del mondo della programmazione.\nHo 30 anni, sono fortemente motivato a perseguire questa strada e disponibile ad essere assunto con contratto di tirocinio o stage.\nNon vedo l\'ora di affinare le mie abilità di programmatore e rendere questa passione un vero e proprio lavoro.',
    listLibraries:
      'Ho iniziato il mio percorso imparando i seguenti linguaggi, framework e librerie:',
    languages:
      'HTML, CSS, JavaScript, PHP, Sass, Bootstrap, Laravel, Vue, Angular, Git.',
  };
  currentText = '';
  currentIndex = 0;

  constructor() {}

  printLetterByLetter(printTo: string, desc: string) {
    const targetPrint = document.getElementsByClassName(printTo)[0];

    if (this.currentIndex < desc.length) {
      this.currentText = desc.charAt(this.currentIndex);

      if (targetPrint != null) {
        targetPrint.innerHTML += this.currentText;
      }

      setTimeout(() => {
        this.currentIndex++;
        this.printLetterByLetter(printTo, desc);
      }, 30);
    }
  }
}
