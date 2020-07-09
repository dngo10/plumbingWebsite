import { TestBed } from '@angular/core/testing';

import { OSHPDMinimumPlumbingFacilitiesService } from './oshpd-minimum-plumbing-facilities.service';

describe('OSHPDMinimumPlumbingFacilitiesService', () => {
  let service: OSHPDMinimumPlumbingFacilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OSHPDMinimumPlumbingFacilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
