import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-ludan-accordion';

import { LibraryAccordionComponent } from './library-accordion.component';

@NgModule({
  imports: [AccordionModule, CommonModule],
  declarations: [LibraryAccordionComponent],
  exports: [LibraryAccordionComponent]
})
export class LibraryAccordionModule {}
