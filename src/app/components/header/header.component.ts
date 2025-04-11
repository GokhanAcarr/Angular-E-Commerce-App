import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow md flex justify-between">
      <button routerLink="/"><span class="text-2xl">Acar Store</span></button>
      <app-primary-button [label]="'Cart(' + CartService.cart().length + ')'" routerLink="/cart"></app-primary-button>
    </div>
  `,
  styles: []
})
export class HeaderComponent {
  cart = signal('Cart');

  CartService = inject(CartService);
}
