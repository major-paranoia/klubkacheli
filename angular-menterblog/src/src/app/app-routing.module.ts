import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { SinglePageHandlerComponent } from './components/single-page-handler/single-page-handler.component';

const routes: Routes = [

  { path: '', component: ArticleContainerComponent },
  { path: 'article/:_id', component: ArticleItemComponent },
  { path: 'category/:categoryId', component: ArticleContainerComponent },
  { path: 'info/:singlePageId', component: SinglePageHandlerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
