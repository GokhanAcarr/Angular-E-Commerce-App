import { Component, computed, inject, input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <span class="text-lg">Total</span>
        <span class="text-2xl font-bold">{{'$' + total() }}</span>
        <app-primary-button [label]="'Checkout'" (buttonClicked)="CartService.checkout()" ></app-primary-button>
      </div>
    </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {
  
  CartService = inject(CartService);
  total = computed(() => {

    let total = 0;
    for (const item of this.CartService.cart()) {
      total += item.price;
    }
    return total;
  })

}
