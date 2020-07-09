import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthBarComponent } from './south-bar.component';

describe('SouthBarComponent', () => {
  let component: SouthBarComponent;
  let fixture: ComponentFixture<SouthBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
