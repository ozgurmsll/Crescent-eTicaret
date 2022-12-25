import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products/product.model';
import { ProductService } from 'src/app/products/product.services';
import { ProductRepo } from 'src/fakedb/product';
import { BasketService } from '../baskets/basket.services';
import { BasketModel } from '../baskets/basketmodel';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  products: Product[];

  productRepository: ProductRepo;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient,
    private basketService:BasketService
  ) {
    this.productRepository = new ProductRepo();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['urunID'];
      this.product = this.productRepository.getProductById(id);
    });
  }
  addBasket(product: Product) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt(
      (<HTMLInputElement>document.getElementById('quantity-' + product.urunAdi))
        .value
    );
    (<HTMLInputElement>(
      document.getElementById('quantity-' + product.urunAdi)
    )).value = '1';

    this.basketService.addBasket(basketModel);
  }
}
