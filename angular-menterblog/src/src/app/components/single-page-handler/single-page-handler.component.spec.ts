import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageHandlerComponent } from './single-page-handler.component';

describe('SinglePagehandlerComponent', () => {
  let component: SinglePageHandlerComponent;
  let fixture: ComponentFixture<SinglePageHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
