import { Component, OnInit, Input } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { Category } from 'src/app/models/category';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category:Category;

  constructor(private categoriesComponent:CategoriesComponent, private sidenav: MatSidenav) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      category: true,
      'isSelected': this.categoriesComponent.isSelected(this.category.categoryId)
    }
    return classes;
  }

  onClick(category){
    if(!this.categoriesComponent.isSelected(category.categoryId)){
      this.categoriesComponent.selectItem(category.categoryId);
      if(this.sidenav.mode === 'push'){
        this.sidenav.toggle();
      }
    }
  }

}
