import { NgModule } from '@angular/core';

import { CatalogueModule } from './../shared/components/catalogue/catalogue.module';
import { LibraryModalModule } from './components/library-modal/library-modal.module';
import { LibrarySudokuModule } from './components/library-sudoku/library-sudoku.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library.routing';

@NgModule({
  imports: [LibraryRoutingModule, CatalogueModule, LibraryModalModule, LibrarySudokuModule],
  declarations: [LibraryComponent],
  exports: [LibraryComponent]
})
export class LibraryModule {}
