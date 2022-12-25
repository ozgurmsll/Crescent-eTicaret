import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductRepo } from 'src/fakedb/product';

@Injectable()
export class ProductService {
  productRepository: ProductRepo;

  products:Product[]
    constructor(private http: HttpClient, ) {}







  getProduct() {
  }



}
