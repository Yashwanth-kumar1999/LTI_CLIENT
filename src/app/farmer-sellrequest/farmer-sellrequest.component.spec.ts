import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSellrequestComponent } from './farmer-sellrequest.component';

describe('FarmerSellrequestComponent', () => {
  let component: FarmerSellrequestComponent;
  let fixture: ComponentFixture<FarmerSellrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSellrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSellrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
