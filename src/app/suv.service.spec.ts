import { TestBed } from '@angular/core/testing';

import { SuvService } from './suv.service';

describe('SuvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuvService = TestBed.get(SuvService);
    expect(service).toBeTruthy();
  });
});
