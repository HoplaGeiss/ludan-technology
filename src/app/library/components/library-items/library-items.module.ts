import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibraryModalModule } from './components/library-modal/library-modal.module';
import { LibrarySudokuModule } from './components/library-sudoku/library-sudoku.module';
import { LibrarySidebarModule } from './components/library-sidebar/library-sidebar.module';
import { LibraryItemsComponent } from './library-items.component';

@NgModule({
  imports: [LibraryModalModule, LibrarySudokuModule, LibrarySidebarModule, RouterModule],
  declarations: [LibraryItemsComponent],
  exports: [LibraryItemsComponent]
})
export class LibraryItemsModule {}
