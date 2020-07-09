import { TestBed } from '@angular/core/testing';

import { OtherCategoriesService } from './other-categories.service';

describe('OtherCategoriesService', () => {
  let service: OtherCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
