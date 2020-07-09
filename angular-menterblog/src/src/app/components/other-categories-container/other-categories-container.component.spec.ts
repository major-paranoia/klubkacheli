import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCategoriesContainerComponent } from './other-categories-container.component';

describe('OtherCategoriesContainerComponent', () => {
  let component: OtherCategoriesContainerComponent;
  let fixture: ComponentFixture<OtherCategoriesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCategoriesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCategoriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
