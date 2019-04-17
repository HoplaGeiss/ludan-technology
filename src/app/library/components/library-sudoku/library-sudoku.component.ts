import { Component } from '@angular/core';

@Component({
  styleUrls: ['./library-sudoku.component.scss'],
  template: `
    <section class="library__sudoku">
      <h1>Sudoku</h1>
      <div class="library-item__description">
        <p>
          A sudoku puzzle is a very fun component to develop. However, it's deceptively
          hard to implement. The tricky bit is the service that generates the sudoku's
          solution. Have a look at the code source for more details:
        </p>
        <a href="https://github.com/HoplaGeiss/ludan-sudoku"
          >https://github.com/HoplaGeiss/ludan-sudoku</a
        >
        <div class="separator"></div>
      </div>
      <ludan-sudoku></ludan-sudoku>
    </section>
  `
})
export class LibrarySudokuComponent {}
