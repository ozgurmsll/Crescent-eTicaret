import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from './basketmodel';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  baskets: BasketModel[] = [];
  total: number = 0;

  constructor(private toastrService: ToastrService, private router: Router) {}

  addBasket(model: BasketModel) {
    let basketModel: BasketModel[] = this.baskets.filter(
      (p) => p.product == model.product
    );
    if (basketModel.length > 0) {
      model.quantity = basketModel[0].quantity + model.quantity;
      this.changeData(basketModel[0], model.quantity);
    } else {
      this.baskets.push(model);
      this.toastrService.success('Ürün başarıyla sepete eklendi');
      this.calc();
    }
  }
  changeData(basket: BasketModel, quantity: number) {
    let index = this.baskets.indexOf(basket);
    this.baskets[index].quantity = quantity;

    this.calc();
  }

  calc() {
    this.total = 0;
    this.baskets.forEach((element) => {
      this.total = this.total + element.product.urunFiyati * element.quantity;
    });
  }
  deleteProduct(basket: BasketModel) {
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index, 1);
    this.toastrService.warning(
      basket.product.urunAdi + ' ürün sepetinizden başarıyla silindi'
    );
    this.calc();
  }
  payment(total: number) {
    if (this.total == total) {
      this.toastrService.success(
        'Ödeme başarılı. Siparişiniz En Kısa Zamanda Teslim Edilecektir'
      );
    }
    this.calc();
  }
}
