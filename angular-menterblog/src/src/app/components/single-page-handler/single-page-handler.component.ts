import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesComponent } from '../articles/articles.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-single-page-handler',
  templateUrl: './single-page-handler.component.html',
  styleUrls: ['./single-page-handler.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SinglePageHandlerComponent implements OnInit {

  article:Article;
  singleArticleCategoryId: string;
  selectedPage: string;
  private categories: Category[];
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    
    this.sub = this.route.params.subscribe(params => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false ;
      this.singleArticleCategoryId = params['singlePageId'];
      this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
        if(params['singlePageId'] === undefined || params['singlePageId'] === '' || params['singlePageId'] === 'home'){
          this.selectedPage = this.getRussianTitleOfCategory('home');
        }
        else this.selectedPage = this.getRussianTitleOfCategory(params['singlePageId']);
      });
    });
    ArticlesComponent.articles.forEach(article => {
      if(article.categoriesId === this.singleArticleCategoryId) {
        this.article = article;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getRussianTitleOfCategory(categoryId: string):string{
    switch(categoryId){
      case 'CopyrightHolder':
        return 'ПРАВООБЛАДАТЕЛЯМ';
      case 'Advertiser':
        return 'РЕКЛАМОДАТЕЛЯМ';
      case 'Contacts':
        return 'КОНТАКТЫ';
      case 'Vacancies':
        return 'ВАКАНСИИ';
    }
    for(let i:number = 0; i < this.categories.length; ++i){
      if(this.categories[i].categoryId === categoryId) {
        return this.categories[i].title;
      }
    }
  }

}
