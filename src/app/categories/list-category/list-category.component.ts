import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Category } from '../../models/categories';

@Component({
  selector: 'app-list-category',
  // standalone: true,
  // imports: [],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.scss'
})
export class ListCategoryComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
  ) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.categoriesService.getAllExpenses().subscribe((categories) => {
      this.categories = categories;
    });
  }
  

}
