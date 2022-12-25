import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
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
    this.toastrService.success("Giriş Başarılı","Başarılı")

  }
  handleAuth(form:NgForm){}

}
