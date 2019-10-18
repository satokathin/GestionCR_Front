import { TestBed } from '@angular/core/testing';

import { EvenTypeService } from './even-type.service';

describe('EvenTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenTypeService = TestBed.get(EvenTypeService);
    expect(service).toBeTruthy();
  });
});
