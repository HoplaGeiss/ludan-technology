import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library.component';
import { LibraryModalComponent } from './components/library-modal/library-modal.component';
// import { LibrarySudokuComponent } from './components/library-sudoku/library-sudoku.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent
  },
  {
    path: ':modal',
    component: LibraryModalComponent
  }
  // {
  //   path: ':sudoku',
  //   component: LibrarySudokuComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
