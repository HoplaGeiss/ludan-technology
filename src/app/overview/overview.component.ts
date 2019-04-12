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
      <section class="description">
        <h3>Hi, I’m Gabriel. Nice to meet you.</h3>
        <p>
          Since beginning my journey as software developer nearly 5 years ago, I have
          worked for startups, small businesses and FTSE 100 businesses to create mobile
          and web applications. I'm quietly confident, naturally curious, and perpetually
          working on improving my chops one design problem at a time.
        </p>
      </section>
      <ludan-skills></ludan-skills>
      <section class="library">
        <h2>Example of my work</h2>
        <div class="catalogue">
          <ludan-catalogue
            [catalogueItems]="libraryItems"
            (selectEvent)="selectItem(tabs.LIBRARY, $event)"
          ></ludan-catalogue>
        </div>
      </section>
      <!--
      <section class="blog">
        <h2>Blog</h2>
        <div class="catalogue">
          <ludan-catalogue
            [catalogueItems]="blogItems"
            (selectEvent)="selectItem(tabs.BLOG, $event)"
          ></ludan-catalogue>
        </div>
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
      -->
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
    this.router.navigate([`/${tab}/${item.name}`]);
  };
}
