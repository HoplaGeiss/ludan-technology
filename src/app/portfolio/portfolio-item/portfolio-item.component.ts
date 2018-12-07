import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PortfolioItem } from './../../shared/models/portfolio-item.model';
import { PortfolioService } from './../../shared/services/portfolio.service';

@Component({
  selector: 'ludan-portfolio-item',
  styleUrls: ['portfolio-item.component.scss'],
  template: `
    <markdown src="./assets/portfolio/example.md"></markdown>
  `
})
export class PortfolioItemComponent implements OnInit {
  public portfolioItems: PortfolioItem[];

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.portfolioItems = this.portfolioService.portfolioItemsSubject.getValue();
    const param = this.route.snapshot.params.id;
    console.log(param);
  }
}
