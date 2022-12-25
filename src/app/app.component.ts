import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './products/product.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  private title = 'Home Page';
  isAdmin:boolean=false;

  constructor(public  _router: Router) {}
  ngOnInit(): void {
  }

 
}
