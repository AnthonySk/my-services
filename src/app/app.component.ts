import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products:Product[] = [];

    constructor(private productService: ProductService) {}

    getProducts(): void {
      this.products = this.productService?.getProducts() || [];
    }
}
