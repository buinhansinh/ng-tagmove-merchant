import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutReceiptComponent } from './payout-receipt.component';

describe('PayoutReceiptComponent', () => {
  let component: PayoutReceiptComponent;
  let fixture: ComponentFixture<PayoutReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayoutReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
