import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SouthBarComponent } from './components/south-bar/south-bar.component';
import { SocialMediaLinkComponent } from './components/social-media-link/social-media-link.component';
import { SocialMediaLinkItemComponent } from './components/social-media-link-item/social-media-link-item.component';
import { OtherCategoriesComponent } from './components/other-categories/other-categories.component';
import { OtherCategoriesItemComponent } from './components/other-categories-item/other-categories-item.component';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { ArticlePreviewItemComponent } from './components/article-preview-item/article-preview-item.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ContactsContainerComponent } from './components/contacts-container/contacts-container.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { StyleSwitchItemComponent } from './components/style-switch-item/style-switch-item.component';
import { OtherCategoriesContainerComponent } from './components/other-categories-container/other-categories-container.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ArticlesTableComponent } from './articles-table/articles-table.component';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { PodcastPreviewItemComponent } from './components/podcast-preview-item/podcast-preview-item.component';
import { SinglePageHandlerComponent } from './components/single-page-handler/single-page-handler.component';
import { ArticlePreview } from './models/articlePreview';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CategoriesComponent,
    CategoryItemComponent,
    HeaderComponent,
    ContainerComponent,
    ArticlePreviewComponent,
    ContactsComponent,
    SouthBarComponent,
    SocialMediaLinkComponent,
    SocialMediaLinkItemComponent,
    OtherCategoriesComponent,
    OtherCategoriesItemComponent,
    CategoryContainerComponent,
    ArticlePreviewItemComponent,
    ArticleItemComponent,
    ContactsContainerComponent,
    ArticleContainerComponent,
    StyleSwitchItemComponent,
    OtherCategoriesContainerComponent,
    MainNavComponent,
    ArticlesTableComponent,
    PodcastPreviewItemComponent,
    SinglePageHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [ArticlesComponent, ArticlePreviewComponent, MatSidenav],
  bootstrap: [AppComponent]
})
export class AppModule { }
