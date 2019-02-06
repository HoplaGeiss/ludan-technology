import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js/src/typed.js';

import { CatalogueItem } from './../shared/models/catalogue-item.model';
import { StoreService } from './../shared/services/store.service';

@Component({
  selector: 'ludan-overview',
  styleUrls: ['./overview.component.scss'],
  template: `
    <div class="overview">
      <div class="landing-wrapper">
        <div class="dynamic-text">
          <div class="title-to-type">
            <p>
              Hello, my name is <strong>Gabriel Muller</strong>. <br />
              I am a full stack developer. <br />
              My favorite tech stack is Angular, <br />
              Node.js, Express, and MongoDB.
            </p>
          </div>
          <span class="title-typed"></span>
        </div>
      </div>
      <div class="catalogue-wrapper">
        <ludan-catalogue [catalogueItems]="portfolioItems" (selectEvent)="selectItem($event)"></ludan-catalogue>
      </div>
    </div>
  `
})
export class OverviewComponent implements OnInit {
  public portfolioItems: CatalogueItem[];

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.portfolioItems = this.storeService.portfolioItemsSubject.getValue();

    const typed = new Typed('.title-typed', {
      stringsElement: '.title-to-type',
      typeSpeed: 40
    });
  }

  selectItem = (item: CatalogueItem) => {
    this.router.navigate([`/portfolio/${item.id}`]);
  };
}
