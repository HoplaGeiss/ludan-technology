import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CatalogueItem } from './../shared/models/catalogue-item.model';
import { StoreService } from './../shared/services/store.service';

@Component({
  selector: 'ludan-overview',
  styleUrls: ['./overview.component.scss'],
  template: `
    <div class="overview">
      <div class="overview-text">We are Strategy. A digitally minded creative agency based in NYC.</div>
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
  }

  selectItem = (item: CatalogueItem) => {
    this.router.navigate([`/portfolio/${item.id}`]);
  };
}
