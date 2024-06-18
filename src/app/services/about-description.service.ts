import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutDescriptionService {

  description: string = "Mi chiamo Yuri e sono un appassionato del mondo della programmazione.\nHo 30 anni, sono fortemente motivato a perseguire questa strada e disponibile ad essere assunto con contratto di tirocinio o stage.\nNon vedo l\'ora di affinare le mie abilità di programmatore e rendere questa passione un vero e proprio lavoro.";
  listLibraries: string = "Dal 2022 ad oggi ho speso il mio tempo imparando i seguenti linguaggi, framework, librerie e sistemi di versionamento:";
  languages: string = "HTML, CSS, JavaScript, PHP, Sass, Bootstrap, Laravel, Vue, Angular, Java, Git.";


  constructor() { }
}
