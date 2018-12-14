import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PortfolioItem } from './../../shared/models/portfolio-item.model';
import { PortfolioService } from './../../shared/services/portfolio.service';

import * as _ from 'underscore';

@Component({
  selector: 'ludan-portfolio-item',
  styleUrls: ['portfolio-item.component.scss'],
  template: `
    <markdown *ngIf="portfolio" [src]="'./assets/portfolio/' + portfolio.name + '.md'"></markdown>
  `
})
export class PortfolioItemComponent implements OnInit {
  public portfolioItems: PortfolioItem[];
  public portfolio: PortfolioItem;

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.portfolioItems = this.portfolioService.portfolioItemsSubject.getValue();
    const portfolioId = this.route.snapshot.params.id;
    this.portfolio = _.find(this.portfolioItems, portfolioItem => portfolioItem.id === portfolioId);
  }
}
