import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPreviewItemComponent } from './podcast-preview-item.component';

describe('PodcastPreviewItemComponent', () => {
  let component: PodcastPreviewItemComponent;
  let fixture: ComponentFixture<PodcastPreviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastPreviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastPreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
