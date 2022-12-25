import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CKEditorModule } from "ckeditor4-angular";
import { CategoriesModule } from "../categories/categories.module";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { ProductTipsComponent } from './product-tips/product-tips.component';
import { BasketsComponent } from "./baskets/baskets.component";
import { PaymentComponent } from './baskets/payment/payment.component';

@NgModule({
  declarations:[
    ProductListComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductTipsComponent,
    BasketsComponent,
    PaymentComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    CKEditorModule,
    CategoriesModule,
  ],
  exports:[    ProductListComponent,
    ProductComponent,
    ProductCreateComponent,BasketsComponent],
})

export class ProductsModule{

}
