import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { AppComponent } from '../../app.component';
import { Article } from '../../models/article';
import { ArticlePreview } from '../../models/articlePreview';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public static articles:Article[];
  public static articlesById:Article[];
  public static selectedArticle:number;
  constructor(private articleService:ArticleService, private appComponent:AppComponent) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(articles => {
      ArticlesComponent.articles = articles;
      if(ArticlesComponent.articles !== undefined) {this.appComponent.articlesLoaded = Promise.resolve(true);}
    });
  }

  public getPreviews(startIndex:number, amount:number):ArticlePreview[]{
    let articlePreviews:ArticlePreview[];
    if(ArticlesComponent.getArticlesAmount() - startIndex >= amount) articlePreviews = new Array(amount);
    else articlePreviews = new Array(ArticlesComponent.getArticlesAmount() - startIndex);
    for(let i:number = 0; i < articlePreviews.length; ++i)
    {
      if(startIndex == ArticlesComponent.articles.length) {break;}
      if(ArticlesComponent.articles[startIndex].categoriesId !== 'podcasts'){
        articlePreviews[i] = new ArticlePreview();
        articlePreviews[i]._id = ArticlesComponent.articles[startIndex]._id;
        articlePreviews[i].title = ArticlesComponent.articles[startIndex].title;
        articlePreviews[i].previewImage = ArticlesComponent.articles[startIndex].previewImage;
        articlePreviews[i].subText = ArticlesComponent.articles[startIndex].subText;
      }
      
      ++startIndex;
    }
    return articlePreviews;
  }

  public getPreviewsById(id:any, startIndex:number, amount:number):ArticlePreview[]
  {
    let articlePreviews:ArticlePreview[];
    ArticlesComponent.articlesById = new Array();
    ArticlesComponent.articlesById = ArticlesComponent.getArticleswithSelectedId(id);
    if(ArticlesComponent.articlesById.length - startIndex >= amount) articlePreviews = new Array(amount);
    else articlePreviews = new Array(ArticlesComponent.articlesById.length - startIndex);
    for(let i:number = 0; i < articlePreviews.length; ++i)
    {
      if(startIndex == ArticlesComponent.articlesById.length) {break;}
      articlePreviews[i] = new ArticlePreview();
      articlePreviews[i]._id = ArticlesComponent.articlesById[startIndex]._id;
      articlePreviews[i].title = ArticlesComponent.articlesById[startIndex].title;
      articlePreviews[i].previewImage = ArticlesComponent.articlesById[startIndex].previewImage;
      articlePreviews[i].subText = ArticlesComponent.articlesById[startIndex].subText;
      ++startIndex;
    }
    return articlePreviews;
  }

  public getPodcastPreviewsById(id:any, startIndex:number, amount:number):ArticlePreview[]
  {
    let podcastPreviews:ArticlePreview[];
    ArticlesComponent.articlesById = new Array();
    ArticlesComponent.articlesById = ArticlesComponent.getArticleswithSelectedId(id);
    if(ArticlesComponent.articlesById.length - startIndex >= amount) podcastPreviews = new Array(amount);
    else podcastPreviews = new Array(ArticlesComponent.articlesById.length - startIndex);
    for(let i:number = 0; i < podcastPreviews.length; ++i)
    {
      if(startIndex == ArticlesComponent.articlesById.length) {break;}
      podcastPreviews[i] = new ArticlePreview();
      podcastPreviews[i]._id = ArticlesComponent.articlesById[startIndex]._id;
      podcastPreviews[i].title = ArticlesComponent.articlesById[startIndex].title;
      podcastPreviews[i].previewImage = ArticlesComponent.articlesById[startIndex].content;
      podcastPreviews[i].subText = ArticlesComponent.articlesById[startIndex].subText;
      ++startIndex;
    }
    return podcastPreviews;
  }

  private static getArticleswithSelectedId(categoryId:string):Article[]{
    let articlesWithSelectedId:Article[] = new Array();
    ArticlesComponent.articles.forEach((element) => {
      if(categoryId == element.categoriesId){
        articlesWithSelectedId.push(element);
      }
    });
    return articlesWithSelectedId;
  }

  public static getArticlesByIdAmount(categoryId:string):number {
    let count:number = 0;
    for(let i:number = 0; i < ArticlesComponent.articles.length; ++i) {
      if(ArticlesComponent.articles[i].categoriesId == categoryId){
        ++count;
      }
    }
    return count;
  }

  public static getSinglePageArticles(): number{
    let count:number = 0;
    for(let i:number = 0; i < ArticlesComponent.articles.length; ++i){
      if(ArticlesComponent.articles[i].previewImage === 'none'){
        ++count;
      }
    }
    return count;
  }

  public static getArticlesAmount():number {
    return ArticlesComponent.articles.length - ArticlesComponent.getArticlesByIdAmount('podcasts') - ArticlesComponent.getSinglePageArticles();
  }

}
