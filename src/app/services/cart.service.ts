import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  cart = signal<Product[]>([]);


  addToCart(product: Product) {
    if (product.stock && product.stock > 0) {
     this.cart.update((prev) => [...prev, product]);
      product.stock--;
    } else {
      console.warn('Stokta ürün kalmamış.');
    }
  }
  
  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((item) => item.id !== id));
  }

  checkout() {
    console.log('Checkout', this.cart());
    this.cart.set([]);
  }

  Cart(): Product[] {
    return this.cartItems;
  }
  constructor() { }
}
