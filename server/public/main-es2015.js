(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/article-container/article-container.component */ "./src/app/components/article-container/article-container.component.ts");
/* harmony import */ var _components_article_item_article_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/article-item/article-item.component */ "./src/app/components/article-item/article-item.component.ts");
/* harmony import */ var _components_single_page_handler_single_page_handler_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/single-page-handler/single-page-handler.component */ "./src/app/components/single-page-handler/single-page-handler.component.ts");







const routes = [
    { path: '', component: _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_2__["ArticleContainerComponent"] },
    { path: 'article/:_id', component: _components_article_item_article_item_component__WEBPACK_IMPORTED_MODULE_3__["ArticleItemComponent"] },
    { path: 'category/:categoryId', component: _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_2__["ArticleContainerComponent"] },
    { path: 'info/:singlePageId', component: _components_single_page_handler_single_page_handler_component__WEBPACK_IMPORTED_MODULE_4__["SinglePageHandlerComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-main-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-south-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contacts-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'angular-menterblog';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articlesLoaded);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/category-item/category-item.component */ "./src/app/components/category-item/category-item.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/article-preview/article-preview.component */ "./src/app/components/article-preview/article-preview.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_south_bar_south_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/south-bar/south-bar.component */ "./src/app/components/south-bar/south-bar.component.ts");
/* harmony import */ var _components_social_media_link_social_media_link_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/social-media-link/social-media-link.component */ "./src/app/components/social-media-link/social-media-link.component.ts");
/* harmony import */ var _components_social_media_link_item_social_media_link_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/social-media-link-item/social-media-link-item.component */ "./src/app/components/social-media-link-item/social-media-link-item.component.ts");
/* harmony import */ var _components_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/other-categories/other-categories.component */ "./src/app/components/other-categories/other-categories.component.ts");
/* harmony import */ var _components_other_categories_item_other_categories_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/other-categories-item/other-categories-item.component */ "./src/app/components/other-categories-item/other-categories-item.component.ts");
/* harmony import */ var _components_category_container_category_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/category-container/category-container.component */ "./src/app/components/category-container/category-container.component.ts");
/* harmony import */ var _components_article_preview_item_article_preview_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/article-preview-item/article-preview-item.component */ "./src/app/components/article-preview-item/article-preview-item.component.ts");
/* harmony import */ var _components_article_item_article_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/article-item/article-item.component */ "./src/app/components/article-item/article-item.component.ts");
/* harmony import */ var _components_contacts_container_contacts_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/contacts-container/contacts-container.component */ "./src/app/components/contacts-container/contacts-container.component.ts");
/* harmony import */ var _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/article-container/article-container.component */ "./src/app/components/article-container/article-container.component.ts");
/* harmony import */ var _components_style_switch_item_style_switch_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/style-switch-item/style-switch-item.component */ "./src/app/components/style-switch-item/style-switch-item.component.ts");
/* harmony import */ var _components_other_categories_container_other_categories_container_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/other-categories-container/other-categories-container.component */ "./src/app/components/other-categories-container/other-categories-container.component.ts");
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/articles/articles.component */ "./src/app/components/articles/articles.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _articles_table_articles_table_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./articles-table/articles-table.component */ "./src/app/articles-table/articles-table.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _components_podcast_preview_item_podcast_preview_item_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/podcast-preview-item/podcast-preview-item.component */ "./src/app/components/podcast-preview-item/podcast-preview-item.component.ts");
/* harmony import */ var _components_single_page_handler_single_page_handler_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/single-page-handler/single-page-handler.component */ "./src/app/components/single-page-handler/single-page-handler.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");




















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__["ArticlesComponent"], _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePreviewComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_26__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__["ArticlesComponent"],
        _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
        _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_6__["CategoryItemComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"],
        _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePreviewComponent"],
        _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"],
        _components_south_bar_south_bar_component__WEBPACK_IMPORTED_MODULE_11__["SouthBarComponent"],
        _components_social_media_link_social_media_link_component__WEBPACK_IMPORTED_MODULE_12__["SocialMediaLinkComponent"],
        _components_social_media_link_item_social_media_link_item_component__WEBPACK_IMPORTED_MODULE_13__["SocialMediaLinkItemComponent"],
        _components_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_14__["OtherCategoriesComponent"],
        _components_other_categories_item_other_categories_item_component__WEBPACK_IMPORTED_MODULE_15__["OtherCategoriesItemComponent"],
        _components_category_container_category_container_component__WEBPACK_IMPORTED_MODULE_16__["CategoryContainerComponent"],
        _components_article_preview_item_article_preview_item_component__WEBPACK_IMPORTED_MODULE_17__["ArticlePreviewItemComponent"],
        _components_article_item_article_item_component__WEBPACK_IMPORTED_MODULE_18__["ArticleItemComponent"],
        _components_contacts_container_contacts_container_component__WEBPACK_IMPORTED_MODULE_19__["ContactsContainerComponent"],
        _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_20__["ArticleContainerComponent"],
        _components_style_switch_item_style_switch_item_component__WEBPACK_IMPORTED_MODULE_21__["StyleSwitchItemComponent"],
        _components_other_categories_container_other_categories_container_component__WEBPACK_IMPORTED_MODULE_22__["OtherCategoriesContainerComponent"],
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_25__["MainNavComponent"],
        _articles_table_articles_table_component__WEBPACK_IMPORTED_MODULE_33__["ArticlesTableComponent"],
        _components_podcast_preview_item_podcast_preview_item_component__WEBPACK_IMPORTED_MODULE_36__["PodcastPreviewItemComponent"],
        _components_single_page_handler_single_page_handler_component__WEBPACK_IMPORTED_MODULE_37__["SinglePageHandlerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_26__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__["ArticlesComponent"],
                    _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
                    _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_6__["CategoryItemComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"],
                    _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePreviewComponent"],
                    _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"],
                    _components_south_bar_south_bar_component__WEBPACK_IMPORTED_MODULE_11__["SouthBarComponent"],
                    _components_social_media_link_social_media_link_component__WEBPACK_IMPORTED_MODULE_12__["SocialMediaLinkComponent"],
                    _components_social_media_link_item_social_media_link_item_component__WEBPACK_IMPORTED_MODULE_13__["SocialMediaLinkItemComponent"],
                    _components_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_14__["OtherCategoriesComponent"],
                    _components_other_categories_item_other_categories_item_component__WEBPACK_IMPORTED_MODULE_15__["OtherCategoriesItemComponent"],
                    _components_category_container_category_container_component__WEBPACK_IMPORTED_MODULE_16__["CategoryContainerComponent"],
                    _components_article_preview_item_article_preview_item_component__WEBPACK_IMPORTED_MODULE_17__["ArticlePreviewItemComponent"],
                    _components_article_item_article_item_component__WEBPACK_IMPORTED_MODULE_18__["ArticleItemComponent"],
                    _components_contacts_container_contacts_container_component__WEBPACK_IMPORTED_MODULE_19__["ContactsContainerComponent"],
                    _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_20__["ArticleContainerComponent"],
                    _components_style_switch_item_style_switch_item_component__WEBPACK_IMPORTED_MODULE_21__["StyleSwitchItemComponent"],
                    _components_other_categories_container_other_categories_container_component__WEBPACK_IMPORTED_MODULE_22__["OtherCategoriesContainerComponent"],
                    _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_25__["MainNavComponent"],
                    _articles_table_articles_table_component__WEBPACK_IMPORTED_MODULE_33__["ArticlesTableComponent"],
                    _components_podcast_preview_item_podcast_preview_item_component__WEBPACK_IMPORTED_MODULE_36__["PodcastPreviewItemComponent"],
                    _components_single_page_handler_single_page_handler_component__WEBPACK_IMPORTED_MODULE_37__["SinglePageHandlerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_26__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"]
                ],
                providers: [_components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__["ArticlesComponent"], _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePreviewComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__["ArticlesComponent"],
    _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
    _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_6__["CategoryItemComponent"],
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
    _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"],
    _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePreviewComponent"],
    _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"],
    _components_south_bar_south_bar_component__WEBPACK_IMPORTED_MODULE_11__["SouthBarComponent"],
    _components_social_media_link_social_media_link_component__WEBPACK_IMPORTED_MODULE_12__["SocialMediaLinkComponent"],
    _components_social_media_link_item_social_media_link_item_component__WEBPACK_IMPORTED_MODULE_13__["SocialMediaLinkItemComponent"],
    _components_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_14__["OtherCategoriesComponent"],
    _components_other_categories_item_other_categories_item_component__WEBPACK_IMPORTED_MODULE_15__["OtherCategoriesItemComponent"],
    _components_category_container_category_container_component__WEBPACK_IMPORTED_MODULE_16__["CategoryContainerComponent"],
    _components_article_preview_item_article_preview_item_component__WEBPACK_IMPORTED_MODULE_17__["ArticlePreviewItemComponent"],
    _components_article_item_article_item_component__WEBPACK_IMPORTED_MODULE_18__["ArticleItemComponent"],
    _components_contacts_container_contacts_container_component__WEBPACK_IMPORTED_MODULE_19__["ContactsContainerComponent"],
    _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_20__["ArticleContainerComponent"],
    _components_style_switch_item_style_switch_item_component__WEBPACK_IMPORTED_MODULE_21__["StyleSwitchItemComponent"],
    _components_other_categories_container_other_categories_container_component__WEBPACK_IMPORTED_MODULE_22__["OtherCategoriesContainerComponent"],
    _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_25__["MainNavComponent"],
    _articles_table_articles_table_component__WEBPACK_IMPORTED_MODULE_33__["ArticlesTableComponent"],
    _components_podcast_preview_item_podcast_preview_item_component__WEBPACK_IMPORTED_MODULE_36__["PodcastPreviewItemComponent"],
    _components_single_page_handler_single_page_handler_component__WEBPACK_IMPORTED_MODULE_37__["SinglePageHandlerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["ɵangular_packages_router_router_l"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarRow"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["Dir"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatAnchor"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_42__["MatDivider"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTextColumn"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortHeader"]], [_angular_common__WEBPACK_IMPORTED_MODULE_38__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"], [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__["ArticlesComponent"],
    _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
    _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_6__["CategoryItemComponent"],
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
    _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"],
    _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePreviewComponent"],
    _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"],
    _components_south_bar_south_bar_component__WEBPACK_IMPORTED_MODULE_11__["SouthBarComponent"],
    _components_social_media_link_social_media_link_component__WEBPACK_IMPORTED_MODULE_12__["SocialMediaLinkComponent"],
    _components_social_media_link_item_social_media_link_item_component__WEBPACK_IMPORTED_MODULE_13__["SocialMediaLinkItemComponent"],
    _components_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_14__["OtherCategoriesComponent"],
    _components_other_categories_item_other_categories_item_component__WEBPACK_IMPORTED_MODULE_15__["OtherCategoriesItemComponent"],
    _components_category_container_category_container_component__WEBPACK_IMPORTED_MODULE_16__["CategoryContainerComponent"],
    _components_article_preview_item_article_preview_item_component__WEBPACK_IMPORTED_MODULE_17__["ArticlePreviewItemComponent"],
    _components_article_item_article_item_component__WEBPACK_IMPORTED_MODULE_18__["ArticleItemComponent"],
    _components_contacts_container_contacts_container_component__WEBPACK_IMPORTED_MODULE_19__["ContactsContainerComponent"],
    _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_20__["ArticleContainerComponent"],
    _components_style_switch_item_style_switch_item_component__WEBPACK_IMPORTED_MODULE_21__["StyleSwitchItemComponent"],
    _components_other_categories_container_other_categories_container_component__WEBPACK_IMPORTED_MODULE_22__["OtherCategoriesContainerComponent"],
    _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_25__["MainNavComponent"],
    _articles_table_articles_table_component__WEBPACK_IMPORTED_MODULE_33__["ArticlesTableComponent"],
    _components_podcast_preview_item_podcast_preview_item_component__WEBPACK_IMPORTED_MODULE_36__["PodcastPreviewItemComponent"],
    _components_single_page_handler_single_page_handler_component__WEBPACK_IMPORTED_MODULE_37__["SinglePageHandlerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["ɵangular_packages_router_router_l"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarRow"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["Dir"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatAnchor"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_42__["MatDivider"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTextColumn"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortHeader"]], [_angular_common__WEBPACK_IMPORTED_MODULE_38__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_14__["OtherCategoriesComponent"], [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__["ArticlesComponent"],
    _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
    _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_6__["CategoryItemComponent"],
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
    _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"],
    _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePreviewComponent"],
    _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"],
    _components_south_bar_south_bar_component__WEBPACK_IMPORTED_MODULE_11__["SouthBarComponent"],
    _components_social_media_link_social_media_link_component__WEBPACK_IMPORTED_MODULE_12__["SocialMediaLinkComponent"],
    _components_social_media_link_item_social_media_link_item_component__WEBPACK_IMPORTED_MODULE_13__["SocialMediaLinkItemComponent"],
    _components_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_14__["OtherCategoriesComponent"],
    _components_other_categories_item_other_categories_item_component__WEBPACK_IMPORTED_MODULE_15__["OtherCategoriesItemComponent"],
    _components_category_container_category_container_component__WEBPACK_IMPORTED_MODULE_16__["CategoryContainerComponent"],
    _components_article_preview_item_article_preview_item_component__WEBPACK_IMPORTED_MODULE_17__["ArticlePreviewItemComponent"],
    _components_article_item_article_item_component__WEBPACK_IMPORTED_MODULE_18__["ArticleItemComponent"],
    _components_contacts_container_contacts_container_component__WEBPACK_IMPORTED_MODULE_19__["ContactsContainerComponent"],
    _components_article_container_article_container_component__WEBPACK_IMPORTED_MODULE_20__["ArticleContainerComponent"],
    _components_style_switch_item_style_switch_item_component__WEBPACK_IMPORTED_MODULE_21__["StyleSwitchItemComponent"],
    _components_other_categories_container_other_categories_container_component__WEBPACK_IMPORTED_MODULE_22__["OtherCategoriesContainerComponent"],
    _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_25__["MainNavComponent"],
    _articles_table_articles_table_component__WEBPACK_IMPORTED_MODULE_33__["ArticlesTableComponent"],
    _components_podcast_preview_item_podcast_preview_item_component__WEBPACK_IMPORTED_MODULE_36__["PodcastPreviewItemComponent"],
    _components_single_page_handler_single_page_handler_component__WEBPACK_IMPORTED_MODULE_37__["SinglePageHandlerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["ɵangular_packages_router_router_l"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarRow"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["Dir"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatAnchor"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_42__["MatDivider"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTextColumn"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortHeader"]], [_angular_common__WEBPACK_IMPORTED_MODULE_38__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/articles-table/articles-table-datasource.ts":
/*!*************************************************************!*\
  !*** ./src/app/articles-table/articles-table-datasource.ts ***!
  \*************************************************************/
/*! exports provided: ArticlesTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesTableDataSource", function() { return ArticlesTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the ArticlesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class ArticlesTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor() {
        super();
        this.data = EXAMPLE_DATA;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/articles-table/articles-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/articles-table/articles-table.component.ts ***!
  \************************************************************/
/*! exports provided: ArticlesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesTableComponent", function() { return ArticlesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _articles_table_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles-table-datasource */ "./src/app/articles-table/articles-table-datasource.ts");









function ArticlesTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArticlesTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r36.id);
} }
function ArticlesTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArticlesTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r37.name);
} }
function ArticlesTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function ArticlesTableComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const _c0 = function () { return [25, 50, 100, 250]; };
class ArticlesTableComponent {
    constructor() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    ngOnInit() {
        this.dataSource = new _articles_table_datasource__WEBPACK_IMPORTED_MODULE_4__["ArticlesTableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
ArticlesTableComponent.ɵfac = function ArticlesTableComponent_Factory(t) { return new (t || ArticlesTableComponent)(); };
ArticlesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlesTableComponent, selectors: [["app-articles-table"]], viewQuery: function ArticlesTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 12, vars: 7, consts: [[1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", "aria-label", "Elements", 1, "full-width-table"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ArticlesTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticlesTableComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticlesTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticlesTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ArticlesTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ArticlesTableComponent_tr_8_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ArticlesTableComponent_tr_9_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 50)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMtdGFibGUvYXJ0aWNsZXMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzLXRhYmxlL2FydGljbGVzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlesTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-articles-table',
                templateUrl: './articles-table.component.html',
                styleUrls: ['./articles-table.component.css']
            }]
    }], null, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]]
        }] }); })();


