import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderWelcomeComponent } from './bidder-welcome.component';

describe('BidderWelcomeComponent', () => {
  let component: BidderWelcomeComponent;
  let fixture: ComponentFixture<BidderWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
