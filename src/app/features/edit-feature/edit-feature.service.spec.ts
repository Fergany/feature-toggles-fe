import { TestBed } from '@angular/core/testing';

import { EditFeatureService } from './edit-feature.service';

describe('EditFeatureService', () => {
  let service: EditFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
