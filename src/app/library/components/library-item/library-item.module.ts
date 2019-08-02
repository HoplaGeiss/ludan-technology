import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibraryModalModule } from './components/library-modal/library-modal.module';
import { LibrarySudokuModule } from './components/library-sudoku/library-sudoku.module';
import { LibrarySidebarModule } from './components/library-sidebar/library-sidebar.module';
import { LibraryRetirementCalculatorModule } from './components/library-retirement-calculator/library-retirement-calculator.module';
import { LibraryAccordionModule } from './components/library-accordion/library-accordion.module';
import { LibraryItemComponent } from './library-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    LibraryModalModule,
    LibrarySudokuModule,
    LibrarySidebarModule,
    LibraryRetirementCalculatorModule,
    LibraryAccordionModule,
    RouterModule,
    CommonModule
  ],
  declarations: [LibraryItemComponent],
  exports: [LibraryItemComponent]
})
export class LibraryItemModule {}
