import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './pages/product-list/product-list.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,ProductListComponent],
  template: `
  <app-header>
  </app-header>
  <app-product-list></app-product-list>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {

}