/***/ }),

/***/ "./src/app/components/article-container/article-container.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/article-container/article-container.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArticleContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContainerComponent", function() { return ArticleContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-preview/article-preview.component */ "./src/app/components/article-preview/article-preview.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");






class ArticleContainerComponent {
    constructor(route, router, categoryService) {
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            if (params['categoryId'] === undefined) {
                _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_1__["ArticlePreviewComponent"].selectedCategory = 'home';
            }
            else {
                _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_1__["ArticlePreviewComponent"].selectedCategory = params['categoryId'];
            }
            this.categoryService.getCategories().subscribe(categories => {
                this.categories = categories;
                if (_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_1__["ArticlePreviewComponent"].selectedCategory === undefined || _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_1__["ArticlePreviewComponent"].selectedCategory === '' || _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_1__["ArticlePreviewComponent"].selectedCategory === 'home') {
                    this.categoryTitle = this.getRussianTitleOfCategory('home');
                }
                else
                    this.categoryTitle = this.getRussianTitleOfCategory(_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_1__["ArticlePreviewComponent"].selectedCategory);
            });
        });
    }
    ngDoCheck() {
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getRussianTitleOfCategory(categoryId) {
        for (let i = 0; i < this.categories.length; ++i) {
            if (this.categories[i].categoryId === categoryId) {
                return this.categories[i].title;
            }
        }
    }
}
ArticleContainerComponent.ɵfac = function ArticleContainerComponent_Factory(t) { return new (t || ArticleContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"])); };
ArticleContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleContainerComponent, selectors: [["app-article-container"]], decls: 6, vars: 1, consts: [["id", "heading"], ["id", "previews"]], template: function ArticleContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-article-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.categoryTitle);
    } }, directives: [_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_1__["ArticlePreviewComponent"]], styles: ["#previews[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    width: 95%;\r\n    margin: auto;\r\n}\r\n\r\n#heading[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n    padding: 30px 0px;\r\n}\r\n\r\n#heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: 650;\r\n    font-size: 28px;\r\n    margin-bottom: 5px;\r\n    color: rgb(43, 43, 43);\r\n}\r\n\r\n#heading[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n}\r\n\r\nmat-paginator[_ngcontent-%COMP%]{\r\n    background-color: #303030;\r\n}\r\n\r\n@media (max-width: 955px) {\r\n    #heading[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n      width: 50%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLWNvbnRhaW5lci9hcnRpY2xlLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7TUFDRSxVQUFVO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1jb250YWluZXIvYXJ0aWNsZS1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcmV2aWV3c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jaGVhZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG59XHJcblxyXG4jaGVhZGluZyBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XHJcbn1cclxuXHJcbiNoZWFkaW5nIGhye1xyXG4gICAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxubWF0LXBhZ2luYXRvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xyXG4gICAgI2hlYWRpbmcgaHIge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-container',
                templateUrl: './article-container.component.html',
                styleUrls: ['./article-container.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/article-item/article-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/article-item/article-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleItemComponent", function() { return ArticleItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../articles/articles.component */ "./src/app/components/articles/articles.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ArticleItemComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", element_r10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ArticleItemComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", element_r10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function ArticleItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleItemComponent_div_4_div_1_Template, 1, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleItemComponent_div_4_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.checkIfElementIsResourceUrl(element_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.checkIfElementIsResourceUrl(element_r10));
} }
class ArticleItemComponent {
    constructor(route, router, sanitizer) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.articleId = params['_id'];
        });
        _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesComponent"].articles.forEach(article => {
            if (article._id === this.articleId) {
                this.article = article;
            }
        });
        if (this.article !== undefined) {
            this.allContents = new Array();
            if (this.article.content.includes("iframe")) {
                this.splitedArticleContent = this.article.content.split("<iframe");
                this.splitedArticleContent.forEach(element => {
                    if (element.includes('https://www.youtube.com/embed/')) {
                        this.allContents.push(this.getEmbedUrl(element.split('https://www.youtube.com/embed/')[1].split("'")[0].split("\"")[0], 'youtube'));
                    }
                    else if (element.includes('https://vk.com/video_ext.php')) {
                        this.allContents.push(this.getEmbedUrl(element.split('https://vk.com/video_ext.php')[1].split("'")[0].split("\"")[0], 'vk'));
                    }
                    else
                        this.allContents.push(element);
                    if (element.includes("</iframe>")) {
                        this.allContents.push(element.split("</iframe>")[1]);
                    }
                });
            }
            else
                this.allContents.push(this.article.content);
        }
    }
    increaseCounter() {
        this.counter++;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getEmbedUrl(url, type) {
        let fullUrl;
        if (type === 'youtube')
            fullUrl = "https://www.youtube.com/embed/".concat(url);
        else if (type === 'vk')
            fullUrl = "https://vk.com/video_ext.php".concat(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
    }
    checkIfElementIsResourceUrl(element) {
        return element.changingThisBreaksApplicationSecurity !== undefined;
    }
}
ArticleItemComponent.ɵfac = function ArticleItemComponent_Factory(t) { return new (t || ArticleItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
ArticleItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleItemComponent, selectors: [["app-article-item"]], decls: 5, vars: 3, consts: [["width", "100%", 3, "src"], ["id", "header"], [4, "ngFor", "ngForOf"], [3, "innerHTML", 4, "ngIf"], ["class", "videoContainer", 4, "ngIf"], [3, "innerHTML"], [1, "videoContainer"], ["width", "100%", "height", "600", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "videoItem", 3, "src"]], template: function ArticleItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleItemComponent_div_4_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.article.fullImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allContents);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face{\r\n    font-family: lato;\r\n    src: url(\"/assets/fonts/latoLight.ttf\");\r\n}\r\n\r\np{\r\n    font-family: \"lato\", sans-serif;\r\n    color: rgb(235, 235, 235);\r\n    color:#000000;\r\n    font-size: 18px;\r\n    padding: 75px;\r\n    padding-top: 15px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n#header{\r\n    font-family: Georgia, \"lato\", sans-serif;\r\n    text-align: center;\r\n    color: #fff;\r\n    color: black;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    margin-top: 30px;\r\n}\r\n\r\n.videoItem{\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.videoContainer{\r\n    position: relative;\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n    padding-bottom: 56.25%;\r\n    padding-top: 25px;\r\n    height: 0px;\r\n}\r\n\r\na{\r\n    color: rgb(4, 138, 49);\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover{\r\n    text-decoration: underline;\r\n    color: rgb(0, 228, 76);\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    p{\r\n        padding: 15px;\r\n        padding-top: 15px;\r\n        padding-bottom: 20px;\r\n    }\r\n    .videoContainer{\r\n        margin-left: 15px;\r\n        margin-right: 15px;\r\n    }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    p{\r\n        font-size: 16px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLWl0ZW0vYXJ0aWNsZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUtaXRlbS9hcnRpY2xlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2V7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9sYXRvTGlnaHQudHRmXCIpO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6IFwibGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA3NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI2hlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcImxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi52aWRlb0l0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi52aWRlb0NvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogcmdiKDQsIDEzOCwgNDkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMjI4LCA3Nik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgcHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnZpZGVvQ29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufSJdfQ== */"], encapsulation: 3 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-item',
                templateUrl: './article-item.component.html',
                styleUrls: ['./article-item.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/article-preview-item/article-preview-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/article-preview-item/article-preview-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ArticlePreviewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewItemComponent", function() { return ArticlePreviewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../articles/articles.component */ "./src/app/components/articles/articles.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a1) { return ["/article/", a1]; };
class ArticlePreviewItemComponent {
    constructor() {
    }
    ngOnInit() { }
    onClick(id) {
        _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesComponent"].selectedArticle = id;
    }
}
ArticlePreviewItemComponent.ɵfac = function ArticlePreviewItemComponent_Factory(t) { return new (t || ArticlePreviewItemComponent)(); };
ArticlePreviewItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlePreviewItemComponent, selectors: [["app-article-preview-item"]], inputs: { articlePreview: "articlePreview" }, decls: 7, vars: 6, consts: [["id", "articlePreviewItem", 3, "routerLink", "click"], ["id", "imgContainer"], [3, "src"]], template: function ArticlePreviewItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticlePreviewItemComponent_Template_button_click_0_listener($event) { return ctx.onClick(ctx.articlePreview._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.articlePreview._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.articlePreview.previewImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.articlePreview.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.articlePreview.subText);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@font-face{\r\n    font-family: lato;\r\n    src: url(\"/assets/fonts/latoLight.ttf\");\r\n}\r\n\r\n#articlePreviewItem[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    font-family: \"lato\", sans-serif;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    padding-top: 10px;\r\n    padding-bottom: 50px;\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n    text-align: left;\r\n    margin-bottom: 10px;\r\n    margin-top: 5px;\r\n    word-wrap: break-word;\r\n    background-color: white;\r\n    border: none;\r\n    -webkit-transition-property: background-color;\r\n    transition-property: background-color;\r\n    -webkit-transition-duration: 400ms;\r\n            transition-duration: 400ms;\r\n}\r\n\r\n#imgContainer[_ngcontent-%COMP%]{\r\n    display: block;\r\n    align-self: center;\r\n    background-color: white;\r\n    padding: 0;\r\n    height: 160px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 400ms;\r\n            transition-duration: 400ms;\r\n}\r\n\r\n#articlePreviewItem[_ngcontent-%COMP%]:hover   #imgContainer[_ngcontent-%COMP%]{\r\n    background-color: #000;\r\n}\r\n\r\n#articlePreviewItem[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    opacity: 0.8;\r\n}\r\n\r\n#articlePreviewItem[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(204, 204, 204);\r\n    cursor: pointer;\r\n}\r\n\r\n#articlePreviewItem[_ngcontent-%COMP%]::-moz-focus-inner{\r\n    border: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 500;\r\n    color: rgb(43, 43, 43);\r\n    margin-top: 10px;\r\n    margin-bottom: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLXByZXZpZXctaXRlbS9hcnRpY2xlLXByZXZpZXctaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osNkNBQXFDO0lBQXJDLHFDQUFxQztJQUNyQyxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUE0QjtJQUE1Qiw0QkFBNEI7SUFDNUIsa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1wcmV2aWV3LWl0ZW0vYXJ0aWNsZS1wcmV2aWV3LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2V7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9sYXRvTGlnaHQudHRmXCIpO1xyXG59XHJcblxyXG4jYXJ0aWNsZVByZXZpZXdJdGVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogXCJsYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcclxufVxyXG5cclxuI2ltZ0NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XHJcbn1cclxuXHJcbiNhcnRpY2xlUHJldmlld0l0ZW06aG92ZXIgI2ltZ0NvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbiNhcnRpY2xlUHJldmlld0l0ZW06aG92ZXIgaW1ne1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4jYXJ0aWNsZVByZXZpZXdJdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jYXJ0aWNsZVByZXZpZXdJdGVtOjotbW96LWZvY3VzLWlubmVye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlePreviewItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-preview-item',
                templateUrl: './article-preview-item.component.html',
                styleUrls: ['./article-preview-item.component.css']
            }]
    }], function () { return []; }, { articlePreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/article-preview/article-preview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/article-preview/article-preview.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../articles/articles.component */ "./src/app/components/articles/articles.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_preview_item_article_preview_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article-preview-item/article-preview-item.component */ "./src/app/components/article-preview-item/article-preview-item.component.ts");
/* harmony import */ var _podcast_preview_item_podcast_preview_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../podcast-preview-item/podcast-preview-item.component */ "./src/app/components/podcast-preview-item/podcast-preview-item.component.ts");








function ArticlePreviewComponent_div_0_app_article_preview_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-article-preview-item", 6);
} if (rf & 2) {
    const articlePreview_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articlePreview", articlePreview_r6);
} }
function ArticlePreviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticlePreviewComponent_div_0_app_article_preview_item_1_Template, 1, 1, "app-article-preview-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.articlePreviews);
} }
function ArticlePreviewComponent_div_1_app_podcast_preview_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-podcast-preview-item", 8);
} if (rf & 2) {
    const podcastPreview_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("podcastPreview", podcastPreview_r8);
} }
function ArticlePreviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticlePreviewComponent_div_1_app_podcast_preview_item_1_Template, 1, 1, "app-podcast-preview-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.articlePreviews);
} }
function ArticlePreviewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.nextPage(ctx_r4.pageEvent.pageIndex * ctx_r4.pageEvent.pageSize), " ");
} }
class ArticlePreviewComponent {
    constructor(articlesComponent, matPaginatorIntl) {
        this.articlesComponent = articlesComponent;
        this.matPaginatorIntl = matPaginatorIntl;
        this.index = 0;
    }
    ngOnInit() {
        this.matPaginatorIntl.itemsPerPageLabel = 'Статей на странице:';
        this.matPaginatorIntl.firstPageLabel = 'Первая страница';
        this.matPaginatorIntl.previousPageLabel = 'Предыдущая';
        this.matPaginatorIntl.nextPageLabel = 'Следующая';
        this.matPaginatorIntl.lastPageLabel = 'Последняя страница';
        this.matPaginatorIntl.getRangeLabel = this.getRussianRangeLabel;
        if (ArticlePreviewComponent.selectedCategory !== undefined && ArticlePreviewComponent.selectedCategory !== '' && ArticlePreviewComponent.selectedCategory !== 'home') {
            this.articlesAmount = _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesComponent"].getArticlesByIdAmount(ArticlePreviewComponent.selectedCategory);
            if (ArticlePreviewComponent.selectedCategory === 'podcasts') {
                this.articlePreviews = this.articlesComponent.getPodcastPreviewsById(ArticlePreviewComponent.selectedCategory, this.index, 15);
            }
            else {
                this.articlePreviews = this.articlesComponent.getPreviewsById(ArticlePreviewComponent.selectedCategory, this.index, 15);
            }
        }
        else {
            this.articlesAmount = _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesComponent"].getArticlesAmount();
            this.articlePreviews = this.articlesComponent.getPreviews(this.index, 15);
        }
    }
    nextPage(startPoint) {
        try {
            if (ArticlePreviewComponent.selectedCategory !== undefined && ArticlePreviewComponent.selectedCategory !== '' && ArticlePreviewComponent.selectedCategory !== 'home') {
                if (ArticlePreviewComponent.selectedCategory === 'podcasts') {
                    this.articlePreviews = this.articlesComponent.getPodcastPreviewsById(ArticlePreviewComponent.selectedCategory, startPoint, 15);
                }
                else {
                    this.articlePreviews = this.articlesComponent.getPreviewsById(ArticlePreviewComponent.selectedCategory, startPoint, 15);
                }
            }
            else {
                this.articlePreviews = this.articlesComponent.getPreviews(startPoint, 15);
            }
        }
        catch (err) { }
    }
    getRussianRangeLabel(page, pageSize, length) {
        if (length == 0 || pageSize == 0) {
            return `0 из ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} – ${endIndex} из ${length}`;
    }
    getSelectedCategory() {
        return ArticlePreviewComponent.selectedCategory;
    }
}
ArticlePreviewComponent.ɵfac = function ArticlePreviewComponent_Factory(t) { return new (t || ArticlePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_articles_articles_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorIntl"])); };
ArticlePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlePreviewComponent, selectors: [["app-article-preview"]], decls: 5, vars: 6, consts: [["class", "itemContainer", 4, "ngIf"], ["color", "accent", 3, "length", "pageIndex", "pageSize", "page"], ["paginator", ""], [4, "ngIf"], [1, "itemContainer"], ["class", "previewItem", 3, "articlePreview", 4, "ngFor", "ngForOf"], [1, "previewItem", 3, "articlePreview"], ["class", "previewItem", 3, "podcastPreview", 4, "ngFor", "ngForOf"], [1, "previewItem", 3, "podcastPreview"]], template: function ArticlePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticlePreviewComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticlePreviewComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-paginator", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ArticlePreviewComponent_Template_mat_paginator_page_2_listener($event) { return ctx.pageEvent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticlePreviewComponent_div_4_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getSelectedCategory() !== "podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getSelectedCategory() === "podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.articlesAmount)("pageIndex", 0)("pageSize", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _article_preview_item_article_preview_item_component__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewItemComponent"], _podcast_preview_item_podcast_preview_item_component__WEBPACK_IMPORTED_MODULE_5__["PodcastPreviewItemComponent"]], styles: [".previewItem[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\n\r\n.itemContainer[_ngcontent-%COMP%]{\r\n    display: contents;\r\n}\r\n\r\nmat-paginator[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0;\r\n    background-color: white;\r\n    color: black;\r\n    font-size: 16px;\r\n}\r\n\r\n  .mat-paginator [ng-reflect-disabled=false] svg{\r\n    fill: black;\r\n    -webkit-transition-property: fill;\r\n    transition-property: fill;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n}\r\n\r\n  .mat-paginator [ng-reflect-disabled=false] svg:hover{\r\n    fill: #7fad96;\r\n}\r\n\r\n  .mat-paginator .mat-paginator-page-size{\r\n    display: none;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n    .previewItem[_ngcontent-%COMP%]{\r\n        width: 47%;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .previewItem[_ngcontent-%COMP%]{\r\n        width: 95%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLXByZXZpZXcvYXJ0aWNsZS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLXByZXZpZXcvYXJ0aWNsZS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlld0l0ZW17XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uaXRlbUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG5tYXQtcGFnaW5hdG9ye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yIFtuZy1yZWZsZWN0LWRpc2FibGVkPWZhbHNlXSBzdmd7XHJcbiAgICBmaWxsOiBibGFjaztcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGZpbGw7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yIFtuZy1yZWZsZWN0LWRpc2FibGVkPWZhbHNlXSBzdmc6aG92ZXJ7XHJcbiAgICBmaWxsOiAjN2ZhZDk2O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3IgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXple1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgLnByZXZpZXdJdGVte1xyXG4gICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnByZXZpZXdJdGVte1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-preview',
                templateUrl: './article-preview.component.html',
                styleUrls: ['./article-preview.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesComponent"] }, { type: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorIntl"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/articles/articles.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/articles/articles.component.ts ***!
  \***********************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_articlePreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/articlePreview */ "./src/app/models/articlePreview.ts");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");





class ArticlesComponent {
    constructor(articleService, appComponent) {
        this.articleService = articleService;
        this.appComponent = appComponent;
    }
    ngOnInit() {
        this.articleService.getArticles().subscribe(articles => {
            ArticlesComponent.articles = articles;
            if (ArticlesComponent.articles !== undefined) {
                this.appComponent.articlesLoaded = Promise.resolve(true);
            }
        });
    }
    getPreviews(startIndex, amount) {
        let articlePreviews;
        if (ArticlesComponent.getArticlesAmount() - startIndex >= amount)
            articlePreviews = new Array(amount);
        else
            articlePreviews = new Array(ArticlesComponent.getArticlesAmount() - startIndex);
        for (let i = 0; i < articlePreviews.length; ++i) {
            if (startIndex == ArticlesComponent.articles.length) {
                break;
            }
            if (ArticlesComponent.articles[startIndex].categoriesId !== 'podcasts') {
                articlePreviews[i] = new _models_articlePreview__WEBPACK_IMPORTED_MODULE_1__["ArticlePreview"]();
                articlePreviews[i]._id = ArticlesComponent.articles[startIndex]._id;
                articlePreviews[i].title = ArticlesComponent.articles[startIndex].title;
                articlePreviews[i].previewImage = ArticlesComponent.articles[startIndex].previewImage;
                articlePreviews[i].subText = ArticlesComponent.articles[startIndex].subText;
            }
            ++startIndex;
        }
        return articlePreviews;
    }
    getPreviewsById(id, startIndex, amount) {
        let articlePreviews;
        ArticlesComponent.articlesById = new Array();
        ArticlesComponent.articlesById = ArticlesComponent.getArticleswithSelectedId(id);
        if (ArticlesComponent.articlesById.length - startIndex >= amount)
            articlePreviews = new Array(amount);
        else
            articlePreviews = new Array(ArticlesComponent.articlesById.length - startIndex);
        for (let i = 0; i < articlePreviews.length; ++i) {
            if (startIndex == ArticlesComponent.articlesById.length) {
                break;
            }
            articlePreviews[i] = new _models_articlePreview__WEBPACK_IMPORTED_MODULE_1__["ArticlePreview"]();
            articlePreviews[i]._id = ArticlesComponent.articlesById[startIndex]._id;
            articlePreviews[i].title = ArticlesComponent.articlesById[startIndex].title;
            articlePreviews[i].previewImage = ArticlesComponent.articlesById[startIndex].previewImage;
            articlePreviews[i].subText = ArticlesComponent.articlesById[startIndex].subText;
            ++startIndex;
        }
        return articlePreviews;
    }
    getPodcastPreviewsById(id, startIndex, amount) {
        let podcastPreviews;
        ArticlesComponent.articlesById = new Array();
        ArticlesComponent.articlesById = ArticlesComponent.getArticleswithSelectedId(id);
        if (ArticlesComponent.articlesById.length - startIndex >= amount)
            podcastPreviews = new Array(amount);
        else
            podcastPreviews = new Array(ArticlesComponent.articlesById.length - startIndex);
        for (let i = 0; i < podcastPreviews.length; ++i) {
            if (startIndex == ArticlesComponent.articlesById.length) {
                break;
            }
            podcastPreviews[i] = new _models_articlePreview__WEBPACK_IMPORTED_MODULE_1__["ArticlePreview"]();
            podcastPreviews[i]._id = ArticlesComponent.articlesById[startIndex]._id;
            podcastPreviews[i].title = ArticlesComponent.articlesById[startIndex].title;
            podcastPreviews[i].previewImage = ArticlesComponent.articlesById[startIndex].content;
            podcastPreviews[i].subText = ArticlesComponent.articlesById[startIndex].subText;
            ++startIndex;
        }
        return podcastPreviews;
    }
    static getArticleswithSelectedId(categoryId) {
        let articlesWithSelectedId = new Array();
        ArticlesComponent.articles.forEach((element) => {
            if (categoryId == element.categoriesId) {
                articlesWithSelectedId.push(element);
            }
        });
        return articlesWithSelectedId;
    }
    static getArticlesByIdAmount(categoryId) {
        let count = 0;
        for (let i = 0; i < ArticlesComponent.articles.length; ++i) {
            if (ArticlesComponent.articles[i].categoriesId == categoryId) {
                ++count;
            }
        }
        return count;
    }
    static getSinglePageArticles() {
        let count = 0;
        for (let i = 0; i < ArticlesComponent.articles.length; ++i) {
            if (ArticlesComponent.articles[i].previewImage === 'none') {
                ++count;
            }
        }
        return count;
    }
    static getArticlesAmount() {
        return ArticlesComponent.articles.length - ArticlesComponent.getArticlesByIdAmount('podcasts') - ArticlesComponent.getSinglePageArticles();
    }
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) { return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"])); };
ArticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlesComponent, selectors: [["app-articles"]], decls: 0, vars: 0, template: function ArticlesComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-articles',
                templateUrl: './articles.component.html',
                styleUrls: ['./articles.component.css']
            }]
    }], function () { return [{ type: _services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/category */ "./src/app/models/category.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function CategoriesComponent_app_category_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category-item", 1);
} if (rf & 2) {
    const category_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r16);
} }
class CategoriesComponent {
    constructor(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
    }
    OnRouteChange() {
        const currentUrl = this.router.url;
        const splitedUrl = currentUrl.split('/');
        if (splitedUrl[splitedUrl.length - 2] === 'category' || splitedUrl[splitedUrl.length - 2] === 'info') {
            const categoryId = splitedUrl[splitedUrl.length - 1];
            this.selectItem(categoryId);
        }
        else if (currentUrl === '/')
            this.selectItem('home');
    }
    ngOnInit() {
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
            CategoriesComponent.statCategories = new Array(this.categories.length);
            this.categoriesSelection = new Array(this.categories.length);
            for (let i = 0; i < this.categoriesSelection.length; ++i) {
                this.categoriesSelection[i] = false;
                CategoriesComponent.statCategories[i] = new _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
                CategoriesComponent.statCategories[i].title = this.categories[i].title;
                CategoriesComponent.statCategories[i].categoryId = this.categories[i].categoryId;
            }
            this.OnRouteChange();
        });
        this.router.events.subscribe((val) => this.OnRouteChange());
    }
    selectItem(categoryId) {
        let position = this.getCategoriesPostion(categoryId);
        if (!this.isSelected(categoryId)) {
            for (let i = 0; i < this.categoriesSelection.length; ++i) {
                this.categoriesSelection[i] = false;
            }
            this.categoriesSelection[position] = true;
        }
    }
    isSelected(categoryId) {
        return this.categoriesSelection[this.getCategoriesPostion(categoryId)];
    }
    getCategoriesPostion(categoryId) {
        for (let i = 0; i < this.categories.length; ++i) {
            if (this.categories[i].categoryId === categoryId) {
                return i;
            }
        }
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 1, vars: 1, consts: [[3, "category", 4, "ngFor", "ngForOf"], [3, "category"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoriesComponent_app_category_item_0_Template, 1, 1, "app-category-item", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './categories.component.html',
                styleUrls: ['./categories.component.css']
            }]
    }], function () { return [{ type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/category-container/category-container.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/category-container/category-container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoryContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryContainerComponent", function() { return CategoryContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories/categories.component */ "./src/app/components/categories/categories.component.ts");



class CategoryContainerComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CategoryContainerComponent.ɵfac = function CategoryContainerComponent_Factory(t) { return new (t || CategoryContainerComponent)(); };
CategoryContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryContainerComponent, selectors: [["app-category-container"]], decls: 2, vars: 0, consts: [["id", "categoryContainer"]], template: function CategoryContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_categories_categories_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesComponent"]], styles: ["#categoryContainer[_ngcontent-%COMP%]{\r\n    margin-left: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1jb250YWluZXIvY2F0ZWdvcnktY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3J5LWNvbnRhaW5lci9jYXRlZ29yeS1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXRlZ29yeUNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-container',
                templateUrl: './category-container.component.html',
                styleUrls: ['./category-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/category-item/category-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/category-item/category-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemComponent", function() { return CategoryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/category/", a1]; };
function CategoryItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryItemComponent_div_0_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onClick(ctx_r19.category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r17.category.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.setClasses())("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r17.category.categoryId));
} }
const _c1 = function (a1) { return ["/info/", a1]; };
function CategoryItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryItemComponent_div_1_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onClick(ctx_r21.category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r18.category.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r18.setClasses())("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r18.category.categoryId));
} }
class CategoryItemComponent {
    constructor(categoriesComponent) {
        this.categoriesComponent = categoriesComponent;
    }
    ngOnInit() {
    }
    setClasses() {
        let classes = {
            category: true,
            'isSelected': this.categoriesComponent.isSelected(this.category.categoryId)
        };
        return classes;
    }
    onClick(category) {
        this.categoriesComponent.selectItem(category.categoryId);
    }
}
CategoryItemComponent.ɵfac = function CategoryItemComponent_Factory(t) { return new (t || CategoryItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_categories_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesComponent"])); };
CategoryItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryItemComponent, selectors: [["app-category-item"]], inputs: { category: "category" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["type", "button", 1, "categoryButton", 3, "ngClass", "value", "routerLink", "click"]], template: function CategoryItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryItemComponent_div_0_Template, 2, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryItemComponent_div_1_Template, 2, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category.categoryType === "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category.categoryType === "info");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["@font-face {\r\n  font-family: Proxima Nova;\r\n  src: url(\"/assets/fonts/customReg.otf\");\r\n}\r\n\r\n.categoryButton[_ngcontent-%COMP%]{\r\n  border: none;\r\n  font-family: \"Proxima Nova\";\r\n  color: #7fad96;\r\n  background-color: #303030;\r\n  font-size: 16px;\r\n  background: none transparent;\r\n  padding-bottom: 7px;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\r\n}\r\n\r\n.isSelected[_ngcontent-%COMP%]{\r\n  color: #91e8bc;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-moz-focus-inner{\r\n  border: none;\r\n}\r\n\r\n.categoryButton[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  color: #91e8bc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1pdGVtL2NhdGVnb3J5LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUMxQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3J5LWl0ZW0vY2F0ZWdvcnktaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFByb3hpbWEgTm92YTtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvY3VzdG9tUmVnLm90ZlwiKTtcclxufVxyXG5cclxuLmNhdGVnb3J5QnV0dG9ue1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJQcm94aW1hIE5vdmFcIjtcclxuICBjb2xvcjogIzdmYWQ5NjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbn1cclxuXHJcbi5pc1NlbGVjdGVke1xyXG4gIGNvbG9yOiAjOTFlOGJjO1xyXG59XHJcblxyXG4vKm5nIGNsYXNzZXMgYm9sZCB0ZXh0Ki9cclxuXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVye1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNhdGVnb3J5QnV0dG9uOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzkxZThiYztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-item',
                templateUrl: './category-item.component.html',
                styleUrls: ['./category-item.component.css']
            }]
    }], function () { return [{ type: _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesComponent"] }]; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/contacts-container/contacts-container.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/contacts-container/contacts-container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsContainerComponent", function() { return ContactsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _social_media_link_social_media_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-media-link/social-media-link.component */ "./src/app/components/social-media-link/social-media-link.component.ts");




class ContactsContainerComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactsContainerComponent.ɵfac = function ContactsContainerComponent_Factory(t) { return new (t || ContactsContainerComponent)(); };
ContactsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsContainerComponent, selectors: [["app-contacts-container"]], decls: 3, vars: 0, consts: [["id", "contactContainer"]], template: function ContactsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-social-media-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__["ContactsComponent"], _social_media_link_social_media_link_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaLinkComponent"]], styles: ["#contactContainer[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 82.5%;\r\n    margin: auto;\r\n    margin-left: 0;\r\n}\r\n\r\n@media (max-width: 955px) {\r\n    #contactContainer[_ngcontent-%COMP%] {\r\n        margin-left: 8.75%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy1jb250YWluZXIvY29udGFjdHMtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy1jb250YWluZXIvY29udGFjdHMtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdENvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogODIuNSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XHJcbiAgICAjY29udGFjdENvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDguNzUlO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts-container',
                templateUrl: './contacts-container.component.html',
                styleUrls: ['./contacts-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 3, vars: 0, consts: [["id", "contactInformation"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u0442\u0435\u043A\u0441\u0442\u0430 \u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u0438\u0445 \u0430\u0432\u0442\u043E\u0440\u0430\u043C. \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0441\u0430\u0439\u0442\u044B \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0432 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0446\u0435\u043B\u044F\u0445 \u0438 \u0431\u0435\u0437 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043F\u0440\u044F\u043C\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441. \u00A9 \u041A\u043B\u0443\u0431 \u041A\u0430\u0447\u0435\u043B\u0438 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#contactInformation[_ngcontent-%COMP%]{\r\n    color: #989898;\r\n    padding-right: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0SW5mb3JtYXRpb257XHJcbiAgICBjb2xvcjogIzk4OTg5ODtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ContainerComponent {
    constructor() {
    }
    ngOnInit() {
    }
    static switchStyle(styleStr) {
        if (styleStr === 'dark') {
            ContainerComponent.dark = true;
        }
        else if (styleStr === 'light') {
            ContainerComponent.dark = false;
        }
    }
    setClasses() {
        let classes = {
            dark: ContainerComponent.dark,
            'lightArticleContainer': ContainerComponent.dark,
            'darkArticleContainer': ContainerComponent.dark
        };
        return classes;
    }
}
ContainerComponent.dark = false;
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], inputs: { styleStr: "styleStr" }, decls: 2, vars: 1, consts: [["id", "articleContainer", 3, "ngClass"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#articleContainer[_ngcontent-%COMP%]{\r\n    width: 82.5%;\r\n    height: auto;\r\n    margin:auto;\r\n    margin-left: 0;\r\n    \r\n    background-color: white;\r\n}\r\n\r\n.darkArticleContainer[_ngcontent-%COMP%]{\r\n    background-color: rgba(116, 116, 116, 0.671);\r\n}\r\n\r\n@media (max-width: 955px) {\r\n    #articleContainer[_ngcontent-%COMP%] {\r\n        margin-left: 8.75%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjOztJQUVkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcnRpY2xlQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDgyLjUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kYXJrQXJ0aWNsZUNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE2LCAxMTYsIDExNiwgMC42NzEpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcclxuICAgICNhcnRpY2xlQ29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOC43NSU7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container',
                templateUrl: './container.component.html',
                styleUrls: ['./container.component.css']
            }]
    }], function () { return []; }, { styleStr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [["id", "headerContainer"], ["id", "mainHeader"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MenTerBlog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#mainHeader[_ngcontent-%COMP%]{\r\n    margin: 0% 40%;\r\n    font-size: 44px;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#headerContainer[_ngcontent-%COMP%]{\r\n    padding: 50px;\r\n    padding-top: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbkhlYWRlcntcclxuICAgIG1hcmdpbjogMCUgNDAlO1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNoZWFkZXJDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/other-categories-container/other-categories-container.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/other-categories-container/other-categories-container.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OtherCategoriesContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCategoriesContainerComponent", function() { return OtherCategoriesContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other-categories/other-categories.component */ "./src/app/components/other-categories/other-categories.component.ts");



class OtherCategoriesContainerComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OtherCategoriesContainerComponent.ɵfac = function OtherCategoriesContainerComponent_Factory(t) { return new (t || OtherCategoriesContainerComponent)(); };
OtherCategoriesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherCategoriesContainerComponent, selectors: [["app-other-categories-container"]], decls: 2, vars: 0, consts: [["id", "containerJournal"]], template: function OtherCategoriesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-other-categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_1__["OtherCategoriesComponent"]], styles: ["#containerJournal[_ngcontent-%COMP%]{\r\n    word-wrap: break-word;\r\n    margin-left: 25%;\r\n    margin-top: 50px;\r\n    margin-right: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdGhlci1jYXRlZ29yaWVzLWNvbnRhaW5lci9vdGhlci1jYXRlZ29yaWVzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vdGhlci1jYXRlZ29yaWVzLWNvbnRhaW5lci9vdGhlci1jYXRlZ29yaWVzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lckpvdXJuYWx7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherCategoriesContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-categories-container',
                templateUrl: './other-categories-container.component.html',
                styleUrls: ['./other-categories-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/other-categories-item/other-categories-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/other-categories-item/other-categories-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OtherCategoriesItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCategoriesItemComponent", function() { return OtherCategoriesItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other-categories/other-categories.component */ "./src/app/components/other-categories/other-categories.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a1) { return ["/article/", a1]; };
class OtherCategoriesItemComponent {
    constructor(otherCategoriesComponent) {
        this.otherCategoriesComponent = otherCategoriesComponent;
    }
    ngOnInit() {
    }
}
OtherCategoriesItemComponent.ɵfac = function OtherCategoriesItemComponent_Factory(t) { return new (t || OtherCategoriesItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_1__["OtherCategoriesComponent"])); };
OtherCategoriesItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherCategoriesItemComponent, selectors: [["app-other-categories-item"]], inputs: { category: "category" }, decls: 3, vars: 4, consts: [["type", "button", 1, "categoryButton", 3, "value", "routerLink"]], template: function OtherCategoriesItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.category.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.category._id));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@font-face {\r\n    font-family: Proxima Nova;\r\n    src: url(\"/assets/fonts/customReg.otf\");\r\n}\r\n  \r\n.categoryButton[_ngcontent-%COMP%]{\r\n     border: none;\r\n    font-family: \"Proxima Nova\";\r\n    color: rgb(202, 202, 202);\r\n    background-color: #303030;\r\n    font-size: 18px;\r\n    background: none transparent;\r\n    margin-bottom: 7.5px;\r\n    text-align: left;\r\n    -webkit-transition-property: color;\r\n    transition-property: color;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n    word-wrap: break-word;\r\n    white-space: normal;\r\n}\r\n  \r\nhr[_ngcontent-%COMP%]{\r\n    margin-bottom: 7.5px;\r\n}\r\n  \r\ninput[_ngcontent-%COMP%]::-moz-focus-inner{\r\n    border: none;\r\n}\r\n  \r\n.categoryButton[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdGhlci1jYXRlZ29yaWVzLWl0ZW0vb3RoZXItY2F0ZWdvcmllcy1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsdUNBQXVDO0FBQzNDOztBQUVBO0tBQ0ssWUFBWTtJQUNiLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0lBQzFCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3RoZXItY2F0ZWdvcmllcy1pdGVtL290aGVyLWNhdGVnb3JpZXMtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYSBOb3ZhO1xyXG4gICAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2N1c3RvbVJlZy5vdGZcIik7XHJcbn1cclxuICBcclxuLmNhdGVnb3J5QnV0dG9ue1xyXG4gICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgTm92YVwiO1xyXG4gICAgY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNy41cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNy41cHg7XHJcbn1cclxuXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlCdXR0b246aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherCategoriesItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-categories-item',
                templateUrl: './other-categories-item.component.html',
                styleUrls: ['./other-categories-item.component.css']
            }]
    }], function () { return [{ type: _other_categories_other_categories_component__WEBPACK_IMPORTED_MODULE_1__["OtherCategoriesComponent"] }]; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/other-categories/other-categories.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/other-categories/other-categories.component.ts ***!
  \***************************************************************************/
/*! exports provided: OtherCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCategoriesComponent", function() { return OtherCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_otherCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/otherCategory */ "./src/app/models/otherCategory.ts");
/* harmony import */ var _services_other_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/other-categories.service */ "./src/app/services/other-categories.service.ts");




