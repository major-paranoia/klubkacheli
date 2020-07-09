import { Component, OnInit, Input } from '@angular/core';
import { ArticlePreview } from '../../models/articlePreview';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-article-preview-item',
  templateUrl: './article-preview-item.component.html',
  styleUrls: ['./article-preview-item.component.css']
})
export class ArticlePreviewItemComponent implements OnInit {

  @Input() articlePreview: ArticlePreview;

  constructor() { }

  ngOnInit(): void {}

  onClick(id)
  {
    ArticlesComponent.selectedArticle = id;
  }

}
