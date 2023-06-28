import { TestBed } from '@angular/core/testing';

import { RealEstateTransactionProcessingService } from './real-estate-transaction-processing.service';

describe('RealEstateTransactionProcessingService', () => {
  let service: RealEstateTransactionProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateTransactionProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
