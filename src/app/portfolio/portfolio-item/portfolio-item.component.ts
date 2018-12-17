import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

import { CatalogueItem } from './../../shared/models/catalogue-item.model';
import { StoreService } from './../../shared/services/store.service';

@Component({
  selector: 'ludan-portfolio-item',
  styleUrls: ['portfolio-item.component.scss'],
  template: `
    <markdown *ngIf="portfolio" [src]="'./assets/portfolio/' + portfolio.name + '.md'"></markdown>
  `
})
export class PortfolioItemComponent implements OnInit {
  public portfolioItems: CatalogueItem[];
  public portfolio: CatalogueItem;

  constructor(private storeService: StoreService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.portfolioItems = this.storeService.portfolioItemsSubject.getValue();
    const portfolioId = this.route.snapshot.params.id;
    this.portfolio = _.find(this.portfolioItems, portfolioItem => portfolioItem.id === portfolioId);
  }
}
