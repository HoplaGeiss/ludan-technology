import { Component, OnDestroy, OnInit } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';

import { PortfolioItem } from './../../models/portfolio-item.model';
import { CatalogueModule } from './catalogue.module';

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Catalogue</h1>
      <div style="height: 500px">
        <ludan-catalogue
          [portfolioItems]="portfolioItems"
          (selectEvent)="selectPortfolioItem($event)"
        ></ludan-catalogue>
      </div>
    </div>
  `
})
class MockComponent implements OnDestroy, OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public portfolioItems: PortfolioItem[];

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.portfolioItems = [
      { id: '1', name: 'example', label: 'Example 1', img: 'assets/default.png' },
      { id: '2', name: 'example2', label: 'Example 2', img: 'assets/default.png' },
      { id: '3', name: 'example3', label: 'Example 3', img: 'assets/default.png' },
      { id: '4', name: 'example4', label: 'Example 4', img: 'assets/default.png' }
    ];
  }

  selectPortfolioItem = portfolioItem => {
    console.log('select', portfolioItem);
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
