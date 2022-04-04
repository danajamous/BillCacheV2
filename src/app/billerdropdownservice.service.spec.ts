import { TestBed } from '@angular/core/testing';

import { BillerdropdownserviceService } from './billerdropdownservice.service';

describe('BillerdropdownserviceService', () => {
  let service: BillerdropdownserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillerdropdownserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
