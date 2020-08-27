import { TestBed } from '@angular/core/testing';

import { CustomerFeaturesListService } from './customer-features-list.service';

describe('CustomerFeaturesListService', () => {
  let service: CustomerFeaturesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFeaturesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
