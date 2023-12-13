import { Injectable } from '@angular/core';
import { Category } from '../models/categories';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private catagoriesCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;

  constructor(private readonly firestore: AngularFirestore) {
    this.catagoriesCollection =
      this.firestore.collection<Category>('categories');
    this.categories = this.catagoriesCollection.valueChanges({
      idField: 'uid',
    });
  }

  getAllExpenses(): Observable<Category[]> {
    return this.categories;
  }
}
