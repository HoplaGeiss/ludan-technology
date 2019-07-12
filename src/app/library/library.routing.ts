import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryModalComponent } from './components/library-items/components/library-modal/library-modal.component';
import { LibrarySudokuComponent } from './components/library-items/components/library-sudoku/library-sudoku.component';
import { LibrarySidebarComponent } from './components/library-items/components/library-sidebar/library-sidebar.component';
import { LibraryItemsComponent } from './components/library-items/library-items.component';
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
        component: LibraryItemsComponent,
        children: [
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
