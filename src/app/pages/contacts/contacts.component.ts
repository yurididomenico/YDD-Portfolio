import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  constructor(private clipboard: Clipboard) {}

  copyTextToClipboard() {
    const valueSpan = document.querySelector('.contatto span') as HTMLElement;
    if (valueSpan) {
      const value = valueSpan.innerText.trim();
      this.clipboard.copy(value);

      // Show
      const popup = document.querySelector('.popup');
      popup!.classList.add('show');

      setTimeout(() => {
        // Hide
        popup!.classList.remove('show');
      }, 800);
    }
  }
}
