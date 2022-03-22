import { TestBed } from '@angular/core/testing';

import { ApproveSellService } from './approve-sell.service';

describe('ApproveSellService', () => {
  let service: ApproveSellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveSellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
