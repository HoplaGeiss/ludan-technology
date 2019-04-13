import { Component } from '@angular/core';

@Component({
  styleUrls: ['./library-sudoku.component.scss'],
  template: `
    <section class='library__sudoku'>
      <h1>Sudoku</h1>
      <ludan-sudoku></ludan-sudoku>
    </section>
  `
})
export class LibrarySudokuComponent {}
