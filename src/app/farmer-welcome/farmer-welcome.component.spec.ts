import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerWelcomeComponent } from './farmer-welcome.component';

describe('FarmerWelcomeComponent', () => {
  let component: FarmerWelcomeComponent;
  let fixture: ComponentFixture<FarmerWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
