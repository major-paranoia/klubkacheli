import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSwitchItemComponent } from './style-switch-item.component';

describe('StyleSwitchItemComponent', () => {
  let component: StyleSwitchItemComponent;
  let fixture: ComponentFixture<StyleSwitchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleSwitchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSwitchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
