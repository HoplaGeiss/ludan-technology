import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryModalComponent } from './components/library-item/components/library-modal/library-modal.component';
import { LibrarySudokuComponent } from './components/library-item/components/library-sudoku/library-sudoku.component';
import { LibrarySidebarComponent } from './components/library-item/components/library-sidebar/library-sidebar.component';
// tslint:disable-next-line: max-line-length
import { LibraryRetirementCalculatorComponent } from './components/library-item/components/library-retirement-calculator/library-retirement-calculator.component';
import { LibraryItemComponent } from './components/library-item/library-item.component';
import { LibraryComponent } from './library.component';

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
