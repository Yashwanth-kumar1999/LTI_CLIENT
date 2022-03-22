import { TestBed } from '@angular/core/testing';

import { SoldHistoryService } from './sold-history.service';

describe('SoldHistoryService', () => {
  let service: SoldHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoldHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
