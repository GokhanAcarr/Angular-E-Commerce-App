import { Component,input } from '@angular/core';
import { Product } from '../../../models/product.models';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

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
      <app-primary-button [label]="'Add to Cart'" (onClick)="btnClicked()"></app-primary-button>
    </div> 
  </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();
  
  btnClicked() {
    console.log('Button clicked!');
}
}