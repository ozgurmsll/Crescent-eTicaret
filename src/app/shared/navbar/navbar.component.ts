import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated:boolean=false;
  isAdmin:boolean=false;
  loading:boolean=true;
  constructor() { }

  ngOnInit(): void {

  }
  isAdminmodOn(){
    this.isAdmin=true;
  }
  isAdminmodof(){
    this.isAdmin=false;
  }

}
