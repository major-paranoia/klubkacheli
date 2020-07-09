import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import {PageEvent, MatPaginatorIntl} from '@angular/material/paginator';
import { ArticlePreview } from '../../models/articlePreview';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  articlePreviews: ArticlePreview[];
  index: number = 0;
  articlesAmount: number;
  static selectedCategory: string;
  pageEvent: PageEvent;

  constructor(private articlesComponent:ArticlesComponent, private matPaginatorIntl: MatPaginatorIntl, private router: Router) { }

  ngOnInit(): void { 
    this.matPaginatorIntl.itemsPerPageLabel = 'Статей на странице:';
    this.matPaginatorIntl.firstPageLabel = 'Первая страница';
    this.matPaginatorIntl.previousPageLabel = 'Предыдущая';
    this.matPaginatorIntl.nextPageLabel = 'Следующая';
    this.matPaginatorIntl.lastPageLabel = 'Последняя страница';
    this.matPaginatorIntl.getRangeLabel = this.getRussianRangeLabel;
    if(ArticlePreviewComponent.selectedCategory !== undefined && ArticlePreviewComponent.selectedCategory !== '' && ArticlePreviewComponent.selectedCategory !== 'home'){
      this.articlesAmount = ArticlesComponent.getArticlesByIdAmount(ArticlePreviewComponent.selectedCategory);
      if(ArticlePreviewComponent.selectedCategory === 'podcasts'){
        this.articlePreviews = this.articlesComponent.getPodcastPreviewsById(ArticlePreviewComponent.selectedCategory, this.index, 15);
      }
      else {
        
        this.articlePreviews = this.articlesComponent.getPreviewsById(ArticlePreviewComponent.selectedCategory, this.index, 15);
      }
    }
    else{
      this.articlesAmount = ArticlesComponent.getArticlesAmount();
      this.articlePreviews = this.articlesComponent.getPreviews(this.index, 15);
    }
  }

  OnPageChange(event: PageEvent){
    const startPoint: number = event.pageIndex * event.pageSize;
    try{
      if(ArticlePreviewComponent.selectedCategory !== undefined && ArticlePreviewComponent.selectedCategory !== '' && ArticlePreviewComponent.selectedCategory !== 'home'){
        if(ArticlePreviewComponent.selectedCategory === 'podcasts'){
          this.articlePreviews = this.articlesComponent.getPodcastPreviewsById(ArticlePreviewComponent.selectedCategory, startPoint, 15);
        }
        else {
          this.articlePreviews = this.articlesComponent.getPreviewsById(ArticlePreviewComponent.selectedCategory, startPoint, 15);
        }
      }
      else{
        this.articlePreviews = this.articlesComponent.getPreviews(startPoint, 15);
      }
    }
    catch(err) {}
    window.scrollTo(0, 0);
    return event;
  }

  private getRussianRangeLabel(page: number, pageSize: number, length: number): string{
    if (length == 0 || pageSize == 0){ 
      return `0 из ${length}`; 
    } 
    length = Math.max(length, 0); 
    const startIndex = page * pageSize; 
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; 
    return `${startIndex + 1} – ${endIndex} из ${length}`; 
  }

  getSelectedCategory(): string{
    return ArticlePreviewComponent.selectedCategory;
  }

}