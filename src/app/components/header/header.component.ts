import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow md flex justify-between">
      <span class="text-2xl">Acar Store</span>
      <app-primary-button [label]="Cart()" (btnClicked)="showButtonClicked()"></app-primary-button>
    </div>
  `,
  styles: []
})
export class HeaderComponent {
  Cart = signal('Cart');

  showButtonClicked() {
    console.log('Button clicked!');
  }
}
