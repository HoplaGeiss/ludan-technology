import { Component, OnDestroy, OnInit } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';

import { CatalogueItem } from './../../models/catalogue-item.model';
import { CatalogueModule } from './catalogue.module';

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 100%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Catalogue</h1>
      <div style="height: 500px">
        <ludan-catalogue
          [catalogueItems]="catalogueItems"
          (selectEvent)="selectItem($event)"
        ></ludan-catalogue>
      </div>
    </div>
  `
})
class MockComponent implements OnDestroy, OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public catalogueItems: CatalogueItem[];

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.catalogueItems = [
      { id: '1', name: 'example', label: 'Example 1', img: 'sudoku.WebP' },
      { id: '2', name: 'example2', label: 'Example 2', img: 'sudoku.WebP' },
      { id: '3', name: 'example3', label: 'Example 3', img: 'sudoku.WebP' },
      { id: '4', name: 'example4', label: 'Example 4', img: 'sudoku.WebP' },
      { id: '1', name: 'example', label: 'Example 1', img: 'sudoku.WebP' },
      { id: '2', name: 'example2', label: 'Example 2', img: 'modal.WebP' },
      { id: '3', name: 'example3', label: 'Example 3', img: 'sudoku.WebP' },
      { id: '4', name: 'example4', label: 'Example 4', img: 'sudoku.WebP' }
    ];
  }

  selectItem = item => {
    console.log('select', item);
  };
}

storiesOf('Shared/Catalogue', module).add('Example', () => ({
  moduleMetadata: {
    imports: [CatalogueModule],
    declarations: [MockComponent]
  },
  template: `
    <ludan-story></ludan-story>
  `
}));
