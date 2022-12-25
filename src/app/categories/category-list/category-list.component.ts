import { Component, OnInit } from "@angular/core";
import { ProductRepo } from "src/fakedb/product";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";


@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category | null;
  products: any;
  productRepository: ProductRepo;
  constructor(private categoryService:CategoryService) {
    this.productRepository = new ProductRepo();
  }


  ngOnInit(): void {

    this.products=this.productRepository.getCategory()
  }
  displayAll=true;
  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
    this.displayAll=false;
    } else {
      this.selectedCategory = null;

      this.displayAll=true;

    }
  }
}
