import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewItemComponent } from './article-preview-item.component';

describe('ArticlePreviewItemComponent', () => {
  let component: ArticlePreviewItemComponent;
  let fixture: ComponentFixture<ArticlePreviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePreviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
