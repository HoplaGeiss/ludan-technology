import { NgModule } from '@angular/core';
import { NgxLudanRetirementCalculatorModule } from 'ngx-ludan-retirement-calculator';

import { LibraryRetirementCalculatorComponent } from './library-retirement-calculator.component';

@NgModule({
  imports: [NgxLudanRetirementCalculatorModule],
  declarations: [LibraryRetirementCalculatorComponent],
  exports: [LibraryRetirementCalculatorComponent]
})
export class LibraryRetirementCalculatorModule {}
