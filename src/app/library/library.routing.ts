import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryAccordionComponent } from './components/library-item/components/library-accordion/library-accordion.component';
import { LibraryCarouselComponent } from './components/library-item/components/library-carousel/library-carousel.component';
import { LibraryDropdownComponent } from './components/library-item/components/library-dropdown/library-dropdown.component';
import { LibraryModalComponent } from './components/library-item/components/library-modal/library-modal.component';
import { LibraryPieChartComponent } from './components/library-item/components/library-pie-chart/library-pie-chart.component';
import { LibraryRetirementCalculatorComponent } from './components/library-item/components/library-retirement-calculator/library-retirement-calculator.component';
import { LibrarySidebarComponent } from './components/library-item/components/library-sidebar/library-sidebar.component';
import { LibrarySudokuComponent } from './components/library-item/components/library-sudoku/library-sudoku.component';
import { LibraryTagsComponent } from './components/library-item/components/library-tags/library-tags.component';
import { LibraryItemComponent } from './components/library-item/library-item.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryComponent } from './library.component';

// tslint:disable-next-line: max-line-length
const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      {
        path: '',
        component: LibraryListComponent
      },
      {
        path: '',
        component: LibraryItemComponent,
        children: [
          {
            path: 'pie-chart',
            data: { name: 'pie-chart' },
            component: LibraryPieChartComponent
          },
          {
            path: 'carousel',
            data: { name: 'carousel' },
            component: LibraryCarouselComponent
          },
          {
            path: 'tags',
            data: { name: 'tags' },
            component: LibraryTagsComponent
          },
          {
            path: 'dropdown',
            data: { name: 'dropdown' },
            component: LibraryDropdownComponent
          },
          {
            path: 'accordion',
            data: { name: 'accordion' },
            component: LibraryAccordionComponent
          },
          {
            path: 'retirement-calculator',
            data: { name: 'retirement-calculator' },
            component: LibraryRetirementCalculatorComponent
          },
          {
            path: 'modal',
            data: { name: 'modal' },
            component: LibraryModalComponent
          },
          {
            path: 'sudoku',
            data: { name: 'sudoku' },
            component: LibrarySudokuComponent
          },
          {
            path: 'sidebar',
            data: { name: 'sidebar' },
            component: LibrarySidebarComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
