import { NgModule } from '@angular/core';

import { LibraryListModule } from './components/library-list/library-list.module';
import { LibraryModalModule } from './components/library-modal/library-modal.module';
import { LibrarySudokuModule } from './components/library-sudoku/library-sudoku.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library.routing';

@NgModule({
  imports: [LibraryRoutingModule, LibraryModalModule, LibrarySudokuModule, LibraryListModule],
  declarations: [LibraryComponent],
  exports: [LibraryComponent]
})
export class LibraryModule {}
