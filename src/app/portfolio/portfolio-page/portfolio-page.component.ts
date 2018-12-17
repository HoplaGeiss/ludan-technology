import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CatalogueItem } from './../../shared/models/catalogue-item.model';
import { StoreService } from './../../shared/services/store.service';

@Component({
  selector: 'ludan-portfolio',
  styleUrls: ['./portfolio-page.component.scss'],
  template: `
    <h1>Portfolio</h1>

    <div class="catalogue-wrapper">
      <ludan-catalogue [catalogueItems]="portfolioItems" (selectEvent)="selectItem($event)"></ludan-catalogue>
    </div>
  `
})
export class PortfolioPageComponent implements OnInit {
  public portfolioItems: CatalogueItem[];

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.portfolioItems = this.storeService.portfolioItemsSubject.getValue();
  }

  selectPortfolioItem = (item: CatalogueItem) => {
    this.router.navigate([`/portfolio/${item.id}`]);
  };
}
