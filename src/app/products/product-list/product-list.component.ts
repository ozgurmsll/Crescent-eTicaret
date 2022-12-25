import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Category } from 'src/app/categories/category.model';
import { CategoryService } from 'src/app/categories/category.service';
import { ProductRepo } from 'src/fakedb/product';
import { BasketService } from '../baskets/basket.services';
import { BasketModel } from '../baskets/basketmodel';
import { Product } from '../product.model';
import { ProductService } from '../product.services';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productRepository: ProductRepo;

  loading: boolean = false;
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  constructor(private route: ActivatedRoute,
    private basketService:BasketService,private toastrService: ToastrService) {
    this.productRepository = new ProductRepo();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['kategori_ismi']) {
        this.products = this.productRepository.getProductsByCategoryId(
          params['kategori_ismi']
        );
      } else {
        this.products = this.productRepository.getProducts();
      }
    });
  }
  fav(){
    this.toastrService.info("Favorilere Eklendi");
  }
  addBasket(product:Product){
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt((<HTMLInputElement>document.getElementById("quantity-" + product.urunAdi)).value);
    (<HTMLInputElement>document.getElementById("quantity-" + product.urunAdi)).value = "1"

    this.basketService.addBasket(basketModel);
  }
}
