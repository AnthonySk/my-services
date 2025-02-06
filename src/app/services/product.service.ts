import { Product } from '../models/product';

export class ProductService {
    private products: Product[] = [ 
        new Product(1, 'Memory Card', 10),
        new Product(1, 'Pen Drive', 20),
        new Product(1, 'Power Bank', 15),
    ];

    getProducts(): Product[] {
        // connection to server
        return this.products;
    }
}

