import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {


  constructor() {}

  ngOnInit(): void {

  }

  onActivate($event: any) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
