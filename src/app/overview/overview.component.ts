import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CatalogueItem } from './../shared/models/catalogue-item.model';
import { StoreService } from './../shared/services/store.service';

enum tabs {
  PORTFOLIO = 'portfolio',
  BLOG = 'blog',
  LIBRARY = 'library'
}

@Component({
  selector: 'ludan-overview',
  styleUrls: ['./overview.component.scss'],
  template: `
    <section class="overview">
      <section class="landing">
        <h1 class="landing__role">Ludan Technology</h1>
        <p class="landing__description">Angular 7 and Node.js development</p>
      </section>
      <section class="portfolio">
        <h2>Portfolio</h2>
        <div class="catalogue">
          <ludan-catalogue
            [catalogueItems]="portfolioItems"
            (selectEvent)="selectItem(tabs.PORTFOLIO, $event)"
          ></ludan-catalogue>
        </div>
      </section>
      <section class="blog">
        <h2>Blog</h2>
        <div class="catalogue">
          <ludan-catalogue [catalogueItems]="blogItems" (selectEvent)="selectItem(tabs.BLOG, $event)"></ludan-catalogue>
        </div>
      </section>
      <section class="library">
        <h2>Library</h2>
        <div class="catalogue">
          <ludan-catalogue
            [catalogueItems]="libraryItems"
            (selectEvent)="selectItem(tabs.LIBRARY, $event)"
          ></ludan-catalogue>
        </div>
      </section>
    </section>
  `
})
export class OverviewComponent implements OnInit {
  public portfolioItems: CatalogueItem[];
  public blogItems: CatalogueItem[];
  public libraryItems: CatalogueItem[];
  public tabs = tabs;

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.portfolioItems = this.storeService.portfolioItemsSubject.getValue();
    this.blogItems = this.storeService.blogItemsSubject.getValue();
    this.libraryItems = this.storeService.libraryItemsSubject.getValue();
  }

  selectItem = (tab: tabs, item: CatalogueItem) => {
    this.router.navigate([`/${tab}/${item.id}`]);
  };
}
