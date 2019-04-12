import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CatalogueItem } from '../shared/models/catalogue-item.model';
import { StoreService } from '../shared/services/store.service';

@Component({
  selector: 'ludan-portfolio',
  styleUrls: ['./portfolio.component.scss'],
  template: `
    <article class="portfolio">
      <h1>Portfolio</h1>

      <div class="portfolio__catalogue">
        <ludan-catalogue [catalogueItems]="portfolioItems" (selectEvent)="selectItem($event)"></ludan-catalogue>
      </div>
    </article>
  `
})
export class PortfolioComponent implements OnInit {
  public portfolioItems: CatalogueItem[];

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.portfolioItems = this.storeService.portfolioItemsSubject.getValue();
  }

  selectItem = (item: CatalogueItem) => {
    this.router.navigate([`/portfolio/${item.id}`]);
  }
}
