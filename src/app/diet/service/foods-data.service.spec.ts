import { TestBed } from '@angular/core/testing';

import { FoodsDataService } from './foods-data.service';

describe('FoodsDataService', () => {
  let service: FoodsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
