import { Component,inject,input } from '@angular/core';
import { Product } from '../../../models/product.models';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-white p-6 border rounded-xl shadow-md flex flex-col gap-2 relative">
    <div class="mx-auto">
    <img [src]="product().image" alt="Product Image" class="w-[200px] h-[100px] object-contain">
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-md font-bold">{{product().title}}</span>
      <span class="text-md font-bold">{{'₺' + product().price}}</span>
      <app-primary-button [label]="'Add to Cart'" (click)="CartService.addToCart(product())"></app-primary-button>
    </div> 
    <span class="absolute top-2 right-3 text-sm font-bold">
    @if(product().stock) {
      <span class="text-green-500">{{product().stock}} In Stock</span>
    } @else {
      <span class="text-red-500">Out of Stock</span>
    }
  </span>
  </div>
  `,
  styles: ``
})
export class ProductCardComponent {

  CartService = inject(CartService);

  product = input.required<Product>();
}