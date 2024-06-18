import { Injectable } from '@angular/core';
import { Experience } from '../pages/experience/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  experiences: Experience[] = [
    new Experience(
      'Sviluppatore Web Frontend Junior - Angular',
      `
        Tirocinio formativo di sei mesi presso Cineca, dove ho avuto la possibilità di imparare e sperimentare il
        framework Angular.
        <br><br>
        Ho testato componenti aziendali e contribuito alla documentazione della libreria aziendale, creando guide e
        tutorial per gli sviluppatori.
        Ho lavorato su un progetto seguendo e risolvendo le task affidatemi, implementando funzioni lato frontend.
        <br><br>
        Mi hanno insegnato ad usare Jira e GitLab per la rendicontazione e salvataggio del lavoro.
        Mi hanno insegnato a lavorare secondo la metodologia Agile.
      `
    ),

    new Experience(
      'Magazziniere Amazon - Picker',
      `
        Periodo lavorativo dove gestivo gli articoli che il cliente ordinava da casa,
        effettuavo il controllo della qualità,
        organizzavo il magazzino in modo ordinato per una sicura e corretta viabilità.
        <br><br>
        Tra una sessione di picking ed un'altra facevo uso del transpallet manuale o automatico per mansioni riguardanti
        lo stoccaggio merci, lo spostamento di pallet e l'organizzazione del magazzino.
      `
    ),

    new Experience(
      'Modellatore 3d - Animatore 3d - Renderista',
      `
        Periodo lavorativo dove mi occupavo di modellare oggetti 3d in base alle richieste del leader.
        <br><br>
        Ho rappresentato attraverso rendering ambienti interni, ambienti esterni riguardanti i vari progetti richiesti.
      `
    ),

    new Experience(
      'Vari lavori',
      `
        Banconista / Aiuto pizzaiolo <br>
        Operatore di giardinaggio <br>
        Volantinaggio <br>
        Traslocatore <br>
        Operaio agricolo <br>
        Fattorino
      `
    ),
  ];

  constructor() { }
}
