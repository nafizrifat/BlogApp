//Signal-based Resource API using httpResource()
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category-service';

@Component({
  selector: 'app-category-list',
  imports: [RouterLink],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  private categoryService = inject(CategoryService);
  private getAllCategoriesRef = this.categoryService.getAllCategories();
  isLoading = this.getAllCategoriesRef.isLoading;  
  isError = this.getAllCategoriesRef.error;
  value = this.getAllCategoriesRef.value;
}

//Observable approch
// import {
//   ChangeDetectorRef,
//   Component,
//   inject,
//   OnInit
// } from '@angular/core';

// import { RouterLink } from '@angular/router';

// import { CategoryService } from '../services/category-service';
// import { Category } from '../models/category.model';

// @Component({
//   selector: 'app-category-list',
//   imports: [RouterLink],
//   templateUrl: './category-list.html',
//   styleUrl: './category-list.css',
// })
// export class CategoryList implements OnInit {

//   private categoryService = inject(CategoryService);

//   private cdr = inject(ChangeDetectorRef);

//   categories: Category[] = [];

//   isLoading = false;

//   error: unknown = null;

//   ngOnInit(): void {

//     this.isLoading = true;

//     this.categoryService
//       .getAllCategories()
//       .subscribe({

//         next: (categories) => {

//           this.categories = categories;

//           this.isLoading = false;

//           this.cdr.markForCheck();
//         },

//         error: (err) => {

//           this.error = err;

//           this.isLoading = false;

//           this.cdr.markForCheck();
//         }

//       });
//   }
// }