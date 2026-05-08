import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', description: 'Wydajny laptop', price: 4500, creationDate: new Date('2023-01-10') },
    { id: 2, name: 'Myszka', description: 'Mysz bezprzewodowa', price: 150, creationDate: new Date('2023-02-15') },
    { id: 3, name: 'Klawiatura', description: 'Mechaniczna', price: 300, creationDate: new Date('2023-03-20') },
    { id: 4, name: 'Monitor', description: 'Monitor 27 cali 4K', price: 1200, creationDate: new Date('2023-04-05') },
    { id: 5, name: 'Słuchawki', description: 'Z redukcją szumów', price: 500, creationDate: new Date('2023-05-12') },
    { id: 6, name: 'Dysk SSD', description: 'Dysk 1TB NVMe', price: 400, creationDate: new Date('2023-06-18') },
    { id: 7, name: 'Kamera', description: 'Kamera internetowa HD', price: 250, creationDate: new Date('2023-07-22') },
    { id: 8, name: 'Głośniki', description: 'Zestaw 2.1', price: 350, creationDate: new Date('2023-08-30') },
    { id: 9, name: 'Podkładka', description: 'Duża podkładka pod mysz', price: 50, creationDate: new Date('2023-09-14') },
    { id: 10, name: 'Kabel HDMI', description: 'Kabel w oplocie 2m', price: 30, creationDate: new Date('2023-10-01') }
  ];

  getProducts(page: number): Product[] {
    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    
    return this.products.slice(startIndex, endIndex).map(p => ({ ...p }));
  }

  getAllProducts(): Product[] {
  return this.products.map(p => ({ ...p }));
}

  getProduct(id: number): Product | undefined {
    const product = this.products.find(p => p.id === id);
    return product ? { ...product } : undefined;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
