import { TestBed } from '@angular/core/testing';

import { AmadeusService } from './amadeus.service';

describe('AmadeusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmadeusService = TestBed.get(AmadeusService);
    expect(service).toBeTruthy();
  });
});
