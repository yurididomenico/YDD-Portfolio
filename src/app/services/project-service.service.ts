import { Injectable } from '@angular/core';
import { Project } from '../pages/projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }

  progetti: Project[] = [
    new Project(
      'Guess My Number!',
      '../../assets/video/GuessMyNumber.mp4',
      'Volendo provare le basi della manipolazione del DOM, ho creato una webapp che rappresentasse un gioco di indovinelli numerici: con 20 tentativi il giocatore cerca di scoprire il numero segreto, sfruttando la logica e l\'intuito. Perfetto per fare pratica con le nozioni imparate durante il corso su Udemy dell\'insegnante Jonas Schmedtmann.'
    ),

    new Project(
      'Dropbox',
      '../../assets/video/DropBox.mkv',
      'Durante il mio percorso in Boolean mi sono imbattuto in una milestone frontend: la replica del sito web di Dropbox. Questo progetto mette in mostra le mie competenze nella creazione di interfacce web funzionali e user-friendly. Esplora le funzionalità principali di Dropbox reimplementate in modo fedele, dimostrando la mia capacità di sviluppare esperienze digitali soddisfacenti per gli utenti.'
    ),

    new Project(
      'Discord',
      '../../assets/video/Discord.mkv',
      'Ho realizzato una replica del sito web di Discord, improntata interamente sul lato frontend. Un progetto che dimostra la mia competenza nello sviluppo web frontend a circa metà percorso in Boolean, e la mia passione per la creazione di esperienze coinvolgenti e funzionali.'
    ),

    // new Project(
    //   'Dropbox',
    //   '../../assets/video/DropBox.mkv',
    //   'Guarda la mia replica del sito web di Dropbox, sviluppata completamente sul lato frontend. Questo progetto mette in mostra le mie competenze nella creazione di interfacce web funzionali e user-friendly. Esplora le funzionalità principali di Dropbox reimplementate in modo fedele, dimostrando la mia capacità di sviluppare esperienze digitali soddisfacenti per gli utenti.'
    // ),
  ]
}
