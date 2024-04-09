import { Injectable } from '@angular/core';
import { Project } from '../pages/projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }

  progetti: Project[] = [
    new Project(
      'Discord',
      '../../assets/video/Discord.mkv',
      'Ho realizzato una replica del sito web di Discord, improntata interamente sul lato frontend. Un progetto che dimostra la mia competenza nello sviluppo web frontend a circa metà percorso in Boolean, e la mia passione per la creazione di esperienze coinvolgenti e funzionali.'
    ),
  ]
}
