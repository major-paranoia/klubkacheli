import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaLinkItemComponent } from './social-media-link-item.component';

describe('SocialMediaLinkItemComponent', () => {
  let component: SocialMediaLinkItemComponent;
  let fixture: ComponentFixture<SocialMediaLinkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaLinkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaLinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
