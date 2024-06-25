import { Injectable } from '@angular/core';
import { Project } from '../pages/projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }

  progetti: Project[] = [
    new Project(
      'Salsa Tracker',
      '../../assets/video/SalsaTracker.mp4',
      'La Salsa Cubana è una delle mie più grandi passioni. Esistono nella salsa cubana più di 500 figure e per poterle memorizzare sto realizzando  un  programma di  archiviazione  che ho chiamato Salsa Tracker. È una webapp mobile in fase di sviluppo che darà al ballerino di salsa la possibilità di salvare le figure che impara. Per realizzare questa applicazione web ho utilizzato il framework Angular e i linguaggi HTML, CSS (SCSS) e JavaScript. Ho utilizzato Git come sistema di controllo delle versioni.'
    ),

    new Project(
      'Yu Gi Oh Dex',
      '../../assets/video/YuGiOhDexFinal.mp4',
      'Yu-Gi-Oh! Qui puoi tuffarti nel mondo delle carte con un progetto interattivo che ho creato usando HTML, CSS e Javascript. Esplora le carte come mai prima, con dettagli come il nome, il tipo, l\'effetto e le statistiche di gioco. Il design è fresco e facile da usare, mostrando la mia passione per la creatività e la tecnologia. Dai un\'occhiata e divertiti a scoprire il mondo di Yu-Gi-Oh! attraverso il mio lavoro!'
    ),

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
