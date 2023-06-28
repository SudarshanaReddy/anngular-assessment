import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateTransactionProcessingComponent } from './real-estate-transaction-processing.component';

describe('RealEstateTransactionProcessingComponent', () => {
  let component: RealEstateTransactionProcessingComponent;
  let fixture: ComponentFixture<RealEstateTransactionProcessingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateTransactionProcessingComponent]
    });
    fixture = TestBed.createComponent(RealEstateTransactionProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
