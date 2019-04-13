import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-ludan-modal';

import { CatalogueModule } from './../../../shared/components/catalogue/catalogue.module';
import { LibraryListComponent } from './library-list.component';

@NgModule({
  imports: [ModalModule, CatalogueModule],
  declarations: [LibraryListComponent],
  exports: [LibraryListComponent]
})
export class LibraryListModule {}
