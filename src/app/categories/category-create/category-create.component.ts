import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: "app-category-create",
  templateUrl: "./category-create.component.html",
  styleUrls: ["./category-create.component.css"],
  providers: [CategoryService],
})
export class CategoryCreateComponent implements OnInit {
  toastr: any;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {}

  saveCategory(name: any) {

    this.toastrService.success("Kategori Eklendi","Başarılı")


        this.router.navigate(["/products"]);
    
  }
}
