import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CategoryCreateComponent } from "./category-create/category-create.component";
import { CategoryListComponent } from "./category-list/category-list.component";



@NgModule({
  declarations:[
    CategoryListComponent,
    CategoryCreateComponent,

  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  exports:[
    CategoryListComponent,
    CategoryCreateComponent,
   ],
})

export class CategoriesModule{

}
