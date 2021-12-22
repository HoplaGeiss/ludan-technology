import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CatalogueItem } from './../shared/models/catalogue-item.model';
import { StoreService } from './../shared/services/store.service';

enum tabs {
  PORTFOLIO = 'portfolio',
  BLOG = 'blog',
  LIBRARY = 'library',
}

@Component({
  selector: 'ludan-overview',
  styleUrls: ['./overview.component.scss'],
  template: `
    <section class="overview">
      <section class="landing">
        <h1 class="landing__role">Ludan Technology</h1>
        <p class="landing__description">Angular 8, React and Node.js development</p>
      </section>
      <section class="description">
        <h3 class="description__title">Hi, I’m Gabriel. Nice to meet you.</h3>
        <p class="description__text">
          Since beginning my journey as a software developer 5 years ago, I have worked
          for startups, small businesses and FTSE 100 businesses to create web
          applications. I specialise in green-field projects where I get to architect and
          build new and exciting applications from the ground up. So far, I have been the
          lead on 3 projects and built world-class applications using the latest
          technologies.
        </p>
      </section>
      <ludan-skills></ludan-skills>
      <section class="library">
        <h2 class="overview__title">Libraries I Developed</h2>
        <p class="overview__description">
          Here are a few npm libraries I developed. Want to see more? Find them all
          <a class="overview__link" routerLink="library">here</a>.
        </p>
        <div class="catalogue">
          <ludan-catalogue
            [catalogueItems]="libraryItems"
            (selectEvent)="selectItem(tabs.LIBRARY, $event)"
          ></ludan-catalogue>
        </div>
      </section>
      <section class="blog">
        <h2 class="overview__title">My Tech Blog</h2>
        <p class="overview__description">
          Some piece of code doesn't justify to be in their own npm package. Find them all
          <a class="overview__link" routerLink="blog">here</a>.
        </p>
        <div class="catalogue">
          <ludan-catalogue
            [catalogueItems]="blogItems"
            (selectEvent)="selectItem(tabs.BLOG, $event)"
          ></ludan-catalogue>
        </div>
      </section>
      <!--
      <section class="portfolio">
        <h2 class="overview__title">Companies I Worked For</h2>
        <p class="overview__description">
          Over the years I have worked with startups, small businesses and FTSE 100
          businesses. Find them all
          <a class="overview__link" routerLink="portfolio">here</a>.
        </p>
        <div class="catalogue">
          <ludan-catalogue
            [catalogueItems]="portfolioItems"
            (selectEvent)="selectItem(tabs.PORTFOLIO, $event)"
          ></ludan-catalogue>
        </div>
      </section>
      -->
    </section>
  `,
})
export class OverviewComponent implements OnInit {
  public portfolioItems: CatalogueItem[];
  public blogItems: CatalogueItem[];
  public libraryItems: CatalogueItem[];
  public tabs = tabs;

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.portfolioItems = this.storeService.portfolioItemsSubject
      .getValue()
      .filter((item) => item.featured);
    this.blogItems = this.storeService.blogItemsSubject
      .getValue()
      .filter((item) => item.featured);
    this.libraryItems = this.storeService.libraryItemsSubject
      .getValue()
      .filter((item) => item.featured);
  }

  selectItem = (tab: tabs, item: CatalogueItem) => {
    const url = item.id === '0' ? tab : `/${tab}/${item.name}`;
    this.router.navigate([url]);
  };
}
