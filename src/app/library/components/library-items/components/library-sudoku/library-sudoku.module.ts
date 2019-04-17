import { NgModule } from '@angular/core';
import { SudokuModule } from 'ngx-ludan-sudoku';

import { LibrarySudokuComponent } from './library-sudoku.component';

@NgModule({
  imports: [SudokuModule],
  declarations: [LibrarySudokuComponent],
  exports: [LibrarySudokuComponent]
})
export class LibrarySudokuModule {}
