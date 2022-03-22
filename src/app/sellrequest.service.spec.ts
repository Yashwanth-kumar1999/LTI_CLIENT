import { TestBed } from '@angular/core/testing';

import { SellrequestService } from './sellrequest.service';

describe('SellrequestService', () => {
  let service: SellrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
