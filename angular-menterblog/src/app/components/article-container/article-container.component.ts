import { Component, OnInit } from '@angular/core';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.css']
})
export class ArticleContainerComponent implements OnInit {

  private sub: any;
  categoryTitle: string;
  private categories: Category[];
  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false ;
      if(params['categoryId'] === undefined){
        ArticlePreviewComponent.selectedCategory = 'home';
      }
      else {
        ArticlePreviewComponent.selectedCategory = params['categoryId'];
      }
      this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
        if(ArticlePreviewComponent.selectedCategory === undefined || ArticlePreviewComponent.selectedCategory === '' || ArticlePreviewComponent.selectedCategory === 'home'){
          this.categoryTitle = this.getRussianTitleOfCategory('home');
        }
        else this.categoryTitle = this.getRussianTitleOfCategory(ArticlePreviewComponent.selectedCategory);
      });
    });
  }

  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  

  private getRussianTitleOfCategory(categoryId: string):string{
    for(let i:number = 0; i < this.categories.length; ++i){
      if(this.categories[i].categoryId === categoryId) {
        return this.categories[i].title;
      }
    }
  }

}
