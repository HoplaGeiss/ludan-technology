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
        <ludan-catalogue [thumbnails]="thumbnails" (selectEvent)="selectThumbnail($event)"></ludan-catalogue>
      </div>
    </div>
  `
})
class MockComponent implements OnDestroy, OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public thumbnails: PortfolioItem[];

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.thumbnails = [
      { id: 1, name: 'Example1', img: 'assets/default.png' },
      { id: 2, name: 'Example2', img: 'assets/default.png' },
      { id: 3, name: 'Example3', img: 'assets/default.png' },
      { id: 4, name: 'Example4', img: 'assets/default.png' }
    ];
  }

  selectThumbnail = thumbnail => {
    console.log('select', thumbnail);
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
