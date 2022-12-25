import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from './basket.services';
import { BasketModel } from './basketmodel';

@Component({
  selector: 'baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {
  baskets: BasketModel[] = [];
  total: number = 0;

  constructor(private toastrService: ToastrService,
    private basketService: BasketService) { }

  ngOnInit(): void {
    this.baskets = this.basketService.baskets;
  }
  ngAfterContentChecked(): void {
    this.total = this.basketService.total
  }
  changeData(basket: BasketModel, quantity:any) {
    this.basketService.changeData(basket, quantity.value);
  }
  deleteProduct(basket: BasketModel) {
    this.basketService.deleteProduct(basket);
  }
  kuponCode(){
    this.toastrService.info("Kupon kodu uygulandı");
    this.total= this.total - (this.total * 0.3);
  }
  buy(){

    this.toastrService.success("Ödeme başarılı. Siparişiniz sevk aşamasına geçti");
    

  }
}


