import { TestBed } from '@angular/core/testing';

import { FeaturesListService } from './features-list.service';

describe('FeaturesListService', () => {
  let service: FeaturesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
