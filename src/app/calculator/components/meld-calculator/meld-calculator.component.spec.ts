import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldCalculatorComponent } from './meld-calculator.component';

describe('MeldCalculatorComponent', () => {
  let component: MeldCalculatorComponent;
  let fixture: ComponentFixture<MeldCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
