import { TestBed } from '@angular/core/testing';

import { ServService } from './serv.service';

describe('ServService', () => {
  let service: ServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
