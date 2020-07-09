import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesComponent } from '../articles/articles.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  article:Article;
  articleId: string;
  splitedArticleContent: string[];
  safeUrls: SafeUrl[];
  allContents: any[];
  noVideos: boolean;
  private sub: any;
  counter: number;

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false ;
      this.articleId = params['_id'];
    });
    ArticlesComponent.articles.forEach(article => {
      if(article._id === this.articleId) {
        this.article = article;
      }
    });

    if(this.article !== undefined){
      this.allContents = new Array();
      if(this.article.content.includes("iframe")){
        this.splitedArticleContent = this.article.content.split("<iframe");
        this.splitedArticleContent.forEach(element => {
          if(element.includes('https://www.youtube.com/embed/')){
            this.allContents.push(this.getEmbedUrl(element.split('https://www.youtube.com/embed/')[1].split("'")[0].split("\"")[0], 'youtube'));
          }
          else if(element.includes('https://vk.com/video_ext.php')){
            this.allContents.push(this.getEmbedUrl(element.split('https://vk.com/video_ext.php')[1].split("'")[0].split("\"")[0], 'vk'));
          }
          else this.allContents.push(element);
          
          if(element.includes("</iframe>")){
            this.allContents.push(element.split("</iframe>")[1])
          }
        });
      }
      else this.allContents.push(this.article.content);
    }
  }

  increaseCounter(): void{
    this.counter++;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getEmbedUrl(url: string, type: string): SafeUrl{
    let fullUrl: string;
    if (type === 'youtube') fullUrl = "https://www.youtube.com/embed/".concat(url);
    else if(type === 'vk') fullUrl = "https://vk.com/video_ext.php".concat(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }

  checkIfElementIsResourceUrl(element): boolean{
    return element.changingThisBreaksApplicationSecurity !== undefined;
  }

}
