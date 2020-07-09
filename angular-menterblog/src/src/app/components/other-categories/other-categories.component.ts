import { Component, OnInit } from '@angular/core';
import { OtherCategoriesService } from '../../services/other-categories.service';
import { Article } from '../../models/article';
import { OtherCategory } from '../../models/otherCategory';

@Component({
  selector: 'app-other-categories',
  templateUrl: './other-categories.component.html',
  styleUrls: ['./other-categories.component.css']
})
export class OtherCategoriesComponent implements OnInit {
  articles:Article[];
  categories:OtherCategory[];
  constructor(private otherCategoriesService:OtherCategoriesService) { }

  ngOnInit(): void {
    this.otherCategoriesService.getCategories().subscribe(articles => {
        this.articles = articles;
        this.categories = new Array();
        for(let i:number = 0; i < 5; ++i)
        {
          this.categories[i] = new OtherCategory();
          this.categories[i]._id = this.articles[this.articles.length - 1 -i]._id;
          this.categories[i].title = this.articles[this.articles.length - 1 - i].title;
        }
    });
  }

}
