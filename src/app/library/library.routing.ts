import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryModalComponent } from './components/library-modal/library-modal.component';
import { LibrarySudokuComponent } from './components/library-sudoku/library-sudoku.component';
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
        path: 'modal',
        component: LibraryModalComponent
      },
      {
        path: 'sudoku',
        component: LibrarySudokuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
