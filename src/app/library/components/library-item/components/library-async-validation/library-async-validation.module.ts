import { NgModule } from '@angular/core';
import { NgxLudanChildAsyncValidationModule } from 'ngx-ludan-child-async-validation';

import { LibraryAsyncValidationComponent } from './library-async-validation.component';

@NgModule({
  imports: [NgxLudanChildAsyncValidationModule],
  declarations: [LibraryAsyncValidationComponent],
  exports: [LibraryAsyncValidationComponent]
})
export class LibraryAsyncValidationModule {}
