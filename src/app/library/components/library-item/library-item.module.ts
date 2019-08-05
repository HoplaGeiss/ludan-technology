import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibraryAccordionModule } from './components/library-accordion/library-accordion.module';
import { LibraryDropdownModule } from './components/library-dropdown/library-dropdown.module';
import { LibraryModalModule } from './components/library-modal/library-modal.module';
import { LibraryRetirementCalculatorModule } from './components/library-retirement-calculator/library-retirement-calculator.module';
import { LibrarySidebarModule } from './components/library-sidebar/library-sidebar.module';
import { LibrarySudokuModule } from './components/library-sudoku/library-sudoku.module';
import { LibraryTagsModule } from './components/library-tags/library-tags.module';
import { LibraryItemComponent } from './library-item.component';

@NgModule({
  imports: [
    LibraryModalModule,
    LibrarySudokuModule,
    LibrarySidebarModule,
    LibraryRetirementCalculatorModule,
    LibraryAccordionModule,
    LibraryDropdownModule,
    LibraryTagsModule,
    RouterModule,
    CommonModule
  ],
  declarations: [LibraryItemComponent],
  exports: [LibraryItemComponent]
})
export class LibraryItemModule {}
