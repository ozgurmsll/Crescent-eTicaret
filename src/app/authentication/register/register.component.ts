import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoginMode:boolean=true;
  loading:boolean=false;
  isAdmin:boolean=false;
  isAuthenticated:boolean=false;

  error:string="";
  toastr: any;
  constructor(
    private router:Router,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {

  }
  toogleMode(){
    this.isLoginMode=!this.isLoginMode;


  }
  login(){
    this.loading=true;
    this.toastrService.success("Kayıt Başarılı","Başarılı")
    this.router.navigate(["/home"]);

  }
  handleAuth(form:NgForm){}

}
