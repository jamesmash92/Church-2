import { TestBed } from '@angular/core/testing';

import { ChurchService } from './church.service';

describe('ChurchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChurchService = TestBed.get(ChurchService);
    expect(service).toBeTruthy();
  });
});
