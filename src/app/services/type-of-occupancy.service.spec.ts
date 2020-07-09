import { TestBed } from '@angular/core/testing';

import { TypeOfOccupancyService } from './type-of-occupancy.service';

describe('TypeOfOccupancyService', () => {
  let service: TypeOfOccupancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfOccupancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
