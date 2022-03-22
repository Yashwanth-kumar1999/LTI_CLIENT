import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSoldhistoryComponent } from './farmer-soldhistory.component';

describe('FarmerSoldhistoryComponent', () => {
  let component: FarmerSoldhistoryComponent;
  let fixture: ComponentFixture<FarmerSoldhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSoldhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSoldhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
