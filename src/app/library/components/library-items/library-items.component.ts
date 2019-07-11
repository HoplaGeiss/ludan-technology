import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';
import * as _ from 'underscore';

import { CatalogueItem } from './../../../shared/models/catalogue-item.model';

@Component({
  selector: 'ludan-library-items',
  styleUrls: ['./library-items.component.scss'],
  template: `
    <section
      class="library-item"
      itemprop="exampleOfWork"
      itemscope=""
      itemtype="http://schema.org/WebPageElement"
    >
      <h1 itemprop="headline">{{ item.label }}</h1>
      <div class="library-item__description">
        <p itemprop="description">{{ item.description }}</p>
        <a [href]="item.url" itemprop="isBasedOn">{{ item.url }}</a>
        <div class="separator"></div>
      </div>
      <router-outlet></router-outlet>
    </section>
  `
})
export class LibraryItemsComponent implements OnInit {
  public item: CatalogueItem;

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    // TODO - find a less hacky way of doing that.
    const name = this.router.url.split('/').pop();
    const libraryItems = this.storeService.libraryItemsSubject.getValue();
    this.item = _.find(libraryItems, libraryItem => libraryItem.name === name);
  }
}
