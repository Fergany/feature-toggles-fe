import { TestBed } from '@angular/core/testing';

import { AddCustomerFeaturesService } from './add-customer-features.service';

describe('AddCustomerFeaturesService', () => {
  let service: AddCustomerFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCustomerFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
