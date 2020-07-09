import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCategoriesItemComponent } from './other-categories-item.component';

describe('OtherCategoriesItemComponent', () => {
  let component: OtherCategoriesItemComponent;
  let fixture: ComponentFixture<OtherCategoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCategoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
