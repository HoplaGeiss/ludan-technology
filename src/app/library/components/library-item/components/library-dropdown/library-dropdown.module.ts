import { NgModule } from '@angular/core';
import { DropdownModule } from 'ngx-ludan-dropdown';

import { LibraryDropdownComponent } from './library-dropdown.component';

@NgModule({
  imports: [DropdownModule],
  declarations: [LibraryDropdownComponent],
  exports: [LibraryDropdownComponent]
})
export class LibraryDropdownModule {}
