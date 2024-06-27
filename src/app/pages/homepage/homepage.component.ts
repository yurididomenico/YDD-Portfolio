import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnDestroy {
  cursor = '';

  private intervalCursor!: number;

  constructor() {}

  ngOnInit() {
    this.intervalCursor = setInterval(() => {
    this.cursor = '█';

    setTimeout(() => {
      this.cursor = '';
    }, 800);
    }, 1600) as any;
  }

  ngOnDestroy() {
    clearInterval(this.intervalCursor);
  }
}
