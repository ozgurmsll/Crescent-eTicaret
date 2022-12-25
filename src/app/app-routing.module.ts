import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { CategoryCreateComponent } from './categories/category-create/category-create.component';
import { HomeComponent } from './shared/home/home.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BasketsComponent } from './products/baskets/baskets.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';


const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'products/create', component: ProductCreateComponent, },
  { path: 'categories/create', component: CategoryCreateComponent,},
  { path: 'products', component: ProductListComponent },
  { path: 'products', loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule) },
  { path: 'products/:urunID', component: ProductComponent },
  { path: 'products/category/:kategori_ismi', component: ProductListComponent },
  { path: 'login', component: AuthComponent },
  { path: 'loading', component: AuthComponent },
  { path: 'baskets', component: BasketsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