function OtherCategoriesComponent_app_other_categories_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-other-categories-item", 1);
} if (rf & 2) {
    const category_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r24);
} }
class OtherCategoriesComponent {
    constructor(otherCategoriesService) {
        this.otherCategoriesService = otherCategoriesService;
    }
    ngOnInit() {
        this.otherCategoriesService.getCategories().subscribe(articles => {
            this.articles = articles;
            this.categories = new Array();
            for (let i = 0; i < 5; ++i) {
                this.categories[i] = new _models_otherCategory__WEBPACK_IMPORTED_MODULE_1__["OtherCategory"]();
                this.categories[i]._id = this.articles[this.articles.length - 1 - i]._id;
                this.categories[i].title = this.articles[this.articles.length - 1 - i].title;
            }
        });
    }
}
OtherCategoriesComponent.ɵfac = function OtherCategoriesComponent_Factory(t) { return new (t || OtherCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_other_categories_service__WEBPACK_IMPORTED_MODULE_2__["OtherCategoriesService"])); };
OtherCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherCategoriesComponent, selectors: [["app-other-categories"]], decls: 1, vars: 1, consts: [[3, "category", 4, "ngFor", "ngForOf"], [3, "category"]], template: function OtherCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OtherCategoriesComponent_app_other_categories_item_0_Template, 1, 1, "app-other-categories-item", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3RoZXItY2F0ZWdvcmllcy9vdGhlci1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-categories',
                templateUrl: './other-categories.component.html',
                styleUrls: ['./other-categories.component.css']
            }]
    }], function () { return [{ type: _services_other_categories_service__WEBPACK_IMPORTED_MODULE_2__["OtherCategoriesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/podcast-preview-item/podcast-preview-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/podcast-preview-item/podcast-preview-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PodcastPreviewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastPreviewItemComponent", function() { return PodcastPreviewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class PodcastPreviewItemComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.safeUrl = this.getEmbedUrl(this.podcastPreview);
    }
    getEmbedUrl(podcastPreview) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(podcastPreview.previewImage);
    }
}
PodcastPreviewItemComponent.ɵfac = function PodcastPreviewItemComponent_Factory(t) { return new (t || PodcastPreviewItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
PodcastPreviewItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastPreviewItemComponent, selectors: [["app-podcast-preview-item"]], inputs: { podcastPreview: "podcastPreview" }, decls: 7, vars: 3, consts: [[1, "podcastPreviewItem"], [1, "videoContainer"], ["frameborder", "0", "allow", "accelerometer; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "allowfullscreen", "mozallowfullscreen", "mozallowfullscreen", "msallowfullscreen", "msallowfullscreen", "oallowfullscreen", "oallowfullscreen", "webkitallowfullscreen", "webkitallowfullscreen", 1, "videoItem", 3, "src"]], template: function PodcastPreviewItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.safeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.podcastPreview.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.podcastPreview.subText);
    } }, styles: ["@font-face{\r\n    font-family: lato;\r\n    src: url(\"/assets/fonts/latoLight.ttf\");\r\n}\r\n\r\n.podcastPreviewItem[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    font-family: \"lato\", sans-serif;\r\n    font-size: 16px;\r\n    padding-top: 10px;\r\n    padding-bottom: 50px;\r\n    margin-bottom: 10px;\r\n    margin-top: 5px;\r\n    word-wrap: break-word;\r\n    border: none;\r\n}\r\n\r\n.videoItem[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.videoContainer[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding-bottom: 56.25%;\r\n    padding-top: 25px;\r\n    height: 0px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 500;\r\n    color: rgb(43, 43, 43);\r\n    margin-top: 10px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2RjYXN0LXByZXZpZXctaXRlbS9wb2RjYXN0LXByZXZpZXctaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kY2FzdC1wcmV2aWV3LWl0ZW0vcG9kY2FzdC1wcmV2aWV3LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2V7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9sYXRvTGlnaHQudHRmXCIpO1xyXG59XHJcblxyXG4ucG9kY2FzdFByZXZpZXdJdGVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogXCJsYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnZpZGVvSXRlbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udmlkZW9Db250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastPreviewItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast-preview-item',
                templateUrl: './podcast-preview-item.component.html',
                styleUrls: ['./podcast-preview-item.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { podcastPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/single-page-handler/single-page-handler.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/single-page-handler/single-page-handler.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SinglePageHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageHandlerComponent", function() { return SinglePageHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../articles/articles.component */ "./src/app/components/articles/articles.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");





class SinglePageHandlerComponent {
    constructor(route, router, categoryService) {
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.singleArticleCategoryId = params['singlePageId'];
            this.categoryService.getCategories().subscribe(categories => {
                this.categories = categories;
                if (params['singlePageId'] === undefined || params['singlePageId'] === '' || params['singlePageId'] === 'home') {
                    this.selectedPage = this.getRussianTitleOfCategory('home');
                }
                else
                    this.selectedPage = this.getRussianTitleOfCategory(params['singlePageId']);
            });
        });
        _articles_articles_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesComponent"].articles.forEach(article => {
            if (article.categoriesId === this.singleArticleCategoryId) {
                this.article = article;
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getRussianTitleOfCategory(categoryId) {
        switch (categoryId) {
            case 'CopyrightHolder':
                return 'ПРАВООБЛАДАТЕЛЯМ';
            case 'Advertiser':
                return 'РЕКЛАМОДАТЕЛЯМ';
            case 'Contacts':
                return 'КОНТАКТЫ';
            case 'Vacancies':
                return 'ВАКАНСИИ';
        }
        for (let i = 0; i < this.categories.length; ++i) {
            if (this.categories[i].categoryId === categoryId) {
                return this.categories[i].title;
            }
        }
    }
}
SinglePageHandlerComponent.ɵfac = function SinglePageHandlerComponent_Factory(t) { return new (t || SinglePageHandlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"])); };
SinglePageHandlerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SinglePageHandlerComponent, selectors: [["app-single-page-handler"]], decls: 9, vars: 4, consts: [["id", "heading"], ["id", "articleSelf"], ["width", "100%", 3, "src"], ["id", "header"], [3, "innerHTML"]], template: function SinglePageHandlerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.article.fullImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.article.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["@font-face{\r\n    font-family: lato;\r\n    src: url(\"/assets/fonts/latoLight.ttf\");\r\n}\r\n\r\np{\r\n    font-family: \"lato\", sans-serif;\r\n    color:#000000;\r\n    font-size: 18px;\r\n    padding: 75px;\r\n    padding-top: 15px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n#header{\r\n    font-family: Georgia, \"lato\", sans-serif;\r\n    text-align: center;\r\n    color: #fff;\r\n    color: black;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    margin-top: 30px;\r\n}\r\n\r\n#heading{\r\n    margin-left: 5%;\r\n    /*padding-top: 11.105px;\r\n    padding-bottom: 11.105px;*/\r\n    /*padding: 22.11px 0px;*/\r\n    padding: 17.5px 0px 26.72px 0px;\r\n}\r\n\r\n#heading h1{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: 650;\r\n    font-size: 28px;\r\n    margin-bottom: 11px;\r\n    color: rgb(43, 43, 43);\r\n}\r\n\r\n#heading hr{\r\n    width: 35%;\r\n    margin-right: 100%;\r\n}\r\n\r\na{\r\n    color: rgb(4, 138, 49);\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover{\r\n    text-decoration: underline;\r\n    color: rgb(0, 228, 76);\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    p{\r\n        padding: 15px;\r\n        padding-top: 15px;\r\n        padding-bottom: 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    p{\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (max-width: 955px) {\r\n    #heading hr {\r\n      width: 50%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtcGFnZS1oYW5kbGVyL3NpbmdsZS1wYWdlLWhhbmRsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZjs4QkFDMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtNQUNFLFVBQVU7SUFDWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtcGFnZS1oYW5kbGVyL3NpbmdsZS1wYWdlLWhhbmRsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2V7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9sYXRvTGlnaHQudHRmXCIpO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6IFwibGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDc1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jaGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwibGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuI2hlYWRpbmd7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAvKnBhZGRpbmctdG9wOiAxMS4xMDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMS4xMDVweDsqL1xyXG4gICAgLypwYWRkaW5nOiAyMi4xMXB4IDBweDsqL1xyXG4gICAgcGFkZGluZzogMTcuNXB4IDBweCAyNi43MnB4IDBweDtcclxufVxyXG5cclxuI2hlYWRpbmcgaDF7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxufVxyXG5cclxuI2hlYWRpbmcgaHJ7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6IHJnYig0LCAxMzgsIDQ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogcmdiKDAsIDIyOCwgNzYpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIHB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XHJcbiAgICAjaGVhZGluZyBociB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */"], encapsulation: 3 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinglePageHandlerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-page-handler',
                templateUrl: './single-page-handler.component.html',
                styleUrls: ['./single-page-handler.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/social-media-link-item/social-media-link-item.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/social-media-link-item/social-media-link-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SocialMediaLinkItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaLinkItemComponent", function() { return SocialMediaLinkItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SocialMediaLinkItemComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SocialMediaLinkItemComponent.ɵfac = function SocialMediaLinkItemComponent_Factory(t) { return new (t || SocialMediaLinkItemComponent)(); };
SocialMediaLinkItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaLinkItemComponent, selectors: [["app-social-media-link-item"]], decls: 2, vars: 0, template: function SocialMediaLinkItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "social-media-link-item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsLW1lZGlhLWxpbmstaXRlbS9zb2NpYWwtbWVkaWEtbGluay1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaLinkItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-media-link-item',
                templateUrl: './social-media-link-item.component.html',
                styleUrls: ['./social-media-link-item.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/social-media-link/social-media-link.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/social-media-link/social-media-link.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SocialMediaLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaLinkComponent", function() { return SocialMediaLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SocialMediaLinkComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SocialMediaLinkComponent.ɵfac = function SocialMediaLinkComponent_Factory(t) { return new (t || SocialMediaLinkComponent)(); };
SocialMediaLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaLinkComponent, selectors: [["app-social-media-link"]], decls: 19, vars: 0, consts: [["id", "socialMediaBox"], ["id", "iconsContainer"], [1, "svgIcon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "28", "viewBox", "0 0 32 32"], ["d", "M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z", 1, "st0"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"], ["d", "M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z", "fill-rule", "evenodd", "clip-rule", "evenodd"], ["d", "M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"]], template: function SocialMediaLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0431\u043B\u0430.\u0440\u0444");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#iconsContainer[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#socialMediaBox[_ngcontent-%COMP%]{\r\n    color: #989898;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%]{\r\n    fill: #989898;\r\n    -webkit-transition-property: fill;\r\n    transition-property: fill;\r\n    -webkit-transition-duration: 500ms;\r\n            transition-duration: 500ms;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%]:hover{\r\n    fill: #91e8bc;\r\n    cursor: pointer;\r\n}\r\n\r\n.svgIcon[_ngcontent-%COMP%]{\r\n    width: 33%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwtbWVkaWEtbGluay9zb2NpYWwtbWVkaWEtbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwtbWVkaWEtbGluay9zb2NpYWwtbWVkaWEtbGluay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ljb25zQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI3NvY2lhbE1lZGlhQm94e1xyXG4gICAgY29sb3I6ICM5ODk4OTg7XHJcbn1cclxuXHJcbnN2Z3tcclxuICAgIGZpbGw6ICM5ODk4OTg7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmaWxsO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbn1cclxuXHJcbnN2Zzpob3ZlcntcclxuICAgIGZpbGw6ICM5MWU4YmM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdmdJY29ue1xyXG4gICAgd2lkdGg6IDMzJTtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-media-link',
                templateUrl: './social-media-link.component.html',
                styleUrls: ['./social-media-link.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/south-bar/south-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/south-bar/south-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: SouthBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SouthBarComponent", function() { return SouthBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/info/CopyrightHolder"]; };
const _c1 = function () { return ["/info/Advertiser"]; };
const _c2 = function () { return ["/info/Contacts"]; };
const _c3 = function () { return ["/info/Vacancies"]; };
class SouthBarComponent {
    constructor() {
    }
    ngOnInit() {
    }
    onClick(styleStr) {
        _container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"].switchStyle(styleStr);
    }
}
SouthBarComponent.ɵfac = function SouthBarComponent_Factory(t) { return new (t || SouthBarComponent)(); };
SouthBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SouthBarComponent, selectors: [["app-south-bar"]], decls: 19, vars: 8, consts: [["id", "containerSouthBar"], [3, "routerLink"]], template: function SouthBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u0420\u0410\u0412\u041E\u041E\u0411\u041B\u0410\u0414\u0410\u0422\u0415\u041B\u042F\u041C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0420\u0415\u041A\u041B\u0410\u041C\u041E\u0414\u0410\u0422\u0415\u041B\u042F\u041C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0412\u0410\u041A\u0410\u041D\u0421\u0418\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@font-face{\r\n    font-family: ptsans;\r\n    src: url(\"/assets/fonts/ptsans2.ttf\");\r\n}\r\n\r\n#containerSouthBar[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    color: #fff;\r\n    list-style: none;\r\n    font-family: \"ptsans\", Arial, Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    margin-top: 15px;\r\n    margin-bottom: 20px;\r\n    width: 70%;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    -webkit-transition-property: color;\r\n    transition-property: color;\r\n    -webkit-transition-duration: 300ms;\r\n            transition-duration: 300ms;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    color: #91e8bc;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    margin-right: 15px;\r\n}\r\n\r\n@media (max-width: 880px) {\r\n    #containerSouthBar[_ngcontent-%COMP%] {\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n    }\r\n    span[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n  }\r\n\r\n@media (max-width: 955px) {\r\n    #containerSouthBar[_ngcontent-%COMP%] {\r\n        margin-left: 8.75%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3V0aC1iYXIvc291dGgtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtREFBbUQ7SUFDbkQsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFDMUIsa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtNQUNFLDRCQUFzQjtNQUF0Qiw2QkFBc0I7Y0FBdEIsc0JBQXNCO0lBQ3hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0VBQ0Y7O0FBRUY7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3V0aC1iYXIvc291dGgtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xyXG4gICAgZm9udC1mYW1pbHk6IHB0c2FucztcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9wdHNhbnMyLnR0ZlwiKTtcclxufVxyXG5cclxuI2NvbnRhaW5lclNvdXRoQmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogXCJwdHNhbnNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGNvbG9yOiAjOTFlOGJjO1xyXG59XHJcblxyXG5saXtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgICAjY29udGFpbmVyU291dGhCYXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xyXG4gICAgI2NvbnRhaW5lclNvdXRoQmFyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOC43NSU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SouthBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-south-bar',
                templateUrl: './south-bar.component.html',
                styleUrls: ['./south-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/style-switch-item/style-switch-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/style-switch-item/style-switch-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StyleSwitchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSwitchItemComponent", function() { return StyleSwitchItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StyleSwitchItemComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
StyleSwitchItemComponent.ɵfac = function StyleSwitchItemComponent_Factory(t) { return new (t || StyleSwitchItemComponent)(); };
StyleSwitchItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StyleSwitchItemComponent, selectors: [["app-style-switch-item"]], decls: 2, vars: 0, template: function StyleSwitchItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "style-switch-item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R5bGUtc3dpdGNoLWl0ZW0vc3R5bGUtc3dpdGNoLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleSwitchItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-style-switch-item',
                templateUrl: './style-switch-item.component.html',
                styleUrls: ['./style-switch-item.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _components_category_container_category_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/category-container/category-container.component */ "./src/app/components/category-container/category-container.component.ts");
/* harmony import */ var _components_other_categories_container_other_categories_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/other-categories-container/other-categories-container.component */ "./src/app/components/other-categories-container/other-categories-container.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













function MainNavComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r25.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], ngContentSelectors: _c0, decls: 14, vars: 12, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-category-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-other-categories-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainNavComponent_button_11_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _components_category_container_category_container_component__WEBPACK_IMPORTED_MODULE_5__["CategoryContainerComponent"], _components_other_categories_container_other_categories_container_component__WEBPACK_IMPORTED_MODULE_6__["OtherCategoriesContainerComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n  \n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  background-color: #303030;\n  border: none;\n  margin-top: 140px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-color: #303030;\n}\n\n@media (max-width: 955px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n  mat-sidenav[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsqL1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgbWF0LXNpZGVuYXYge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-nav',
                templateUrl: './main-nav.component.html',
                styleUrls: ['./main-nav.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/articlePreview.ts":
/*!******************************************!*\
  !*** ./src/app/models/articlePreview.ts ***!
  \******************************************/
/*! exports provided: ArticlePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreview", function() { return ArticlePreview; });
class ArticlePreview {
}


/***/ }),

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "./src/app/models/otherCategory.ts":
/*!*****************************************!*\
  !*** ./src/app/models/otherCategory.ts ***!
  \*****************************************/
/*! exports provided: OtherCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCategory", function() { return OtherCategory; });
class OtherCategory {
}


/***/ }),

/***/ "./src/app/services/article.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/article.service.ts ***!
  \*********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class ArticleService {
    constructor(http) {
        this.http = http;
        this.articlesUrl = "/api/articles";
    }
    getArticles() {
        return this.http.get(this.articlesUrl);
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class CategoryService {
    constructor(http) {
        this.http = http;
        this.categoriesUrl = "/api/categories";
    }
    getCategories() {
        return this.http.get(this.categoriesUrl);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/other-categories.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/other-categories.service.ts ***!
  \******************************************************/
/*! exports provided: OtherCategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCategoriesService", function() { return OtherCategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class OtherCategoriesService {
    constructor(http) {
        this.http = http;
        this.articlesUrl = "/api/articles/journals";
    }
    getCategories() {
        return this.http.get(this.articlesUrl);
    }
}
OtherCategoriesService.ɵfac = function OtherCategoriesService_Factory(t) { return new (t || OtherCategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OtherCategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OtherCategoriesService, factory: OtherCategoriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherCategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Major_Paranoia\Documents\menter\klubkacheli\angular-menterblog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map