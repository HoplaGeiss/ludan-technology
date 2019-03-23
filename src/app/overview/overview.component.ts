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
      <section class="skills" fxLayout="row wrap">
        <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
          <h3>Front-end developer</h3>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life in the
            browser.
          </p>

          <h4>Favorite development tech stack:</h4>
          <p>Angular 8, Redux, rxjs, D3.js, Sass</p>

          <h4>Favorite testing tech stack</h4>
          <p>Jasmine, Storybook, BackstopJS</p>
        </div>
        <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
          <h3>Back-end developer</h3>
          <p>
            In order to be able to build things from the ground up it's essential to
            master both sides of development.
          </p>

          <h4>Favorite tech stack</h4>
          <p>Node.js, Express, MongoDB, socket.io</p>
        </div>
        <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
          <h3>DevOps</h3>
          <p>
            Over the years, I gained extensive experience of setting up CI/CD pipelines.
            Ensuring the linters, the UI tests, the end to end tests and the UI regression
            tests run smoothly in the background.
          </p>

          <h4>Favorite tech stack</h4>
          <p>Docker, Codeship, Quay.io, Firebase.</p>
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
