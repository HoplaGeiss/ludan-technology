import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibraryModalModule } from './components/library-modal/library-modal.module';
import { LibrarySudokuModule } from './components/library-sudoku/library-sudoku.module';
import { LibrarySidebarModule } from './components/library-sidebar/library-sidebar.module';
import { LibraryRetirementCalculatorModule } from './components/library-retirement-calculator/library-retirement-calculator.module';
import { LibraryItemComponent } from './library-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    LibraryModalModule,
    LibrarySudokuModule,
    LibrarySidebarModule,
    LibraryRetirementCalculatorModule,
    RouterModule,
    CommonModule
  ],
  declarations: [LibraryItemComponent],
  exports: [LibraryItemComponent]
})
export class LibraryItemModule {}
