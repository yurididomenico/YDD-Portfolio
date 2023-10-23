import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  test: string = '';

  ngOnInit(): void {
    setInterval((): void => {
      this.test += '.';

      if (this.test.length > 3) {
        this.test = '';
      }
    }, 1000);
  }
}
