import { Component, OnInit, HostListener } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Category[];
  categoriesSelection:boolean[];
  private static statCategories:Category[];
  
  constructor(private categoryService:CategoryService, private router: Router) { }

  OnRouteChange(): void{
    const currentUrl  = this.router.url;
    const splitedUrl = currentUrl.split('/');
    if(splitedUrl[splitedUrl.length - 2] === 'category' || splitedUrl[splitedUrl.length - 2] === 'info'){
      const categoryId = splitedUrl[splitedUrl.length - 1];
      this.selectItem(categoryId);
    }
    else if(currentUrl === '/') this.selectItem('home');
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
        CategoriesComponent.statCategories = new Array(this.categories.length);
        this.categoriesSelection = new Array(this.categories.length);
        for(let i:number = 0; i < this.categoriesSelection.length; ++i) {
          this.categoriesSelection[i] = false;
          CategoriesComponent.statCategories[i] = new Category();
          CategoriesComponent.statCategories[i].title = this.categories[i].title;
          CategoriesComponent.statCategories[i].categoryId = this.categories[i].categoryId; 
        }
        this.OnRouteChange();

    });
    this.router.events.subscribe((val) => this.OnRouteChange());
  }

  public selectItem(categoryId:string):void
  {
    let position:number = this.getCategoriesPostion(categoryId);
    if(!this.isSelected(categoryId))
    {
      for(let i:number = 0; i < this.categoriesSelection.length; ++i) { this.categoriesSelection[i] = false }
      this.categoriesSelection[position] = true;
    }
  }
  
  public isSelected(categoryId:string):boolean
  {
    return this.categoriesSelection[this.getCategoriesPostion(categoryId)];
  }

  private getCategoriesPostion(categoryId:string):number {
    for(let i:number = 0; i < this.categories.length; ++i){
      if(this.categories[i].categoryId === categoryId) {
        return i;
      }
    }
  }

}
