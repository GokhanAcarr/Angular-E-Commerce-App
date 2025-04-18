import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);


  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  constructor() { }
}
