import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductRepo } from 'src/fakedb/product';
import { Product } from '../product.model';
@Component({
  selector: 'product-tips',
  templateUrl: './product-tips.component.html',
  styleUrls: ['./product-tips.component.css'],
})
export class ProductTipsComponent {
  productRepository: ProductRepo;
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastrService:ToastrService,
    private http: HttpClient,
  ) {
    this.productRepository = new ProductRepo()
  }
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      if(params['kategori_ismi']){
       this.products = this.productRepository.getProductsByCategoryId(params["kategori_ismi"]);
     }else{
      this.products = this.productRepository.getProducts();



     }});
  }

}
