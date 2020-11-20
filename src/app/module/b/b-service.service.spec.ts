import { TestBed } from '@angular/core/testing';

import { BServiceService } from './b-service.service';

describe('BServiceService', () => {
  let service: BServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
