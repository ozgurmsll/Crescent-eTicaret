import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { RegisterComponent } from './register/register.component';






@NgModule({

  declarations:[
    AuthComponent,
    RegisterComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
  
  ],
  exports:[   ],
})

export class AuthenticationModule{

}
