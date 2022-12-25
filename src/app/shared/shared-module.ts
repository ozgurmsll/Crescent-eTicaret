import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthenticationModule } from "../authentication/authentication.module";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";








@NgModule({
  declarations:[
    NavbarComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports:[
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[  NavbarComponent,
    HomeComponent,FooterComponent, ],

})

export class SharedModule{

}
