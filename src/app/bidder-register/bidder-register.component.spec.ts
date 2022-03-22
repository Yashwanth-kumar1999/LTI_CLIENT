import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderRegisterComponent } from './bidder-register.component';

describe('BidderRegisterComponent', () => {
  let component: BidderRegisterComponent;
  let fixture: ComponentFixture<BidderRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
