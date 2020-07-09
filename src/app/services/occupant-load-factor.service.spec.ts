import { TestBed } from '@angular/core/testing';

import { OccupantLoadFactorService } from './occupant-load-factor.service';

describe('OccupantLoadFactorService', () => {
  let service: OccupantLoadFactorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccupantLoadFactorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
