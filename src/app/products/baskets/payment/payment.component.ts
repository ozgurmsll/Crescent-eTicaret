import { Component, EventEmitter, Output } from '@angular/core';
import { BasketService } from '../basket.services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {


  total:number;
  @Output() myEvent:EventEmitter<any> = new EventEmitter();

  constructor(
    private basketService:BasketService
  ) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.total = this.basketService.total;
  }

  payment(){
    this.basketService.payment(this.total);
  }

}
