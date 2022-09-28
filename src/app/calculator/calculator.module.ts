import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';
import { CalculatorDashboardComponent } from './components/calculator-dashboard/calculator-dashboard.component';
import { MeldCalculatorComponent } from './components/meld-calculator/meld-calculator.component';


@NgModule({
  declarations: [
    BmiCalculatorComponent,
    CalculatorDashboardComponent,
    MeldCalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
