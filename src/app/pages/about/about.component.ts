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

  currentText = '';
  currentIndex = 0;

  ngOnInit() {
    this.typeDescription();
  }

  typeDescription() {
    const printString = document.querySelector('.description');
    if (this.currentIndex < this.description.length) {
      this.currentText += this.description.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => {
        printString!.textContent = this.currentText;
        this.typeDescription();
      }, 40);
    }
  }
}
