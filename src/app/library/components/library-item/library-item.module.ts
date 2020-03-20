import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisqusModule } from 'ngx-disqus';

import { LibraryAccordionModule } from './components/library-accordion/library-accordion.module';
import { LibraryAsyncValidationModule } from './components/library-async-validation/library-async-validation.module';
import { LibraryCarouselModule } from './components/library-carousel/library-carousel.module';
import { LibraryDropdownModule } from './components/library-dropdown/library-dropdown.module';
import { LibraryModalModule } from './components/library-modal/library-modal.module';
import { LibraryPieChartModule } from './components/library-pie-chart/library-pie-chart.module';
import {
  LibraryRetirementCalculatorModule,
} from './components/library-retirement-calculator/library-retirement-calculator.module';
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
    LibraryCarouselModule,
    LibraryPieChartModule,
    LibraryAsyncValidationModule,
    DisqusModule,
    RouterModule,
    CommonModule
  ],
  declarations: [LibraryItemComponent],
  exports: [LibraryItemComponent]
})
export class LibraryItemModule {}
